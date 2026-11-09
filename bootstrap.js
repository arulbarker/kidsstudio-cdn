(function () {
  var REPO = "arulbarker/kidsstudio-cdn";
  var REF_KEY = 'kidsstudio_cdn_ref';
  function safeRef(v) {
  if (typeof v !== 'string') return null;
  if (!/^[A-Za-z0-9._\/-]{1,80}$/.test(v)) return null;
  if (v.indexOf('..') >= 0 || v.charAt(0) === '/' || v.charAt(0) === '.') return null;
  return v;
}
  function basesFor(repo, sha, ref) {
  if (ref) {
    return [
      'https://cdn.jsdelivr.net/gh/' + repo + '@' + ref,
      'https://raw.githubusercontent.com/' + repo + '/' + ref
    ];
  }
  var out = [];
  if (sha) out.push('https://cdn.jsdelivr.net/gh/' + repo + '@' + sha);
  out.push('https://cdn.jsdelivr.net/gh/' + repo + '@main');
  out.push('https://fastly.jsdelivr.net/gh/' + repo + '@main');
  out.push('https://raw.githubusercontent.com/' + repo + '/main');
  return out;
}
  function readRef() {
    try { return safeRef(localStorage.getItem(REF_KEY)); } catch (e) { return null; }
  }
  var ready = false, failed = false, watchdog = null;
  function timed(ms, run) {
    var ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer;
    var limit = new Promise(function (ok, no) {
      timer = setTimeout(function () {
        if (ctrl) ctrl.abort();
        no(new Error('Waktu habis ' + ms + ' ms'));
      }, ms);
    });
    var job = new Promise(function (ok) { ok(run(ctrl ? ctrl.signal : undefined)); });
    return Promise.race([job, limit]).then(
      function (v) { clearTimeout(timer); return v; },
      function (e) { clearTimeout(timer); throw e; }
    );
  }
  function getSha() {
    return timed(4000, function (signal) {
      return fetch('https://api.github.com/repos/' + REPO + '/commits/main', { cache: 'no-cache', signal: signal })
        .then(function (r) { return r.ok ? r.json() : null; });
    })
      .then(function (j) { return j && j.sha ? j.sha : null; })
      .catch(function () { return null; });
  }
  function fetchJs(base) {
    var url = base + '/kidsstudio.js';
    return timed(10000, function (signal) {
      return fetch(url, { cache: 'no-cache', signal: signal }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
        return r.text();
      });
    }).then(function (t) {
      if (!t) throw new Error('Kosong ' + url);
      return t;
    });
  }
  function firstWorking(bases, i) {
    if (i >= bases.length) return Promise.reject(new Error('Semua sumber gagal'));
    var b = bases[i];
    return fetchJs(b)
      .then(function (js) { return { base: b, js: js }; })
      .catch(function (e) {
        console.warn('[kidsstudio] sumber gagal:', b, e);
        return firstWorking(bases, i + 1);
      });
  }
  function showError(err) {
    if (ready || failed) return;
    failed = true;
    if (watchdog) clearTimeout(watchdog);
    console.error('[kidsstudio] gagal memuat:', err);
    document.body.innerHTML =
      '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box">'
      + '<div style="max-width:420px;text-align:center;background:#fff;border-radius:20px;padding:28px 24px;box-shadow:0 10px 30px rgba(124,92,255,.12)">'
      + '<h2 style="margin:0 0 10px;font-size:22px">Kids Studio belum bisa dimuat</h2>'
      + '<p style="margin:0 0 8px;line-height:1.5">Periksa koneksi internet kamu, lalu muat ulang halaman ini.</p>'
      + '<p style="margin:0 0 18px;line-height:1.5;opacity:.75;font-size:14px">Masih gagal? Coba ganti jaringan (WiFi &harr; data seluler), matikan VPN, atau buka lewat Chrome/Safari.</p>'
      + '<button type="button" id="__ksReload" onclick="location.reload()" style="border:0;border-radius:14px;padding:12px 22px;font-size:15px;font-weight:700;background:#7c5cff;color:#fff;cursor:pointer">Muat Ulang</button>'
      + '</div></div>';
    var btn = document.getElementById ? document.getElementById('__ksReload') : null;
    if (btn) btn.onclick = function () { location.reload(); };
  }
  window.__ksBootError = showError;
  window.__ksReady = function () {
    if (failed) return;
    ready = true;
    if (watchdog) clearTimeout(watchdog);
  };
  function runInline(js) {
    var s = document.createElement('script');
    s.textContent = js;
    try { document.body.appendChild(s); } catch (e) { showError(e); return; }
    if (!window.__ksStarted) showError(new Error('Aplikasi tidak bisa dijalankan'));
  }
  function run(js) {
    watchdog = setTimeout(function () { showError(new Error('Aplikasi tidak merespons')); }, 45000);
    var url = null;
    try { url = URL.createObjectURL(new Blob([js], { type: 'text/javascript' })); } catch (e) { url = null; }
    if (!url) { runInline(js); return; }
    var s = document.createElement('script');
    s.onload = function () {
      if (!window.__ksStarted) showError(new Error('Aplikasi gagal dijalankan'));
    };
    s.onerror = function () {
      console.warn('[kidsstudio] blob diblokir, coba inline');
      runInline(js);
    };
    s.src = url;
    document.body.appendChild(s);
  }
  var ref = readRef();
  (ref ? Promise.resolve(null) : getSha())
    .then(function (sha) { return firstWorking(basesFor(REPO, sha, ref), 0); })
    .then(function (a) {
      window.__ksCdnBase = a.base;
      run(a.js);
    })
    .catch(showError);
})();
