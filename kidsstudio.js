(function () {
  window.__ksStarted = 1;
  var BODY = "\n<div id=\"sidebar-backdrop\" class=\"ks-backdrop\"></div>\n<aside id=\"sidebar\" class=\"ks-sidebar\">\n  <div class=\"ks-sidebar-head\">\n    <div class=\"ks-logo\">\n      <span class=\"ks-logo-mark\">K</span>\n      <span class=\"ks-logo-text brand-gradient bg-clip-text text-transparent\" data-i18n=\"app.nama\">Kids Studio</span>\n    </div>\n    <button id=\"nav-hide\" type=\"button\" class=\"ks-icon-btn ks-hp-only\" data-i18n-aria=\"nav.tutup\" aria-label=\"Tutup menu\">&times;</button>\n  </div>\n  <nav class=\"ks-nav\">\n    <button type=\"button\" data-tab=\"beranda\" class=\"main-tab-btn active\"><span class=\"ks-nav-ico\">&#x1F3E0;</span><span data-i18n=\"nav.beranda\">Beranda</span></button>\n    <button type=\"button\" data-tab=\"proyekku\" class=\"main-tab-btn\"><span class=\"ks-nav-ico\">&#x1F4C1;</span><span data-i18n=\"nav.proyekku\">Proyekku</span></button>\n    <button type=\"button\" data-tab=\"profil\" class=\"main-tab-btn\"><span class=\"ks-nav-ico\">&#x1F476;</span><span data-i18n=\"nav.profil\">Profil Anak</span></button>\n  </nav>\n  <div class=\"ks-version\">Kids Studio v<span id=\"ks-version\"></span></div>\n</aside>\n<header class=\"ks-topbar\">\n  <button id=\"nav-show\" type=\"button\" class=\"ks-icon-btn\" data-i18n-aria=\"nav.buka\" aria-label=\"Buka menu\">&#9776;</button>\n  <span class=\"ks-topbar-title\" data-i18n=\"app.nama\">Kids Studio</span>\n</header>\n<main class=\"ks-main\">\n  <section id=\"content-beranda\" class=\"main-content-panel\">\n    <h1 id=\"beranda-sapa\" class=\"ks-h1\" data-i18n=\"beranda.judul\">Halo!</h1>\n    <p class=\"ks-muted\" data-i18n=\"beranda.sub\"></p>\n    <div id=\"beranda-ajak-profil\" class=\"ks-card ks-ajak hidden\">\n      <div class=\"ks-ajak-ico\">&#x1F476;</div>\n      <div>\n        <div class=\"ks-card-judul\" data-i18n=\"beranda.ajak-profil-judul\"></div>\n        <p class=\"ks-muted\" data-i18n=\"beranda.ajak-profil-isi\"></p>\n        <button id=\"beranda-ajak-tombol\" type=\"button\" class=\"ks-btn\" data-i18n=\"beranda.ajak-profil-tombol\"></button>\n      </div>\n    </div>\n    <div id=\"beranda-editor-wrap\" class=\"hidden\">\n      <h2 class=\"ks-h2\" data-i18n=\"beranda.editor-judul\"></h2>\n      <div id=\"beranda-editor\" class=\"ks-grid\"></div>\n    </div>\n  </section>\n  <section id=\"content-proyekku\" class=\"main-content-panel hidden\">\n    <h1 class=\"ks-h1\" data-i18n=\"proyekku.judul\"></h1>\n    <p class=\"ks-muted\" data-i18n=\"proyekku.sub\"></p>\n    <div id=\"proyekku-list\" class=\"ks-grid ks-list\"></div>\n    <div id=\"proyekku-kosong\" class=\"ks-card ks-empty hidden\">\n      <div class=\"ks-ajak-ico\">&#x1F3A8;</div>\n      <p class=\"ks-muted\" data-i18n=\"proyekku.kosong\"></p>\n    </div>\n  </section>\n  <section id=\"content-profil\" class=\"main-content-panel hidden\">\n    <h1 class=\"ks-h1\" data-i18n=\"profil.judul\"></h1>\n    <p class=\"ks-muted\" data-i18n=\"profil.sub\"></p>\n    <form id=\"profil-form\" class=\"ks-card ks-form\" novalidate>\n      <label class=\"ks-field\"><span data-i18n=\"profil.nama\"></span><input id=\"profil-nama\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\"></label>\n      <label class=\"ks-field\"><span data-i18n=\"profil.panggilan\"></span><input id=\"profil-panggilan\" class=\"ks-input\" maxlength=\"20\" autocomplete=\"off\"></label>\n      <label class=\"ks-field\"><span data-i18n=\"profil.tgl-lahir\"></span><input id=\"profil-tgl\" type=\"date\" class=\"ks-input\"></label>\n      <label class=\"ks-field\"><span data-i18n=\"profil.jenis\"></span>\n        <select id=\"profil-jenis\" class=\"ks-input\">\n          <option value=\"L\" data-i18n=\"profil.jenis-l\"></option>\n          <option value=\"P\" data-i18n=\"profil.jenis-p\"></option>\n          <option value=\"N\" data-i18n=\"profil.jenis-n\"></option>\n        </select>\n      </label>\n      <div id=\"profil-galat\" class=\"ks-galat\" role=\"alert\"></div>\n      <div class=\"ks-row\">\n        <button type=\"submit\" class=\"ks-btn\" data-i18n=\"profil.simpan\"></button>\n        <button id=\"profil-batal\" type=\"button\" class=\"ks-btn ks-btn-sekunder hidden\" data-i18n=\"profil.batal\"></button>\n      </div>\n    </form>\n    <h2 class=\"ks-h2\" data-i18n=\"profil.daftar\"></h2>\n    <div id=\"profil-list\" class=\"ks-grid\"></div>\n  </section>\n</main>\n<div id=\"ks-toast\" class=\"ks-toast\" role=\"status\" aria-live=\"polite\"></div>\n\n\n\n";
  var CSS = "\n:root{--ks-primary:#7c5cff;--ks-primary-dark:#5b3fe0;--ks-pink:#ff7eb6;--ks-sky:#4cc3ff;--ks-bg:#fff8f1;--ks-card:#ffffff;--ks-ink:#2b2350;--ks-muted:#7a7396;--ks-line:#efe7f7;--ks-danger:#e5484d;--ks-radius:18px;--ks-sidebar:264px}\n*{box-sizing:border-box}\n.hidden{display:none!important}\nhtml,body{margin:0;min-height:100%}\n.ks-body{font-family:'Nunito',system-ui,sans-serif;background:var(--ks-bg);color:var(--ks-ink);-webkit-font-smoothing:antialiased}\n.ks-h1,.ks-h2,.ks-logo-text,.ks-topbar-title{font-family:'Baloo 2','Nunito',sans-serif}\n.brand-gradient{background:linear-gradient(90deg,var(--ks-pink),var(--ks-primary),var(--ks-sky))}\n.brand-gradient.bg-clip-text{-webkit-background-clip:text;background-clip:text;color:transparent}\n.ks-sidebar{position:fixed;top:0;bottom:0;left:0;width:var(--ks-sidebar);background:var(--ks-card);border-right:1px solid var(--ks-line);display:flex;flex-direction:column;z-index:40;overflow-y:auto}\n.ks-sidebar-head{position:sticky;top:0;background:var(--ks-card);display:flex;align-items:center;justify-content:space-between;padding:18px 18px 12px;z-index:1}\n.ks-logo{display:flex;align-items:center;gap:10px}\n.ks-logo-mark{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;color:#fff;font-weight:800;font-family:'Baloo 2',sans-serif;font-size:22px;background:linear-gradient(135deg,var(--ks-pink),var(--ks-primary))}\n.ks-logo-text{font-size:22px;font-weight:800}\n.ks-nav{display:flex;flex-direction:column;gap:4px;padding:8px 12px;flex:1}\n.main-tab-btn{display:flex;align-items:center;gap:12px;width:100%;border:0;background:transparent;color:var(--ks-ink);font:inherit;font-weight:700;font-size:15px;padding:12px 14px;border-radius:14px;cursor:pointer;text-align:left}\n.main-tab-btn:hover{background:#f6f1ff}\n.main-tab-btn.active{background:linear-gradient(90deg,#efe8ff,#ffeef6);color:var(--ks-primary-dark)}\n.ks-nav-ico{width:24px;text-align:center;font-size:18px}\n.ks-version{padding:12px 18px 18px;color:var(--ks-muted);font-size:12px}\n.ks-main{margin-left:var(--ks-sidebar);padding:32px;min-height:100vh}\n.main-content-panel{max-width:1040px;margin:0 auto}\n.ks-topbar,.ks-backdrop,.ks-hp-only{display:none}\n.ks-icon-btn{border:0;background:#f6f1ff;color:var(--ks-ink);width:40px;height:40px;border-radius:12px;font-size:20px;cursor:pointer;place-items:center}\n.ks-h1{font-size:30px;font-weight:800;margin:0 0 6px;line-height:1.2}\n.ks-h2{font-size:20px;font-weight:700;margin:28px 0 12px}\n.ks-muted{color:var(--ks-muted);font-size:14px;margin:0}\n.ks-card{background:var(--ks-card);border:1px solid var(--ks-line);border-radius:var(--ks-radius);padding:18px;box-shadow:0 6px 20px rgba(124,92,255,.06)}\n.ks-card-judul{font-weight:800;font-size:16px;margin-bottom:4px;word-break:break-word}\n.ks-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}\n.ks-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}\n.ks-btn{border:0;border-radius:14px;padding:12px 18px;font:inherit;font-weight:800;cursor:pointer;background:var(--ks-primary);color:#fff;min-height:44px}\n.ks-btn:hover{background:var(--ks-primary-dark)}\n.ks-btn-sekunder{background:#f1ecff;color:var(--ks-primary-dark)}\n.ks-btn-sekunder:hover{background:#e6ddff}\n.ks-btn-kecil{padding:8px 14px;min-height:36px;font-size:14px}\n.ks-btn-bahaya{background:#fdecec;color:var(--ks-danger)}\n.ks-btn-bahaya:hover{background:#fbdcdc}\n.ks-ajak{display:flex;gap:16px;align-items:center;margin-top:20px;background:linear-gradient(120deg,#fff1f7,#f1ecff)}\n.ks-ajak .ks-btn{margin-top:12px}\n.ks-ajak-ico{font-size:40px;line-height:1}\n.ks-editor-card{text-align:left;cursor:pointer;font:inherit;color:inherit;transition:transform .15s}\n.ks-editor-card:hover{transform:translateY(-2px)}\n.ks-form{display:grid;gap:14px;max-width:520px;margin-top:20px}\n.ks-field{display:grid;gap:6px;font-weight:700;font-size:14px}\n.ks-input{font:inherit;font-weight:600;padding:12px 14px;border:1.5px solid var(--ks-line);border-radius:12px;background:#fff;color:var(--ks-ink);min-height:44px;width:100%}\n.ks-input:focus{outline:none;border-color:var(--ks-primary);box-shadow:0 0 0 3px rgba(124,92,255,.15)}\n.ks-galat{color:var(--ks-danger);font-size:14px;font-weight:700;min-height:20px}\n.ks-empty{text-align:center;padding:40px 16px;margin-top:20px}\n.ks-list{margin-top:20px}\n.ks-toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,20px);background:var(--ks-ink);color:#fff;padding:12px 18px;border-radius:14px;font-weight:700;font-size:14px;opacity:0;pointer-events:none;transition:all .25s;z-index:60;max-width:calc(100vw - 32px)}\n.ks-toast.tampil{opacity:1;transform:translate(-50%,0)}\n.ks-toast.galat{background:var(--ks-danger)}\n@media (max-width:767px){\n  .ks-sidebar{width:min(86vw,320px);transform:translateX(-100%);transition:transform .25s}\n  body.nav-open .ks-sidebar{transform:translateX(0);box-shadow:0 0 40px rgba(0,0,0,.15)}\n  body.nav-open .ks-backdrop{display:block;position:fixed;inset:0;background:rgba(43,35,80,.35);z-index:30}\n  .ks-hp-only{display:grid}\n  .ks-topbar{display:flex;align-items:center;gap:12px;position:sticky;top:0;background:var(--ks-bg);padding:12px 16px;z-index:20}\n  .ks-topbar .ks-icon-btn{display:grid}\n  .ks-topbar-title{font-weight:800;font-size:20px}\n  .ks-main{margin-left:0;padding:8px 16px 32px}\n  .ks-h1{font-size:24px}\n  .ks-ajak{flex-direction:column;text-align:center}\n}\n";
  var BODY_CLASS = ["ks-body"];
  var STYLES = ["https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap"];
  var SCRIPTS = ["https://cdn.tailwindcss.com"];
  var failed = false;
  function fail(e) {
    if (failed) return;
    failed = true;
    if (window.__ksBootError) window.__ksBootError(e); else console.error(e);
  }
  var origAdd = document.addEventListener;
  document.addEventListener = function (type, fn, opts) {
    if (type === 'DOMContentLoaded' && document.readyState !== 'loading') {
      Promise.resolve().then(function () {
        try { fn.call(document, new Event('DOMContentLoaded')); } catch (e) { fail(e); }
      });
      return;
    }
    return origAdd.call(this, type, fn, opts);
  };
  var st = document.createElement('style');
  st.textContent = CSS;
  document.head.appendChild(st);
  var loader = document.getElementById('__loader');
  if (loader) loader.remove();
  document.body.insertAdjacentHTML('afterbegin', BODY);
  BODY_CLASS.forEach(function (c) { document.body.classList.add(c); });
  STYLES.forEach(function (href) {
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    document.head.appendChild(l);
  });
  function load(src) {
    return new Promise(function (ok, no) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { ok(); };
      s.onerror = function () { no(new Error('Gagal memuat ' + src)); };
      document.head.appendChild(s);
    });
  }
  var APP = [
  function () {

window.KS_I18N = {
  id: {
    'app.nama': 'Kids Studio',
    'nav.beranda': 'Beranda',
    'nav.proyekku': 'Proyekku',
    'nav.profil': 'Profil Anak',
    'nav.buka': 'Buka menu',
    'nav.tutup': 'Tutup menu',
    'beranda.judul': 'Halo! Mau bikin apa hari ini?',
    'beranda.sapa-anak': 'Halo, keluarga kecil {nama}! Mau bikin apa hari ini?',
    'beranda.sub': 'Pilih editor, isi data singkat, dan karyamu siap dibagikan dalam hitungan menit.',
    'beranda.ajak-profil-judul': 'Kenalan dulu dengan si kecil',
    'beranda.ajak-profil-isi': 'Isi Profil Anak sekali saja, nanti nama dan umurnya terisi otomatis di semua editor.',
    'beranda.ajak-profil-tombol': 'Isi Profil Anak',
    'beranda.editor-judul': 'Editor',
    'proyekku.judul': 'Proyekku',
    'proyekku.sub': 'Semua karya tersimpan otomatis di perangkat ini.',
    'proyekku.kosong': 'Belum ada proyek. Karya yang kamu buat akan muncul di sini.',
    'proyekku.tanpa-nama': 'Proyek tanpa nama',
    'proyekku.terhapus': 'Proyek dihapus',
    'profil.judul': 'Profil Anak',
    'profil.sub': 'Data ini hanya tersimpan di perangkat ini, tidak dikirim ke mana pun.',
    'profil.nama': 'Nama lengkap',
    'profil.panggilan': 'Nama panggilan (opsional)',
    'profil.tgl-lahir': 'Tanggal lahir',
    'profil.jenis': 'Jenis kelamin',
    'profil.jenis-l': 'Laki-laki',
    'profil.jenis-p': 'Perempuan',
    'profil.jenis-n': 'Tidak disebutkan',
    'profil.simpan': 'Simpan Profil',
    'profil.batal': 'Batal',
    'profil.tersimpan': 'Profil tersimpan',
    'profil.terhapus': 'Profil dihapus',
    'profil.kosong': 'Belum ada profil anak.',
    'profil.daftar': 'Anak terdaftar',
    'profil.galat-nama': 'Nama wajib diisi (maksimal 40 huruf).',
    'profil.galat-tanggal': 'Tanggal lahir belum benar.',
    'profil.galat-jenis': 'Pilih jenis kelamin.',
    'umur.tahun-bulan': '{t} tahun {b} bulan',
    'umur.tahun': '{n} tahun',
    'umur.bulan': '{n} bulan',
    'umur.hari': '{n} hari',
    'umum.ubah': 'Ubah',
    'umum.hapus': 'Hapus',
    'umum.yakin-hapus': 'Yakin? Klik lagi',
    'galat.penyimpanan': 'Penyimpanan di perangkat ini tidak bisa dipakai. Coba buka di Chrome/Safari biasa (bukan mode samaran).'
  }
};

  },
  function () {

(function () {
  function createT(dict) {
    return function t(key, param) {
      var s = Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
      if (param) {
        s = s.replace(/\{(\w+)\}/g, function (m, k) {
          return Object.prototype.hasOwnProperty.call(param, k) ? String(param[k]) : m;
        });
      }
      return s;
    };
  }
  function parseTgl(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || '');
    return m ? { y: +m[1], m: +m[2], d: +m[3] } : null;
  }
  function hariDalamBulan(y, m) {
    return new Date(Date.UTC(y, m, 0)).getUTCDate();
  }
  function hitungUmur(lahir, acuan) {
    var a = parseTgl(lahir);
    var b = parseTgl(acuan);
    if (!a || !b) return null;
    var total = (b.y - a.y) * 12 + (b.m - a.m);
    if (b.d < a.d) total--;
    if (total < 0) return null;
    var idx = a.m - 1 + total;
    var y = a.y + Math.floor(idx / 12);
    var m = (idx % 12) + 1;
    var d = Math.min(a.d, hariDalamBulan(y, m));
    var hari = Math.round((Date.UTC(b.y, b.m - 1, b.d) - Date.UTC(y, m - 1, d)) / 86400000);
    if (hari < 0) return null;
    return { tahun: Math.floor(total / 12), bulan: total % 12, hari: hari, totalBulan: total };
  }
  function labelUmur(u, t) {
    if (!u) return '';
    if (u.tahun > 0) return u.bulan > 0 ? t('umur.tahun-bulan', { t: u.tahun, b: u.bulan }) : t('umur.tahun', { n: u.tahun });
    if (u.bulan > 0) return t('umur.bulan', { n: u.bulan });
    return t('umur.hari', { n: u.hari });
  }
  function validasiProfil(p, hariIni) {
    var nama = String((p && p.nama) || '').trim();
    if (!nama || nama.length > 40) return { ok: false, galat: 'profil.galat-nama' };
    if (!parseTgl(p.tglLahir) || p.tglLahir > hariIni) return { ok: false, galat: 'profil.galat-tanggal' };
    if (['L', 'P', 'N'].indexOf(p.jenisKelamin) < 0) return { ok: false, galat: 'profil.galat-jenis' };
    return { ok: true };
  }
  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function hariIni() {
    var d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  var urut = 0;
  function buatId() {
    urut = (urut + 1) % 1296;
    return Date.now().toString(36) + urut.toString(36) + Math.random().toString(36).slice(2, 10);
  }
  window.KSPure = {
    createT: createT,
    hitungUmur: hitungUmur,
    labelUmur: labelUmur,
    validasiProfil: validasiProfil,
    hariIni: hariIni,
    buatId: buatId
  };
})();

  },
  function () {

const apiKey = "";
document.addEventListener('DOMContentLoaded', () => {
  const KS = window.KS = window.KS || {};
  KS.version = '0.1.0';

  (function () {
    const t = window.KSPure.createT((window.KS_I18N && window.KS_I18N.id) || {});
    function apply(root) {
      const r = root || document;
      r.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
      r.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
      r.querySelectorAll('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.dataset.i18nPh)); });
    }
    KS.i18n = { t, apply };
    apply();
    document.getElementById('ks-version').textContent = KS.version;
  })();

  (function () {
    const t = KS.i18n.t;
    const box = document.getElementById('ks-toast');
    let timer = null;
    function toast(pesan, jenis) {
      box.textContent = pesan;
      box.className = 'ks-toast tampil' + (jenis === 'galat' ? ' galat' : '');
      clearTimeout(timer);
      timer = setTimeout(() => { box.className = 'ks-toast'; }, 3000);
    }
    function tombolHapus(onYakin) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'ks-btn ks-btn-kecil ks-btn-bahaya';
      b.textContent = t('umum.hapus');
      let siap = false;
      let jeda = null;
      b.addEventListener('click', () => {
        if (!siap) {
          siap = true;
          b.textContent = t('umum.yakin-hapus');
          jeda = setTimeout(() => { siap = false; b.textContent = t('umum.hapus'); }, 3000);
          return;
        }
        clearTimeout(jeda);
        onYakin();
      });
      return b;
    }
    KS.ui = { toast, tombolHapus };
  })();

  (function () {
    const body = document.body;
    const buttons = [...document.querySelectorAll('.main-tab-btn[data-tab]')];
    const listeners = [];
    function switchTab(tab) {
      document.querySelectorAll('.main-content-panel').forEach(p => p.classList.toggle('hidden', p.id !== 'content-' + tab));
      buttons.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
      body.classList.remove('nav-open');
      listeners.forEach(fn => fn(tab));
    }
    buttons.forEach(b => b.addEventListener('click', () => switchTab(b.dataset.tab)));
    document.getElementById('nav-show').addEventListener('click', () => body.classList.add('nav-open'));
    document.getElementById('nav-hide').addEventListener('click', () => body.classList.remove('nav-open'));
    document.getElementById('sidebar-backdrop').addEventListener('click', () => body.classList.remove('nav-open'));
    KS.nav = { switchTab, onSwitch: fn => listeners.push(fn) };
    window.__switchTab = switchTab;
  })();
  (function () {
    const DB_NAME = 'kidsstudio';
    const DB_VERSION = 1;
    let dbPromise = null;
    function open() {
      if (!dbPromise) {
        dbPromise = new Promise((resolve, reject) => {
          if (!window.indexedDB) { reject(new Error('IndexedDB tidak tersedia')); return; }
          const req = indexedDB.open(DB_NAME, DB_VERSION);
          req.onupgradeneeded = () => {
            const db = req.result;
            if (!db.objectStoreNames.contains('profiles')) db.createObjectStore('profiles', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('projects')) db.createObjectStore('projects', { keyPath: 'id' });
            if (!db.objectStoreNames.contains('blobs')) db.createObjectStore('blobs', { keyPath: 'id' });
          };
          req.onsuccess = () => resolve(req.result);
          req.onerror = () => reject(req.error);
        }).catch(e => { dbPromise = null; throw e; });
      }
      return dbPromise;
    }
    function run(store, mode, fn) {
      return open().then(db => new Promise((resolve, reject) => {
        const tx = db.transaction(store, mode);
        const req = fn(tx.objectStore(store));
        tx.oncomplete = () => resolve(req ? req.result : undefined);
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error);
      }));
    }
    KS.store = {
      saveProfile: p => run('profiles', 'readwrite', s => s.put(p)).then(() => p),
      getProfiles: () => run('profiles', 'readonly', s => s.getAll()).then(list => list.sort((a, b) => a.dibuat - b.dibuat)),
      deleteProfile: id => run('profiles', 'readwrite', s => s.delete(id)),
      saveProject: p => run('projects', 'readwrite', s => s.put(p)).then(() => p),
      loadProject: id => run('projects', 'readonly', s => s.get(id)),
      listProjects: () => run('projects', 'readonly', s => s.getAll()).then(list => list.sort((a, b) => b.diubah - a.diubah)),
      deleteProject: id => run('projects', 'readwrite', s => s.delete(id))
    };
  })();
  (function () {
    const t = KS.i18n.t;
    const P = window.KSPure;
    const form = document.getElementById('profil-form');
    const inNama = document.getElementById('profil-nama');
    const inPanggilan = document.getElementById('profil-panggilan');
    const inTgl = document.getElementById('profil-tgl');
    const inJenis = document.getElementById('profil-jenis');
    const galat = document.getElementById('profil-galat');
    const batal = document.getElementById('profil-batal');
    const list = document.getElementById('profil-list');
    let editId = null;
    inTgl.max = P.hariIni();

    function gagal(e) {
      console.error('[kidsstudio] penyimpanan:', e);
      KS.ui.toast(t('galat.penyimpanan'), 'galat');
    }
    function kosongkan() {
      editId = null;
      form.reset();
      galat.textContent = '';
      batal.classList.add('hidden');
    }
    function isi(p) {
      editId = p.id;
      inNama.value = p.nama;
      inPanggilan.value = p.panggilan || '';
      inTgl.value = p.tglLahir;
      inJenis.value = p.jenisKelamin;
      galat.textContent = '';
      batal.classList.remove('hidden');
      inNama.focus();
    }
    function render(items) {
      list.innerHTML = '';
      if (!items.length) {
        const kosong = document.createElement('p');
        kosong.className = 'ks-muted';
        kosong.textContent = t('profil.kosong');
        list.appendChild(kosong);
        return;
      }
      items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'ks-card';
        const nama = document.createElement('div');
        nama.className = 'ks-card-judul';
        nama.textContent = p.panggilan ? p.nama + ' (' + p.panggilan + ')' : p.nama;
        const umur = document.createElement('div');
        umur.className = 'ks-muted';
        umur.textContent = P.labelUmur(P.hitungUmur(p.tglLahir, P.hariIni()), t);
        const aksi = document.createElement('div');
        aksi.className = 'ks-row';
        const ubah = document.createElement('button');
        ubah.type = 'button';
        ubah.className = 'ks-btn ks-btn-kecil ks-btn-sekunder';
        ubah.textContent = t('umum.ubah');
        ubah.addEventListener('click', () => isi(p));
        const hapus = KS.ui.tombolHapus(() => {
          KS.store.deleteProfile(p.id).then(() => {
            if (editId === p.id) kosongkan();
            KS.ui.toast(t('profil.terhapus'));
            return muat();
          }).catch(gagal);
        });
        aksi.append(ubah, hapus);
        card.append(nama, umur, aksi);
        list.appendChild(card);
      });
    }
    function muat() {
      return KS.store.getProfiles().then(render).catch(gagal);
    }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = {
        nama: inNama.value.trim(),
        panggilan: inPanggilan.value.trim(),
        tglLahir: inTgl.value,
        jenisKelamin: inJenis.value
      };
      const cek = P.validasiProfil(data, P.hariIni());
      if (!cek.ok) { galat.textContent = t(cek.galat); return; }
      const sekarang = Date.now();
      KS.store.getProfiles().then(items => {
        const lama = editId ? items.find(x => x.id === editId) : null;
        return KS.store.saveProfile(Object.assign({ id: editId || P.buatId(), dibuat: lama ? lama.dibuat : sekarang }, data, { diubah: sekarang }));
      }).then(() => {
        kosongkan();
        KS.ui.toast(t('profil.tersimpan'));
        return muat();
      }).catch(gagal);
    });
    batal.addEventListener('click', kosongkan);
    KS.nav.onSwitch(tab => { if (tab === 'profil') muat(); });
  })();
  (function () {
    const t = KS.i18n.t;
    const list = document.getElementById('proyekku-list');
    const kosong = document.getElementById('proyekku-kosong');
    function gagal(e) {
      console.error('[kidsstudio] penyimpanan:', e);
      KS.ui.toast(t('galat.penyimpanan'), 'galat');
    }
    function render(items) {
      list.innerHTML = '';
      kosong.classList.toggle('hidden', items.length > 0);
      items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'ks-card';
        const judul = document.createElement('div');
        judul.className = 'ks-card-judul';
        judul.textContent = p.nama || t('proyekku.tanpa-nama');
        const waktu = document.createElement('div');
        waktu.className = 'ks-muted';
        waktu.textContent = new Date(p.diubah).toLocaleString('id-ID');
        const aksi = document.createElement('div');
        aksi.className = 'ks-row';
        aksi.appendChild(KS.ui.tombolHapus(() => {
          KS.store.deleteProject(p.id).then(() => {
            KS.ui.toast(t('proyekku.terhapus'));
            return muat();
          }).catch(gagal);
        }));
        card.append(judul, waktu, aksi);
        list.appendChild(card);
      });
    }
    function muat() {
      return KS.store.listProjects().then(render).catch(gagal);
    }
    KS.nav.onSwitch(tab => { if (tab === 'proyekku') muat(); });
  })();
  (function () {
    const t = KS.i18n.t;
    const sapa = document.getElementById('beranda-sapa');
    const ajak = document.getElementById('beranda-ajak-profil');
    const wrap = document.getElementById('beranda-editor-wrap');
    const grid = document.getElementById('beranda-editor');
    document.getElementById('beranda-ajak-tombol').addEventListener('click', () => KS.nav.switchTab('profil'));
    KS.home = {
      addEditor(e) {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'ks-card ks-editor-card';
        b.dataset.editor = e.id;
        const ico = document.createElement('div');
        ico.className = 'ks-ajak-ico';
        ico.textContent = e.ikon;
        const judul = document.createElement('div');
        judul.className = 'ks-card-judul';
        judul.textContent = t(e.judulKey);
        const sub = document.createElement('div');
        sub.className = 'ks-muted';
        sub.textContent = t(e.subKey);
        b.append(ico, judul, sub);
        b.addEventListener('click', e.buka);
        grid.appendChild(b);
        wrap.classList.remove('hidden');
      }
    };
    function segarkan() {
      KS.store.getProfiles().then(items => {
        const anak = items[0];
        sapa.textContent = anak ? t('beranda.sapa-anak', { nama: anak.panggilan || anak.nama }) : t('beranda.judul');
        ajak.classList.toggle('hidden', !!anak);
      }).catch(() => { ajak.classList.remove('hidden'); });
    }
    KS.nav.onSwitch(tab => { if (tab === 'beranda') segarkan(); });
    segarkan();
  })();
});

  }
  ];
  function runApp() {
    APP.forEach(function (f) {
      try { f(); } catch (e) { fail(e); }
    });
    Promise.resolve().then(function () { return Promise.resolve(); }).then(function () {
      if (!failed && window.__ksReady) window.__ksReady();
    });
  }
  var chain = Promise.resolve();
  SCRIPTS.forEach(function (src) { chain = chain.then(function () { return load(src); }); });
  chain.then(runApp).catch(fail);
})();
