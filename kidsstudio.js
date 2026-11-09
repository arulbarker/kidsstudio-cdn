(function () {
  window.__ksStarted = 1;
  var BODY = "\r\n<div id=\"sidebar-backdrop\" class=\"ks-backdrop\"></div>\r\n<aside id=\"sidebar\" class=\"ks-sidebar\">\r\n  <div class=\"ks-sidebar-head\">\r\n    <div class=\"ks-logo\">\r\n      <span class=\"ks-logo-mark\"><span class=\"ico\" data-ikon=\"bintang\"></span></span>\r\n      <span class=\"ks-logo-text brand-gradient bg-clip-text text-transparent\" data-i18n=\"app.nama\">Kids Studio</span>\r\n    </div>\r\n    <button id=\"nav-hide\" type=\"button\" class=\"ks-icon-btn ks-hp-only\" data-i18n-aria=\"nav.tutup\" aria-label=\"Tutup menu\"><span class=\"ico\" data-ikon=\"x\"></span></button>\r\n  </div>\r\n  <nav class=\"ks-nav\">\r\n    <button type=\"button\" data-tab=\"beranda\" class=\"main-tab-btn active\"><span class=\"ico\" data-ikon=\"rumah\"></span><span data-i18n=\"nav.beranda\">Beranda</span></button>\r\n    <button type=\"button\" data-tab=\"babyborn\" class=\"main-tab-btn\"><span class=\"ico\" data-ikon=\"bayi\"></span><span data-i18n=\"nav.babyborn\">Baby Born</span></button>\r\n    <button type=\"button\" data-tab=\"proyekku\" class=\"main-tab-btn\"><span class=\"ico\" data-ikon=\"folder\"></span><span data-i18n=\"nav.proyekku\">Proyekku</span></button>\r\n    <button type=\"button\" data-tab=\"profil\" class=\"main-tab-btn\"><span class=\"ico\" data-ikon=\"anak\"></span><span data-i18n=\"nav.profil\">Profil Anak</span></button>\r\n    <div class=\"ks-nav-label\" data-i18n=\"nav.segera-judul\">Segera hadir</div>\r\n    <div class=\"nav-segera\"><span class=\"ico\" data-ikon=\"grid\"></span><span data-i18n=\"editor.kolase\">Kolase Anak</span><span class=\"badge\" data-i18n=\"umum.segera\">Segera</span></div>\r\n    <div class=\"nav-segera\"><span class=\"ico\" data-ikon=\"kue\"></span><span data-i18n=\"editor.milestone\">Milestone</span><span class=\"badge\" data-i18n=\"umum.segera\">Segera</span></div>\r\n    <div class=\"nav-segera\"><span class=\"ico\" data-ikon=\"kilau\"></span><span data-i18n=\"editor.ai\">AI Foto Anak</span><span class=\"badge\" data-i18n=\"umum.segera\">Segera</span></div>\r\n  </nav>\r\n  <div class=\"ks-version\">Kids Studio v<span id=\"ks-version\"></span></div>\r\n</aside>\r\n<header class=\"ks-topbar\">\r\n  <button id=\"nav-show\" type=\"button\" class=\"ks-icon-btn\" data-i18n-aria=\"nav.buka\" aria-label=\"Buka menu\"><span class=\"ico\" data-ikon=\"menu\"></span></button>\r\n  <span class=\"ks-topbar-title\" data-i18n=\"app.nama\">Kids Studio</span>\r\n</header>\r\n<main class=\"ks-main\">\r\n  <section id=\"content-beranda\" class=\"main-content-panel\">\r\n    <div class=\"hero\">\r\n      <span class=\"hero-bulat\" style=\"width:320px;height:320px;right:-80px;bottom:-140px\"></span>\r\n      <span class=\"hero-bulat\" style=\"width:140px;height:140px;left:44%;top:-60px\"></span>\r\n      <div>\r\n        <p class=\"hero-kecil\" data-i18n=\"beranda.kecil\">Studio kenangan si kecil</p>\r\n        <h1 id=\"beranda-sapa\" class=\"ks-h1\" data-i18n=\"beranda.judul\">Mau bikin apa hari ini?</h1>\r\n        <p data-i18n=\"beranda.sub\">Pilih editor, isi data singkat, dan karyamu siap dibagikan dalam hitungan menit.</p>\r\n        <button id=\"beranda-mulai\" type=\"button\" class=\"ks-btn ks-btn-kuning\"><span data-i18n=\"beranda.mulai\">Mulai Baby Born</span><span class=\"ico\" data-ikon=\"panah\"></span></button>\r\n      </div>\r\n      <div class=\"hero-art\" aria-hidden=\"true\">\r\n        <div class=\"kartu k1\"><i></i><b></b><b></b></div>\r\n        <div class=\"kartu k2\"><i></i><b></b><b></b></div>\r\n        <span class=\"bintang\" style=\"left:10px;top:20px\" data-ikon-isi=\"bintang\"></span>\r\n        <span class=\"bintang\" style=\"left:60px;bottom:10px;width:24px;height:24px\" data-ikon-isi=\"bintang\"></span>\r\n      </div>\r\n    </div>\r\n    <h2 class=\"ks-h2\" data-i18n=\"beranda.editor-judul\">Pilih editor</h2>\r\n    <div class=\"editor-grid\">\r\n      <button type=\"button\" class=\"ed-card ed-pink\" data-buka=\"babyborn\">\r\n        <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"bayi\"></span></span>\r\n        <span class=\"ed-go\"><span class=\"ico\" data-ikon=\"panah\"></span></span>\r\n        <span class=\"ed-judul\" data-i18n=\"editor.babyborn\">Baby Born</span>\r\n        <span class=\"ed-sub\" data-i18n=\"editor.babyborn-sub\">Kartu kelahiran si kecil</span>\r\n      </button>\r\n      <div class=\"ed-card ed-teal segera\">\r\n        <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"grid\"></span></span>\r\n        <span class=\"badge\" data-i18n=\"umum.segera\">Segera</span>\r\n        <span class=\"ed-judul\" data-i18n=\"editor.kolase\">Kolase Anak</span>\r\n        <span class=\"ed-sub\" data-i18n=\"editor.kolase-sub\">Banyak foto, satu cerita</span>\r\n      </div>\r\n      <div class=\"ed-card ed-amber segera\">\r\n        <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"kue\"></span></span>\r\n        <span class=\"badge\" data-i18n=\"umum.segera\">Segera</span>\r\n        <span class=\"ed-judul\" data-i18n=\"editor.milestone\">Milestone</span>\r\n        <span class=\"ed-sub\" data-i18n=\"editor.milestone-sub\">Foto bulanan dan ulang tahun</span>\r\n      </div>\r\n      <div class=\"ed-card ed-blue segera\">\r\n        <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"kilau\"></span></span>\r\n        <span class=\"badge\" data-i18n=\"umum.segera\">Segera</span>\r\n        <span class=\"ed-judul\" data-i18n=\"editor.ai\">AI Foto Anak</span>\r\n        <span class=\"ed-sub\" data-i18n=\"editor.ai-sub\">Kartun, kostum, latar ajaib</span>\r\n      </div>\r\n    </div>\r\n    <div id=\"beranda-ajak-profil\" class=\"ks-card ajak hidden\">\r\n      <div class=\"ajak-ico\"><span class=\"ico\" data-ikon=\"anak\"></span></div>\r\n      <div>\r\n        <div class=\"ks-card-judul\" data-i18n=\"beranda.ajak-profil-judul\">Kenalan dulu dengan si kecil</div>\r\n        <p class=\"ks-muted\" data-i18n=\"beranda.ajak-profil-isi\"></p>\r\n        <button id=\"beranda-ajak-tombol\" type=\"button\" class=\"ks-btn ks-btn-kecil ks-btn-sekunder\" data-i18n=\"beranda.ajak-profil-tombol\"></button>\r\n      </div>\r\n    </div>\r\n    <div id=\"beranda-terakhir\" class=\"hidden\">\r\n      <h2 class=\"ks-h2\" data-i18n=\"beranda.terakhir\">Lanjutkan karyamu</h2>\r\n      <div id=\"beranda-terakhir-list\" class=\"proyek-grid\"></div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-babyborn\" class=\"main-content-panel hidden\">\r\n    <div class=\"bb-kepala\">\r\n      <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"bayi\"></span></span>\r\n      <div>\r\n        <h1 class=\"ks-h1\" data-i18n=\"bb.judul\">Baby Born</h1>\r\n        <p class=\"ks-muted\" data-i18n=\"bb.sub\">Isi data si kecil, pilih desain, lalu sesuaikan sesukamu.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"bb-layout\">\r\n      <form id=\"bb-form\" class=\"ks-card ks-form\" novalidate>\r\n        <div class=\"ks-row\" style=\"justify-content:space-between\">\r\n          <b data-i18n=\"bb.data\">Data si kecil</b>\r\n          <button id=\"bb-contoh\" type=\"button\" class=\"ks-btn ks-btn-kecil ks-btn-sekunder\" data-i18n=\"bb.contoh\">Isi contoh</button>\r\n        </div>\r\n        <label id=\"bb-profil-wrap\" class=\"ks-field hidden\"><span data-i18n=\"bb.dari-profil\">Ambil dari Profil Anak</span><select id=\"bb-profil\" class=\"ks-input\"></select></label>\r\n        <label class=\"unggah\">\r\n          <span class=\"unggah-pv\" id=\"bb-foto-pv\"><span class=\"ico\" data-ikon=\"foto\"></span></span>\r\n          <span><b data-i18n=\"bb.foto\">Foto si kecil</b><br><small class=\"ks-muted\" data-i18n=\"bb.foto-sub\">Ketuk untuk memilih foto</small></span>\r\n          <input id=\"bb-foto\" type=\"file\" accept=\"image/*\">\r\n        </label>\r\n        <label class=\"ks-field\"><span data-i18n=\"bb.nama\">Nama lengkap</span><input id=\"bb-nama\" class=\"ks-input\" maxlength=\"50\" autocomplete=\"off\" data-i18n-ph=\"bb.nama-ph\"></label>\r\n        <div class=\"ks-field\"><span data-i18n=\"profil.jenis\">Jenis kelamin</span>\r\n          <div class=\"chips\" id=\"bb-jk\">\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"L\" data-i18n=\"profil.jenis-l\">Laki-laki</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"P\" data-i18n=\"profil.jenis-p\">Perempuan</button>\r\n            <button type=\"button\" class=\"chip aktif\" data-nilai=\"N\" data-i18n=\"bb.netral\">Netral</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"dua-kolom\">\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.tanggal\">Tanggal lahir</span><input id=\"bb-tgl\" type=\"date\" class=\"ks-input\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.jam\">Jam lahir</span><input id=\"bb-jam\" type=\"time\" class=\"ks-input\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.berat\">Berat (kg)</span><input id=\"bb-berat\" class=\"ks-input\" inputmode=\"decimal\" placeholder=\"3,2\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.panjang\">Panjang (cm)</span><input id=\"bb-panjang\" class=\"ks-input\" inputmode=\"decimal\" placeholder=\"49\"></label>\r\n        </div>\r\n        <label class=\"ks-field\"><span data-i18n=\"bb.tempat\">Tempat lahir</span><input id=\"bb-tempat\" class=\"ks-input\" maxlength=\"60\" autocomplete=\"off\" data-i18n-ph=\"bb.tempat-ph\"></label>\r\n        <div class=\"dua-kolom\">\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.ayah\">Nama ayah</span><input id=\"bb-ayah\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.ibu\">Nama ibu</span><input id=\"bb-ibu\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\"></label>\r\n        </div>\r\n        <label class=\"ks-field\"><span data-i18n=\"bb.anak-ke\">Anak ke-</span><select id=\"bb-anakke\" class=\"ks-input\"></select></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"bb.kutipan\">Doa / kutipan</span><select id=\"bb-kutipan-pilih\" class=\"ks-input\"></select><textarea id=\"bb-kutipan\" class=\"ks-input\" maxlength=\"160\"></textarea></label>\r\n        <div id=\"bb-galat\" class=\"ks-galat\" role=\"alert\"></div>\r\n      </form>\r\n      <div>\r\n        <div class=\"ks-card\">\r\n          <b data-i18n=\"bb.ukuran\">Ukuran</b>\r\n          <div class=\"chips\" id=\"bb-ukuran\" style=\"margin-top:10px\">\r\n            <button type=\"button\" class=\"chip aktif\" data-nilai=\"ig-post\" data-i18n=\"ukuran.ig-post\">Post IG (1:1)</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"ig-story\" data-i18n=\"ukuran.ig-story\">Story / WA (9:16)</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"cetak-10r\" data-i18n=\"ukuran.cetak-10r\">Cetak 10R</button>\r\n          </div>\r\n        </div>\r\n        <h2 class=\"ks-h2\" data-i18n=\"bb.pilih-desain\">Pilih desain</h2>\r\n        <div id=\"bb-template\" class=\"tpl-grid\"></div>\r\n        <div class=\"bb-aksi\">\r\n          <span class=\"ks-muted\" id=\"bb-dipilih\"></span>\r\n          <button id=\"bb-buat\" type=\"button\" class=\"ks-btn\"><span data-i18n=\"bb.buat\">Buat kartu</span><span class=\"ico\" data-ikon=\"panah\"></span></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-proyekku\" class=\"main-content-panel hidden\">\r\n    <h1 class=\"ks-h1\" data-i18n=\"proyekku.judul\">Proyekku</h1>\r\n    <p class=\"ks-muted\" data-i18n=\"proyekku.sub\"></p>\r\n    <div id=\"proyekku-list\" class=\"proyek-grid\" style=\"margin-top:22px\"></div>\r\n    <div id=\"proyekku-kosong\" class=\"ks-card kosong hidden\">\r\n      <div class=\"ajak-ico\"><span class=\"ico\" data-ikon=\"folder\"></span></div>\r\n      <div class=\"ks-card-judul\" data-i18n=\"proyekku.kosong-judul\">Belum ada karya</div>\r\n      <p class=\"ks-muted\" data-i18n=\"proyekku.kosong\"></p>\r\n      <button id=\"proyekku-mulai\" type=\"button\" class=\"ks-btn\" style=\"margin-top:16px\" data-i18n=\"beranda.mulai\">Mulai Baby Born</button>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-profil\" class=\"main-content-panel hidden\">\r\n    <h1 class=\"ks-h1\" data-i18n=\"profil.judul\">Profil Anak</h1>\r\n    <p class=\"ks-muted\" data-i18n=\"profil.sub\"></p>\r\n    <div class=\"profil-wrap\">\r\n      <form id=\"profil-form\" class=\"ks-card ks-form\" novalidate>\r\n        <label class=\"ks-field\"><span data-i18n=\"profil.nama\"></span><input id=\"profil-nama\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\"></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"profil.panggilan\"></span><input id=\"profil-panggilan\" class=\"ks-input\" maxlength=\"20\" autocomplete=\"off\"></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"profil.tgl-lahir\"></span><input id=\"profil-tgl\" type=\"date\" class=\"ks-input\"></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"profil.jenis\"></span>\r\n          <select id=\"profil-jenis\" class=\"ks-input\">\r\n            <option value=\"L\" data-i18n=\"profil.jenis-l\"></option>\r\n            <option value=\"P\" data-i18n=\"profil.jenis-p\"></option>\r\n            <option value=\"N\" data-i18n=\"profil.jenis-n\"></option>\r\n          </select>\r\n        </label>\r\n        <div id=\"profil-galat\" class=\"ks-galat\" role=\"alert\"></div>\r\n        <div class=\"ks-row\">\r\n          <button type=\"submit\" class=\"ks-btn\" data-i18n=\"profil.simpan\"></button>\r\n          <button id=\"profil-batal\" type=\"button\" class=\"ks-btn ks-btn-sekunder hidden\" data-i18n=\"profil.batal\"></button>\r\n        </div>\r\n      </form>\r\n      <div>\r\n        <b data-i18n=\"profil.daftar\"></b>\r\n        <div id=\"profil-list\" class=\"ks-grid\" style=\"margin-top:12px\"></div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-editor\" class=\"main-content-panel hidden\">\r\n    <div class=\"ed\">\r\n      <div class=\"ed-top\">\r\n        <button id=\"ed-kembali\" type=\"button\" class=\"ed-ikon\" data-i18n-aria=\"editor.kembali\" aria-label=\"Kembali\"><span class=\"ico\" data-ikon=\"kiri\"></span></button>\r\n        <input id=\"ed-judul\" class=\"ed-nama\" maxlength=\"60\" autocomplete=\"off\">\r\n        <button id=\"ed-undo\" type=\"button\" class=\"ed-ikon\" data-i18n-aria=\"editor.undo\" aria-label=\"Urungkan\"><span class=\"ico\" data-ikon=\"undo\"></span></button>\r\n        <button id=\"ed-redo\" type=\"button\" class=\"ed-ikon\" data-i18n-aria=\"editor.redo\" aria-label=\"Ulangi\"><span class=\"ico\" data-ikon=\"redo\"></span></button>\r\n        <button id=\"ed-unduh\" type=\"button\" class=\"ks-btn ks-btn-kecil\" style=\"box-shadow:0 3px 0 var(--p-tua)\"><span class=\"ico\" data-ikon=\"unduh\"></span><span class=\"ed-unduh-teks\" data-i18n=\"editor.unduh\">Unduh</span></button>\r\n      </div>\r\n      <div class=\"ed-mid\">\r\n        <div id=\"ed-stage\" class=\"ed-stage\"><canvas id=\"ed-canvas\"></canvas></div>\r\n        <aside id=\"ed-panel\" class=\"ed-panel tutup\">\r\n          <div class=\"ed-panel-head\"><b id=\"ed-panel-judul\"></b><button id=\"ed-panel-tutup\" type=\"button\" class=\"ed-ikon ed-panel-tutup\" data-i18n-aria=\"nav.tutup\" aria-label=\"Tutup\"><span class=\"ico\" data-ikon=\"x\"></span></button></div>\r\n          <div id=\"ed-panel-isi\"></div>\r\n        </aside>\r\n      </div>\r\n      <nav class=\"ed-tools\">\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"teks\"><span class=\"ico\" data-ikon=\"teks\"></span><span data-i18n=\"alat.teks\">Teks</span></button>\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"foto\"><span class=\"ico\" data-ikon=\"foto\"></span><span data-i18n=\"alat.foto\">Foto</span></button>\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"stiker\"><span class=\"ico\" data-ikon=\"senyum\"></span><span data-i18n=\"alat.stiker\">Stiker</span></button>\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"latar\"><span class=\"ico\" data-ikon=\"palet\"></span><span data-i18n=\"alat.latar\">Latar</span></button>\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"lapisan\"><span class=\"ico\" data-ikon=\"lapisan\"></span><span data-i18n=\"alat.lapisan\">Lapisan</span></button>\r\n      </nav>\r\n    </div>\r\n    <input id=\"ed-file\" type=\"file\" accept=\"image/*\" class=\"hidden\">\r\n  </section>\r\n</main>\r\n<div id=\"ks-toast\" class=\"ks-toast\" role=\"status\" aria-live=\"polite\"></div>\r\n\r\n\r\n\r\n\r\n";
  var CSS = "\r\n:root{--p:#534AB7;--p-tua:#3C3489;--p-muda:#EEEDFE;--p-lembut:#CECBF6;--ink:#26215C;--muted:#6E6A8E;--line:#ECEAF6;--bg:#F7F6FD;--card:#FFFFFF;--pink:#D4537E;--pink-muda:#FBEAF0;--teal:#1D9E75;--teal-muda:#E1F5EE;--amber:#EF9F27;--amber-muda:#FAEEDA;--blue:#378ADD;--blue-muda:#E6F1FB;--kuning:#FAC775;--danger:#E24B4A;--r:20px;--sidebar:260px}\r\n*{box-sizing:border-box}\r\n.hidden{display:none!important}\r\nhtml,body{margin:0;min-height:100%}\r\n.ks-body{font-family:'Nunito',system-ui,sans-serif;background:var(--bg);color:var(--ink);-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent}\r\nbutton,input,select,textarea{font:inherit;color:inherit}\r\n.ks-h1,.ks-h2,.judul-font,.ks-logo-text,.ks-topbar-title{font-family:'Baloo 2','Nunito',sans-serif}\r\n.brand-gradient{background:linear-gradient(90deg,var(--pink),var(--p),var(--blue))}\r\n.brand-gradient.bg-clip-text{-webkit-background-clip:text;background-clip:text;color:transparent}\r\n.ico{display:inline-flex;width:22px;height:22px;flex:0 0 auto}\r\n.ico svg{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\r\n.ks-sidebar{position:fixed;top:0;bottom:0;left:0;width:var(--sidebar);background:var(--card);border-right:1px solid var(--line);display:flex;flex-direction:column;z-index:40;overflow-y:auto}\r\n.ks-sidebar-head{position:sticky;top:0;background:var(--card);display:flex;align-items:center;justify-content:space-between;padding:20px 18px 14px;z-index:1}\r\n.ks-logo{display:flex;align-items:center;gap:10px}\r\n.ks-logo-mark{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;color:#fff;background:var(--p);box-shadow:0 4px 0 var(--p-tua)}\r\n.ks-logo-mark .ico{width:24px;height:24px}\r\n.ks-logo-text{font-size:23px;font-weight:800}\r\n.ks-nav{display:flex;flex-direction:column;gap:4px;padding:6px 12px}\r\n.ks-nav-label{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:16px 14px 6px}\r\n.main-tab-btn,.nav-segera{display:flex;align-items:center;gap:12px;width:100%;border:0;background:transparent;font-weight:800;font-size:15px;padding:11px 14px;border-radius:14px;cursor:pointer;text-align:left;color:var(--ink)}\r\n.main-tab-btn:hover{background:var(--p-muda)}\r\n.main-tab-btn.active{background:var(--p);color:#fff;box-shadow:0 4px 0 var(--p-tua)}\r\n.nav-segera{cursor:default;color:var(--muted)}\r\n.nav-segera .badge{margin-left:auto}\r\n.badge{display:inline-block;font-size:11px;font-weight:800;padding:3px 9px;border-radius:999px;background:var(--amber-muda);color:#633806}\r\n.ks-version{margin-top:auto;padding:14px 18px 18px;color:var(--muted);font-size:12px}\r\n.ks-main{margin-left:var(--sidebar);padding:28px 32px 48px;min-height:100vh}\r\n.main-content-panel{max-width:1080px;margin:0 auto}\r\n.ks-topbar,.ks-backdrop,.ks-hp-only{display:none}\r\n.ks-icon-btn{border:0;background:var(--p-muda);color:var(--ink);width:42px;height:42px;border-radius:14px;cursor:pointer;place-items:center;flex:0 0 auto}\r\n.ks-h1{font-size:34px;font-weight:800;margin:0 0 6px;line-height:1.15}\r\n.ks-h2{font-size:22px;font-weight:800;margin:32px 0 14px}\r\n.ks-muted{color:var(--muted);font-size:15px;margin:0;line-height:1.5}\r\n.ks-card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:20px}\r\n.ks-card-judul{font-weight:800;font-size:17px;margin-bottom:4px;word-break:break-word}\r\n.ks-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:16px}\r\n.ks-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\r\n.ks-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;border-radius:16px;padding:13px 22px;font-weight:800;font-size:15px;cursor:pointer;background:var(--p);color:#fff;min-height:48px;box-shadow:0 4px 0 var(--p-tua);transition:transform .08s,box-shadow .08s}\r\n.ks-btn:active{transform:translateY(3px);box-shadow:0 1px 0 var(--p-tua)}\r\n.ks-btn-kuning{background:var(--kuning);color:#412402;box-shadow:0 4px 0 #BA7517}\r\n.ks-btn-kuning:active{box-shadow:0 1px 0 #BA7517}\r\n.ks-btn-sekunder{background:var(--p-muda);color:var(--p-tua);box-shadow:0 4px 0 var(--p-lembut)}\r\n.ks-btn-sekunder:active{box-shadow:0 1px 0 var(--p-lembut)}\r\n.ks-btn-kecil{padding:8px 14px;min-height:38px;font-size:14px;border-radius:12px;box-shadow:0 3px 0 var(--p-lembut)}\r\n.ks-btn-bahaya{background:#FCEBEB;color:#A32D2D;box-shadow:0 3px 0 #F7C1C1}\r\n.ks-btn-lebar{width:100%}\r\n.hero{position:relative;overflow:hidden;background:var(--p);color:#fff;border-radius:28px;padding:34px 34px 30px;display:grid;grid-template-columns:1.3fr 1fr;gap:20px;align-items:center}\r\n.hero .ks-h1{color:#fff;font-size:38px}\r\n.hero p{color:var(--p-lembut);font-size:16px;line-height:1.5;margin:0 0 22px;max-width:460px}\r\n.hero-kecil{display:inline-block;background:rgba(255,255,255,.14);color:#fff!important;font-weight:800;font-size:13px!important;padding:6px 12px;border-radius:999px;margin:0 0 14px!important}\r\n.hero-art{position:relative;height:220px}\r\n.hero-art .kartu{position:absolute;border-radius:20px;background:#fff;box-shadow:0 14px 30px rgba(20,14,70,.35)}\r\n.hero-art .k1{width:150px;height:190px;right:120px;top:20px;transform:rotate(-8deg);background:var(--pink-muda)}\r\n.hero-art .k2{width:160px;height:200px;right:20px;top:6px;transform:rotate(6deg);background:#fff}\r\n.hero-art .k2 i,.hero-art .k1 i{position:absolute;left:50%;top:30%;width:84px;height:84px;margin-left:-42px;border-radius:50%}\r\n.hero-art .k1 i{background:var(--kuning)}\r\n.hero-art .k2 i{background:var(--p-lembut)}\r\n.hero-art .k2 b,.hero-art .k1 b{position:absolute;left:24px;right:24px;height:12px;border-radius:6px;top:66%;background:var(--line)}\r\n.hero-art .k2 b+b,.hero-art .k1 b+b{top:76%;right:50px}\r\n.hero-art .bintang{position:absolute;width:34px;height:34px;color:var(--kuning)}\r\n.hero-art .bintang svg{width:100%;height:100%;fill:currentColor;stroke:none}\r\n.hero-bulat{position:absolute;border-radius:50%;background:rgba(255,255,255,.08)}\r\n.editor-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}\r\n.ed-card{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:6px;border:0;border-radius:24px;padding:20px 18px 18px;min-height:190px;text-align:left;cursor:pointer;color:#fff;transition:transform .12s}\r\n.ed-card:hover{transform:translateY(-3px)}\r\n.ed-card .ed-ico{width:54px;height:54px;border-radius:18px;background:rgba(255,255,255,.22);display:grid;place-items:center;margin-bottom:auto}\r\n.ed-card .ed-ico .ico{width:28px;height:28px}\r\n.ed-card .ed-judul{font-family:'Baloo 2',sans-serif;font-weight:800;font-size:21px;line-height:1.1;margin-top:18px}\r\n.ed-card .ed-sub{font-size:14px;font-weight:600;opacity:.92}\r\n.ed-card .ed-go{position:absolute;right:16px;top:18px;width:36px;height:36px;border-radius:50%;background:#fff;display:grid;place-items:center}\r\n.ed-card .ed-go .ico{width:20px;height:20px}\r\n.ed-pink{background:var(--pink);box-shadow:0 6px 0 #993556}\r\n.ed-pink .ed-go{color:var(--pink)}\r\n.ed-teal{background:var(--teal);box-shadow:0 6px 0 #0F6E56}\r\n.ed-amber{background:var(--amber);color:#412402;box-shadow:0 6px 0 #BA7517}\r\n.ed-blue{background:var(--blue);box-shadow:0 6px 0 #185FA5}\r\n.ed-card.segera{cursor:default}\r\n.ed-card.segera:hover{transform:none}\r\n.ed-card.segera .badge{position:absolute;right:16px;top:20px;background:rgba(255,255,255,.9)}\r\n.ajak{display:flex;gap:18px;align-items:center;margin-top:28px;background:var(--amber-muda);border-color:#FAC775}\r\n.ajak-ico{width:64px;height:64px;border-radius:20px;background:#fff;display:grid;place-items:center;color:var(--amber);flex:0 0 auto}\r\n.ajak-ico .ico{width:34px;height:34px}\r\n.ajak .ks-btn{margin-top:12px}\r\n.proyek-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px}\r\n.proyek{background:var(--card);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column}\r\n.proyek-thumb{background:var(--p-muda);aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;cursor:pointer;border:0;padding:0;width:100%}\r\n.proyek-thumb img{width:100%;height:100%;object-fit:contain}\r\n.proyek-isi{padding:12px 14px 14px}\r\n.proyek-nama{font-weight:800;font-size:15px;word-break:break-word}\r\n.proyek-isi .ks-row{margin-top:10px}\r\n.kosong{text-align:center;padding:48px 20px;margin-top:20px}\r\n.kosong .ajak-ico{margin:0 auto 14px;background:var(--p-muda);color:var(--p)}\r\n.ks-form{display:grid;gap:16px}\r\n.ks-field{display:grid;gap:7px;font-weight:800;font-size:14px}\r\n.ks-field small{font-weight:600;color:var(--muted)}\r\n.ks-input{font-weight:600;padding:12px 14px;border:2px solid var(--line);border-radius:14px;background:#fff;min-height:48px;width:100%}\r\n.ks-input:focus{outline:none;border-color:var(--p);box-shadow:0 0 0 4px var(--p-muda)}\r\ntextarea.ks-input{min-height:84px;resize:vertical}\r\n.ks-galat{color:#A32D2D;font-size:14px;font-weight:800}\r\n.ks-galat:empty{display:none}\r\n.chips{display:flex;gap:8px;flex-wrap:wrap}\r\n.chip{border:2px solid var(--line);background:#fff;border-radius:999px;padding:9px 16px;font-weight:800;font-size:14px;cursor:pointer}\r\n.chip.aktif{border-color:var(--p);background:var(--p);color:#fff}\r\n.profil-wrap{display:grid;grid-template-columns:minmax(0,420px) minmax(0,1fr);gap:24px;margin-top:22px;align-items:start}\r\n.profil-card{display:flex;gap:14px;align-items:center}\r\n.avatar{width:52px;height:52px;border-radius:18px;display:grid;place-items:center;font-family:'Baloo 2',sans-serif;font-weight:800;font-size:22px;flex:0 0 auto}\r\n.av-L{background:var(--blue-muda);color:#0C447C}.av-P{background:var(--pink-muda);color:#72243E}.av-N{background:var(--teal-muda);color:#085041}\r\n.bb-layout{display:grid;grid-template-columns:minmax(0,440px) minmax(0,1fr);gap:24px;margin-top:22px;align-items:start}\r\n.bb-kepala{display:flex;align-items:center;gap:14px}\r\n.bb-kepala .ed-ico{width:56px;height:56px;border-radius:18px;background:var(--pink);color:#fff;display:grid;place-items:center;box-shadow:0 4px 0 #993556;flex:0 0 auto}\r\n.bb-kepala .ico{width:30px;height:30px}\r\n.unggah{position:relative;display:flex;align-items:center;gap:14px;border:2px dashed var(--p-lembut);border-radius:18px;padding:14px;background:var(--p-muda);cursor:pointer}\r\n.unggah input{position:absolute;inset:0;opacity:0;cursor:pointer}\r\n.unggah-pv{width:72px;height:72px;border-radius:50%;background:#fff;display:grid;place-items:center;overflow:hidden;color:var(--p);flex:0 0 auto}\r\n.unggah-pv img{width:100%;height:100%;object-fit:cover}\r\n.dua-kolom{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r\n.tpl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px}\r\n.tpl{border:3px solid transparent;border-radius:18px;background:#fff;padding:6px;cursor:pointer;text-align:center;box-shadow:0 2px 0 var(--line)}\r\n.tpl.aktif{border-color:var(--p);box-shadow:0 4px 0 var(--p-tua)}\r\n.tpl-img{border-radius:12px;overflow:hidden;background:var(--p-muda);display:flex;align-items:center;justify-content:center}\r\n.tpl-img img{width:100%;display:block}\r\n.tpl-nama{font-weight:800;font-size:13px;padding:8px 2px 4px}\r\n.bb-aksi{position:sticky;bottom:12px;margin-top:18px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:12px;display:flex;gap:12px;align-items:center;justify-content:space-between;box-shadow:0 10px 30px rgba(38,33,92,.08)}\r\n.ks-toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,20px);background:var(--ink);color:#fff;padding:13px 20px;border-radius:16px;font-weight:800;font-size:14px;opacity:0;pointer-events:none;transition:all .25s;z-index:90;max-width:calc(100vw - 32px)}\r\n.ks-toast.tampil{opacity:1;transform:translate(-50%,0)}\r\n.ks-toast.galat{background:var(--danger)}\r\n.modal{position:fixed;inset:0;background:rgba(38,33,92,.55);display:flex;align-items:center;justify-content:center;padding:16px;z-index:80}\r\n.modal-isi{background:#fff;border-radius:24px;padding:22px;width:min(460px,100%);max-height:calc(100vh - 32px);overflow:auto}\r\n.modal-isi img{width:100%;border-radius:14px;margin:12px 0;background:var(--p-muda)}\r\n.ekspor-pilih{display:grid;gap:10px;margin-top:14px}\r\n.ekspor-pilih button{display:flex;align-items:center;gap:12px;text-align:left;border:2px solid var(--line);background:#fff;border-radius:16px;padding:12px 14px;cursor:pointer}\r\n.ekspor-pilih button:hover{border-color:var(--p)}\r\n.ekspor-pilih b{display:block;font-size:15px}\r\n.ekspor-pilih small{color:var(--muted);font-weight:600}\r\nbody.mode-editor .ks-sidebar,body.mode-editor .ks-topbar{display:none!important}\r\nbody.mode-editor .ks-main{margin-left:0;padding:0}\r\nbody.mode-editor #content-editor{max-width:none}\r\n.ed{display:grid;grid-template-rows:auto minmax(0,1fr) auto;grid-template-columns:minmax(0,1fr);width:100%;height:100vh;height:100dvh;overflow:hidden;background:#EFEDF8}\r\n.ed-top{display:flex;align-items:center;gap:8px;padding:10px 12px;background:#fff;border-bottom:1px solid var(--line)}\r\n.ed-nama{flex:1;min-width:0;font-weight:800;font-size:16px;border:2px solid transparent;border-radius:12px;padding:8px 10px;background:transparent}\r\n.ed-nama:focus{outline:none;border-color:var(--p-lembut)}\r\n.ed-ikon{border:0;background:var(--p-muda);color:var(--ink);width:42px;height:42px;border-radius:14px;display:grid;place-items:center;cursor:pointer;flex:0 0 auto}\r\n.ed-ikon:disabled{opacity:.35;cursor:default}\r\n.ed-mid{display:grid;grid-template-columns:minmax(0,1fr) 340px;min-height:0}\r\n.ed-stage{display:flex;align-items:center;justify-content:center;padding:18px;min-height:0;min-width:0;overflow:hidden}\r\n.ed-stage .canvas-container{box-shadow:0 12px 40px rgba(38,33,92,.18);border-radius:4px}\r\n.ed-panel{background:#fff;border-left:1px solid var(--line);overflow-y:auto;padding:16px 16px 24px}\r\n.ed-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}\r\n.ed-panel-head b{font-family:'Baloo 2',sans-serif;font-size:19px}\r\n.ed-panel-tutup{display:none}\r\n.ed-tools{display:flex;justify-content:center;gap:4px;background:#fff;border-top:1px solid var(--line);padding:6px 6px calc(6px + env(safe-area-inset-bottom))}\r\n.ed-tool{display:flex;flex-direction:column;align-items:center;gap:3px;border:0;background:transparent;border-radius:14px;padding:7px 12px;min-width:64px;font-weight:800;font-size:12px;cursor:pointer;color:var(--muted)}\r\n.ed-tool.aktif{background:var(--p-muda);color:var(--p)}\r\n.ed-label{font-weight:800;font-size:13px;color:var(--muted);margin:16px 0 8px}\r\n.ed-label:first-child{margin-top:0}\r\n.swatch-grid{display:grid;grid-template-columns:repeat(8,1fr);gap:7px}\r\n.swatch{aspect-ratio:1/1;border-radius:10px;border:2px solid rgba(0,0,0,.08);cursor:pointer;padding:0}\r\n.swatch.aktif{outline:3px solid var(--p);outline-offset:2px}\r\n.stiker-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}\r\n.stiker-btn{aspect-ratio:1/1;border:2px solid var(--line);border-radius:14px;background:#FAF9FE;padding:10px;cursor:pointer;color:var(--ink)}\r\n.stiker-btn svg{width:100%;height:100%}\r\n.aksi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\r\n.aksi{display:flex;flex-direction:column;align-items:center;gap:4px;border:2px solid var(--line);background:#fff;border-radius:14px;padding:10px 4px;font-size:12px;font-weight:800;cursor:pointer}\r\n.aksi.bahaya{color:#A32D2D}\r\n.font-list{display:grid;gap:6px}\r\n.font-btn{border:2px solid var(--line);background:#fff;border-radius:12px;padding:8px 12px;text-align:left;font-size:18px;cursor:pointer}\r\n.font-btn.aktif{border-color:var(--p);background:var(--p-muda)}\r\n.ed-range{width:100%;accent-color:var(--p)}\r\n.tekan-kosong{color:var(--muted);font-size:14px;line-height:1.5;background:var(--bg);border-radius:14px;padding:12px}\r\n@media (max-width:1000px){.editor-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.bb-layout,.profil-wrap{grid-template-columns:1fr}}\r\n@media (max-width:767px){\r\n  .ks-sidebar{width:min(86vw,320px);transform:translateX(-100%);transition:transform .25s}\r\n  body.nav-open .ks-sidebar{transform:translateX(0);box-shadow:0 0 40px rgba(0,0,0,.15)}\r\n  body.nav-open .ks-backdrop{display:block;position:fixed;inset:0;background:rgba(38,33,92,.4);z-index:30}\r\n  .ks-hp-only{display:grid}\r\n  .ks-topbar{display:flex;align-items:center;gap:12px;position:sticky;top:0;background:var(--bg);padding:12px 16px;z-index:20}\r\n  .ks-topbar .ks-icon-btn{display:grid}\r\n  .ks-topbar-title{font-weight:800;font-size:21px}\r\n  .ks-main{margin-left:0;padding:6px 16px 40px}\r\n  .ks-h1{font-size:27px}\r\n  .hero{grid-template-columns:1fr;padding:24px 22px;border-radius:24px}\r\n  .hero .ks-h1{font-size:28px}\r\n  .hero-art{display:none}\r\n  .editor-grid{gap:12px}\r\n  .ed-card{min-height:168px;padding:16px 14px;border-radius:20px}\r\n  .ed-card .ed-judul{font-size:18px}\r\n  .ed-card .ed-sub{font-size:13px}\r\n  .ed-card .ed-go{width:32px;height:32px;right:12px;top:14px}\r\n  .ed-card.segera .badge{right:10px;top:14px}\r\n  .ajak{flex-direction:column;text-align:center}\r\n  .dua-kolom{grid-template-columns:1fr 1fr}\r\n  .tpl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}\r\n  .ed-mid{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr) auto}\r\n  .ed-top{gap:6px;padding:8px}\r\n  .ed-unduh-teks{display:none}\r\n  #ed-unduh{padding:8px 12px}\r\n  .ed-panel{border-left:0;border-top:1px solid var(--line);border-radius:22px 22px 0 0;max-height:46vh;box-shadow:0 -10px 30px rgba(38,33,92,.08)}\r\n  .ed-panel.tutup{display:none}\r\n  .ed-panel-tutup{display:grid}\r\n  .ed-tool{min-width:0;flex:1;padding:7px 4px}\r\n  .swatch-grid{grid-template-columns:repeat(8,1fr)}\r\n}\r\n";
  var BODY_CLASS = ["ks-body"];
  var STYLES = ["https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,600&family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Dancing+Script:wght@600;700&family=Fredoka:wght@500;600;700&family=Caveat:wght@600;700&display=swap"];
  var SCRIPTS = ["https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js","https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"];
  var SRI = {"https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js":"sha384-sLpuECXYCB5TUyTbC06pftm/rgurDambREZmV4eRHwEqJzCQtU6lxI2Ve00z4XW5","https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js":"sha384-JcnsjUPPylna1s1fvi1u12X5qjY5OL56iySh75FdtrwhO/SWXgMjoVqcKyIIWOLk"};
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
      if (SRI[src]) { s.integrity = SRI[src]; s.crossOrigin = 'anonymous'; }
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
    'nav.babyborn': 'Baby Born',
    'nav.proyekku': 'Proyekku',
    'nav.profil': 'Profil Anak',
    'nav.buka': 'Buka menu',
    'nav.tutup': 'Tutup',
    'nav.segera-judul': 'Segera hadir',
    'umum.segera': 'Segera',
    'beranda.kecil': 'Studio kenangan si kecil',
    'beranda.judul': 'Mau bikin apa hari ini?',
    'beranda.sapa-anak': 'Hai keluarga {nama}, mau bikin apa hari ini?',
    'beranda.sub': 'Pilih editor, isi data singkat, dan karyamu siap dibagikan atau dicetak dalam hitungan menit.',
    'beranda.mulai': 'Mulai Baby Born',
    'beranda.editor-judul': 'Pilih editor',
    'beranda.ajak-profil-judul': 'Kenalan dulu dengan si kecil',
    'beranda.ajak-profil-isi': 'Isi Profil Anak sekali saja, nanti nama dan tanggal lahirnya terisi otomatis di semua editor.',
    'beranda.ajak-profil-tombol': 'Isi Profil Anak',
    'beranda.terakhir': 'Lanjutkan karyamu',
    'editor.babyborn': 'Baby Born',
    'editor.babyborn-sub': 'Kartu kelahiran si kecil',
    'editor.kolase': 'Kolase Anak',
    'editor.kolase-sub': 'Banyak foto, satu cerita',
    'editor.milestone': 'Milestone',
    'editor.milestone-sub': 'Foto bulanan dan ulang tahun',
    'editor.ai': 'AI Foto Anak',
    'editor.ai-sub': 'Kartun, kostum, latar ajaib',
    'editor.kembali': 'Kembali',
    'editor.undo': 'Urungkan',
    'editor.redo': 'Ulangi',
    'editor.unduh': 'Unduh',
    'editor.tambah-foto': 'Ketuk untuk tambah foto',
    'editor.teks-baru': 'Ketik teks di sini',
    'editor.judul-baru': 'Judul',
    'editor.tersimpan': 'Tersimpan otomatis',
    'editor.pilih-objek': 'Ketuk teks, foto, atau stiker di kanvas untuk mengubahnya.',
    'alat.teks': 'Teks',
    'alat.foto': 'Foto',
    'alat.stiker': 'Stiker',
    'alat.latar': 'Latar',
    'alat.lapisan': 'Lapisan',
    'alat.tambah-judul': 'Tambah judul',
    'alat.tambah-teks': 'Tambah teks',
    'alat.isi-teks': 'Isi teks',
    'alat.font': 'Jenis huruf',
    'alat.ukuran': 'Ukuran',
    'alat.warna': 'Warna',
    'alat.rata': 'Perataan',
    'alat.tambah-foto': 'Tambah foto baru',
    'alat.ganti-foto': 'Pilih / ganti foto',
    'alat.bentuk': 'Bentuk foto',
    'alat.bentuk-kotak': 'Kotak',
    'alat.bentuk-membulat': 'Sudut bulat',
    'alat.bentuk-bulat': 'Bulat',
    'alat.bentuk-hati': 'Hati',
    'alat.bentuk-lengkung': 'Lengkung',
    'alat.latar-polos': 'Warna polos',
    'alat.latar-gradasi': 'Gradasi',
    'alat.depan': 'Ke depan',
    'alat.belakang': 'Ke belakang',
    'alat.duplikat': 'Duplikat',
    'alat.kunci': 'Kunci',
    'alat.buka-kunci': 'Buka kunci',
    'alat.hapus': 'Hapus',
    'alat.transparansi': 'Transparansi',
    'ekspor.judul': 'Unduh karya',
    'ekspor.png': 'PNG kualitas tinggi',
    'ekspor.png-sub': 'Terbaik untuk Instagram dan WhatsApp',
    'ekspor.jpg': 'JPG ukuran kecil',
    'ekspor.jpg-sub': 'Hemat kuota, mudah dikirim',
    'ekspor.pdf': 'PDF siap cetak',
    'ekspor.pdf-sub': 'Bawa ke tempat cetak foto',
    'ekspor.bagikan': 'Bagikan',
    'ekspor.selesai': 'File siap',
    'ekspor.petunjuk': 'Kalau unduhan tidak berjalan, tekan lama gambar di atas lalu pilih Simpan gambar.',
    'ekspor.memproses': 'Sedang menyiapkan file...',
    'ekspor.gagal': 'File gagal dibuat. Coba lagi.',
    'bb.judul': 'Baby Born',
    'bb.sub': 'Isi data si kecil, pilih desain, lalu sesuaikan sesukamu.',
    'bb.data': 'Data si kecil',
    'bb.contoh': 'Isi contoh',
    'bb.dari-profil': 'Ambil dari Profil Anak',
    'bb.pilih-profil': 'Pilih anak...',
    'bb.foto': 'Foto si kecil',
    'bb.foto-sub': 'Ketuk untuk memilih foto (bisa nanti)',
    'bb.nama': 'Nama lengkap',
    'bb.nama-ph': 'Contoh: Aisyah Putri Ramadhani',
    'bb.netral': 'Netral',
    'bb.tanggal': 'Tanggal lahir',
    'bb.jam': 'Jam lahir',
    'bb.berat': 'Berat (kg)',
    'bb.panjang': 'Panjang (cm)',
    'bb.tempat': 'Tempat lahir',
    'bb.tempat-ph': 'Contoh: RSIA Bunda, Bandung',
    'bb.ayah': 'Nama ayah',
    'bb.ibu': 'Nama ibu',
    'bb.anak-ke': 'Anak ke-',
    'bb.tanpa': 'Tidak ditampilkan',
    'bb.kutipan': 'Doa atau kutipan',
    'bb.kutipan-sendiri': 'Tulis sendiri...',
    'bb.ukuran': 'Ukuran',
    'bb.pilih-desain': 'Pilih desain',
    'bb.dipilih': 'Desain: {nama}',
    'bb.buat': 'Buat kartu',
    'bb.contoh-nama': 'Nama Si Kecil',
    'bb.galat-nama': 'Nama bayi wajib diisi (maksimal 50 huruf).',
    'bb.galat-tanggal': 'Tanggal lahir belum benar.',
    'bb.galat-jam': 'Jam lahir belum benar.',
    'bb.galat-berat': 'Berat sebaiknya antara 0,3 dan 7 kg.',
    'bb.galat-panjang': 'Panjang sebaiknya antara 20 dan 70 cm.',
    'bb.galat-foto': 'Foto tidak bisa dibaca. Coba foto lain.',
    'ukuran.ig-post': 'Post IG (1:1)',
    'ukuran.ig-story': 'Story / WA (9:16)',
    'ukuran.cetak-10r': 'Cetak 10R',
    'proyekku.judul': 'Proyekku',
    'proyekku.sub': 'Semua karya tersimpan otomatis di perangkat ini.',
    'proyekku.kosong-judul': 'Belum ada karya',
    'proyekku.kosong': 'Karya yang kamu buat akan muncul di sini.',
    'proyekku.tanpa-nama': 'Karya tanpa nama',
    'proyekku.terhapus': 'Karya dihapus',
    'proyekku.buka': 'Buka',
    'profil.judul': 'Profil Anak',
    'profil.sub': 'Data ini hanya tersimpan di perangkat ini, tidak dikirim ke mana pun.',
    'profil.nama': 'Nama lengkap',
    'profil.panggilan': 'Nama panggilan (opsional)',
    'profil.tgl-lahir': 'Tanggal lahir',
    'profil.jenis': 'Jenis kelamin',
    'profil.jenis-l': 'Laki-laki',
    'profil.jenis-p': 'Perempuan',
    'profil.jenis-n': 'Tidak disebutkan',
    'profil.simpan': 'Simpan profil',
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
    'galat.penyimpanan': 'Penyimpanan di perangkat ini tidak bisa dipakai. Coba buka di Chrome/Safari biasa (bukan mode samaran).',
    'galat.editor': 'Editor gagal dimuat. Periksa koneksi lalu muat ulang.'
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

  var BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  var HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  var URUTAN = ['pertama', 'kedua', 'ketiga', 'keempat', 'kelima', 'keenam', 'ketujuh', 'kedelapan', 'kesembilan', 'kesepuluh'];
  var TITIK = ' · ';
  function teks(v) { return String(v == null ? '' : v).trim(); }
  function formatTanggal(iso) {
    var p = parseTgl(iso);
    return p ? p.d + ' ' + BULAN[p.m - 1] + ' ' + p.y : '';
  }
  function tanggalPendek(iso) {
    var p = parseTgl(iso);
    return p ? pad(p.d) + '.' + pad(p.m) + '.' + p.y : '';
  }
  function namaHari(iso) {
    var p = parseTgl(iso);
    return p ? HARI[new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay()] : '';
  }
  function angka(v) {
    var s = teks(v).replace(',', '.');
    return /^\d+(\.\d+)?$/.test(s) ? parseFloat(s) : null;
  }
  function desimal(n) { return String(Math.round(n * 100) / 100).replace('.', ','); }
  function formatBerat(v) { var n = angka(v); return n === null ? '' : desimal(n) + ' kg'; }
  function formatPanjang(v) { var n = angka(v); return n === null ? '' : desimal(n) + ' cm'; }
  function formatJam(v) {
    var m = /^(\d{2}):(\d{2})$/.exec(teks(v));
    return m ? m[1] + '.' + m[2] + ' WIB' : '';
  }
  function labelAnakKe(n) {
    n = parseInt(n, 10);
    if (!(n >= 1)) return '';
    return n <= URUTAN.length ? 'Anak ' + URUTAN[n - 1] : 'Anak ke-' + n;
  }
  function gabung(arr, sep) { return arr.filter(function (x) { return x; }).join(sep); }
  function validasiBayi(d, hariIniIso) {
    var nama = teks(d && d.nama);
    if (!nama || nama.length > 50) return { ok: false, galat: 'bb.galat-nama' };
    if (!parseTgl(d.tglLahir) || d.tglLahir > hariIniIso) return { ok: false, galat: 'bb.galat-tanggal' };
    if (teks(d.jam) && !/^\d{2}:\d{2}$/.test(teks(d.jam))) return { ok: false, galat: 'bb.galat-jam' };
    if (teks(d.berat)) { var b = angka(d.berat); if (b === null || b < 0.3 || b > 7) return { ok: false, galat: 'bb.galat-berat' }; }
    if (teks(d.panjang)) { var p = angka(d.panjang); if (p === null || p < 20 || p > 70) return { ok: false, galat: 'bb.galat-panjang' }; }
    return { ok: true };
  }
  function dataBayiTampil(d) {
    d = d || {};
    var ayah = teks(d.ayah);
    var ibu = teks(d.ibu);
    var m = {
      nama: teks(d.nama),
      panggilan: teks(d.panggilan),
      tanggal: formatTanggal(d.tglLahir),
      tglPendek: tanggalPendek(d.tglLahir),
      hari: namaHari(d.tglLahir),
      jam: formatJam(d.jam),
      jamPendek: formatJam(d.jam).replace(' WIB', ''),
      berat: formatBerat(d.berat),
      panjang: formatPanjang(d.panjang),
      tempat: teks(d.tempat),
      ayah: ayah,
      ibu: ibu,
      orangtua: gabung([ayah ? 'Ayah ' + ayah : '', ibu ? 'Ibu ' + ibu : ''], ' & '),
      anakKe: labelAnakKe(d.anakKe),
      kutipan: teks(d.kutipan),
      sebutan: d.jenisKelamin === 'L' ? 'putra' : d.jenisKelamin === 'P' ? 'putri' : 'buah hati'
    };
    m.panggilanAtauNama = m.panggilan || m.nama;
    m.ringkasUkuran = gabung([m.berat, m.panjang], TITIK);
    m.ringkasWaktu = gabung([m.hari && m.tanggal ? m.hari + ', ' + m.tanggal : m.tanggal, m.jam], TITIK);
    return m;
  }
  var UKURAN = {
    'ig-post': { w: 1080, h: 1080, ekspor: { w: 2160, h: 2160 } },
    'ig-story': { w: 1080, h: 1920, ekspor: { w: 1440, h: 2560 } },
    'cetak-10r': { w: 1080, h: 1350, ekspor: { w: 2400, h: 3000 }, inci: [8, 10] }
  };
  var FONT_KANVAS = ['Baloo 2', 'Nunito', 'Pacifico', 'Playfair Display', 'Dancing Script', 'Fredoka', 'Caveat'];
  var SALIN = ['font', 'tebalHuruf', 'rata', 'miring', 'sudut', 'opasitas', 'jarakHuruf', 'bentuk', 'id', 'tinggiBaris', 'bayangan'];
  var SKALA = ['w', 'h', 'r', 'rx', 'size', 'lebar', 'tebal'];
  function terapkanTemplate(tpl, data, ukuranId, varian) {
    var uk = UKURAN[ukuranId];
    if (!uk) throw new Error('ukuran tidak dikenal: ' + ukuranId);
    var pal = tpl.palet[varian] || tpl.palet.N;
    var m = dataBayiTampil(data);
    var u = uk.w / 1000;
    function warna(v) {
      if (typeof v !== 'string' || v.charAt(0) !== '$') return v;
      var k = v.slice(1);
      if (!Object.prototype.hasOwnProperty.call(pal, k)) throw new Error('warna palet tidak ada: ' + v + ' di ' + tpl.id);
      return pal[k];
    }
    var items = [];
    tpl.elemen.forEach(function (e) {
      if (e.perlu && e.perlu.some(function (k) { return !m[k]; })) return;
      var o = { jenis: e.jenis };
      if (e.jenis === 'latar') {
        o.warna = warna(e.warna);
        if (e.warna2) o.warna2 = warna(e.warna2);
        items.push(o);
        return;
      }
      o.x = e.x * u;
      o.y = e.y * uk.h + (e.dy || 0) * u;
      SKALA.forEach(function (k) { if (e[k] != null) o[k] = e[k] * u; });
      if (e.hTinggi != null) o.h = e.hTinggi * uk.h;
      SALIN.forEach(function (k) { if (e[k] != null) o[k] = e[k]; });
      if (e.warna != null) o.warna = warna(e.warna);
      if (e.garis != null) o.garis = warna(e.garis);
      if (e.warnaStiker != null) o.warnaStiker = warna(e.warnaStiker);
      if (e.jenis === 'teks') {
        var s = e.teks.replace(/\{(\w+)\}/g, function (_, k) { return m[k] || ''; });
        o.teks = e.kapital ? s.toUpperCase() : s;
      }
      if (e.jenis === 'foto') o.src = (data && data.foto) || null;
      items.push(o);
    });
    return { w: uk.w, h: uk.h, items: items };
  }
  function ukuranEkspor(ukuranId) {
    var uk = UKURAN[ukuranId];
    return uk ? { w: uk.ekspor.w, h: uk.ekspor.h, inci: uk.inci || null } : null;
  }

  window.KSPure = {
    createT: createT,
    hitungUmur: hitungUmur,
    labelUmur: labelUmur,
    validasiProfil: validasiProfil,
    hariIni: hariIni,
    buatId: buatId,
    formatTanggal: formatTanggal,
    namaHari: namaHari,
    formatBerat: formatBerat,
    formatPanjang: formatPanjang,
    formatJam: formatJam,
    labelAnakKe: labelAnakKe,
    validasiBayi: validasiBayi,
    dataBayiTampil: dataBayiTampil,
    terapkanTemplate: terapkanTemplate,
    ukuranEkspor: ukuranEkspor,
    UKURAN: UKURAN,
    FONT_KANVAS: FONT_KANVAS
  };
})();

  },
  function () {

window.KSStiker = {
  bintang: { nama: 'Bintang', warna: '#FAC775', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon fill="currentColor" points="50,6 61,38 95,38 67,58 78,92 50,72 22,92 33,58 5,38 39,38"/></svg>' },
  kilau: { nama: 'Kilau', warna: '#FAC775', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M50 4 C54 36 64 46 96 50 C64 54 54 64 50 96 C46 64 36 54 4 50 C36 46 46 36 50 4 Z"/></svg>' },
  hati: { nama: 'Hati', warna: '#ED93B1', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M50 88 C20 66 6 50 6 32 C6 18 17 8 30 8 C39 8 46 13 50 20 C54 13 61 8 70 8 C83 8 94 18 94 32 C94 50 80 66 50 88 Z"/></svg>' },
  awan: { nama: 'Awan', warna: '#FFFFFF', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor"><circle cx="30" cy="60" r="20"/><circle cx="52" cy="46" r="27"/><circle cx="74" cy="60" r="19"/><rect x="30" y="56" width="44" height="24"/></g></svg>' },
  bulan: { nama: 'Bulan', warna: '#FAC775', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M62 8 A42 42 0 1 0 92 74 A34 34 0 1 1 62 8 Z"/></svg>' },
  bulanbintang: { nama: 'Bulan bintang', warna: '#BA7517', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor"><path d="M52 10 A40 40 0 1 0 84 76 A32 32 0 1 1 52 10 Z"/><polygon points="74,22 78,33 89,33 80,40 83,51 74,44 65,51 68,40 59,33 70,33"/></g></svg>' },
  balon: { nama: 'Balon', warna: '#ED93B1', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse fill="currentColor" cx="50" cy="38" rx="26" ry="32"/><ellipse fill="#FFFFFF" opacity="0.45" cx="40" cy="26" rx="6" ry="10"/><polygon fill="currentColor" points="45,69 55,69 50,76"/><path d="M50 76 Q42 86 52 98" fill="none" stroke="#888780" stroke-width="2"/></svg>' },
  matahari: { nama: 'Matahari', warna: '#EF9F27', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g stroke="currentColor" stroke-width="7" stroke-linecap="round"><line x1="50" y1="6" x2="50" y2="18"/><line x1="50" y1="82" x2="50" y2="94"/><line x1="6" y1="50" x2="18" y2="50"/><line x1="82" y1="50" x2="94" y2="50"/><line x1="19" y1="19" x2="27" y2="27"/><line x1="73" y1="73" x2="81" y2="81"/><line x1="81" y1="19" x2="73" y2="27"/><line x1="27" y1="73" x2="19" y2="81"/></g><circle fill="currentColor" cx="50" cy="50" r="22"/></svg>' },
  bunga: { nama: 'Bunga', warna: '#ED93B1', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor"><circle cx="50" cy="28" r="17"/><circle cx="71" cy="43" r="17"/><circle cx="63" cy="68" r="17"/><circle cx="37" cy="68" r="17"/><circle cx="29" cy="43" r="17"/></g><circle fill="#FAC775" cx="50" cy="50" r="13"/></svg>' },
  daun: { nama: 'Daun', warna: '#97C459', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M14 86 C14 42 44 16 88 12 C85 56 60 86 14 86 Z"/><path d="M18 82 L70 30" fill="none" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="3"/></svg>' },
  beruang: { nama: 'Beruang', warna: '#BA7517', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor"><circle cx="24" cy="26" r="15"/><circle cx="76" cy="26" r="15"/><circle cx="50" cy="56" r="36"/></g><circle fill="#F5C4B3" cx="24" cy="26" r="7"/><circle fill="#F5C4B3" cx="76" cy="26" r="7"/><ellipse fill="#FAEEDA" cx="50" cy="68" rx="16" ry="12"/><circle fill="#2C2C2A" cx="37" cy="50" r="4.5"/><circle fill="#2C2C2A" cx="63" cy="50" r="4.5"/><ellipse fill="#2C2C2A" cx="50" cy="62" rx="6" ry="4.5"/><circle fill="#ED93B1" opacity="0.6" cx="28" cy="64" r="6"/><circle fill="#ED93B1" opacity="0.6" cx="72" cy="64" r="6"/></svg>' },
  kelinci: { nama: 'Kelinci', warna: '#FFFFFF', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" stroke="#D3D1C7" stroke-width="2"><ellipse cx="36" cy="24" rx="10" ry="22"/><ellipse cx="64" cy="24" rx="10" ry="22"/><circle cx="50" cy="62" r="30"/></g><ellipse fill="#F4C0D1" cx="36" cy="26" rx="4.5" ry="14"/><ellipse fill="#F4C0D1" cx="64" cy="26" rx="4.5" ry="14"/><circle fill="#2C2C2A" cx="39" cy="58" r="4"/><circle fill="#2C2C2A" cx="61" cy="58" r="4"/><ellipse fill="#ED93B1" cx="50" cy="67" rx="5" ry="3.5"/><circle fill="#ED93B1" opacity="0.5" cx="31" cy="70" r="6"/><circle fill="#ED93B1" opacity="0.5" cx="69" cy="70" r="6"/></svg>' },
  pelangi: { nama: 'Pelangi', warna: '#F09595', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="none" stroke-width="7"><path stroke="currentColor" d="M10 80 A40 40 0 0 1 90 80"/><path stroke="#FAC775" d="M17 80 A33 33 0 0 1 83 80"/><path stroke="#9FE1CB" d="M24 80 A26 26 0 0 1 76 80"/><path stroke="#85B7EB" d="M31 80 A19 19 0 0 1 69 80"/></g></svg>' },
  kaki: { nama: 'Telapak kaki', warna: '#ED93B1', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor"><ellipse cx="32" cy="62" rx="13" ry="22" transform="rotate(-12 32 62)"/><circle cx="22" cy="32" r="4"/><circle cx="30" cy="28" r="4.5"/><circle cx="39" cy="29" r="4"/><circle cx="46" cy="33" r="3.5"/><ellipse cx="68" cy="50" rx="13" ry="22" transform="rotate(12 68 50)"/><circle cx="56" cy="20" r="3.5"/><circle cx="63" cy="16" r="4"/><circle cx="72" cy="16" r="4.5"/><circle cx="80" cy="20" r="4"/></g></svg>' },
  mahkota: { nama: 'Mahkota', warna: '#FAC775', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon fill="currentColor" points="10,74 16,28 36,50 50,20 64,50 84,28 90,74"/><rect fill="currentColor" x="10" y="76" width="80" height="12" rx="3"/><circle fill="#ED93B1" cx="50" cy="62" r="6"/><circle fill="#85B7EB" cx="30" cy="64" r="4"/><circle fill="#85B7EB" cx="70" cy="64" r="4"/></svg>' },
  konfeti: { nama: 'Konfeti', warna: '#ED93B1', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="currentColor" x="10" y="14" width="10" height="18" rx="2" transform="rotate(-20 15 23)"/><rect fill="#FAC775" x="40" y="8" width="9" height="16" rx="2" transform="rotate(25 44 16)"/><rect fill="#85B7EB" x="72" y="20" width="10" height="18" rx="2" transform="rotate(-35 77 29)"/><circle fill="#9FE1CB" cx="28" cy="58" r="6"/><circle fill="#AFA9EC" cx="66" cy="54" r="5"/><rect fill="#9FE1CB" x="82" y="64" width="9" height="16" rx="2" transform="rotate(30 86 72)"/><rect fill="#FAC775" x="14" y="80" width="10" height="17" rx="2" transform="rotate(15 19 88)"/><circle fill="currentColor" cx="52" cy="86" r="5"/><polygon fill="#AFA9EC" points="46,36 52,46 40,46"/></svg>' },
  botol: { nama: 'Botol susu', warna: '#85B7EB', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="#FFFFFF" stroke="#B4B2A9" stroke-width="2" d="M44 6 Q50 2 56 6 L58 20 L42 20 Z"/><rect fill="currentColor" x="36" y="20" width="28" height="10" rx="3"/><rect fill="#FFFFFF" stroke="#B4B2A9" stroke-width="2" x="32" y="30" width="36" height="62" rx="12"/><rect fill="currentColor" opacity="0.35" x="34" y="58" width="32" height="32" rx="10"/><g stroke="#B4B2A9" stroke-width="2"><line x1="56" y1="42" x2="66" y2="42"/><line x1="56" y1="52" x2="66" y2="52"/><line x1="56" y1="62" x2="66" y2="62"/></g></svg>' },
  pita: { nama: 'Pita', warna: '#D4537E', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor"><path d="M50 50 L12 26 Q6 50 12 74 Z"/><path d="M50 50 L88 26 Q94 50 88 74 Z"/><path d="M46 54 L32 92 L42 86 L48 94 L52 56 Z"/><path d="M54 54 L68 92 L58 86 L52 94 L48 56 Z"/></g><circle fill="currentColor" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="3" cx="50" cy="50" r="11"/></svg>' }
};

window.KSTemplates = {
  kutipanBayi: [
    'Engkaulah anugerah terindah yang Allah titipkan untuk kami.',
    'Kecil tubuhmu, besar cinta kami untukmu.',
    'Sejak hari ini, dunia kami berputar mengelilingimu.',
    'Selamat datang di keluarga kecil yang penuh cinta.',
    'Rabbi hab li minash shalihin. Semoga tumbuh menjadi anak yang saleh dan salihah.',
    'Terima kasih sudah memilih kami menjadi orang tuamu.'
  ],
  babyborn: [
    {
      id: 'awan-pastel',
      nama: 'Awan Pastel',
      palet: {
        L: { a: '#378ADD', t: '#0C447C', l: '#B5D4F4', bg: '#E6F1FB' },
        P: { a: '#D4537E', t: '#72243E', l: '#F4C0D1', bg: '#FBEAF0' },
        N: { a: '#1D9E75', t: '#085041', l: '#9FE1CB', bg: '#E1F5EE' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '#FFFFFF' },
        { jenis: 'stiker', id: 'awan', x: 140, y: 0.09, size: 240 },
        { jenis: 'stiker', id: 'awan', x: 880, y: 0.2, size: 180 },
        { jenis: 'stiker', id: 'bintang', x: 905, y: 0.12, size: 56, sudut: 12 },
        { jenis: 'stiker', id: 'kilau', x: 90, y: 0.3, size: 50 },
        { jenis: 'stiker', id: 'kilau', x: 930, y: 0.42, size: 40, warnaStiker: '$l' },
        { jenis: 'teks', teks: 'Selamat datang di dunia', x: 500, y: 0.075, size: 30, font: 'Nunito', tebalHuruf: 800, warna: '$a', kapital: true, jarakHuruf: 250, lebar: 900 },
        { jenis: 'bulat', x: 500, y: 0.36, r: 240, warna: '#FFFFFF' },
        { jenis: 'foto', x: 500, y: 0.36, w: 440, h: 440, bentuk: 'bulat', garis: '$l', tebal: 14 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.62, size: 72, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', lebar: 920, tinggiBaris: 1 },
        { jenis: 'teks', teks: '{ringkasWaktu}', x: 500, y: 0.62, dy: 78, size: 29, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 920 },
        { jenis: 'kotak', x: 500, y: 0.62, dy: 160, w: 560, h: 84, rx: 42, warna: '#FFFFFF', garis: '$l', tebal: 4, perlu: ['ringkasUkuran'] },
        { jenis: 'teks', teks: '{ringkasUkuran}', x: 500, y: 0.62, dy: 160, size: 33, font: 'Baloo 2', tebalHuruf: 700, warna: '$t', lebar: 540, perlu: ['ringkasUkuran'] },
        { jenis: 'teks', teks: '{orangtua}', x: 500, y: 0.62, dy: 248, size: 26, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 900, perlu: ['orangtua'] },
        { jenis: 'teks', teks: '{anakKe}', x: 500, y: 0.62, dy: 290, size: 22, font: 'Nunito', tebalHuruf: 600, warna: '$a', lebar: 900, perlu: ['anakKe'] }
      ]
    },
    {
      id: 'langit-bintang',
      nama: 'Langit Bintang',
      palet: {
        L: { a: '#85B7EB', bg: '#042C53', bg2: '#185FA5' },
        P: { a: '#F4C0D1', bg: '#26215C', bg2: '#7F77DD' },
        N: { a: '#9FE1CB', bg: '#04342C', bg2: '#0F6E56' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '$bg2' },
        { jenis: 'stiker', id: 'bulan', x: 870, y: 0.175, size: 140 },
        { jenis: 'stiker', id: 'bintang', x: 120, y: 0.08, size: 50 },
        { jenis: 'stiker', id: 'kilau', x: 300, y: 0.17, size: 30, warnaStiker: '#FFFFFF' },
        { jenis: 'stiker', id: 'kilau', x: 690, y: 0.05, size: 34, warnaStiker: '#FFFFFF' },
        { jenis: 'stiker', id: 'bintang', x: 920, y: 0.3, size: 40 },
        { jenis: 'stiker', id: 'kilau', x: 80, y: 0.45, size: 36, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'kilau', x: 910, y: 0.56, size: 30, warnaStiker: '#FFFFFF' },
        { jenis: 'stiker', id: 'bintang', x: 140, y: 0.86, size: 44 },
        { jenis: 'stiker', id: 'kilau', x: 880, y: 0.9, size: 46, warnaStiker: '$a' },
        { jenis: 'teks', teks: 'Bintang kecil kami telah lahir', x: 500, y: 0.08, size: 28, font: 'Nunito', tebalHuruf: 800, warna: '#FFFFFF', kapital: true, jarakHuruf: 200, lebar: 700 },
        { jenis: 'foto', x: 500, y: 0.37, w: 430, h: 430, bentuk: 'bulat', garis: '$a', tebal: 12 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.635, size: 70, font: 'Pacifico', tebalHuruf: 400, warna: '#FFFFFF', lebar: 920, tinggiBaris: 1.1 },
        { jenis: 'teks', teks: '{ringkasWaktu}', x: 500, y: 0.635, dy: 88, size: 28, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 900 },
        { jenis: 'teks', teks: '{ringkasUkuran}', x: 500, y: 0.635, dy: 140, size: 28, font: 'Nunito', tebalHuruf: 700, warna: '#FFFFFF', lebar: 900, perlu: ['ringkasUkuran'] },
        { jenis: 'teks', teks: 'Lahir di {tempat}', x: 500, y: 0.635, dy: 190, size: 24, font: 'Nunito', tebalHuruf: 600, warna: '$a', lebar: 900, perlu: ['tempat'] },
        { jenis: 'teks', teks: '{orangtua}', x: 500, y: 0.635, dy: 250, size: 25, font: 'Nunito', tebalHuruf: 700, warna: '#FFFFFF', lebar: 900, perlu: ['orangtua'] }
      ]
    },
    {
      id: 'bunga-cat-air',
      nama: 'Bunga Cat Air',
      palet: {
        L: { a: '#378ADD', t: '#0C447C', l: '#B5D4F4', l2: '#9FE1CB' },
        P: { a: '#D4537E', t: '#72243E', l: '#F4C0D1', l2: '#FAC775' },
        N: { a: '#BA7517', t: '#633806', l: '#FAC775', l2: '#C0DD97' }
      },
      elemen: [
        { jenis: 'latar', warna: '#FFFBF5' },
        { jenis: 'bulat', x: 60, y: 0.06, r: 260, warna: '$l', opasitas: 0.45 },
        { jenis: 'bulat', x: 960, y: 0.95, r: 300, warna: '$l2', opasitas: 0.4 },
        { jenis: 'bulat', x: 940, y: 0.08, r: 150, warna: '$l2', opasitas: 0.35 },
        { jenis: 'bulat', x: 40, y: 0.9, r: 170, warna: '$l', opasitas: 0.35 },
        { jenis: 'stiker', id: 'daun', x: 210, y: 0.2, size: 90, sudut: 30 },
        { jenis: 'stiker', id: 'daun', x: 800, y: 0.8, size: 90, sudut: -150 },
        { jenis: 'stiker', id: 'bunga', x: 120, y: 0.1, size: 150, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'bunga', x: 880, y: 0.88, size: 170, warnaStiker: '$a' },
        { jenis: 'teks', teks: 'Telah lahir dengan selamat', x: 500, y: 0.085, size: 50, font: 'Dancing Script', tebalHuruf: 700, warna: '$a', lebar: 700 },
        { jenis: 'foto', x: 500, y: 0.37, w: 400, h: 470, bentuk: 'lengkung', garis: '#FFFFFF', tebal: 14 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.66, size: 62, font: 'Playfair Display', tebalHuruf: 700, warna: '$t', lebar: 900, tinggiBaris: 1.05 },
        { jenis: 'teks', teks: '{ringkasWaktu}', x: 500, y: 0.66, dy: 82, size: 28, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 900 },
        { jenis: 'teks', teks: '{ringkasUkuran}', x: 500, y: 0.66, dy: 132, size: 28, font: 'Nunito', tebalHuruf: 600, warna: '$t', lebar: 900, perlu: ['ringkasUkuran'] },
        { jenis: 'teks', teks: '{kutipan}', x: 500, y: 0.66, dy: 220, size: 24, font: 'Playfair Display', tebalHuruf: 400, miring: true, warna: '$t', lebar: 740, perlu: ['kutipan'] }
      ]
    },
    {
      id: 'islami',
      nama: 'Islami',
      palet: {
        L: { a: '#0F6E56', t: '#04342C', l: '#E1F5EE', g: '#BA7517' },
        P: { a: '#993556', t: '#4B1528', l: '#FBEAF0', g: '#BA7517' },
        N: { a: '#854F0B', t: '#412402', l: '#FAEEDA', g: '#BA7517' }
      },
      elemen: [
        { jenis: 'latar', warna: '$l', warna2: '#FFFFFF' },
        { jenis: 'kotak', x: 500, y: 0.5, w: 930, hTinggi: 0.94, rx: 30, warna: 'rgba(0,0,0,0)', garis: '$g', tebal: 6 },
        { jenis: 'kotak', x: 500, y: 0.5, w: 900, hTinggi: 0.91, rx: 22, warna: 'rgba(0,0,0,0)', garis: '$g', tebal: 2 },
        { jenis: 'stiker', id: 'bulanbintang', x: 500, y: 0.09, size: 110, warnaStiker: '$g' },
        { jenis: 'teks', teks: 'Bismillahirrahmanirrahim', x: 500, y: 0.09, dy: 92, size: 34, font: 'Playfair Display', tebalHuruf: 600, miring: true, warna: '$a', lebar: 800 },
        { jenis: 'teks', teks: 'Alhamdulillah, telah lahir {sebutan} kami', x: 500, y: 0.09, dy: 140, size: 25, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 800 },
        { jenis: 'foto', x: 500, y: 0.445, w: 400, h: 400, bentuk: 'membulat', garis: '$g', tebal: 8 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.68, size: 58, font: 'Playfair Display', tebalHuruf: 700, warna: '$t', lebar: 820, tinggiBaris: 1.05 },
        { jenis: 'teks', teks: '{ringkasWaktu}', x: 500, y: 0.68, dy: 76, size: 26, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 820 },
        { jenis: 'teks', teks: '{ringkasUkuran}', x: 500, y: 0.68, dy: 120, size: 25, font: 'Nunito', tebalHuruf: 600, warna: '$t', lebar: 820, perlu: ['ringkasUkuran'] },
        { jenis: 'teks', teks: '{kutipan}', x: 500, y: 0.68, dy: 190, size: 21, font: 'Playfair Display', tebalHuruf: 400, miring: true, warna: '$t', lebar: 700, perlu: ['kutipan'] },
        { jenis: 'teks', teks: '{orangtua}', x: 500, y: 0.68, dy: 262, size: 22, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 820, perlu: ['orangtua'] }
      ]
    },
    {
      id: 'kartun-hewan',
      nama: 'Kartun Hewan',
      palet: {
        L: { bg: '#E6F1FB', a: '#378ADD', t: '#042C53' },
        P: { bg: '#FBEAF0', a: '#D4537E', t: '#4B1528' },
        N: { bg: '#FAEEDA', a: '#EF9F27', t: '#412402' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '#FFFFFF' },
        { jenis: 'stiker', id: 'balon', x: 130, y: 0.15, size: 170, warnaStiker: '$a', sudut: -10 },
        { jenis: 'stiker', id: 'balon', x: 880, y: 0.13, size: 150, warnaStiker: '#FAC775', sudut: 8 },
        { jenis: 'stiker', id: 'konfeti', x: 820, y: 0.42, size: 120 },
        { jenis: 'teks', teks: 'Halo, dunia!', x: 500, y: 0.08, size: 66, font: 'Fredoka', tebalHuruf: 700, warna: '$a', lebar: 700 },
        { jenis: 'foto', x: 500, y: 0.35, w: 400, h: 400, bentuk: 'bulat', garis: '#FFFFFF', tebal: 16 },
        { jenis: 'kotak', x: 500, y: 0.62, dy: 70, w: 780, h: 270, rx: 44, warna: '#FFFFFF', bayangan: true },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.62, size: 54, font: 'Fredoka', tebalHuruf: 700, warna: '$t', lebar: 720, tinggiBaris: 1.05 },
        { jenis: 'teks', teks: '{ringkasWaktu}', x: 500, y: 0.62, dy: 70, size: 25, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 720 },
        { jenis: 'teks', teks: '{ringkasUkuran}', x: 500, y: 0.62, dy: 112, size: 25, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 720, perlu: ['ringkasUkuran'] },
        { jenis: 'teks', teks: '{orangtua}', x: 500, y: 0.62, dy: 154, size: 22, font: 'Nunito', tebalHuruf: 600, warna: '$t', lebar: 720, perlu: ['orangtua'] },
        { jenis: 'stiker', id: 'beruang', x: 140, y: 0.9, size: 210 },
        { jenis: 'stiker', id: 'kelinci', x: 870, y: 0.9, size: 200 }
      ]
    },
    {
      id: 'polaroid',
      nama: 'Polaroid',
      palet: {
        L: { bg: '#E6F1FB', a: '#185FA5' },
        P: { bg: '#FBEAF0', a: '#993556' },
        N: { bg: '#F1EFE8', a: '#5F5E5A' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg' },
        { jenis: 'stiker', id: 'konfeti', x: 140, y: 0.09, size: 200 },
        { jenis: 'stiker', id: 'konfeti', x: 870, y: 0.9, size: 200, sudut: 90 },
        { jenis: 'teks', teks: 'Halo, dunia!', x: 500, y: 0.07, size: 56, font: 'Pacifico', tebalHuruf: 400, warna: '$a', lebar: 700 },
        { jenis: 'kotak', x: 500, y: 0.44, w: 560, h: 650, warna: '#FFFFFF', sudut: -3, bayangan: true },
        { jenis: 'foto', x: 500, y: 0.44, dy: -45, w: 490, h: 490, bentuk: 'kotak', sudut: -3 },
        { jenis: 'teks', teks: '{panggilanAtauNama}', x: 500, y: 0.44, dy: 268, size: 56, font: 'Caveat', tebalHuruf: 600, warna: '#2C2C2A', lebar: 500, sudut: -3 },
        { jenis: 'teks', teks: '{ringkasWaktu}', x: 500, y: 0.84, size: 27, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 900 },
        { jenis: 'teks', teks: '{ringkasUkuran}', x: 500, y: 0.84, dy: 44, size: 26, font: 'Nunito', tebalHuruf: 600, warna: '#2C2C2A', lebar: 900, perlu: ['ringkasUkuran'] },
        { jenis: 'teks', teks: '{orangtua}', x: 500, y: 0.84, dy: 88, size: 23, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 900, perlu: ['orangtua'] }
      ]
    },
    {
      id: 'minimalis',
      nama: 'Minimalis',
      palet: {
        L: { a: '#185FA5', t: '#2C2C2A' },
        P: { a: '#993556', t: '#2C2C2A' },
        N: { a: '#5F5E5A', t: '#2C2C2A' }
      },
      elemen: [
        { jenis: 'latar', warna: '#FFFFFF' },
        { jenis: 'kotak', x: 500, y: 0.5, w: 940, hTinggi: 0.95, warna: 'rgba(0,0,0,0)', garis: '#D3D1C7', tebal: 2 },
        { jenis: 'teks', teks: 'Lahir', x: 500, y: 0.09, size: 22, font: 'Nunito', tebalHuruf: 700, warna: '$a', kapital: true, jarakHuruf: 600, lebar: 600 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.09, dy: 72, size: 60, font: 'Playfair Display', tebalHuruf: 700, warna: '$t', lebar: 880, tinggiBaris: 1.05 },
        { jenis: 'foto', x: 500, y: 0.46, w: 720, h: 470, bentuk: 'kotak' },
        { jenis: 'kotak', x: 500, y: 0.79, dy: -48, w: 820, h: 2, warna: '#D3D1C7' },
        { jenis: 'teks', teks: 'Tanggal', x: 185, y: 0.79, dy: -14, size: 17, font: 'Nunito', tebalHuruf: 700, warna: '#888780', kapital: true, jarakHuruf: 200, lebar: 220 },
        { jenis: 'teks', teks: '{tglPendek}', x: 185, y: 0.79, dy: 24, size: 28, font: 'Playfair Display', tebalHuruf: 600, warna: '$t', lebar: 220 },
        { jenis: 'teks', teks: 'Jam', x: 395, y: 0.79, dy: -14, size: 17, font: 'Nunito', tebalHuruf: 700, warna: '#888780', kapital: true, jarakHuruf: 200, lebar: 200, perlu: ['jamPendek'] },
        { jenis: 'teks', teks: '{jamPendek}', x: 395, y: 0.79, dy: 24, size: 28, font: 'Playfair Display', tebalHuruf: 600, warna: '$t', lebar: 200, perlu: ['jamPendek'] },
        { jenis: 'teks', teks: 'Berat', x: 605, y: 0.79, dy: -14, size: 17, font: 'Nunito', tebalHuruf: 700, warna: '#888780', kapital: true, jarakHuruf: 200, lebar: 200, perlu: ['berat'] },
        { jenis: 'teks', teks: '{berat}', x: 605, y: 0.79, dy: 24, size: 28, font: 'Playfair Display', tebalHuruf: 600, warna: '$t', lebar: 200, perlu: ['berat'] },
        { jenis: 'teks', teks: 'Panjang', x: 815, y: 0.79, dy: -14, size: 17, font: 'Nunito', tebalHuruf: 700, warna: '#888780', kapital: true, jarakHuruf: 200, lebar: 200, perlu: ['panjang'] },
        { jenis: 'teks', teks: '{panjang}', x: 815, y: 0.79, dy: 24, size: 28, font: 'Playfair Display', tebalHuruf: 600, warna: '$t', lebar: 200, perlu: ['panjang'] },
        { jenis: 'kotak', x: 500, y: 0.79, dy: 72, w: 820, h: 2, warna: '#D3D1C7' },
        { jenis: 'teks', teks: '{orangtua}', x: 500, y: 0.79, dy: 118, size: 22, font: 'Nunito', tebalHuruf: 600, warna: '#5F5E5A', lebar: 880, perlu: ['orangtua'] }
      ]
    },
    {
      id: 'pelangi',
      nama: 'Pelangi Ceria',
      palet: {
        L: { a: '#378ADD', t: '#042C53' },
        P: { a: '#D4537E', t: '#4B1528' },
        N: { a: '#1D9E75', t: '#04342C' }
      },
      elemen: [
        { jenis: 'latar', warna: '#FFFFFF', warna2: '#FAEEDA' },
        { jenis: 'stiker', id: 'pelangi', x: 500, y: 0.2, size: 660 },
        { jenis: 'stiker', id: 'awan', x: 200, y: 0.28, size: 170 },
        { jenis: 'stiker', id: 'awan', x: 800, y: 0.28, size: 170 },
        { jenis: 'stiker', id: 'konfeti', x: 110, y: 0.6, size: 130 },
        { jenis: 'stiker', id: 'konfeti', x: 900, y: 0.62, size: 130, sudut: 45 },
        { jenis: 'foto', x: 500, y: 0.36, w: 380, h: 380, bentuk: 'bulat', garis: '#FFFFFF', tebal: 14 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.63, size: 68, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', lebar: 900, tinggiBaris: 1 },
        { jenis: 'teks', teks: '{ringkasWaktu}', x: 500, y: 0.63, dy: 78, size: 28, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 900 },
        { jenis: 'kotak', x: 500, y: 0.63, dy: 160, w: 560, h: 84, rx: 42, warna: '$a', perlu: ['ringkasUkuran'] },
        { jenis: 'teks', teks: '{ringkasUkuran}', x: 500, y: 0.63, dy: 160, size: 32, font: 'Baloo 2', tebalHuruf: 700, warna: '#FFFFFF', lebar: 540, perlu: ['ringkasUkuran'] },
        { jenis: 'teks', teks: '{orangtua}', x: 500, y: 0.63, dy: 246, size: 25, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 900, perlu: ['orangtua'] }
      ]
    }
  ]
};

  },
  function () {

const apiKey = "";
document.addEventListener('DOMContentLoaded', () => {
  const KS = window.KS = window.KS || {};
  KS.version = '0.2.0';
  const $ = id => document.getElementById(id);

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
    $('ks-version').textContent = KS.version;
  })();

  (function () {
    const P = {
      rumah: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
      bayi: '<circle cx="12" cy="9" r="5"/><path d="M10 8.5h.01M14 8.5h.01"/><path d="M10.5 11c.8.6 2.2.6 3 0"/><path d="M12 4c0-1 .6-2 2-2"/><path d="M7 21c0-3 2.2-5 5-5s5 2 5 5"/>',
      folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
      anak: '<circle cx="12" cy="7" r="4"/><path d="M5 21v-1a7 7 0 0 1 14 0v1"/>',
      grid: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
      kue: '<path d="M4 20h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/><path d="M4 15c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0"/><path d="M12 11V8"/><path d="M12 5.5c.8-.8.8-1.7 0-3-.8 1.3-.8 2.2 0 3z"/>',
      kilau: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z"/>',
      bintang: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
      x: '<path d="M6 6l12 12M18 6L6 18"/>',
      menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
      panah: '<path d="M5 12h14M13 6l6 6-6 6"/>',
      kiri: '<path d="M15 6l-6 6 6 6"/>',
      foto: '<rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>',
      teks: '<path d="M5 6V4h14v2"/><path d="M12 4v16"/><path d="M9 20h6"/>',
      senyum: '<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01"/><path d="M8.5 14.5c1.8 2 5.2 2 7 0"/>',
      palet: '<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.7-1 1.1-2-.6-1-.1-2.2 1.2-2.2H17a4 4 0 0 0 4-4C21 7.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/>',
      lapisan: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
      undo: '<path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
      redo: '<path d="M15 14l5-5-5-5"/><path d="M20 9H9a5 5 0 0 0 0 10h3"/>',
      unduh: '<path d="M12 4v11"/><path d="M7 10l5 5 5-5"/><path d="M5 20h14"/>',
      sampah: '<path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13"/><path d="M9 7V4h6v3"/>',
      salin: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
      naik: '<path d="M12 19V5M6 11l6-6 6 6"/>',
      turun: '<path d="M12 5v14M6 13l6 6 6-6"/>',
      gembok: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
      kiriRata: '<path d="M4 6h16M4 10h10M4 14h16M4 18h10"/>',
      tengahRata: '<path d="M4 6h16M7 10h10M4 14h16M7 18h10"/>',
      kananRata: '<path d="M4 6h16M10 10h10M4 14h16M10 18h10"/>',
      bagikan: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
      file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
      plus: '<path d="M12 5v14M5 12h14"/>'
    };
    function svg(nama) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (P[nama] || '') + '</svg>'; }
    function isi(root) {
      (root || document).querySelectorAll('[data-ikon]').forEach(el => { el.innerHTML = svg(el.dataset.ikon); });
      (root || document).querySelectorAll('[data-ikon-isi]').forEach(el => { el.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + (P[el.dataset.ikonIsi] || '') + '</svg>'; });
    }
    KS.ikon = { svg, isi };
    isi();
  })();

  (function () {
    const t = KS.i18n.t;
    const box = $('ks-toast');
    let timer = null;
    function toast(pesan, jenis) {
      box.textContent = pesan;
      box.className = 'ks-toast tampil' + (jenis === 'galat' ? ' galat' : '');
      clearTimeout(timer);
      timer = setTimeout(() => { box.className = 'ks-toast'; }, 3200);
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
    function h(tag, props, ...anak) {
      const el = document.createElement(tag);
      Object.entries(props || {}).forEach(([k, v]) => {
        if (v == null || v === false) return;
        if (k === 'kelas') el.className = v;
        else if (k === 'teks') el.textContent = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
        else if (k === 'gaya') el.setAttribute('style', v);
        else el.setAttribute(k, v === true ? '' : v);
      });
      anak.flat().forEach(c => { if (c != null) el.append(c); });
      return el;
    }
    function modal(isiEl) {
      const latar = h('div', { kelas: 'modal' });
      const kotak = h('div', { kelas: 'modal-isi', role: 'dialog', 'aria-modal': 'true' }, isiEl);
      latar.append(kotak);
      const tutup = () => latar.remove();
      latar.addEventListener('click', e => { if (e.target === latar) tutup(); });
      document.body.append(latar);
      return tutup;
    }
    function bacaFoto(file) {
      return new Promise((ok, no) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
          const s = Math.min(1, 1600 / Math.max(img.naturalWidth, img.naturalHeight));
          const c = document.createElement('canvas');
          c.width = Math.max(1, Math.round(img.naturalWidth * s));
          c.height = Math.max(1, Math.round(img.naturalHeight * s));
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          URL.revokeObjectURL(url);
          ok(c.toDataURL('image/jpeg', 0.9));
        };
        img.onerror = () => { URL.revokeObjectURL(url); no(new Error('foto tidak terbaca')); };
        img.src = url;
      });
    }
    KS.ui = { toast, tombolHapus, h, modal, bacaFoto };
  })();

  (function () {
    const body = document.body;
    const buttons = [...document.querySelectorAll('.main-tab-btn[data-tab]')];
    const listeners = [];
    function switchTab(tab) {
      document.querySelectorAll('.main-content-panel').forEach(p => p.classList.toggle('hidden', p.id !== 'content-' + tab));
      buttons.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
      body.classList.remove('nav-open');
      body.classList.toggle('mode-editor', tab === 'editor');
      if (tab !== 'editor') window.scrollTo(0, 0);
      listeners.forEach(fn => fn(tab));
    }
    buttons.forEach(b => b.addEventListener('click', () => switchTab(b.dataset.tab)));
    $('nav-show').addEventListener('click', () => body.classList.add('nav-open'));
    $('nav-hide').addEventListener('click', () => body.classList.remove('nav-open'));
    $('sidebar-backdrop').addEventListener('click', () => body.classList.remove('nav-open'));
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
    const STIKER = window.KSStiker || {};
    const HATI = 'M50 88 C20 66 6 50 6 32 C6 18 17 8 30 8 C39 8 46 13 50 20 C54 13 61 8 70 8 C83 8 94 18 94 32 C94 50 80 66 50 88 Z';
    const PROPS = ['ksKind', 'ksSlot', 'ksStiker', 'ksWarna', 'ksKunci', 'selectable', 'evented', 'hasControls', 'lockMovementX', 'lockMovementY', 'lockScalingX', 'lockScalingY', 'lockRotation'];
    let fontSiap = null;
    function siapFont() {
      if (!fontSiap) {
        const muat = [];
        window.KSPure.FONT_KANVAS.forEach(f => {
          muat.push(document.fonts.load('400 40px "' + f + '"'));
          muat.push(document.fonts.load('700 40px "' + f + '"'));
        });
        muat.push(document.fonts.load('italic 400 40px "Playfair Display"'));
        fontSiap = Promise.race([Promise.all(muat).catch(() => null), new Promise(r => setTimeout(r, 6000))])
          .then(() => { if (window.fabric && fabric.util.clearFabricFontCache) fabric.util.clearFabricFontCache(); });
      }
      return fontSiap;
    }
    function svgStiker(id, warna) {
      const s = STIKER[id];
      return s ? s.svg.replace(/currentColor/g, warna || s.warna) : null;
    }
    function muatStiker(id, warna) {
      return new Promise(ok => {
        const svg = svgStiker(id, warna);
        if (!svg) { ok(null); return; }
        fabric.loadSVGFromString(svg, (objs, opsi) => ok(objs && objs.length ? fabric.util.groupSVGElements(objs, opsi) : null));
      });
    }
    function muatGambar(src) {
      return new Promise(ok => { fabric.Image.fromURL(src, img => ok(img && img.width ? img : null)); });
    }
    function bentukPath(bentuk, w, h, opsi) {
      const dasar = Object.assign({ originX: 'center', originY: 'center' }, opsi || {});
      if (bentuk === 'bulat') return new fabric.Ellipse(Object.assign({ rx: w / 2, ry: h / 2 }, dasar));
      if (bentuk === 'hati') return new fabric.Path(HATI, Object.assign({ scaleX: w / 88, scaleY: h / 80 }, dasar));
      if (bentuk === 'lengkung') {
        const r = w / 2;
        return new fabric.Path('M ' + (-r) + ' ' + (h / 2) + ' L ' + (-r) + ' ' + (-h / 2 + r) + ' A ' + r + ' ' + r + ' 0 0 1 ' + r + ' ' + (-h / 2 + r) + ' L ' + r + ' ' + (h / 2) + ' Z', dasar);
      }
      const rx = bentuk === 'membulat' ? Math.min(w, h) * 0.12 : 0;
      return new fabric.Rect(Object.assign({ width: w, height: h, rx: rx, ry: rx }, dasar));
    }
    async function slotFoto(o) {
      const slot = { bentuk: o.bentuk || 'kotak', w: o.w, h: o.h, garis: o.garis || null, tebal: o.tebal || 0, kosong: true };
      const isi = [];
      const img = o.src ? await muatGambar(o.src) : null;
      if (img) {
        const iw = img.width;
        const ih = img.height;
        const ar = slot.w / slot.h;
        let cw = iw;
        let ch = iw / ar;
        if (ch > ih) { ch = ih; cw = ih * ar; }
        img.set({ cropX: (iw - cw) / 2, cropY: (ih - ch) / 2, width: cw, height: ch, originX: 'center', originY: 'center', left: 0, top: 0, scaleX: slot.w / cw, scaleY: slot.h / ch });
        img.clipPath = bentukPath(slot.bentuk, cw, ch);
        isi.push(img);
        slot.kosong = false;
      } else {
        isi.push(bentukPath(slot.bentuk, slot.w, slot.h, { left: 0, top: 0, fill: 'rgba(241,239,232,0.92)', stroke: '#B4B2A9', strokeWidth: Math.max(2, slot.w * 0.008), strokeDashArray: [slot.w * 0.03, slot.w * 0.02], ksKind: 'ph' }));
        isi.push(new fabric.Textbox(KS.i18n.t('editor.tambah-foto'), { originX: 'center', originY: 'center', left: 0, top: 0, width: slot.w * 0.7, fontSize: Math.max(18, slot.w * 0.06), fontFamily: 'Nunito', fontWeight: '700', fill: '#888780', textAlign: 'center', ksKind: 'ph' }));
      }
      if (slot.garis && slot.tebal) isi.push(bentukPath(slot.bentuk, slot.w, slot.h, { left: 0, top: 0, fill: '', stroke: slot.garis, strokeWidth: slot.tebal }));
      return new fabric.Group(isi, { left: o.x, top: o.y, originX: 'center', originY: 'center', angle: o.sudut || 0, ksKind: 'foto', ksSlot: slot, subTargetCheck: false });
    }
    function bayangan() { return new fabric.Shadow({ color: 'rgba(38,33,92,0.18)', blur: 30, offsetX: 0, offsetY: 12 }); }
    function aturLatar(r, warna, warna2) {
      if (warna2) {
        r.set('fill', new fabric.Gradient({ type: 'linear', gradientUnits: 'percentage', coords: { x1: 0, y1: 0, x2: 0, y2: 1 }, colorStops: [{ offset: 0, color: warna }, { offset: 1, color: warna2 }] }));
      } else {
        r.set('fill', warna);
      }
    }
    function latar(o, uk) {
      const r = new fabric.Rect({ left: 0, top: 0, width: uk.w, height: uk.h, selectable: false, evented: false, hoverCursor: 'default', ksKind: 'latar' });
      aturLatar(r, o.warna, o.warna2);
      return r;
    }
    async function buatObjek(o, uk) {
      const pusat = { left: o.x, top: o.y, originX: 'center', originY: 'center', angle: o.sudut || 0, opacity: o.opasitas == null ? 1 : o.opasitas };
      if (o.jenis === 'latar') return latar(o, uk);
      if (o.jenis === 'kotak') return new fabric.Rect(Object.assign(pusat, { width: o.w, height: o.h, rx: o.rx || 0, ry: o.rx || 0, fill: o.warna, stroke: o.garis || null, strokeWidth: o.tebal || 0, shadow: o.bayangan ? bayangan() : null, ksKind: 'bentuk' }));
      if (o.jenis === 'bulat') return new fabric.Circle(Object.assign(pusat, { radius: o.r, fill: o.warna, stroke: o.garis || null, strokeWidth: o.tebal || 0, ksKind: 'bentuk' }));
      if (o.jenis === 'teks') {
        return new fabric.Textbox(o.teks, Object.assign(pusat, { width: o.lebar || o.size * 10, fontSize: o.size, fontFamily: o.font || 'Nunito', fontWeight: String(o.tebalHuruf || 700), fontStyle: o.miring ? 'italic' : 'normal', fill: o.warna || '#26215C', textAlign: o.rata || 'center', charSpacing: o.jarakHuruf || 0, lineHeight: o.tinggiBaris || 1.16, ksKind: 'teks' }));
      }
      if (o.jenis === 'stiker') {
        const g = await muatStiker(o.id, o.warnaStiker);
        if (!g) return null;
        g.scaleToWidth(o.size);
        g.set(Object.assign(pusat, { ksKind: 'stiker', ksStiker: o.id, ksWarna: o.warnaStiker || null }));
        return g;
      }
      if (o.jenis === 'foto') return slotFoto(o);
      return null;
    }
    async function objekDari(hasil) {
      await siapFont();
      const list = [];
      for (const o of hasil.items) {
        const ob = await buatObjek(o, hasil);
        if (ob) list.push(ob);
      }
      return list;
    }
    async function gambarMini(hasil, lebar) {
      const objek = await objekDari(hasil);
      const el = document.createElement('canvas');
      const s = lebar / hasil.w;
      const c = new fabric.StaticCanvas(el, { width: Math.round(hasil.w * s), height: Math.round(hasil.h * s), enableRetinaScaling: false, renderOnAddRemove: false });
      c.setZoom(s);
      objek.forEach(o => c.add(o));
      c.renderAll();
      const url = c.toDataURL({ format: 'jpeg', quality: 0.85, enableRetinaScaling: false });
      c.dispose();
      return url;
    }
    KS.render = { siapFont, objekDari, buatObjek, slotFoto, bentukPath, aturLatar, muatStiker, svgStiker, gambarMini, PROPS };
  })();

  (function () {
    const t = KS.i18n.t;
    const P = window.KSPure;
    const R = KS.render;
    const h = KS.ui.h;
    const stage = $('ed-stage');
    const panel = $('ed-panel');
    const panelIsi = $('ed-panel-isi');
    const panelJudul = $('ed-panel-judul');
    const judul = $('ed-judul');
    const file = $('ed-file');
    const btnUndo = $('ed-undo');
    const btnRedo = $('ed-redo');
    const WARNA = ['#26215C', '#FFFFFF', '#2C2C2A', '#534AB7', '#7F77DD', '#CECBF6', '#D4537E', '#ED93B1', '#E24B4A', '#EF9F27', '#FAC775', '#1D9E75', '#9FE1CB', '#378ADD', '#85B7EB', '#BA7517'];
    const GRADASI = [['#FBEAF0', '#FFFFFF'], ['#E6F1FB', '#FFFFFF'], ['#E1F5EE', '#FFFFFF'], ['#FAEEDA', '#FFFFFF'], ['#EEEDFE', '#FBEAF0'], ['#26215C', '#7F77DD'], ['#042C53', '#378ADD'], ['#FAC775', '#ED93B1']];
    const BENTUK = ['kotak', 'membulat', 'bulat', 'hati', 'lengkung'];
    const KUNCI_BENTUK = { kotak: 'alat.bentuk-kotak', membulat: 'alat.bentuk-membulat', bulat: 'alat.bentuk-bulat', hati: 'alat.bentuk-hati', lengkung: 'alat.bentuk-lengkung' };
    const KUNCI_ALAT = { teks: 'alat.teks', foto: 'alat.foto', stiker: 'alat.stiker', latar: 'alat.latar', lapisan: 'alat.lapisan' };
    let canvas = null;
    let proyek = null;
    let W = 1080;
    let H = 1080;
    let riwayat = [];
    let posisi = -1;
    let memulihkan = false;
    let timerRiwayat = null;
    let timerSimpan = null;
    let alat = null;
    let targetFoto = null;

    function pastikanKanvas() {
      if (canvas) return;
      fabric.Object.prototype.set({ transparentCorners: false, cornerColor: '#FFFFFF', cornerStrokeColor: '#534AB7', borderColor: '#534AB7', cornerSize: 16, cornerStyle: 'circle', padding: 6, borderScaleFactor: 2 });
      canvas = new fabric.Canvas('ed-canvas', { preserveObjectStacking: true, selectionColor: 'rgba(83,74,183,0.08)', selectionBorderColor: '#534AB7', selectionLineWidth: 2 });
      ['object:modified', 'object:added', 'object:removed', 'text:changed'].forEach(ev => canvas.on(ev, () => catat()));
      canvas.on('selection:created', tampilkanPanel);
      canvas.on('selection:updated', tampilkanPanel);
      canvas.on('selection:cleared', tampilkanPanel);
      canvas.on('mouse:dblclick', e => { if (e.target && e.target.ksKind === 'foto') pilihFoto(e.target); });
      new ResizeObserver(pas).observe(stage);
    }
    function pas() {
      if (!canvas || !stage.clientWidth) return;
      const pad = window.innerWidth < 768 ? 12 : 28;
      const s = Math.min((stage.clientWidth - pad * 2) / W, (stage.clientHeight - pad * 2) / H);
      if (!(s > 0)) return;
      canvas.setDimensions({ width: Math.round(W * s), height: Math.round(H * s) });
      canvas.setZoom(s);
      canvas.requestRenderAll();
    }
    function kunciLatar() {
      canvas.getObjects().filter(o => o.ksKind === 'latar').forEach(o => { o.set({ selectable: false, evented: false }); canvas.sendToBack(o); });
    }
    function snapshot() { return JSON.stringify(canvas.toJSON(R.PROPS)); }
    function perbaruiTombol() {
      btnUndo.disabled = posisi <= 0;
      btnRedo.disabled = posisi >= riwayat.length - 1;
    }
    function catat(langsung) {
      if (memulihkan || !canvas) return;
      clearTimeout(timerRiwayat);
      const kerja = () => {
        const s = snapshot();
        if (riwayat[posisi] === s) return;
        riwayat = riwayat.slice(0, posisi + 1);
        riwayat.push(s);
        if (riwayat.length > 50) riwayat.shift();
        posisi = riwayat.length - 1;
        perbaruiTombol();
        if (!langsung) jadwalSimpan();
      };
      if (langsung) kerja(); else timerRiwayat = setTimeout(kerja, 250);
    }
    function pulihkan(i) {
      memulihkan = true;
      canvas.loadFromJSON(riwayat[i], () => {
        kunciLatar();
        canvas.renderAll();
        memulihkan = false;
        posisi = i;
        perbaruiTombol();
        jadwalSimpan();
        tampilkanPanel();
      });
    }
    function jadwalSimpan() {
      clearTimeout(timerSimpan);
      timerSimpan = setTimeout(simpanSekarang, 1200);
    }
    function gambar(opsi) {
      const o = Object.assign({ format: 'png', lebar: 360, kualitas: 0.92, tanpaPlaceholder: false }, opsi);
      const tersembunyi = [];
      if (o.tanpaPlaceholder) {
        canvas.getObjects().forEach(ob => { if (ob.ksKind === 'foto' && ob.ksSlot && ob.ksSlot.kosong) { ob.visible = false; tersembunyi.push(ob); } });
      }
      const url = canvas.toDataURL({ format: o.format, quality: o.kualitas, multiplier: o.lebar / canvas.getWidth(), enableRetinaScaling: false });
      tersembunyi.forEach(ob => { ob.visible = true; });
      return url;
    }
    function simpanSekarang() {
      if (!proyek || !canvas) return Promise.resolve();
      clearTimeout(timerSimpan);
      proyek.nama = judul.value.trim() || proyek.nama;
      proyek.fabric = canvas.toJSON(R.PROPS);
      proyek.diubah = Date.now();
      proyek.thumbnail = gambar({ format: 'jpeg', lebar: 360, kualitas: 0.75 });
      return KS.store.saveProject(proyek).catch(e => {
        console.error('[kidsstudio] simpan proyek:', e);
        KS.ui.toast(t('galat.penyimpanan'), 'galat');
      });
    }
    async function buka(p, objekAwal) {
      if (typeof fabric === 'undefined') { KS.ui.toast(t('galat.editor'), 'galat'); return; }
      proyek = p;
      const uk = P.UKURAN[p.ukuran] || P.UKURAN['ig-post'];
      W = uk.w;
      H = uk.h;
      KS.nav.switchTab('editor');
      pastikanKanvas();
      memulihkan = true;
      canvas.discardActiveObject();
      canvas.clear();
      riwayat = [];
      posisi = -1;
      judul.value = p.nama || '';
      if (objekAwal) {
        objekAwal.forEach(o => canvas.add(o));
      } else if (p.fabric) {
        await R.siapFont();
        await new Promise(ok => canvas.loadFromJSON(p.fabric, ok));
      }
      memulihkan = false;
      kunciLatar();
      pas();
      catat(true);
      alat = null;
      tandaiAlat();
      tampilkanPanel();
      if (objekAwal) await simpanSekarang();
    }
    async function bukaProyek(id) {
      const p = await KS.store.loadProject(id);
      if (p) await buka(p);
    }
    function aktif() { return canvas ? canvas.getActiveObject() : null; }
    function tandaiAlat() {
      document.querySelectorAll('.ed-tool').forEach(b => b.classList.toggle('aktif', b.dataset.alat === alat));
    }
    function bukaPanel() { panel.classList.remove('tutup'); requestAnimationFrame(pas); }
    function tutupPanel() { panel.classList.add('tutup'); alat = null; tandaiAlat(); requestAnimationFrame(pas); }
    function label(k) { return h('div', { kelas: 'ed-label', teks: t(k) }); }
    function swatches(nilai, onPilih) {
      return h('div', { kelas: 'swatch-grid' }, WARNA.map(w => h('button', { type: 'button', kelas: 'swatch' + (String(nilai).toUpperCase() === w ? ' aktif' : ''), gaya: 'background:' + w, 'aria-label': w, onclick: () => onPilih(w) })));
    }
    function tombolAksi(ikon, k, fn, bahaya) {
      return h('button', { type: 'button', kelas: 'aksi' + (bahaya ? ' bahaya' : ''), onclick: fn }, h('span', { kelas: 'ico', html: KS.ikon.svg(ikon) }), h('span', { teks: t(k) }));
    }
    function panelUmum(o) {
      const terkunci = !!o.ksKunci;
      return [
        h('div', { kelas: 'aksi-grid' },
          tombolAksi('naik', 'alat.depan', () => { canvas.bringForward(o); catat(); canvas.requestRenderAll(); }),
          tombolAksi('turun', 'alat.belakang', () => { canvas.sendBackwards(o); kunciLatar(); catat(); canvas.requestRenderAll(); }),
          tombolAksi('salin', 'alat.duplikat', duplikat),
          tombolAksi('gembok', terkunci ? 'alat.buka-kunci' : 'alat.kunci', () => kunci(o, !terkunci)),
          tombolAksi('sampah', 'alat.hapus', hapus, true)
        ),
        label('alat.transparansi'),
        h('input', { type: 'range', kelas: 'ed-range', min: '20', max: '100', value: String(Math.round((o.opacity == null ? 1 : o.opacity) * 100)), oninput: e => { o.set('opacity', e.target.value / 100); canvas.requestRenderAll(); }, onchange: () => catat() })
      ];
    }
    function kunci(o, ya) {
      o.set({ ksKunci: ya, lockMovementX: ya, lockMovementY: ya, lockScalingX: ya, lockScalingY: ya, lockRotation: ya, hasControls: !ya });
      canvas.requestRenderAll();
      catat();
      tampilkanPanel();
    }
    function duplikat() {
      const o = aktif();
      if (!o) return;
      o.clone(c => {
        c.set({ left: o.left + 30, top: o.top + 30 });
        canvas.add(c);
        canvas.setActiveObject(c);
        canvas.requestRenderAll();
      }, R.PROPS);
    }
    function hapus() {
      const o = aktif();
      if (!o) return;
      if (o.type === 'activeSelection') o.getObjects().forEach(x => canvas.remove(x)); else canvas.remove(o);
      canvas.discardActiveObject();
      canvas.requestRenderAll();
    }
    function panelTeks(o) {
      const isi = h('textarea', { kelas: 'ks-input', rows: '3', oninput: e => { o.set('text', e.target.value); canvas.requestRenderAll(); }, onchange: () => catat() });
      isi.value = o.text;
      const fonts = h('div', { kelas: 'font-list' }, P.FONT_KANVAS.map(f => h('button', { type: 'button', kelas: 'font-btn' + (o.fontFamily === f ? ' aktif' : ''), gaya: 'font-family:\'' + f + '\'', teks: f, onclick: () => { o.set('fontFamily', f); canvas.requestRenderAll(); catat(); tampilkanPanel(); } })));
      const ukuran = h('input', { type: 'range', kelas: 'ed-range', min: '12', max: '220', value: String(Math.round(o.fontSize)), oninput: e => { o.set('fontSize', +e.target.value); canvas.requestRenderAll(); }, onchange: () => catat() });
      const rata = h('div', { kelas: 'ks-row' }, [['left', 'kiriRata'], ['center', 'tengahRata'], ['right', 'kananRata']].map(([v, ik]) => h('button', { type: 'button', kelas: 'ed-ikon', gaya: o.textAlign === v ? 'background:var(--p);color:#fff' : '', 'aria-label': v, html: KS.ikon.svg(ik), onclick: () => { o.set('textAlign', v); canvas.requestRenderAll(); catat(); tampilkanPanel(); } })));
      return [label('alat.isi-teks'), isi, label('alat.warna'), swatches(o.fill, w => { o.set('fill', w); canvas.requestRenderAll(); catat(); tampilkanPanel(); }), label('alat.ukuran'), ukuran, label('alat.rata'), rata, label('alat.font'), fonts];
    }
    function panelFoto(o) {
      const bentuk = h('div', { kelas: 'chips' }, BENTUK.map(b => h('button', { type: 'button', kelas: 'chip' + (o.ksSlot.bentuk === b ? ' aktif' : ''), teks: t(KUNCI_BENTUK[b]), onclick: () => gantiSlot(o, { bentuk: b }) })));
      return [h('button', { type: 'button', kelas: 'ks-btn ks-btn-lebar', onclick: () => pilihFoto(o) }, h('span', { kelas: 'ico', html: KS.ikon.svg('foto') }), h('span', { teks: t('alat.ganti-foto') })), label('alat.bentuk'), bentuk];
    }
    function panelStiker(o) {
      return [label('alat.warna'), swatches(o.ksWarna || '', w => gantiStiker(o, w))];
    }
    function panelBentuk(o) {
      return [label('alat.warna'), swatches(typeof o.fill === 'string' ? o.fill : '', w => { o.set('fill', w); canvas.requestRenderAll(); catat(); tampilkanPanel(); })];
    }
    function panelAlat() {
      if (alat === 'teks') {
        return [
          h('button', { type: 'button', kelas: 'ks-btn ks-btn-lebar', onclick: () => tambahTeks(true) }, h('span', { kelas: 'ico', html: KS.ikon.svg('plus') }), h('span', { teks: t('alat.tambah-judul') })),
          h('div', { gaya: 'height:10px' }),
          h('button', { type: 'button', kelas: 'ks-btn ks-btn-sekunder ks-btn-lebar', onclick: () => tambahTeks(false) }, h('span', { kelas: 'ico', html: KS.ikon.svg('plus') }), h('span', { teks: t('alat.tambah-teks') }))
        ];
      }
      if (alat === 'foto') {
        return [h('button', { type: 'button', kelas: 'ks-btn ks-btn-lebar', onclick: () => pilihFoto(null) }, h('span', { kelas: 'ico', html: KS.ikon.svg('plus') }), h('span', { teks: t('alat.tambah-foto') }))];
      }
      if (alat === 'stiker') {
        return [h('div', { kelas: 'stiker-grid' }, Object.keys(window.KSStiker).map(id => h('button', { type: 'button', kelas: 'stiker-btn', title: window.KSStiker[id].nama, 'aria-label': window.KSStiker[id].nama, html: R.svgStiker(id), onclick: () => tambahStiker(id) })))];
      }
      if (alat === 'latar') {
        const bg = canvas.getObjects().find(o => o.ksKind === 'latar');
        const atur = (a, b) => {
          if (bg) { R.aturLatar(bg, a, b); canvas.requestRenderAll(); catat(); }
        };
        return [
          label('alat.latar-polos'), swatches(bg && typeof bg.fill === 'string' ? bg.fill : '', w => atur(w)),
          label('alat.latar-gradasi'), h('div', { kelas: 'swatch-grid' }, GRADASI.map(([a, b]) => h('button', { type: 'button', kelas: 'swatch', gaya: 'background:linear-gradient(' + a + ',' + b + ')', 'aria-label': a + ' ' + b, onclick: () => atur(a, b) })))
        ];
      }
      if (alat === 'lapisan') {
        const daftar = canvas.getObjects().filter(o => o.ksKind !== 'latar').slice().reverse();
        return [h('div', { kelas: 'font-list' }, daftar.map(o => h('button', { type: 'button', kelas: 'font-btn', gaya: 'font-size:14px;font-weight:700', teks: namaObjek(o), onclick: () => { canvas.setActiveObject(o); canvas.requestRenderAll(); tampilkanPanel(); } })))];
      }
      return [h('p', { kelas: 'tekan-kosong', teks: t('editor.pilih-objek') })];
    }
    function namaObjek(o) {
      if (o.ksKind === 'teks') return 'Aa  ' + String(o.text || '').slice(0, 28);
      if (o.ksKind === 'foto') return t('alat.foto');
      if (o.ksKind === 'stiker') return t('alat.stiker') + ': ' + ((window.KSStiker[o.ksStiker] || {}).nama || '');
      return o.type;
    }
    function tampilkanPanel() {
      if (!canvas) return;
      const o = aktif();
      panelIsi.innerHTML = '';
      let isi;
      if (o && o.type !== 'activeSelection') {
        const k = o.ksKind;
        panelJudul.textContent = namaObjek(o).replace(/^Aa {2}/, '') || t('alat.lapisan');
        if (k === 'teks') { panelJudul.textContent = t('alat.teks'); isi = panelTeks(o); }
        else if (k === 'foto') { panelJudul.textContent = t('alat.foto'); isi = panelFoto(o); }
        else if (k === 'stiker') { panelJudul.textContent = t('alat.stiker'); isi = panelStiker(o); }
        else isi = panelBentuk(o);
        isi = isi.concat([h('div', { gaya: 'height:14px' })], panelUmum(o));
        bukaPanel();
      } else if (o) {
        panelJudul.textContent = t('alat.lapisan');
        isi = [h('div', { kelas: 'aksi-grid' }, tombolAksi('sampah', 'alat.hapus', hapus, true))];
        bukaPanel();
      } else {
        panelJudul.textContent = t(KUNCI_ALAT[alat] || 'alat.lapisan');
        isi = panelAlat();
        if (!alat && window.innerWidth < 768) { panel.classList.add('tutup'); requestAnimationFrame(pas); }
      }
      isi.forEach(el => panelIsi.append(el));
    }
    function tengah(o) {
      o.set({ left: W / 2, top: H / 2, originX: 'center', originY: 'center' });
      canvas.add(o);
      canvas.setActiveObject(o);
      canvas.requestRenderAll();
    }
    function tambahTeks(besar) {
      tengah(new fabric.Textbox(t(besar ? 'editor.judul-baru' : 'editor.teks-baru'), { width: W * 0.8, fontSize: besar ? 84 : 40, fontFamily: besar ? 'Baloo 2' : 'Nunito', fontWeight: besar ? '800' : '700', fill: '#26215C', textAlign: 'center', ksKind: 'teks' }));
    }
    async function tambahStiker(id) {
      const g = await R.muatStiker(id);
      if (!g) return;
      g.scaleToWidth(W * 0.22);
      g.set({ ksKind: 'stiker', ksStiker: id, ksWarna: null });
      tengah(g);
    }
    async function gantiStiker(o, warna) {
      const g = await R.muatStiker(o.ksStiker, warna);
      if (!g) return;
      g.set({ scaleX: o.getScaledWidth() / g.width, scaleY: o.getScaledHeight() / g.height, left: o.left, top: o.top, originX: o.originX, originY: o.originY, angle: o.angle, opacity: o.opacity, ksKind: 'stiker', ksStiker: o.ksStiker, ksWarna: warna });
      const idx = canvas.getObjects().indexOf(o);
      canvas.remove(o);
      canvas.insertAt(g, idx);
      canvas.setActiveObject(g);
      canvas.requestRenderAll();
      catat();
      tampilkanPanel();
    }
    async function gantiSlot(g, ubah) {
      const slot = Object.assign({}, g.ksSlot, ubah.bentuk ? { bentuk: ubah.bentuk } : {});
      const lama = g.getObjects().find(o => o.type === 'image');
      const src = ubah.src || (lama ? lama.getSrc() : null);
      const baru = await R.slotFoto({ x: g.left, y: g.top, w: slot.w, h: slot.h, bentuk: slot.bentuk, garis: slot.garis, tebal: slot.tebal, sudut: g.angle, src: src });
      baru.set({ scaleX: g.scaleX, scaleY: g.scaleY, opacity: g.opacity });
      const idx = canvas.getObjects().indexOf(g);
      if (idx >= 0) canvas.remove(g);
      canvas.insertAt(baru, idx >= 0 ? idx : canvas.getObjects().length);
      canvas.setActiveObject(baru);
      canvas.requestRenderAll();
      catat();
      tampilkanPanel();
    }
    function pilihFoto(target) {
      targetFoto = target;
      file.value = '';
      file.click();
    }
    file.addEventListener('change', async () => {
      const f = file.files && file.files[0];
      if (!f) return;
      try {
        const src = await KS.ui.bacaFoto(f);
        if (targetFoto) await gantiSlot(targetFoto, { src: src });
        else tengah(await R.slotFoto({ x: W / 2, y: H / 2, w: W * 0.45, h: W * 0.45, bentuk: 'membulat', src: src }));
      } catch (e) {
        KS.ui.toast(t('bb.galat-foto'), 'galat');
      }
    });
    function dataUrlKeBlob(url) {
      const [kepala, isi] = url.split(',');
      const mime = kepala.match(/:(.*?);/)[1];
      const bin = atob(isi);
      const arr = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
      return new Blob([arr], { type: mime });
    }
    function ekspor(format) {
      const e = P.ukuranEkspor(proyek.ukuran);
      canvas.discardActiveObject();
      canvas.renderAll();
      if (format === 'pdf') {
        const url = gambar({ format: 'jpeg', lebar: e.w, kualitas: 0.95, tanpaPlaceholder: true });
        const J = window.jspdf.jsPDF;
        const doc = e.inci
          ? new J({ orientation: 'portrait', unit: 'in', format: e.inci })
          : new J({ orientation: e.w > e.h ? 'landscape' : 'portrait', unit: 'px', format: [e.w, e.h], hotfixes: ['px_scaling'] });
        const ukur = e.inci || [e.w, e.h];
        doc.addImage(url, 'JPEG', 0, 0, ukur[0], ukur[1]);
        return { blob: doc.output('blob'), pratinjau: url, ext: 'pdf' };
      }
      const url = gambar({ format: format === 'jpg' ? 'jpeg' : 'png', lebar: e.w, kualitas: 0.9, tanpaPlaceholder: true });
      return { blob: dataUrlKeBlob(url), pratinjau: url, ext: format };
    }
    function namaFile(ext) {
      return (judul.value.trim() || 'kids-studio').replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '-').toLowerCase() + '.' + ext;
    }
    async function unduh(format, tutupPilihan) {
      tutupPilihan();
      KS.ui.toast(t('ekspor.memproses'));
      await new Promise(r => setTimeout(r, 30));
      let hasil;
      try {
        hasil = ekspor(format);
      } catch (e) {
        console.error('[kidsstudio] ekspor:', e);
        KS.ui.toast(t('ekspor.gagal'), 'galat');
        return;
      }
      const nama = namaFile(hasil.ext);
      const url = URL.createObjectURL(hasil.blob);
      const a = h('a', { href: url, download: nama });
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      const berkas = new File([hasil.blob], nama, { type: hasil.blob.type });
      const bisaBagi = navigator.canShare && navigator.canShare({ files: [berkas] });
      let tutup = () => {};
      const isi = h('div', null,
        h('b', { kelas: 'judul-font', gaya: 'font-size:22px', teks: t('ekspor.selesai') }),
        h('img', { src: hasil.pratinjau, alt: nama }),
        h('p', { kelas: 'ks-muted', gaya: 'font-size:14px', teks: t('ekspor.petunjuk') }),
        h('div', { kelas: 'ks-row', gaya: 'margin-top:14px' },
          bisaBagi ? h('button', { type: 'button', kelas: 'ks-btn', onclick: () => navigator.share({ files: [berkas] }).catch(() => {}) }, h('span', { kelas: 'ico', html: KS.ikon.svg('bagikan') }), h('span', { teks: t('ekspor.bagikan') })) : null,
          h('button', { type: 'button', kelas: 'ks-btn ks-btn-sekunder', teks: t('nav.tutup'), onclick: () => tutup() })
        )
      );
      tutup = KS.ui.modal(isi);
    }
    function bukaEkspor() {
      let tutup = () => {};
      const opsi = (f, ikon, kJudul, kSub) => h('button', { type: 'button', onclick: () => unduh(f, tutup) }, h('span', { kelas: 'ico', html: KS.ikon.svg(ikon) }), h('span', null, h('b', { teks: t(kJudul) }), h('small', { teks: t(kSub) })));
      tutup = KS.ui.modal(h('div', null,
        h('b', { kelas: 'judul-font', gaya: 'font-size:22px', teks: t('ekspor.judul') }),
        h('div', { kelas: 'ekspor-pilih' },
          opsi('png', 'foto', 'ekspor.png', 'ekspor.png-sub'),
          opsi('jpg', 'unduh', 'ekspor.jpg', 'ekspor.jpg-sub'),
          opsi('pdf', 'file', 'ekspor.pdf', 'ekspor.pdf-sub'))
      ));
    }
    document.querySelectorAll('.ed-tool').forEach(b => b.addEventListener('click', () => {
      alat = alat === b.dataset.alat && window.innerWidth < 768 && !panel.classList.contains('tutup') ? null : b.dataset.alat;
      tandaiAlat();
      if (canvas) canvas.discardActiveObject();
      if (alat) bukaPanel(); else tutupPanel();
      tampilkanPanel();
      if (canvas) canvas.requestRenderAll();
    }));
    $('ed-panel-tutup').addEventListener('click', () => { if (canvas) canvas.discardActiveObject(); tutupPanel(); tampilkanPanel(); if (canvas) canvas.requestRenderAll(); });
    btnUndo.addEventListener('click', () => { if (posisi > 0) pulihkan(posisi - 1); });
    btnRedo.addEventListener('click', () => { if (posisi < riwayat.length - 1) pulihkan(posisi + 1); });
    $('ed-unduh').addEventListener('click', bukaEkspor);
    judul.addEventListener('change', jadwalSimpan);
    $('ed-kembali').addEventListener('click', async () => {
      await simpanSekarang();
      KS.nav.switchTab('proyekku');
    });
    document.addEventListener('keydown', e => {
      if (!document.body.classList.contains('mode-editor') || !canvas) return;
      const tag = (e.target && e.target.tagName) || '';
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      const o = aktif();
      if (o && o.isEditing) return;
      if ((e.key === 'Delete' || e.key === 'Backspace') && o) { e.preventDefault(); hapus(); }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); (e.shiftKey ? btnRedo : btnUndo).click(); }
    });
    KS.nav.onSwitch(tab => { if (tab !== 'editor' && proyek) simpanSekarang(); });
    KS.editor = {
      buka,
      bukaProyek,
      simpan: simpanSekarang,
      gambar: o => gambar(o),
      ekspor,
      jumlahObjek: () => (canvas ? canvas.getObjects().length : 0),
      proyek: () => proyek
    };
  })();

  (function () {
    const t = KS.i18n.t;
    const P = window.KSPure;
    const h = KS.ui.h;
    const TPL = (window.KSTemplates && window.KSTemplates.babyborn) || [];
    const KUTIPAN = (window.KSTemplates && window.KSTemplates.kutipanBayi) || [];
    const f = {
      nama: $('bb-nama'), tglLahir: $('bb-tgl'), jam: $('bb-jam'), berat: $('bb-berat'), panjang: $('bb-panjang'),
      tempat: $('bb-tempat'), ayah: $('bb-ayah'), ibu: $('bb-ibu'), anakKe: $('bb-anakke'), kutipan: $('bb-kutipan')
    };
    const fotoIn = $('bb-foto');
    const fotoPv = $('bb-foto-pv');
    const galat = $('bb-galat');
    const grid = $('bb-template');
    const kutipanPilih = $('bb-kutipan-pilih');
    const profilWrap = $('bb-profil-wrap');
    const profilSel = $('bb-profil');
    const dipilih = $('bb-dipilih');
    const state = { foto: null, jenisKelamin: 'N', templateId: TPL.length ? TPL[0].id : null, ukuran: 'ig-post' };
    let profilList = [];
    let timerGaleri = null;
    let nomorRender = 0;

    f.tglLahir.max = P.hariIni();
    f.anakKe.append(h('option', { value: '', teks: t('bb.tanpa') }));
    for (let i = 1; i <= 10; i++) f.anakKe.append(h('option', { value: String(i), teks: P.labelAnakKe(i) }));
    kutipanPilih.append(h('option', { value: '', teks: t('bb.tanpa') }));
    KUTIPAN.forEach((k, i) => kutipanPilih.append(h('option', { value: String(i), teks: k.length > 48 ? k.slice(0, 46) + '...' : k })));
    kutipanPilih.append(h('option', { value: 'sendiri', teks: t('bb.kutipan-sendiri') }));
    kutipanPilih.addEventListener('change', () => {
      const v = kutipanPilih.value;
      if (v === '') f.kutipan.value = '';
      else if (v !== 'sendiri') f.kutipan.value = KUTIPAN[+v];
      else f.kutipan.focus();
      jadwalGaleri();
    });

    function data() {
      const d = { foto: state.foto, jenisKelamin: state.jenisKelamin };
      Object.keys(f).forEach(k => { d[k] = f[k].value.trim(); });
      return d;
    }
    function dataPratinjau() {
      const d = data();
      if (!d.nama) d.nama = t('bb.contoh-nama');
      if (!d.tglLahir) d.tglLahir = P.hariIni();
      return d;
    }
    function aturChip(wadah, nilai) {
      wadah.querySelectorAll('.chip').forEach(c => c.classList.toggle('aktif', c.dataset.nilai === nilai));
    }
    $('bb-jk').addEventListener('click', e => {
      const c = e.target.closest('.chip');
      if (!c) return;
      state.jenisKelamin = c.dataset.nilai;
      aturChip($('bb-jk'), state.jenisKelamin);
      jadwalGaleri();
    });
    $('bb-ukuran').addEventListener('click', e => {
      const c = e.target.closest('.chip');
      if (!c) return;
      state.ukuran = c.dataset.nilai;
      aturChip($('bb-ukuran'), state.ukuran);
      jadwalGaleri();
    });
    Object.values(f).forEach(el => el.addEventListener('input', jadwalGaleri));
    fotoIn.addEventListener('change', async () => {
      const file = fotoIn.files && fotoIn.files[0];
      if (!file) return;
      try {
        state.foto = await KS.ui.bacaFoto(file);
        fotoPv.innerHTML = '';
        fotoPv.append(h('img', { src: state.foto, alt: '' }));
        jadwalGaleri();
      } catch (e) {
        galat.textContent = t('bb.galat-foto');
      }
    });
    profilSel.addEventListener('change', () => {
      const p = profilList.find(x => x.id === profilSel.value);
      if (!p) return;
      f.nama.value = p.nama;
      f.tglLahir.value = p.tglLahir;
      state.jenisKelamin = p.jenisKelamin;
      aturChip($('bb-jk'), state.jenisKelamin);
      jadwalGaleri();
    });
    function muatProfil() {
      KS.store.getProfiles().then(list => {
        profilList = list;
        profilWrap.classList.toggle('hidden', !list.length);
        profilSel.innerHTML = '';
        profilSel.append(h('option', { value: '', teks: t('bb.pilih-profil') }));
        list.forEach(p => profilSel.append(h('option', { value: p.id, teks: p.nama })));
      }).catch(() => profilWrap.classList.add('hidden'));
    }
    function tandaiTemplate() {
      grid.querySelectorAll('.tpl').forEach(el => el.classList.toggle('aktif', el.dataset.id === state.templateId));
      const tpl = TPL.find(x => x.id === state.templateId);
      dipilih.textContent = tpl ? t('bb.dipilih', { nama: tpl.nama }) : '';
    }
    function bangunGaleri() {
      if (grid.children.length) return;
      TPL.forEach(tpl => {
        const kartu = h('button', { type: 'button', kelas: 'tpl', 'data-id': tpl.id, onclick: () => { state.templateId = tpl.id; tandaiTemplate(); } },
          h('div', { kelas: 'tpl-img' }, h('img', { alt: tpl.nama })),
          h('div', { kelas: 'tpl-nama', teks: tpl.nama }));
        grid.append(kartu);
      });
      tandaiTemplate();
    }
    async function renderGaleri() {
      bangunGaleri();
      if (typeof fabric === 'undefined') return;
      const nomor = ++nomorRender;
      const d = dataPratinjau();
      for (const tpl of TPL) {
        if (nomor !== nomorRender) return;
        const hasil = P.terapkanTemplate(tpl, d, state.ukuran, state.jenisKelamin);
        const url = await KS.render.gambarMini(hasil, 300);
        if (nomor !== nomorRender) return;
        const img = grid.querySelector('.tpl[data-id="' + tpl.id + '"] img');
        if (img) img.src = url;
      }
    }
    function jadwalGaleri() {
      clearTimeout(timerGaleri);
      timerGaleri = setTimeout(renderGaleri, 450);
    }
    function isiContoh() {
      f.nama.value = 'Aisyah Putri Ramadhani';
      f.tglLahir.value = P.hariIni();
      f.jam.value = '08:15';
      f.berat.value = '3,2';
      f.panjang.value = '49';
      f.tempat.value = 'RSIA Bunda, Bandung';
      f.ayah.value = 'Rizki';
      f.ibu.value = 'Nadia';
      f.anakKe.value = '1';
      kutipanPilih.value = '1';
      f.kutipan.value = KUTIPAN[1] || '';
      state.jenisKelamin = 'P';
      aturChip($('bb-jk'), 'P');
      galat.textContent = '';
      jadwalGaleri();
    }
    async function buat(templateId, ukuran) {
      if (templateId) state.templateId = templateId;
      if (ukuran) { state.ukuran = ukuran; aturChip($('bb-ukuran'), ukuran); }
      const d = data();
      const cek = P.validasiBayi(d, P.hariIni());
      if (!cek.ok) {
        galat.textContent = t(cek.galat);
        galat.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return null;
      }
      galat.textContent = '';
      if (typeof fabric === 'undefined') { KS.ui.toast(t('galat.editor'), 'galat'); return null; }
      const tpl = TPL.find(x => x.id === state.templateId) || TPL[0];
      const hasil = P.terapkanTemplate(tpl, d, state.ukuran, state.jenisKelamin);
      const objek = await KS.render.objekDari(hasil);
      const sekarang = Date.now();
      const proyek = { id: P.buatId(), editor: 'babyborn', templateId: tpl.id, ukuran: state.ukuran, varian: state.jenisKelamin, nama: 'Baby Born ' + d.nama, data: d, fabric: null, dibuat: sekarang, diubah: sekarang };
      await KS.editor.buka(proyek, objek);
      return proyek;
    }
    $('bb-contoh').addEventListener('click', isiContoh);
    $('bb-buat').addEventListener('click', () => { buat(); });
    KS.nav.onSwitch(tab => { if (tab === 'babyborn') { muatProfil(); bangunGaleri(); jadwalGaleri(); } });
    KS.babyborn = { isiContoh, buat, data };
  })();

  (function () {
    const t = KS.i18n.t;
    const P = window.KSPure;
    const h = KS.ui.h;
    const form = $('profil-form');
    const inNama = $('profil-nama');
    const inPanggilan = $('profil-panggilan');
    const inTgl = $('profil-tgl');
    const inJenis = $('profil-jenis');
    const galat = $('profil-galat');
    const batal = $('profil-batal');
    const list = $('profil-list');
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
        list.append(h('p', { kelas: 'ks-muted', teks: t('profil.kosong') }));
        return;
      }
      items.forEach(p => {
        const hapus = KS.ui.tombolHapus(() => {
          KS.store.deleteProfile(p.id).then(() => {
            if (editId === p.id) kosongkan();
            KS.ui.toast(t('profil.terhapus'));
            return muat();
          }).catch(gagal);
        });
        list.append(h('div', { kelas: 'ks-card' },
          h('div', { kelas: 'profil-card' },
            h('div', { kelas: 'avatar av-' + p.jenisKelamin, teks: (p.panggilan || p.nama).charAt(0).toUpperCase() }),
            h('div', null,
              h('div', { kelas: 'ks-card-judul', teks: p.panggilan ? p.nama + ' (' + p.panggilan + ')' : p.nama }),
              h('div', { kelas: 'ks-muted', teks: P.labelUmur(P.hitungUmur(p.tglLahir, P.hariIni()), t) }))),
          h('div', { kelas: 'ks-row', gaya: 'margin-top:14px' },
            h('button', { type: 'button', kelas: 'ks-btn ks-btn-kecil ks-btn-sekunder', teks: t('umum.ubah'), onclick: () => isi(p) }),
            hapus)));
      });
    }
    function muat() {
      return KS.store.getProfiles().then(render).catch(gagal);
    }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = { nama: inNama.value.trim(), panggilan: inPanggilan.value.trim(), tglLahir: inTgl.value, jenisKelamin: inJenis.value };
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
    const h = KS.ui.h;
    function gagal(e) {
      console.error('[kidsstudio] penyimpanan:', e);
      KS.ui.toast(t('galat.penyimpanan'), 'galat');
    }
    function kartuProyek(p, onHapus) {
      const buka = () => KS.editor.bukaProyek(p.id);
      return h('div', { kelas: 'proyek' },
        h('button', { type: 'button', kelas: 'proyek-thumb', 'aria-label': t('proyekku.buka'), onclick: buka }, p.thumbnail ? h('img', { src: p.thumbnail, alt: '' }) : h('span', { kelas: 'ico', html: KS.ikon.svg('foto') })),
        h('div', { kelas: 'proyek-isi' },
          h('div', { kelas: 'proyek-nama', teks: p.nama || t('proyekku.tanpa-nama') }),
          h('div', { kelas: 'ks-muted', gaya: 'font-size:13px', teks: new Date(p.diubah).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) }),
          h('div', { kelas: 'ks-row' },
            h('button', { type: 'button', kelas: 'ks-btn ks-btn-kecil', gaya: 'box-shadow:0 3px 0 var(--p-tua)', teks: t('proyekku.buka'), onclick: buka }),
            onHapus ? KS.ui.tombolHapus(onHapus) : null)));
    }
    KS.proyek = { kartu: kartuProyek };
    const list = $('proyekku-list');
    const kosong = $('proyekku-kosong');
    function muat() {
      return KS.store.listProjects().then(items => {
        list.innerHTML = '';
        kosong.classList.toggle('hidden', items.length > 0);
        items.forEach(p => list.append(kartuProyek(p, () => {
          KS.store.deleteProject(p.id).then(() => { KS.ui.toast(t('proyekku.terhapus')); return muat(); }).catch(gagal);
        })));
      }).catch(gagal);
    }
    $('proyekku-mulai').addEventListener('click', () => KS.nav.switchTab('babyborn'));
    KS.nav.onSwitch(tab => { if (tab === 'proyekku') muat(); });
  })();

  (function () {
    const t = KS.i18n.t;
    const sapa = $('beranda-sapa');
    const ajak = $('beranda-ajak-profil');
    const terakhir = $('beranda-terakhir');
    const terakhirList = $('beranda-terakhir-list');
    $('beranda-ajak-tombol').addEventListener('click', () => KS.nav.switchTab('profil'));
    $('beranda-mulai').addEventListener('click', () => KS.nav.switchTab('babyborn'));
    document.querySelectorAll('[data-buka]').forEach(b => b.addEventListener('click', () => KS.nav.switchTab(b.dataset.buka)));
    function segarkan() {
      KS.store.getProfiles().then(items => {
        const anak = items[0];
        sapa.textContent = anak ? t('beranda.sapa-anak', { nama: anak.panggilan || anak.nama }) : t('beranda.judul');
        ajak.classList.toggle('hidden', !!anak);
      }).catch(() => { ajak.classList.remove('hidden'); });
      KS.store.listProjects().then(items => {
        terakhir.classList.toggle('hidden', !items.length);
        terakhirList.innerHTML = '';
        items.slice(0, 4).forEach(p => terakhirList.append(KS.proyek.kartu(p, null)));
      }).catch(() => terakhir.classList.add('hidden'));
    }
    KS.home = { segarkan };
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
