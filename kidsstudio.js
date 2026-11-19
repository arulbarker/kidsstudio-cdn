(function () {
  window.__ksStarted = 1;
  var BODY = "\r\n<section id=\"ks-login\" class=\"ks-login\" aria-labelledby=\"login-judul\">\r\n  <div class=\"ks-login-kartu\">\r\n    <div class=\"ks-logo\">\r\n      <span class=\"ks-logo-mark\"><span class=\"ico\" data-ikon=\"bintang\"></span></span>\r\n      <span class=\"ks-logo-text brand-gradient bg-clip-text text-transparent\" data-i18n=\"app.nama\">Kids Studio</span>\r\n    </div>\r\n    <h1 id=\"login-judul\" class=\"ks-h1\" data-i18n=\"login.judul\"></h1>\r\n    <p class=\"ks-muted\" data-i18n=\"login.sub\"></p>\r\n    <div id=\"login-inapp\" class=\"ks-login-info hidden\"></div>\r\n    <label class=\"ks-field\" for=\"login-email\"><span data-i18n=\"login.label\"></span>\r\n      <input id=\"login-email\" class=\"ks-input\" type=\"email\" autocomplete=\"email\" inputmode=\"email\" autocapitalize=\"off\" spellcheck=\"false\" maxlength=\"254\" data-i18n-ph=\"login.ph\">\r\n    </label>\r\n    <div id=\"login-galat\" class=\"ks-login-galat hidden\" role=\"alert\"></div>\r\n    <button id=\"login-masuk\" type=\"button\" class=\"ks-btn ks-btn-lebar\"><span class=\"ico\" data-ikon=\"masuk\"></span><span id=\"login-masuk-teks\" data-i18n=\"login.masuk\"></span></button>\r\n    <p class=\"ks-muted\" style=\"font-size:13px\" data-i18n=\"login.bantuan\"></p>\r\n    <div class=\"ks-muted\" style=\"font-size:12px\">Kids Studio v<span id=\"login-versi\"></span></div>\r\n  </div>\r\n</section>\r\n<div id=\"sidebar-backdrop\" class=\"ks-backdrop\"></div>\r\n<aside id=\"sidebar\" class=\"ks-sidebar\">\r\n  <div class=\"ks-sidebar-head\">\r\n    <div class=\"ks-logo\">\r\n      <span class=\"ks-logo-mark\"><span class=\"ico\" data-ikon=\"bintang\"></span></span>\r\n      <span class=\"ks-logo-text brand-gradient bg-clip-text text-transparent\" data-i18n=\"app.nama\">Kids Studio</span>\r\n    </div>\r\n    <button id=\"nav-hide\" type=\"button\" class=\"ks-icon-btn\" data-i18n-aria=\"nav.tutup-menu\" aria-label=\"Tutup menu\"><span class=\"ico\" data-ikon=\"panel\"></span></button>\r\n  </div>\r\n  <nav class=\"ks-nav\">\r\n    <button type=\"button\" data-tab=\"beranda\" class=\"main-tab-btn active\"><span class=\"ico\" data-ikon=\"rumah\"></span><span data-i18n=\"nav.beranda\">Beranda</span></button>\r\n    <button type=\"button\" data-tab=\"babyborn\" class=\"main-tab-btn\"><span class=\"ico\" data-ikon=\"bayi\"></span><span data-i18n=\"nav.babyborn\">Baby Born</span><span class=\"badge badge-ai\" data-i18n=\"umum.ai\"></span></button>\r\n    <button type=\"button\" data-tab=\"aianak\" class=\"main-tab-btn\"><span class=\"ico\" data-ikon=\"kilau\"></span><span data-i18n=\"nav.aianak\">AI Foto Anak</span><span class=\"badge badge-ai\" data-i18n=\"umum.ai\"></span></button>\r\n    <button type=\"button\" data-tab=\"kolase\" class=\"main-tab-btn\"><span class=\"ico\" data-ikon=\"grid\"></span><span data-i18n=\"nav.kolase\">Kolase Anak</span></button>\r\n    <button type=\"button\" data-tab=\"milestone\" class=\"main-tab-btn\"><span class=\"ico\" data-ikon=\"kue\"></span><span data-i18n=\"nav.milestone\">Milestone</span></button>\r\n    <button type=\"button\" data-tab=\"proyekku\" class=\"main-tab-btn\"><span class=\"ico\" data-ikon=\"folder\"></span><span data-i18n=\"nav.proyekku\">Proyekku</span></button>\r\n    <button type=\"button\" data-tab=\"profil\" class=\"main-tab-btn\"><span class=\"ico\" data-ikon=\"anak\"></span><span data-i18n=\"nav.profil\">Profil Anak</span></button>\r\n  </nav>\r\n  <div class=\"ks-akun\">\r\n    <div id=\"akun-email\" class=\"ks-akun-email\"></div>\r\n    <button id=\"akun-keluar\" type=\"button\" class=\"ks-btn ks-btn-kecil ks-btn-sekunder\"><span class=\"ico\" data-ikon=\"keluar\"></span><span data-i18n=\"login.keluar\"></span></button>\r\n  </div>\r\n  <div class=\"ks-version\">Kids Studio v<span id=\"ks-version\"></span></div>\r\n</aside>\r\n<header class=\"ks-topbar\">\r\n  <button id=\"nav-show\" type=\"button\" class=\"ks-icon-btn\" data-i18n-aria=\"nav.buka\" aria-label=\"Buka menu\"><span class=\"ico\" data-ikon=\"menu\"></span></button>\r\n  <span class=\"ks-topbar-title\" data-i18n=\"app.nama\">Kids Studio</span>\r\n</header>\r\n<main class=\"ks-main\">\r\n  <section id=\"content-beranda\" class=\"main-content-panel\">\r\n    <div class=\"hero\">\r\n      <span class=\"hero-bulat\" style=\"width:320px;height:320px;right:-80px;bottom:-140px\"></span>\r\n      <span class=\"hero-bulat\" style=\"width:140px;height:140px;left:44%;top:-60px\"></span>\r\n      <div>\r\n        <p id=\"beranda-sapa\" class=\"hero-kecil\" data-i18n=\"beranda.kecil\">Studio kenangan si kecil</p>\r\n        <h1 class=\"ks-h1\" data-i18n=\"beranda.ai-judul\"></h1>\r\n        <p data-i18n=\"beranda.ai-sub\"></p>\r\n        <button id=\"beranda-mulai\" type=\"button\" class=\"ks-btn ks-btn-kuning\"><span class=\"ico\" data-ikon=\"kilau\"></span><span data-i18n=\"beranda.ai-mulai\"></span><span class=\"ico\" data-ikon=\"panah\"></span></button>\r\n      </div>\r\n      <div class=\"hero-art\" aria-hidden=\"true\">\r\n        <div class=\"kartu k1\"><i></i><b></b><b></b></div>\r\n        <div class=\"kartu k2\"><i></i><b></b><b></b><span class=\"hero-ai\"><span class=\"ico\" data-ikon=\"kilau\"></span><span data-i18n=\"umum.ai\"></span></span></div>\r\n        <span class=\"bintang\" style=\"left:10px;top:20px\" data-ikon-isi=\"bintang\"></span>\r\n        <span class=\"bintang\" style=\"left:60px;bottom:10px;width:24px;height:24px\" data-ikon-isi=\"bintang\"></span>\r\n      </div>\r\n    </div>\r\n    <h2 class=\"ks-h2\" data-i18n=\"beranda.editor-judul\">Pilih editor</h2>\r\n    <div class=\"editor-grid\">\r\n      <button type=\"button\" class=\"ed-card ed-pink\" data-buka=\"babyborn\">\r\n        <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"bayi\"></span></span>\r\n        <span class=\"ed-go\"><span class=\"ico\" data-ikon=\"panah\"></span></span>\r\n        <span class=\"ed-judul\"><span data-i18n=\"editor.babyborn\">Baby Born</span> <span class=\"badge badge-ai\" data-i18n=\"umum.ai\"></span></span>\r\n        <span class=\"ed-sub\" data-i18n=\"editor.babyborn-ai-sub\"></span>\r\n      </button>\r\n      <button type=\"button\" class=\"ed-card ed-teal\" data-buka=\"kolase\">\r\n        <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"grid\"></span></span>\r\n        <span class=\"ed-go\"><span class=\"ico\" data-ikon=\"panah\"></span></span>\r\n        <span class=\"ed-judul\" data-i18n=\"editor.kolase\">Kolase Anak</span>\r\n        <span class=\"ed-sub\" data-i18n=\"editor.kolase-sub\">Banyak foto, satu cerita</span>\r\n      </button>\r\n      <button type=\"button\" class=\"ed-card ed-amber\" data-buka=\"milestone\">\r\n        <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"kue\"></span></span>\r\n        <span class=\"ed-go\"><span class=\"ico\" data-ikon=\"panah\"></span></span>\r\n        <span class=\"ed-judul\" data-i18n=\"editor.milestone\">Milestone</span>\r\n        <span class=\"ed-sub\" data-i18n=\"editor.milestone-sub\">Foto bulanan dan ulang tahun</span>\r\n      </button>\r\n      <button type=\"button\" class=\"ed-card ed-blue\" data-buka=\"aianak\">\r\n        <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"kilau\"></span></span>\r\n        <span class=\"ed-go\"><span class=\"ico\" data-ikon=\"panah\"></span></span>\r\n        <span class=\"ed-judul\"><span data-i18n=\"editor.ai\">AI Foto Anak</span> <span class=\"badge badge-ai\" data-i18n=\"umum.ai\"></span></span>\r\n        <span class=\"ed-sub\" data-i18n=\"editor.ai-sub\">Kartun, kostum, latar ajaib</span>\r\n      </button>\r\n    </div>\r\n    <div id=\"beranda-ajak-profil\" class=\"ks-card ajak hidden\">\r\n      <div class=\"ajak-ico\"><span class=\"ico\" data-ikon=\"anak\"></span></div>\r\n      <div>\r\n        <div class=\"ks-card-judul\" data-i18n=\"beranda.ajak-profil-judul\">Kenalan dulu dengan si kecil</div>\r\n        <p class=\"ks-muted\" data-i18n=\"beranda.ajak-profil-isi\"></p>\r\n        <button id=\"beranda-ajak-tombol\" type=\"button\" class=\"ks-btn ks-btn-kecil ks-btn-sekunder\" data-i18n=\"beranda.ajak-profil-tombol\"></button>\r\n      </div>\r\n    </div>\r\n    <div id=\"beranda-terakhir\" class=\"hidden\">\r\n      <h2 class=\"ks-h2\" data-i18n=\"beranda.terakhir\">Lanjutkan karyamu</h2>\r\n      <div id=\"beranda-terakhir-list\" class=\"proyek-grid\"></div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-aianak\" class=\"main-content-panel hidden\">\r\n    <div class=\"bb-kepala\">\r\n      <span class=\"ed-ico aa-ico\"><span class=\"ico\" data-ikon=\"kilau\"></span></span>\r\n      <div>\r\n        <h1 class=\"ks-h1\" data-i18n=\"aa.judul\">AI Foto Anak</h1>\r\n        <p class=\"ks-muted\" data-i18n=\"aa.sub\"></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"ai-layout\">\r\n      <div class=\"ks-card ai-kontrol\">\r\n        <div class=\"ai-langkah\"><span class=\"ai-no\">1</span><span data-i18n=\"aa.langkah-foto\"></span></div>\r\n        <label id=\"aa-unggah\" class=\"ai-unggah\">\r\n          <input id=\"aa-foto\" type=\"file\" accept=\"image/*\">\r\n          <span class=\"ai-unggah-kosong\">\r\n            <span class=\"ai-unggah-ico\"><span class=\"ico\" data-ikon=\"foto\"></span></span>\r\n            <b data-i18n=\"aa.foto-judul\"></b>\r\n            <small class=\"ks-muted\" data-i18n=\"aa.foto-sub\"></small>\r\n          </span>\r\n          <img id=\"aa-foto-pv\" class=\"hidden\" alt=\"\">\r\n          <span class=\"ai-unggah-ganti\" data-i18n=\"ai.foto-ganti\"></span>\r\n        </label>\r\n        <div class=\"ai-langkah\"><span class=\"ai-no\">2</span><span data-i18n=\"aa.langkah-mode\"></span></div>\r\n        <div id=\"aa-mode\" class=\"ai-tema-grid\"></div>\r\n        <div class=\"ai-langkah\"><span class=\"ai-no\">3</span><span data-i18n=\"aa.langkah-gaya\"></span></div>\r\n        <div id=\"aa-gaya\" class=\"ai-tema-grid\"></div>\r\n        <div class=\"ai-langkah\"><span class=\"ai-no\">4</span><span data-i18n=\"aa.langkah-opsi\"></span></div>\r\n        <div id=\"aa-rasio\" class=\"ai-rasio\"></div>\r\n        <div class=\"ed-label\" data-i18n=\"ai.jumlah\"></div>\r\n        <div id=\"aa-jumlah\" class=\"chips\"></div>\r\n        <p class=\"ai-aman\"><span class=\"ico\" data-ikon=\"perisai\"></span><span data-i18n=\"aa.aman\"></span></p>\r\n        <small class=\"ks-muted ai-catatan\" data-i18n=\"aa.catatan-wajah\"></small>\r\n        <div id=\"aa-galat\" class=\"ks-galat\" role=\"alert\"></div>\r\n        <button id=\"aa-buat\" type=\"button\" class=\"ks-btn ks-btn-lebar\"><span class=\"ico\" data-ikon=\"kilau\"></span><span data-i18n=\"aa.buat\"></span></button>\r\n        <button id=\"aa-batal\" type=\"button\" class=\"ks-btn ks-btn-bahaya ks-btn-lebar hidden\"><span class=\"ico\" data-ikon=\"x\"></span><span data-i18n=\"ai.batal\"></span></button>\r\n      </div>\r\n      <div class=\"ai-hasil-kolom\">\r\n        <h2 class=\"ks-h2 ai-hasil-judul\" data-i18n=\"ai.hasil\"></h2>\r\n        <p id=\"aa-status\" class=\"ks-muted ai-status hidden\" role=\"status\"></p>\r\n        <div id=\"aa-kosong\" class=\"ks-card kosong ai-kosong\">\r\n          <div class=\"ajak-ico\"><span class=\"ico\" data-ikon=\"kilau\"></span></div>\r\n          <div class=\"ks-card-judul\" data-i18n=\"ai.hasil-kosong-judul\"></div>\r\n          <p class=\"ks-muted\" data-i18n=\"aa.hasil-kosong\"></p>\r\n        </div>\r\n        <div id=\"aa-hasil\" class=\"ai-hasil-grid\"></div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-kolase\" class=\"main-content-panel hidden\">\r\n    <div class=\"bb-kepala\">\r\n      <span class=\"ed-ico kl-ico\"><span class=\"ico\" data-ikon=\"grid\"></span></span>\r\n      <div>\r\n        <h1 class=\"ks-h1\" data-i18n=\"kl.judul\">Kolase Anak</h1>\r\n        <p class=\"ks-muted\" data-i18n=\"kl.sub\"></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"bb-layout\">\r\n      <div class=\"ks-card ks-form\">\r\n        <b data-i18n=\"kl.foto\"></b>\r\n        <label class=\"unggah\">\r\n          <span class=\"unggah-pv\"><span class=\"ico\" data-ikon=\"foto\"></span></span>\r\n          <span><b data-i18n=\"kl.tambah-foto\"></b><br><small class=\"ks-muted\" data-i18n=\"kl.foto-sub\"></small></span>\r\n          <input id=\"kl-foto\" type=\"file\" accept=\"image/*\" multiple>\r\n        </label>\r\n        <div class=\"ks-muted kl-jumlah\" id=\"kl-jumlah\"></div>\r\n        <div id=\"kl-foto-grid\" class=\"kl-foto-grid\"></div>\r\n        <label class=\"ks-field\"><span data-i18n=\"kl.acara\"></span><input id=\"kl-judul-acara\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\" data-i18n-ph=\"kl.acara-ph\"></label>\r\n        <div id=\"kl-acara\" class=\"chips kl-acara\"></div>\r\n        <label class=\"ks-field\"><span data-i18n=\"kl.tanggal\"></span><input id=\"kl-tanggal\" type=\"date\" class=\"ks-input\"></label>\r\n        <b data-i18n=\"kl.tampilan\"></b>\r\n        <div class=\"ed-label\" data-i18n=\"kl.warna\"></div>\r\n        <div id=\"kl-palet\" class=\"chips\"></div>\r\n        <div class=\"ed-label\" data-i18n=\"kl.jarak\"></div>\r\n        <div id=\"kl-jarak\" class=\"chips\"></div>\r\n        <div class=\"ed-label\" data-i18n=\"kl.sudut\"></div>\r\n        <div id=\"kl-sudut\" class=\"chips\"></div>\r\n        <div class=\"ed-label\" data-i18n=\"bb.ukuran\"></div>\r\n        <div id=\"kl-ukuran\" class=\"chips\"></div>\r\n        <div id=\"kl-galat\" class=\"ks-galat\" role=\"alert\"></div>\r\n      </div>\r\n      <div>\r\n        <h2 class=\"ks-h2\" data-i18n=\"kl.pilih-tata-letak\"></h2>\r\n        <p id=\"kl-catatan\" class=\"ks-muted\" data-i18n=\"kl.pratinjau-contoh\"></p>\r\n        <div id=\"kl-template\" class=\"tpl-grid\"></div>\r\n        <div class=\"bb-aksi\">\r\n          <span></span>\r\n          <button id=\"kl-buat\" type=\"button\" class=\"ks-btn\"><span data-i18n=\"kl.buat\"></span><span class=\"ico\" data-ikon=\"panah\"></span></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-milestone\" class=\"main-content-panel hidden\">\r\n    <div class=\"bb-kepala\">\r\n      <span class=\"ed-ico ms-ico\"><span class=\"ico\" data-ikon=\"kue\"></span></span>\r\n      <div>\r\n        <h1 class=\"ks-h1\" data-i18n=\"ms.judul\">Milestone</h1>\r\n        <p class=\"ks-muted\" data-i18n=\"ms.sub\"></p>\r\n      </div>\r\n    </div>\r\n    <div id=\"ms-seri\" class=\"ks-card ms-seri hidden\">\r\n      <b data-i18n=\"ms.seri-judul\"></b>\r\n      <p class=\"ks-muted\" data-i18n=\"ms.seri-sub\"></p>\r\n      <div id=\"ms-seri-list\" class=\"ms-seri-list\"></div>\r\n    </div>\r\n    <div class=\"bb-layout\">\r\n      <form id=\"ms-form\" class=\"ks-card ks-form\" novalidate>\r\n        <div class=\"ks-field\"><span data-i18n=\"ms.mode\"></span><div id=\"ms-mode\" class=\"chips\"></div></div>\r\n        <label id=\"ms-profil-wrap\" class=\"ks-field hidden\"><span data-i18n=\"bb.dari-profil\">Ambil dari Profil Anak</span><select id=\"ms-profil\" class=\"ks-input\"></select></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"ms.nama\"></span><input id=\"ms-nama\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\"></label>\r\n        <div class=\"ks-field\"><span data-i18n=\"profil.jenis\">Jenis kelamin</span>\r\n          <div class=\"chips\" id=\"ms-jk\">\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"L\" data-i18n=\"profil.jenis-l\">Laki-laki</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"P\" data-i18n=\"profil.jenis-p\">Perempuan</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"N\" data-i18n=\"bb.netral\">Netral</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"dua-kolom\">\r\n          <label class=\"ks-field\"><span data-i18n=\"ms.tgl-lahir\"></span><input id=\"ms-tgl-lahir\" type=\"date\" class=\"ks-input\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"ms.tanggal\"></span><input id=\"ms-tanggal\" type=\"date\" class=\"ks-input\"></label>\r\n        </div>\r\n        <label id=\"ms-baris-bulan\" class=\"ks-field\"><span data-i18n=\"ms.bulan-ke\"></span><select id=\"ms-bulan\" class=\"ks-input\"></select></label>\r\n        <label id=\"ms-baris-tahun\" class=\"ks-field hidden\"><span data-i18n=\"ms.tahun-ke\"></span><select id=\"ms-tahun\" class=\"ks-input\"></select></label>\r\n        <small id=\"ms-umur\" class=\"ks-muted\"></small>\r\n        <label id=\"ms-baris-momen\" class=\"ks-field hidden\"><span data-i18n=\"ms.momen\"></span><select id=\"ms-momen\" class=\"ks-input\"></select><input id=\"ms-momen-lain\" class=\"ks-input hidden\" maxlength=\"30\" autocomplete=\"off\" data-i18n-ph=\"ms.momen-lain-ph\"></label>\r\n        <label class=\"unggah\">\r\n          <span class=\"unggah-pv\" id=\"ms-foto-pv\"><span class=\"ico\" data-ikon=\"foto\"></span></span>\r\n          <span><b data-i18n=\"ms.foto\"></b><br><small class=\"ks-muted\" data-i18n=\"ms.foto-sub\"></small></span>\r\n          <input id=\"ms-foto\" type=\"file\" accept=\"image/*\">\r\n        </label>\r\n        <label class=\"unggah\">\r\n          <span class=\"unggah-pv\" id=\"ms-foto-dulu-pv\"><span class=\"ico\" data-ikon=\"foto\"></span></span>\r\n          <span><b data-i18n=\"ms.foto-dulu\"></b><br><small class=\"ks-muted\" data-i18n=\"ms.foto-sub\"></small></span>\r\n          <input id=\"ms-foto-dulu\" type=\"file\" accept=\"image/*\">\r\n        </label>\r\n        <div class=\"dua-kolom\">\r\n          <label class=\"ks-field\"><span data-i18n=\"ms.berat\"></span><input id=\"ms-berat\" class=\"ks-input\" inputmode=\"decimal\" placeholder=\"7,4\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"ms.tinggi\"></span><input id=\"ms-tinggi\" class=\"ks-input\" inputmode=\"decimal\" placeholder=\"66\"></label>\r\n        </div>\r\n        <label class=\"ks-field\"><span data-i18n=\"ms.bisa\"></span><textarea id=\"ms-bisa\" class=\"ks-input\" maxlength=\"160\" data-i18n-ph=\"ms.bisa-ph\"></textarea></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"ms.suka\"></span><input id=\"ms-suka\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\" data-i18n-ph=\"ms.suka-ph\"></label>\r\n        <div id=\"ms-galat\" class=\"ks-galat\" role=\"alert\"></div>\r\n      </form>\r\n      <div>\r\n        <div class=\"ks-card\">\r\n          <b data-i18n=\"bb.ukuran\">Ukuran</b>\r\n          <div class=\"chips\" id=\"ms-ukuran\" style=\"margin-top:10px\">\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"ig-post\" data-i18n=\"ukuran.ig-post\">Post IG (1:1)</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"ig-story\" data-i18n=\"ukuran.ig-story\">Story / WA (9:16)</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"cetak-10r\" data-i18n=\"ukuran.cetak-10r\">Cetak 10R</button>\r\n          </div>\r\n        </div>\r\n        <h2 class=\"ks-h2\" data-i18n=\"ms.pilih-desain\"></h2>\r\n        <div id=\"ms-template\" class=\"tpl-grid\"></div>\r\n        <div class=\"bb-aksi\">\r\n          <span></span>\r\n          <button id=\"ms-buat\" type=\"button\" class=\"ks-btn\"><span data-i18n=\"ms.buat\"></span><span class=\"ico\" data-ikon=\"panah\"></span></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-babyborn\" class=\"main-content-panel hidden\">\r\n    <div class=\"bb-kepala\">\r\n      <span class=\"ed-ico\"><span class=\"ico\" data-ikon=\"bayi\"></span></span>\r\n      <div>\r\n        <h1 class=\"ks-h1\" data-i18n=\"bb.judul\">Baby Born</h1>\r\n        <p id=\"bb-sub\" class=\"ks-muted\" data-i18n=\"ai.sub\"></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"seg\" id=\"bb-mode\" role=\"tablist\">\r\n      <button type=\"button\" class=\"seg-btn aktif\" data-mode=\"ai\" role=\"tab\"><span class=\"ico\" data-ikon=\"kilau\"></span><span data-i18n=\"bb.mode-ai\"></span><span class=\"badge badge-ai\" data-i18n=\"umum.ai\"></span></button>\r\n      <button type=\"button\" class=\"seg-btn\" data-mode=\"manual\" role=\"tab\"><span class=\"ico\" data-ikon=\"file\"></span><span data-i18n=\"bb.mode-manual\"></span></button>\r\n    </div>\r\n    <div id=\"bb-ai\" class=\"ai-layout\">\r\n      <div class=\"ks-card ai-kontrol\">\r\n        <div class=\"ai-langkah\"><span class=\"ai-no\">1</span><span data-i18n=\"ai.langkah-foto\"></span></div>\r\n        <label id=\"ai-unggah\" class=\"ai-unggah\">\r\n          <input id=\"ai-foto\" type=\"file\" accept=\"image/*\">\r\n          <span class=\"ai-unggah-kosong\">\r\n            <span class=\"ai-unggah-ico\"><span class=\"ico\" data-ikon=\"foto\"></span></span>\r\n            <b data-i18n=\"ai.foto-judul\"></b>\r\n            <small class=\"ks-muted\" data-i18n=\"ai.foto-sub\"></small>\r\n          </span>\r\n          <img id=\"ai-foto-pv\" class=\"hidden\" alt=\"\">\r\n          <span class=\"ai-unggah-ganti\" data-i18n=\"ai.foto-ganti\"></span>\r\n        </label>\r\n        <div class=\"ai-langkah\"><span class=\"ai-no\">2</span><span data-i18n=\"ai.langkah-tema\"></span></div>\r\n        <div id=\"ai-tema\"></div>\r\n        <div class=\"ai-langkah\"><span class=\"ai-no\">3</span><span data-i18n=\"ai.langkah-ukuran\"></span></div>\r\n        <div id=\"ai-rasio\" class=\"ai-rasio\"></div>\r\n        <div class=\"ai-langkah\"><span class=\"ai-no\">4</span><span data-i18n=\"ai.langkah-opsi\"></span></div>\r\n        <div class=\"ed-label\" data-i18n=\"ai.nuansa\"></div>\r\n        <div id=\"ai-nuansa\" class=\"chips\"></div>\r\n        <div class=\"ed-label\" data-i18n=\"ai.jumlah\"></div>\r\n        <div id=\"ai-jumlah\" class=\"chips\"></div>\r\n        <p class=\"ai-aman\"><span class=\"ico\" data-ikon=\"perisai\"></span><span data-i18n=\"ai.aman\"></span></p>\r\n        <div id=\"ai-galat\" class=\"ks-galat\" role=\"alert\"></div>\r\n        <button id=\"ai-buat\" type=\"button\" class=\"ks-btn ks-btn-lebar\"><span class=\"ico\" data-ikon=\"kilau\"></span><span data-i18n=\"ai.buat\"></span></button>\r\n        <button id=\"ai-perhalus\" type=\"button\" class=\"ks-btn ks-btn-sekunder ks-btn-lebar\"><span class=\"ico\" data-ikon=\"bintang\"></span><span data-i18n=\"ai.perhalus\"></span></button>\r\n        <small class=\"ks-muted ai-catatan\" data-i18n=\"ai.perhalus-sub\"></small>\r\n        <button id=\"ai-batal\" type=\"button\" class=\"ks-btn ks-btn-bahaya ks-btn-lebar hidden\"><span class=\"ico\" data-ikon=\"x\"></span><span data-i18n=\"ai.batal\"></span></button>\r\n      </div>\r\n      <div class=\"ai-hasil-kolom\">\r\n        <h2 class=\"ks-h2 ai-hasil-judul\" data-i18n=\"ai.hasil\"></h2>\r\n        <p id=\"ai-status\" class=\"ks-muted ai-status hidden\" role=\"status\"></p>\r\n        <div id=\"ai-kosong\" class=\"ks-card kosong ai-kosong\">\r\n          <div class=\"ajak-ico\"><span class=\"ico\" data-ikon=\"kilau\"></span></div>\r\n          <div class=\"ks-card-judul\" data-i18n=\"ai.hasil-kosong-judul\"></div>\r\n          <p class=\"ks-muted\" data-i18n=\"ai.hasil-kosong\"></p>\r\n        </div>\r\n        <div id=\"ai-hasil\" class=\"ai-hasil-grid\"></div>\r\n      </div>\r\n    </div>\r\n    <div id=\"bb-manual\" class=\"bb-layout hidden\">\r\n      <form id=\"bb-form\" class=\"ks-card ks-form\" novalidate>\r\n        <div class=\"ks-row\" style=\"justify-content:space-between\">\r\n          <b data-i18n=\"bb.data\">Data si kecil</b>\r\n          <button id=\"bb-contoh\" type=\"button\" class=\"ks-btn ks-btn-kecil ks-btn-sekunder\" data-i18n=\"bb.contoh\">Isi contoh</button>\r\n        </div>\r\n        <label id=\"bb-profil-wrap\" class=\"ks-field hidden\"><span data-i18n=\"bb.dari-profil\">Ambil dari Profil Anak</span><select id=\"bb-profil\" class=\"ks-input\"></select></label>\r\n        <label class=\"unggah\">\r\n          <span class=\"unggah-pv\" id=\"bb-foto-pv\"><span class=\"ico\" data-ikon=\"foto\"></span></span>\r\n          <span><b data-i18n=\"bb.foto\">Foto si kecil</b><br><small class=\"ks-muted\" data-i18n=\"bb.foto-sub\">Ketuk untuk memilih foto</small></span>\r\n          <input id=\"bb-foto\" type=\"file\" accept=\"image/*\">\r\n        </label>\r\n        <label class=\"ks-field\"><span data-i18n=\"bb.nama\">Nama lengkap</span><input id=\"bb-nama\" class=\"ks-input\" maxlength=\"50\" autocomplete=\"off\" data-i18n-ph=\"bb.nama-ph\"></label>\r\n        <div class=\"ks-field\"><span data-i18n=\"profil.jenis\">Jenis kelamin</span>\r\n          <div class=\"chips\" id=\"bb-jk\">\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"L\" data-i18n=\"profil.jenis-l\">Laki-laki</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"P\" data-i18n=\"profil.jenis-p\">Perempuan</button>\r\n            <button type=\"button\" class=\"chip aktif\" data-nilai=\"N\" data-i18n=\"bb.netral\">Netral</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"dua-kolom\">\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.tanggal\">Tanggal lahir</span><input id=\"bb-tgl\" type=\"date\" class=\"ks-input\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.jam\">Jam lahir</span><input id=\"bb-jam\" type=\"time\" class=\"ks-input\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.berat\">Berat (kg)</span><input id=\"bb-berat\" class=\"ks-input\" inputmode=\"decimal\" placeholder=\"3,2\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.panjang\">Panjang (cm)</span><input id=\"bb-panjang\" class=\"ks-input\" inputmode=\"decimal\" placeholder=\"49\"></label>\r\n        </div>\r\n        <label class=\"ks-field\"><span data-i18n=\"bb.tempat\">Tempat lahir</span><input id=\"bb-tempat\" class=\"ks-input\" maxlength=\"60\" autocomplete=\"off\" data-i18n-ph=\"bb.tempat-ph\"></label>\r\n        <div class=\"dua-kolom\">\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.ayah\">Nama ayah</span><input id=\"bb-ayah\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\"></label>\r\n          <label class=\"ks-field\"><span data-i18n=\"bb.ibu\">Nama ibu</span><input id=\"bb-ibu\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\"></label>\r\n        </div>\r\n        <label class=\"ks-field\"><span data-i18n=\"bb.anak-ke\">Anak ke-</span><select id=\"bb-anakke\" class=\"ks-input\"></select></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"bb.kutipan\">Doa / kutipan</span><select id=\"bb-kutipan-pilih\" class=\"ks-input\"></select><textarea id=\"bb-kutipan\" class=\"ks-input\" maxlength=\"160\"></textarea></label>\r\n        <div id=\"bb-galat\" class=\"ks-galat\" role=\"alert\"></div>\r\n      </form>\r\n      <div>\r\n        <div class=\"ks-card\">\r\n          <b data-i18n=\"bb.ukuran\">Ukuran</b>\r\n          <div class=\"chips\" id=\"bb-ukuran\" style=\"margin-top:10px\">\r\n            <button type=\"button\" class=\"chip aktif\" data-nilai=\"ig-post\" data-i18n=\"ukuran.ig-post\">Post IG (1:1)</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"ig-story\" data-i18n=\"ukuran.ig-story\">Story / WA (9:16)</button>\r\n            <button type=\"button\" class=\"chip\" data-nilai=\"cetak-10r\" data-i18n=\"ukuran.cetak-10r\">Cetak 10R</button>\r\n          </div>\r\n        </div>\r\n        <h2 class=\"ks-h2\" data-i18n=\"bb.pilih-desain\">Pilih desain</h2>\r\n        <div id=\"bb-template\" class=\"tpl-grid\"></div>\r\n        <div class=\"bb-aksi\">\r\n          <span class=\"ks-muted\" id=\"bb-dipilih\"></span>\r\n          <button id=\"bb-buat\" type=\"button\" class=\"ks-btn\"><span data-i18n=\"bb.buat\">Buat kartu</span><span class=\"ico\" data-ikon=\"panah\"></span></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-proyekku\" class=\"main-content-panel hidden\">\r\n    <h1 class=\"ks-h1\" data-i18n=\"proyekku.judul\">Proyekku</h1>\r\n    <p class=\"ks-muted\" data-i18n=\"proyekku.sub\"></p>\r\n    <div id=\"proyekku-list\" class=\"proyek-grid\" style=\"margin-top:22px\"></div>\r\n    <div id=\"proyekku-kosong\" class=\"ks-card kosong hidden\">\r\n      <div class=\"ajak-ico\"><span class=\"ico\" data-ikon=\"folder\"></span></div>\r\n      <div class=\"ks-card-judul\" data-i18n=\"proyekku.kosong-judul\">Belum ada karya</div>\r\n      <p class=\"ks-muted\" data-i18n=\"proyekku.kosong\"></p>\r\n      <button id=\"proyekku-mulai\" type=\"button\" class=\"ks-btn\" style=\"margin-top:16px\" data-i18n=\"beranda.mulai\">Mulai Baby Born</button>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-profil\" class=\"main-content-panel hidden\">\r\n    <h1 class=\"ks-h1\" data-i18n=\"profil.judul\">Profil Anak</h1>\r\n    <p class=\"ks-muted\" data-i18n=\"profil.sub\"></p>\r\n    <div class=\"profil-wrap\">\r\n      <form id=\"profil-form\" class=\"ks-card ks-form\" novalidate>\r\n        <label class=\"ks-field\"><span data-i18n=\"profil.nama\"></span><input id=\"profil-nama\" class=\"ks-input\" maxlength=\"40\" autocomplete=\"off\"></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"profil.panggilan\"></span><input id=\"profil-panggilan\" class=\"ks-input\" maxlength=\"20\" autocomplete=\"off\"></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"profil.tgl-lahir\"></span><input id=\"profil-tgl\" type=\"date\" class=\"ks-input\"></label>\r\n        <label class=\"ks-field\"><span data-i18n=\"profil.jenis\"></span>\r\n          <select id=\"profil-jenis\" class=\"ks-input\">\r\n            <option value=\"L\" data-i18n=\"profil.jenis-l\"></option>\r\n            <option value=\"P\" data-i18n=\"profil.jenis-p\"></option>\r\n            <option value=\"N\" data-i18n=\"profil.jenis-n\"></option>\r\n          </select>\r\n        </label>\r\n        <div id=\"profil-galat\" class=\"ks-galat\" role=\"alert\"></div>\r\n        <div class=\"ks-row\">\r\n          <button type=\"submit\" class=\"ks-btn\" data-i18n=\"profil.simpan\"></button>\r\n          <button id=\"profil-batal\" type=\"button\" class=\"ks-btn ks-btn-sekunder hidden\" data-i18n=\"profil.batal\"></button>\r\n        </div>\r\n      </form>\r\n      <div>\r\n        <b data-i18n=\"profil.daftar\"></b>\r\n        <div id=\"profil-list\" class=\"ks-grid\" style=\"margin-top:12px\"></div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"content-editor\" class=\"main-content-panel hidden\">\r\n    <div class=\"ed\">\r\n      <div class=\"ed-top\">\r\n        <button id=\"ed-kembali\" type=\"button\" class=\"ed-ikon\" data-i18n-aria=\"editor.kembali\" aria-label=\"Kembali\"><span class=\"ico\" data-ikon=\"kiri\"></span></button>\r\n        <input id=\"ed-judul\" class=\"ed-nama\" maxlength=\"60\" autocomplete=\"off\">\r\n        <button id=\"ed-undo\" type=\"button\" class=\"ed-ikon\" data-i18n-aria=\"editor.undo\" aria-label=\"Urungkan\"><span class=\"ico\" data-ikon=\"undo\"></span></button>\r\n        <button id=\"ed-redo\" type=\"button\" class=\"ed-ikon\" data-i18n-aria=\"editor.redo\" aria-label=\"Ulangi\"><span class=\"ico\" data-ikon=\"redo\"></span></button>\r\n        <button id=\"ed-unduh\" type=\"button\" class=\"ks-btn ks-btn-kecil\" style=\"box-shadow:0 3px 0 var(--p-tua)\"><span class=\"ico\" data-ikon=\"unduh\"></span><span class=\"ed-unduh-teks\" data-i18n=\"editor.unduh\">Unduh</span></button>\r\n      </div>\r\n      <div class=\"ed-mid\">\r\n        <div id=\"ed-stage\" class=\"ed-stage\"><canvas id=\"ed-canvas\"></canvas></div>\r\n        <aside id=\"ed-panel\" class=\"ed-panel tutup\">\r\n          <div class=\"ed-panel-head\"><b id=\"ed-panel-judul\"></b><button id=\"ed-panel-tutup\" type=\"button\" class=\"ed-ikon ed-panel-tutup\" data-i18n-aria=\"nav.tutup\" aria-label=\"Tutup\"><span class=\"ico\" data-ikon=\"x\"></span></button></div>\r\n          <div id=\"ed-panel-isi\"></div>\r\n        </aside>\r\n      </div>\r\n      <nav class=\"ed-tools\">\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"teks\"><span class=\"ico\" data-ikon=\"teks\"></span><span data-i18n=\"alat.teks\">Teks</span></button>\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"foto\"><span class=\"ico\" data-ikon=\"foto\"></span><span data-i18n=\"alat.foto\">Foto</span></button>\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"stiker\"><span class=\"ico\" data-ikon=\"senyum\"></span><span data-i18n=\"alat.stiker\">Stiker</span></button>\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"latar\"><span class=\"ico\" data-ikon=\"palet\"></span><span data-i18n=\"alat.latar\">Latar</span></button>\r\n        <button type=\"button\" class=\"ed-tool\" data-alat=\"lapisan\"><span class=\"ico\" data-ikon=\"lapisan\"></span><span data-i18n=\"alat.lapisan\">Lapisan</span></button>\r\n      </nav>\r\n    </div>\r\n    <input id=\"ed-file\" type=\"file\" accept=\"image/*\" class=\"hidden\">\r\n  </section>\r\n</main>\r\n<div id=\"ks-toast\" class=\"ks-toast\" role=\"status\" aria-live=\"polite\"></div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
  var CSS = "\r\n:root{--p:#534AB7;--p-tua:#3C3489;--p-muda:#EEEDFE;--p-lembut:#CECBF6;--ink:#26215C;--muted:#6E6A8E;--line:#ECEAF6;--bg:#F7F6FD;--card:#FFFFFF;--pink:#D4537E;--pink-muda:#FBEAF0;--teal:#1D9E75;--teal-muda:#E1F5EE;--amber:#EF9F27;--amber-muda:#FAEEDA;--blue:#378ADD;--blue-muda:#E6F1FB;--kuning:#FAC775;--danger:#E24B4A;--r:20px;--sidebar:260px}\r\n*{box-sizing:border-box}\r\n.hidden{display:none!important}\r\nhtml,body{margin:0;min-height:100%}\r\n.ks-body{font-family:'Nunito',system-ui,sans-serif;background:var(--bg);color:var(--ink);-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent}\r\nbutton,input,select,textarea{font:inherit;color:inherit}\r\n.ks-h1,.ks-h2,.judul-font,.ks-logo-text,.ks-topbar-title{font-family:'Baloo 2','Nunito',sans-serif}\r\n.brand-gradient{background:linear-gradient(90deg,var(--pink),var(--p),var(--blue))}\r\n.brand-gradient.bg-clip-text{-webkit-background-clip:text;background-clip:text;color:transparent}\r\n.ico{display:inline-flex;width:22px;height:22px;flex:0 0 auto}\r\n.ico svg{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\r\n.ks-sidebar{position:fixed;top:0;bottom:0;left:0;width:var(--sidebar);background:var(--card);border-right:1px solid var(--line);display:flex;flex-direction:column;z-index:40;overflow-y:auto}\r\n.ks-sidebar-head{position:sticky;top:0;background:var(--card);display:flex;align-items:center;justify-content:space-between;padding:20px 18px 14px;z-index:1}\r\n.ks-logo{display:flex;align-items:center;gap:10px}\r\n.ks-logo-mark{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;color:#fff;background:var(--p);box-shadow:0 4px 0 var(--p-tua)}\r\n.ks-logo-mark .ico{width:24px;height:24px}\r\n.ks-logo-text{font-size:23px;font-weight:800}\r\n.ks-nav{display:flex;flex-direction:column;gap:4px;padding:6px 12px}\r\n.ks-nav-label{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding:16px 14px 6px}\r\n.main-tab-btn,.nav-segera{display:flex;align-items:center;gap:12px;width:100%;border:0;background:transparent;font-weight:800;font-size:15px;padding:11px 14px;border-radius:14px;cursor:pointer;text-align:left;color:var(--ink)}\r\n.main-tab-btn:hover{background:var(--p-muda)}\r\n.main-tab-btn.active{background:var(--p);color:#fff;box-shadow:0 4px 0 var(--p-tua)}\r\n.nav-segera{cursor:default;color:var(--muted)}\r\n.nav-segera .badge{margin-left:auto}\r\n.badge{display:inline-block;font-size:11px;font-weight:800;padding:3px 9px;border-radius:999px;background:var(--amber-muda);color:#633806}\r\n.ks-version{margin-top:auto;padding:14px 18px 18px;color:var(--muted);font-size:12px}\r\n.ks-main{margin-left:var(--sidebar);padding:28px 32px 48px;min-height:100vh}\r\n.main-content-panel{max-width:1080px;margin:0 auto}\r\n.ks-topbar,.ks-backdrop,.ks-hp-only{display:none}\r\n.ks-icon-btn{border:0;background:var(--p-muda);color:var(--ink);width:42px;height:42px;border-radius:14px;cursor:pointer;place-items:center;flex:0 0 auto}\r\n.ks-h1{font-size:34px;font-weight:800;margin:0 0 6px;line-height:1.15}\r\n.ks-h2{font-size:22px;font-weight:800;margin:32px 0 14px}\r\n.ks-muted{color:var(--muted);font-size:15px;margin:0;line-height:1.5}\r\n.ks-card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:20px}\r\n.ks-card-judul{font-weight:800;font-size:17px;margin-bottom:4px;word-break:break-word}\r\n.ks-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:16px}\r\n.ks-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}\r\n.ks-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:0;border-radius:16px;padding:13px 22px;font-weight:800;font-size:15px;cursor:pointer;background:var(--p);color:#fff;min-height:48px;box-shadow:0 4px 0 var(--p-tua);transition:transform .08s,box-shadow .08s}\r\n.ks-btn:active{transform:translateY(3px);box-shadow:0 1px 0 var(--p-tua)}\r\n.ks-btn-kuning{background:var(--kuning);color:#412402;box-shadow:0 4px 0 #BA7517}\r\n.ks-btn-kuning:active{box-shadow:0 1px 0 #BA7517}\r\n.ks-btn-sekunder{background:var(--p-muda);color:var(--p-tua);box-shadow:0 4px 0 var(--p-lembut)}\r\n.ks-btn-sekunder:active{box-shadow:0 1px 0 var(--p-lembut)}\r\n.ks-btn-kecil{padding:8px 14px;min-height:38px;font-size:14px;border-radius:12px;box-shadow:0 3px 0 var(--p-lembut)}\r\n.ks-btn-bahaya{background:#FCEBEB;color:#A32D2D;box-shadow:0 3px 0 #F7C1C1}\r\n.ks-btn-lebar{width:100%}\r\n.hero{position:relative;overflow:hidden;background:var(--p);color:#fff;border-radius:28px;padding:34px 34px 30px;display:grid;grid-template-columns:1.3fr 1fr;gap:20px;align-items:center}\r\n.hero .ks-h1{color:#fff;font-size:38px}\r\n.hero p{color:var(--p-lembut);font-size:16px;line-height:1.5;margin:0 0 22px;max-width:460px}\r\n.hero-kecil{display:inline-block;background:rgba(255,255,255,.14);color:#fff!important;font-weight:800;font-size:13px!important;padding:6px 12px;border-radius:999px;margin:0 0 14px!important}\r\n.hero-art{position:relative;height:220px}\r\n.hero-art .kartu{position:absolute;border-radius:20px;background:#fff;box-shadow:0 14px 30px rgba(20,14,70,.35)}\r\n.hero-art .k1{width:150px;height:190px;right:120px;top:20px;transform:rotate(-8deg);background:var(--pink-muda)}\r\n.hero-art .k2{width:160px;height:200px;right:20px;top:6px;transform:rotate(6deg);background:#fff}\r\n.hero-art .k2 i,.hero-art .k1 i{position:absolute;left:50%;top:30%;width:84px;height:84px;margin-left:-42px;border-radius:50%}\r\n.hero-art .k1 i{background:var(--kuning)}\r\n.hero-art .k2 i{background:var(--p-lembut)}\r\n.hero-art .k2 b,.hero-art .k1 b{position:absolute;left:24px;right:24px;height:12px;border-radius:6px;top:66%;background:var(--line)}\r\n.hero-art .k2 b+b,.hero-art .k1 b+b{top:76%;right:50px}\r\n.hero-art .bintang{position:absolute;width:34px;height:34px;color:var(--kuning)}\r\n.hero-art .bintang svg{width:100%;height:100%;fill:currentColor;stroke:none}\r\n.hero-bulat{position:absolute;border-radius:50%;background:rgba(255,255,255,.08)}\r\n.editor-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}\r\n.ed-card{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:6px;border:0;border-radius:24px;padding:20px 18px 18px;min-height:190px;text-align:left;cursor:pointer;color:#fff;transition:transform .12s}\r\n.ed-card:hover{transform:translateY(-3px)}\r\n.ed-card .ed-ico{width:54px;height:54px;border-radius:18px;background:rgba(255,255,255,.22);display:grid;place-items:center;margin-bottom:auto}\r\n.ed-card .ed-ico .ico{width:28px;height:28px}\r\n.ed-card .ed-judul{font-family:'Baloo 2',sans-serif;font-weight:800;font-size:21px;line-height:1.1;margin-top:18px}\r\n.ed-card .ed-sub{font-size:14px;font-weight:600;opacity:.92}\r\n.ed-card .ed-go{position:absolute;right:16px;top:18px;width:36px;height:36px;border-radius:50%;background:#fff;display:grid;place-items:center}\r\n.ed-card .ed-go .ico{width:20px;height:20px}\r\n.ed-pink{background:var(--pink);box-shadow:0 6px 0 #993556}\r\n.ed-pink .ed-go{color:var(--pink)}\r\n.ed-blue .ed-go{color:var(--blue)}\r\n.ed-teal{background:var(--teal);box-shadow:0 6px 0 #0F6E56}\r\n.ed-amber{background:var(--amber);color:#412402;box-shadow:0 6px 0 #BA7517}\r\n.ed-blue{background:var(--blue);box-shadow:0 6px 0 #185FA5}\r\n.ed-card.segera{cursor:default}\r\n.ed-card.segera:hover{transform:none}\r\n.ed-card.segera .badge{position:absolute;right:16px;top:20px;background:rgba(255,255,255,.9)}\r\n.ajak{display:flex;gap:18px;align-items:center;margin-top:28px;background:var(--amber-muda);border-color:#FAC775}\r\n.ajak-ico{width:64px;height:64px;border-radius:20px;background:#fff;display:grid;place-items:center;color:var(--amber);flex:0 0 auto}\r\n.ajak-ico .ico{width:34px;height:34px}\r\n.ajak .ks-btn{margin-top:12px}\r\n.proyek-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px}\r\n.proyek{background:var(--card);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column}\r\n.proyek-thumb{background:var(--p-muda);aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;cursor:pointer;border:0;padding:0;width:100%}\r\n.proyek-thumb img{width:100%;height:100%;object-fit:contain}\r\n.proyek-isi{padding:12px 14px 14px}\r\n.proyek-nama{font-weight:800;font-size:15px;word-break:break-word}\r\n.proyek-isi .ks-row{margin-top:10px}\r\n.kosong{text-align:center;padding:48px 20px;margin-top:20px}\r\n.kosong .ajak-ico{margin:0 auto 14px;background:var(--p-muda);color:var(--p)}\r\n.ks-form{display:grid;gap:16px}\r\n.ks-field{display:grid;gap:7px;font-weight:800;font-size:14px}\r\n.ks-field small{font-weight:600;color:var(--muted)}\r\n.ks-input{font-weight:600;padding:12px 14px;border:2px solid var(--line);border-radius:14px;background:#fff;min-height:48px;width:100%}\r\n.ks-input:focus{outline:none;border-color:var(--p);box-shadow:0 0 0 4px var(--p-muda)}\r\ntextarea.ks-input{min-height:84px;resize:vertical}\r\n.ks-galat{color:#A32D2D;font-size:14px;font-weight:800}\r\n.ks-galat:empty{display:none}\r\n.chips{display:flex;gap:8px;flex-wrap:wrap}\r\n.chip{border:2px solid var(--line);background:#fff;border-radius:999px;padding:9px 16px;font-weight:800;font-size:14px;cursor:pointer}\r\n.chip.aktif{border-color:var(--p);background:var(--p);color:#fff}\r\n.profil-wrap{display:grid;grid-template-columns:minmax(0,420px) minmax(0,1fr);gap:24px;margin-top:22px;align-items:start}\r\n.profil-card{display:flex;gap:14px;align-items:center}\r\n.avatar{width:52px;height:52px;border-radius:18px;display:grid;place-items:center;font-family:'Baloo 2',sans-serif;font-weight:800;font-size:22px;flex:0 0 auto}\r\n.av-L{background:var(--blue-muda);color:#0C447C}.av-P{background:var(--pink-muda);color:#72243E}.av-N{background:var(--teal-muda);color:#085041}\r\n.bb-layout{display:grid;grid-template-columns:minmax(0,440px) minmax(0,1fr);gap:24px;margin-top:22px;align-items:start}\r\n.bb-kepala{display:flex;align-items:center;gap:14px}\r\n.bb-kepala .ed-ico{width:56px;height:56px;border-radius:18px;background:var(--pink);color:#fff;display:grid;place-items:center;box-shadow:0 4px 0 #993556;flex:0 0 auto}\r\n.bb-kepala .ico{width:30px;height:30px}\r\n.bb-kepala .aa-ico{background:var(--blue);box-shadow:0 4px 0 #185FA5}\r\n.bb-kepala .kl-ico{background:var(--teal);box-shadow:0 4px 0 #0F6E56}\r\n.ed-teal .ed-go{color:var(--teal)}\r\n.ed-amber .ed-go{color:var(--amber)}\r\n.bb-kepala .ms-ico{background:var(--amber);box-shadow:0 4px 0 #BA7517}\r\n.ms-seri{margin-top:18px}\r\n.ms-seri-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}\r\n.kl-foto-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}\r\n.kl-foto-grid:empty{display:none}\r\n.kl-foto{position:relative;aspect-ratio:1;border-radius:12px;overflow:hidden;background:var(--p-muda)}\r\n.kl-foto img{width:100%;height:100%;object-fit:cover;display:block}\r\n.kl-foto-no{position:absolute;left:5px;top:5px;background:rgba(38,33,92,.8);color:#fff;font-size:11px;font-weight:800;border-radius:999px;padding:1px 7px}\r\n.kl-foto-x{position:absolute;right:4px;top:4px;width:26px;height:26px;border:0;border-radius:50%;background:#fff;color:var(--ink);display:grid;place-items:center;cursor:pointer;padding:0}\r\n.kl-foto-x .ico{width:14px;height:14px}\r\n.kl-jumlah{font-size:13px;font-weight:700}\r\n.kl-acara .chip{padding:6px 12px;font-size:13px}\r\n.unggah{position:relative;display:flex;align-items:center;gap:14px;border:2px dashed var(--p-lembut);border-radius:18px;padding:14px;background:var(--p-muda);cursor:pointer}\r\n.unggah input{position:absolute;inset:0;opacity:0;cursor:pointer}\r\n.unggah-pv{width:72px;height:72px;border-radius:50%;background:#fff;display:grid;place-items:center;overflow:hidden;color:var(--p);flex:0 0 auto}\r\n.unggah-pv img{width:100%;height:100%;object-fit:cover}\r\n.dua-kolom{display:grid;grid-template-columns:1fr 1fr;gap:12px}\r\n.tpl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px}\r\n.tpl{border:3px solid transparent;border-radius:18px;background:#fff;padding:6px;cursor:pointer;text-align:center;box-shadow:0 2px 0 var(--line)}\r\n.tpl.aktif{border-color:var(--p);box-shadow:0 4px 0 var(--p-tua)}\r\n.tpl-img{border-radius:12px;overflow:hidden;background:var(--p-muda);display:flex;align-items:center;justify-content:center}\r\n.tpl-img img{width:100%;display:block}\r\n.tpl-nama{font-weight:800;font-size:13px;padding:8px 2px 4px}\r\n.bb-aksi{position:sticky;bottom:12px;margin-top:18px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:12px;display:flex;gap:12px;align-items:center;justify-content:space-between;box-shadow:0 10px 30px rgba(38,33,92,.08)}\r\n.ks-toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,20px);background:var(--ink);color:#fff;padding:13px 20px;border-radius:16px;font-weight:800;font-size:14px;opacity:0;pointer-events:none;transition:all .25s;z-index:90;max-width:calc(100vw - 32px)}\r\n.ks-toast.tampil{opacity:1;transform:translate(-50%,0)}\r\n.ks-toast.galat{background:var(--danger)}\r\n.modal{position:fixed;inset:0;background:rgba(38,33,92,.55);display:flex;align-items:center;justify-content:center;padding:16px;z-index:80}\r\n.modal-isi{background:#fff;border-radius:24px;padding:22px;width:min(460px,100%);max-height:calc(100vh - 32px);overflow:auto}\r\n.modal-isi img{width:100%;border-radius:14px;margin:12px 0;background:var(--p-muda)}\r\n.ekspor-pilih{display:grid;gap:10px;margin-top:14px}\r\n.ekspor-pilih button{display:flex;align-items:center;gap:12px;text-align:left;border:2px solid var(--line);background:#fff;border-radius:16px;padding:12px 14px;cursor:pointer}\r\n.ekspor-pilih button:hover{border-color:var(--p)}\r\n.ekspor-pilih b{display:block;font-size:15px}\r\n.ekspor-pilih small{color:var(--muted);font-weight:600}\r\nbody.mode-editor .ks-sidebar,body.mode-editor .ks-topbar{display:none!important}\r\nbody.ks-body > :not(.ks-sidebar):not(.ks-backdrop):not(.ks-topbar):not(.ks-main):not(.ks-toast):not(.modal):not(.ks-login):not(script):not(style):not(link):not(#__loader){display:none!important}\r\nbody.ks-terkunci > .ks-sidebar,body.ks-terkunci > .ks-backdrop,body.ks-terkunci > .ks-topbar,body.ks-terkunci > .ks-main{display:none!important}\r\n.ks-login{display:none;min-height:100vh;padding:24px 16px;place-items:center;background:radial-gradient(circle at 15% 10%,var(--pink-muda),transparent 45%),radial-gradient(circle at 90% 90%,var(--p-muda),transparent 50%),var(--bg)}\r\nbody.ks-terkunci > .ks-login{display:grid}\r\n.ks-login-kartu{width:100%;max-width:420px;background:var(--card);border:1px solid var(--line);border-radius:24px;padding:28px 22px;box-shadow:0 12px 32px rgba(83,74,183,.12);display:grid;gap:16px}\r\n.ks-login-kartu .ks-h1{font-size:28px;margin:0}\r\n.ks-login-galat{background:#FCEBEB;color:#A32D2D;border-radius:14px;padding:12px 14px;font-weight:700;font-size:14px;line-height:1.5}\r\n.ks-login-galat ul{margin:6px 0 0;padding-left:18px;font-weight:600}\r\n.ks-login-info{background:var(--amber-muda);color:#633806;border-radius:14px;padding:12px 14px;font-weight:700;font-size:14px;line-height:1.5}\r\n.ks-akun{margin-top:auto;padding:14px 18px 0;display:grid;gap:8px}\r\n.ks-akun-email{font-size:13px;font-weight:700;color:var(--muted);word-break:break-all}\r\n.ks-akun + .ks-version{margin-top:0}\r\n.ks-sidebar,.ks-main{transition:transform .25s,margin-left .25s}\r\n.ks-sidebar-head .ks-icon-btn{display:grid}\r\n@media (min-width:768px){\r\n  body.nav-ciut .ks-sidebar{transform:translateX(-100%)}\r\n  body.nav-ciut .ks-main{margin-left:0}\r\n  body.nav-ciut .ks-topbar{display:flex;align-items:center;gap:12px;position:sticky;top:0;background:var(--bg);padding:14px 32px 6px;z-index:20}\r\n  body.nav-ciut .ks-topbar .ks-icon-btn{display:grid}\r\n}\r\n.ks-topbar-title{font-weight:800;font-size:21px}\r\nbody.mode-editor .ks-main{margin-left:0;padding:0}\r\nbody.mode-editor #content-editor{max-width:none}\r\n.ed{display:grid;grid-template-rows:auto minmax(0,1fr) auto;grid-template-columns:minmax(0,1fr);width:100%;height:100vh;height:100dvh;overflow:hidden;background:#EFEDF8}\r\n.ed-top{display:flex;align-items:center;gap:8px;padding:10px 12px;background:#fff;border-bottom:1px solid var(--line)}\r\n.ed-nama{flex:1;min-width:0;font-weight:800;font-size:16px;border:2px solid transparent;border-radius:12px;padding:8px 10px;background:transparent}\r\n.ed-nama:focus{outline:none;border-color:var(--p-lembut)}\r\n.ed-ikon{border:0;background:var(--p-muda);color:var(--ink);width:42px;height:42px;border-radius:14px;display:grid;place-items:center;cursor:pointer;flex:0 0 auto}\r\n.ed-ikon:disabled{opacity:.35;cursor:default}\r\n.ed-mid{display:grid;grid-template-columns:minmax(0,1fr) 340px;min-height:0}\r\n.ed-stage{display:flex;align-items:center;justify-content:center;padding:18px;min-height:0;min-width:0;overflow:hidden}\r\n.ed-stage .canvas-container{box-shadow:0 12px 40px rgba(38,33,92,.18);border-radius:4px}\r\n.ed-panel{background:#fff;border-left:1px solid var(--line);overflow-y:auto;padding:16px 16px 24px}\r\n.ed-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}\r\n.ed-panel-head b{font-family:'Baloo 2',sans-serif;font-size:19px}\r\n.ed-panel-tutup{display:none}\r\n.ed-tools{display:flex;justify-content:center;gap:4px;background:#fff;border-top:1px solid var(--line);padding:6px 6px calc(6px + env(safe-area-inset-bottom))}\r\n.ed-tool{display:flex;flex-direction:column;align-items:center;gap:3px;border:0;background:transparent;border-radius:14px;padding:7px 12px;min-width:64px;font-weight:800;font-size:12px;cursor:pointer;color:var(--muted)}\r\n.ed-tool.aktif{background:var(--p-muda);color:var(--p)}\r\n.ed-label{font-weight:800;font-size:13px;color:var(--muted);margin:16px 0 8px}\r\n.ed-label:first-child{margin-top:0}\r\n.swatch-grid{display:grid;grid-template-columns:repeat(8,1fr);gap:7px}\r\n.swatch{aspect-ratio:1/1;border-radius:10px;border:2px solid rgba(0,0,0,.08);cursor:pointer;padding:0}\r\n.swatch.aktif{outline:3px solid var(--p);outline-offset:2px}\r\n.stiker-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}\r\n.stiker-btn{aspect-ratio:1/1;border:2px solid var(--line);border-radius:14px;background:#FAF9FE;padding:10px;cursor:pointer;color:var(--ink)}\r\n.stiker-btn svg{width:100%;height:100%}\r\n.aksi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\r\n.aksi{display:flex;flex-direction:column;align-items:center;gap:4px;border:2px solid var(--line);background:#fff;border-radius:14px;padding:10px 4px;font-size:12px;font-weight:800;cursor:pointer}\r\n.aksi.bahaya{color:#A32D2D}\r\n.font-list{display:grid;gap:6px}\r\n.font-btn{border:2px solid var(--line);background:#fff;border-radius:12px;padding:8px 12px;text-align:left;font-size:18px;cursor:pointer}\r\n.font-btn.aktif{border-color:var(--p);background:var(--p-muda)}\r\n.ed-range{width:100%;accent-color:var(--p)}\r\n.tekan-kosong{color:var(--muted);font-size:14px;line-height:1.5;background:var(--bg);border-radius:14px;padding:12px}\r\n.badge-ai{background:linear-gradient(90deg,var(--pink),var(--p));color:#fff;letter-spacing:.04em}\r\n.main-tab-btn .badge-ai{margin-left:auto}\r\n.main-tab-btn.active .badge-ai,.seg-btn.aktif .badge-ai{background:#fff;color:var(--p)}\r\n.ed-card .badge-ai{vertical-align:4px;font-family:'Nunito',sans-serif;background:#fff;color:var(--pink)}\r\n.hero-ai{position:absolute;right:-14px;top:-12px;display:flex;align-items:center;gap:4px;background:var(--kuning);color:#412402;font-weight:800;font-size:15px;padding:6px 12px;border-radius:999px;box-shadow:0 4px 0 #BA7517}\r\n.hero-ai .ico{width:18px;height:18px}\r\n.seg{display:inline-flex;gap:6px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:6px;margin-top:20px;max-width:100%}\r\n.seg-btn{display:inline-flex;align-items:center;gap:8px;border:0;background:transparent;border-radius:14px;padding:10px 16px;font-weight:800;font-size:15px;cursor:pointer;color:var(--muted)}\r\n.seg-btn.aktif{background:var(--p);color:#fff;box-shadow:0 3px 0 var(--p-tua)}\r\n.seg-btn .ico{width:20px;height:20px}\r\n.ai-layout{display:grid;grid-template-columns:minmax(0,430px) minmax(0,1fr);gap:24px;margin-top:18px;align-items:start}\r\n.ai-kontrol{display:grid;gap:12px}\r\n.ai-langkah{display:flex;align-items:center;gap:10px;font-family:'Baloo 2',sans-serif;font-size:18px;font-weight:800;margin-top:6px}\r\n.ai-langkah:first-child{margin-top:0}\r\n.ai-no{width:30px;height:30px;border-radius:50%;background:var(--p);color:#fff;display:grid;place-items:center;font-size:15px;flex:0 0 auto;line-height:1}\r\n.ai-unggah{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;border:2px dashed var(--p-lembut);border-radius:20px;background:var(--p-muda);min-height:170px;padding:16px;cursor:pointer;overflow:hidden}\r\n.ai-unggah input{position:absolute;inset:0;opacity:0;cursor:pointer;z-index:2}\r\n.ai-unggah-kosong{display:flex;flex-direction:column;align-items:center;gap:6px}\r\n.ai-unggah-kosong small{font-size:13px;max-width:300px}\r\n.ai-unggah-ico{width:56px;height:56px;border-radius:18px;background:#fff;color:var(--p);display:grid;place-items:center}\r\n.ai-unggah img{max-width:100%;max-height:280px;border-radius:14px;object-fit:contain;display:block}\r\n.ai-unggah-ganti{display:none;background:#fff;color:var(--p-tua);font-weight:800;font-size:13px;padding:6px 14px;border-radius:999px;box-shadow:0 2px 0 var(--p-lembut)}\r\n.ai-unggah.ada{border-style:solid;padding:10px}\r\n.ai-unggah.ada .ai-unggah-kosong{display:none}\r\n.ai-unggah.ada .ai-unggah-ganti{display:inline-block}\r\n.ai-grup{font-size:13px;font-weight:800;color:var(--muted);margin:10px 0 6px}\r\n.ai-grup:first-child{margin-top:0}\r\n.ai-tema-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\r\n.ai-tema{display:flex;flex-direction:column;align-items:center;gap:3px;background:#fff;border:3px solid var(--line);border-radius:16px;padding:5px 5px 8px;cursor:pointer;text-align:center;color:var(--ink);min-width:0}\r\n.ai-tema.aktif{border-color:var(--p);box-shadow:0 4px 0 var(--p-tua)}\r\n.ai-tema-pv{width:100%;height:56px;border-radius:11px;display:grid;place-items:center;font-size:28px;line-height:1}\r\n.ai-tema b{font-size:13px;line-height:1.2}\r\n.ai-tema small{font-size:11px;font-weight:700;color:var(--muted);line-height:1.2}\r\n.ai-rasio{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}\r\n.ai-rasio button{border:2px solid var(--line);background:#fff;border-radius:14px;padding:10px 4px 8px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;font-weight:800;font-size:14px;min-width:0}\r\n.ai-rasio button i{display:block;border:2.5px solid var(--p-lembut);border-radius:4px;margin-bottom:2px}\r\n.ai-rasio button.aktif{border-color:var(--p);background:var(--p-muda)}\r\n.ai-rasio button.aktif i{border-color:var(--p)}\r\n.ai-rasio small{font-size:11px;color:var(--muted);font-weight:700;line-height:1.2}\r\n.chip .titik{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:6px;vertical-align:-1px;border:1px solid rgba(0,0,0,.12)}\r\n.ai-aman{display:flex;gap:10px;align-items:flex-start;background:var(--teal-muda);color:#085041;border-radius:14px;padding:10px 12px;font-size:13px;font-weight:700;line-height:1.45;margin:4px 0 0}\r\n.ai-aman .ico{width:20px;height:20px}\r\n.ai-catatan{font-size:13px;text-align:center;margin-top:-4px}\r\n.ks-btn:disabled{opacity:.55;cursor:default}\r\n.ai-hasil-judul{margin-top:0}\r\n.ai-status{margin:-6px 0 12px;font-weight:800;color:var(--p)}\r\n.ai-kosong{margin-top:0}\r\n.ai-hasil-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}\r\n.ai-hasil-grid:empty{display:none}\r\n.ai-kartu{position:relative;background:#fff;border:1px solid var(--line);border-radius:20px;padding:10px}\r\n.ai-kartu > img{width:100%;display:block;border-radius:14px;background:var(--p-muda)}\r\n.ai-nomor{position:absolute;top:18px;left:18px;background:rgba(38,33,92,.75);color:#fff;font-size:12px;font-weight:800;padding:3px 9px;border-radius:999px}\r\n.ai-tunggu{border-radius:14px;background:linear-gradient(110deg,var(--p-muda) 30%,#fff 50%,var(--p-muda) 70%);background-size:200% 100%;animation:ks-kilap 1.4s linear infinite;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:var(--p);font-weight:800;font-size:14px;text-align:center;padding:16px}\r\n.ai-tunggu.gagal{animation:none;background:#FCEBEB;color:#A32D2D}\r\n.ai-putar{width:34px;height:34px;border-radius:50%;border:4px solid var(--p-lembut);border-top-color:var(--p);animation:ks-putar .9s linear infinite}\r\n@keyframes ks-kilap{to{background-position:-200% 0}}\r\n@keyframes ks-putar{to{transform:rotate(360deg)}}\r\n.ai-kartu .aksi-grid,.modal-isi .aksi-grid{margin-top:10px}\r\n.aksi .ico{width:20px;height:20px}\r\n.aksi.utama{background:var(--p);border-color:var(--p);color:#fff}\r\n.aksi.tersimpan{background:var(--teal-muda);border-color:var(--teal-muda);color:#085041}\r\n.ai-banding{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}\r\n.ai-banding b{font-size:13px}\r\n.ai-banding img{margin:6px 0 0!important;object-fit:contain}\r\n@media (max-width:1000px){.editor-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.bb-layout,.profil-wrap,.ai-layout{grid-template-columns:1fr}.ai-hasil-judul{margin-top:12px}}\r\n@media (max-width:767px){\r\n  .ks-sidebar{width:min(86vw,320px);transform:translateX(-100%);transition:transform .25s}\r\n  body.nav-open .ks-sidebar{transform:translateX(0);box-shadow:0 0 40px rgba(0,0,0,.15)}\r\n  body.nav-open .ks-backdrop{display:block;position:fixed;inset:0;background:rgba(38,33,92,.4);z-index:30}\r\n  .ks-hp-only{display:grid}\r\n  .ks-topbar{display:flex;align-items:center;gap:12px;position:sticky;top:0;background:var(--bg);padding:12px 16px;z-index:20}\r\n  .ks-topbar .ks-icon-btn{display:grid}\r\n  .ks-topbar-title{font-weight:800;font-size:21px}\r\n  .ks-main{margin-left:0;padding:6px 16px 40px}\r\n  .ks-h1{font-size:27px}\r\n  .hero{grid-template-columns:1fr;padding:24px 22px;border-radius:24px}\r\n  .hero .ks-h1{font-size:28px}\r\n  .hero-art{display:none}\r\n  .editor-grid{gap:12px}\r\n  .ed-card{min-height:168px;padding:16px 14px;border-radius:20px}\r\n  .ed-card .ed-judul{font-size:18px}\r\n  .ed-card .ed-sub{font-size:13px}\r\n  .ed-card .ed-go{width:32px;height:32px;right:12px;top:14px}\r\n  .ed-card.segera .badge{right:10px;top:14px}\r\n  .ajak{flex-direction:column;text-align:center}\r\n  .dua-kolom{grid-template-columns:1fr 1fr}\r\n  .tpl-grid{grid-template-columns:repeat(2,minmax(0,1fr))}\r\n  .ed-mid{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr) auto}\r\n  .ed-top{gap:6px;padding:8px}\r\n  .ed-unduh-teks{display:none}\r\n  #ed-unduh{padding:8px 12px}\r\n  .ed-panel{border-left:0;border-top:1px solid var(--line);border-radius:22px 22px 0 0;max-height:46vh;box-shadow:0 -10px 30px rgba(38,33,92,.08)}\r\n  .ed-panel.tutup{display:none}\r\n  .ed-panel-tutup{display:grid}\r\n  .ed-tool{min-width:0;flex:1;padding:7px 4px}\r\n  .swatch-grid{grid-template-columns:repeat(8,1fr)}\r\n  .seg{display:flex}\r\n  .seg-btn{flex:1;justify-content:center;padding:10px 6px;font-size:14px}\r\n  .ai-hasil-grid{grid-template-columns:1fr}\r\n  .ai-tema small{display:none}\r\n  .ai-tema-pv{height:48px;font-size:24px}\r\n  .ai-rasio small{font-size:10px}\r\n}\r\n";
  var BODY_CLASS = ["ks-body","ks-terkunci"];
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
    'nav.tutup-menu': 'Tutup menu',
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
    'galat.editor': 'Editor gagal dimuat. Periksa koneksi lalu muat ulang.',
    'umum.ai': 'AI',
    'bb.mode-ai': 'Foto AI',
    'bb.mode-manual': 'Kartu manual',
    'ai.sub': 'Unggah satu foto si kecil, pilih tema, dan AI menyulapnya jadi foto newborn ala studio profesional.',
    'ai.manual-sub': 'Isi data si kecil, pilih desain kartu, lalu sesuaikan sesukamu.',
    'ai.langkah-foto': 'Foto si kecil',
    'ai.foto-judul': 'Ketuk untuk unggah foto',
    'ai.foto-sub': 'Satu foto, wajah terlihat jelas, cahaya cukup. Foto hanya dikirim ke AI Google untuk diproses.',
    'ai.foto-ganti': 'Ganti foto',
    'ai.langkah-tema': 'Pilih tema',
    'ai.langkah-ukuran': 'Ukuran foto',
    'ai.langkah-opsi': 'Sentuhan akhir',
    'ai.nuansa': 'Nuansa warna',
    'ai.jumlah': 'Jumlah variasi',
    'ai.buat': 'Buat foto newborn',
    'ai.perhalus': 'Perhalus foto saja',
    'ai.perhalus-sub': 'Tanpa ganti tema: cahaya studio, kulit halus alami, latar bersih.',
    'ai.batal': 'Batalkan',
    'ai.aman': 'Wajah si kecil dijaga tetap sama, selalu berpakaian rapi, pose aman, tanpa tulisan di foto.',
    'ai.hasil': 'Hasil foto',
    'ai.hasil-kosong-judul': 'Foto ajaibmu muncul di sini',
    'ai.hasil-kosong': 'Unggah foto, pilih tema, lalu tekan Buat foto newborn. Biasanya selesai dalam 20-60 detik.',
    'ai.memproses': 'AI sedang memotret... {selesai}/{total}',
    'ai.menunggu': 'Menunggu giliran',
    'ai.memproses-satu': 'Sedang dibuat...',
    'ai.sudah-simpan': 'Tersimpan',
    'ai.selesai': '{n} foto siap!',
    'ai.sebagian': '{n} dari {total} foto berhasil.',
    'ai.unduh': 'Unduh',
    'ai.bagikan': 'Bagikan',
    'ai.simpan': 'Simpan',
    'ai.tersimpan': 'Tersimpan di Proyekku',
    'ai.jadikan-kartu': 'Jadikan kartu',
    'ai.ulang': 'Buat ulang',
    'ai.bandingkan': 'Bandingkan',
    'ai.sebelum': 'Sebelum',
    'ai.sesudah': 'Sesudah',
    'ai.kartu-isi-data': 'Foto AI sudah terpasang. Isi nama si kecil, pilih desain, lalu tekan Buat kartu.',
    'ai.bagikan-tidak-bisa': 'Perangkat ini belum bisa membagikan langsung. Foto diunduh saja ya.',
    'ai.nama-proyek': 'Foto AI {tema}',
    'ai.perhalus-nama': 'Foto diperhalus',
    'nav.aianak': 'AI Foto Anak',
    'nav.kolase': 'Kolase Anak',
    'nav.milestone': 'Milestone',
    'ms.judul': 'Milestone',
    'ms.sub': 'Abadikan tiap bulan, ulang tahun, dan momen pertama si kecil. Bulan depan tinggal ganti foto, gayanya tetap sama.',
    'ms.mode': 'Jenis momen',
    'ms.mode-bulanan': 'Bulanan',
    'ms.mode-ultah': 'Ulang tahun',
    'ms.mode-pertama': 'Momen pertama',
    'ms.nama': 'Nama si kecil',
    'ms.bulan-ke': 'Umur (bulan ke-)',
    'ms.tahun-ke': 'Ulang tahun ke-',
    'ms.umur-otomatis': 'Terisi otomatis dari tanggal lahir: {umur}',
    'ms.momen': 'Momen pertama apa?',
    'ms.momen-lain': 'Lainnya',
    'ms.momen-lain-ph': 'Contoh: Naik sepeda',
    'ms.tanggal': 'Tanggal foto',
    'ms.tgl-lahir': 'Tanggal lahir (opsional)',
    'ms.berat': 'Berat (kg)',
    'ms.tinggi': 'Tinggi (cm)',
    'ms.bisa': 'Sekarang aku bisa... (satu per baris)',
    'ms.bisa-ph': 'Tengkurap' + String.fromCharCode(10) + 'Tertawa keras',
    'ms.suka': 'Kesukaanku',
    'ms.suka-ph': 'Contoh: Lagu cicak di dinding',
    'ms.foto': 'Foto sekarang',
    'ms.foto-sub': 'Ketuk untuk memilih foto',
    'ms.foto-dulu': 'Foto dulu (untuk desain Dulu & Sekarang)',
    'ms.pilih-desain': 'Pilih desain',
    'ms.buat': 'Buat milestone',
    'ms.seri-judul': 'Lanjutkan seri',
    'ms.seri-sub': 'Gaya dan data si kecil dipakai lagi. Tinggal ganti foto dan capaian baru.',
    'ms.seri-lanjut': 'Lanjut: {judul}',
    'ms.seri-dimuat': 'Seri dimuat. Ganti foto dan capaian, lalu tekan Buat milestone.',
    'ms.galat-nama': 'Isi nama si kecil (maksimal 40 huruf).',
    'ms.galat-foto': 'Pilih foto si kecil dulu ya.',
    'ms.galat-foto-dulu': 'Desain Dulu & Sekarang butuh foto dulu juga.',
    'ms.galat-bulan': 'Umur bulanan antara 1 sampai 12.',
    'ms.galat-tahun': 'Ulang tahun ke-1 sampai ke-12.',
    'ms.galat-momen': 'Pilih momen pertamanya (atau tulis sendiri).',
    'ms.galat-berat': 'Berat antara 1 sampai 60 kg.',
    'ms.galat-tinggi': 'Tinggi antara 30 sampai 180 cm.',
    'ms.judul-bulan': '{n} Bulan',
    'ms.judul-tahun': 'Ulang Tahun ke-{n}',
    'ms.sapaan-bulan': 'Hore, aku {n} bulan!',
    'ms.sapaan-tahun': 'Hore, aku {n} tahun!',
    'ms.sapaan-pertama': 'Yeay, momen pertamaku!',
    'ms.satuan-bulan': 'BULAN',
    'ms.satuan-tahun': 'TAHUN',
    'ms.berat-tampil': 'Berat {v}',
    'ms.tinggi-tampil': 'Tinggi {v}',
    'ms.bisa-judul': 'Sekarang aku bisa:',
    'ms.suka-tampil': 'Kesukaanku: {v}',
    'ms.momen-gigi': 'Gigi Pertama',
    'ms.momen-jalan': 'Langkah Pertama',
    'ms.momen-kata': 'Kata Pertama',
    'ms.momen-makan': 'Makan Pertama',
    'ms.momen-merangkak': 'Merangkak Pertama',
    'ms.momen-duduk': 'Duduk Sendiri',
    'ms.momen-rambut': 'Potong Rambut Pertama',
    'ms.momen-sekolah': 'Hari Pertama Sekolah',
    'ms.nama-proyek': 'Milestone {nama} - {judul}',
    'kl.judul': 'Kolase Anak',
    'kl.sub': 'Gabungkan 2-12 foto si kecil jadi satu cerita. Pilih tata letak, lalu hias sesukamu.',
    'kl.foto': 'Foto-foto momen',
    'kl.foto-sub': 'Ketuk untuk pilih beberapa foto sekaligus (2-12). Urutan foto = urutan di kolase.',
    'kl.tambah-foto': 'Tambah foto',
    'kl.jumlah': '{n} dari 12 foto',
    'kl.hapus-foto': 'Hapus foto {n}',
    'kl.acara': 'Judul acara',
    'kl.acara-ph': 'Contoh: Liburan ke Pantai',
    'kl.tanggal': 'Tanggal',
    'kl.tampilan': 'Tampilan',
    'kl.warna': 'Warna',
    'kl.jarak': 'Jarak antarfoto',
    'kl.sudut': 'Sudut foto',
    'kl.pilih-tata-letak': 'Pilih tata letak',
    'kl.pratinjau-contoh': 'Pratinjau memakai kotak contoh. Unggah foto untuk melihat hasil aslinya.',
    'kl.buat': 'Buat kolase',
    'kl.galat-foto-kurang': 'Pilih minimal 2 foto dulu ya.',
    'kl.galat-foto-lebih': 'Maksimal 12 foto dalam satu kolase.',
    'kl.galat-tata-letak': 'Tata letak ini tidak cocok untuk jumlah foto sekarang. Pilih yang lain.',
    'kl.galat-judul': 'Judul maksimal 40 huruf.',
    'kl.galat-baca': 'Ada foto yang tidak bisa dibaca dan dilewati.',
    'kl.nama-proyek': 'Kolase {judul}',
    'kl.nama-polos': 'Kolase Anak',
    'kl.palet-pastel': 'Pastel',
    'kl.palet-ceria': 'Ceria',
    'kl.palet-alam': 'Alam',
    'kl.palet-malam': 'Malam',
    'kl.palet-putih': 'Putih',
    'kl.jarak-rapat': 'Rapat',
    'kl.jarak-sedang': 'Sedang',
    'kl.jarak-lega': 'Lega',
    'kl.sudut-kotak': 'Kotak',
    'kl.sudut-membulat': 'Membulat',
    'kl.acara-liburan': 'Liburan Seru',
    'kl.acara-sekolah': 'Hari Pertama Sekolah',
    'kl.acara-ultah': 'Selamat Ulang Tahun',
    'kl.acara-keluarga': 'Momen Bersama Keluarga',
    'kl.acara-lebaran': 'Lebaran Bahagia',
    'kl.acara-wisuda': 'Wisuda TK',
    'kl.acara-main': 'Main Seharian',
    'kl.tl-grid': 'Grid rapi',
    'kl.tl-mozaik': 'Mozaik',
    'kl.tl-sorot': 'Satu sorotan',
    'kl.tl-polaroid': 'Polaroid',
    'kl.tl-scrapbook': 'Scrapbook',
    'kl.tl-film': 'Film strip',
    'kl.tl-hati': 'Bentuk hati',
    'kl.tl-gelembung': 'Gelembung',
    'kl.tl-kolom': 'Kolom',
    'kl.tl-baris': 'Baris',
    'kl.tl-lengkung': 'Lengkung',
    'kl.tl-tangga': 'Zig-zag',
    'aa.judul': 'AI Foto Anak',
    'aa.sub': 'Unggah foto si kecil, pilih gaya, dan AI mengubahnya jadi kartun, kostum impian, atau latar ajaib.',
    'aa.langkah-foto': 'Foto si kecil',
    'aa.foto-judul': 'Ketuk untuk unggah foto anak',
    'aa.foto-sub': 'Satu anak saja, wajah menghadap kamera dan terang. Foto hanya dikirim ke AI Google untuk diproses.',
    'aa.langkah-mode': 'Mau diubah jadi apa?',
    'aa.langkah-gaya': 'Pilih gaya',
    'aa.langkah-opsi': 'Ukuran & jumlah',
    'aa.buat': 'Sulap fotonya',
    'aa.aman': 'Pakaian selalu sopan, pose aman, tanpa tulisan. Gaya sudah dikunci, tidak ada perintah bebas.',
    'aa.catatan-wajah': 'Catatan: AI menjaga wajah si kecil semirip mungkin, tapi hasil kartun/kostum bisa sedikit berbeda. Coba Buat ulang bila kurang mirip.',
    'aa.hasil-kosong': 'Unggah foto, pilih gaya, lalu tekan Sulap fotonya. Biasanya selesai dalam 20-60 detik.',
    'aa.galat-gaya': 'Pilih salah satu gaya dulu.',
    'aa.edit': 'Edit & hias',
    'aa.nama-proyek': 'AI Anak {gaya}',
    'aa.mode-kartun': 'Kartun',
    'aa.mode-kartun-sub': 'Jadi karakter lucu',
    'aa.mode-kostum': 'Kostum',
    'aa.mode-kostum-sub': 'Cita-cita & dongeng',
    'aa.mode-latar': 'Latar ajaib',
    'aa.mode-latar-sub': 'Pindah ke dunia lain',
    'aa.mode-hapus': 'Hapus latar',
    'aa.mode-hapus-sub': 'Latar polos rapi',
    'aa.gaya-kartun-3d': 'Kartun 3D',
    'aa.gaya-kartun-3d-sub': 'Seperti film animasi',
    'aa.gaya-anime': 'Anime',
    'aa.gaya-anime-sub': 'Lembut ala Jepang',
    'aa.gaya-cat-air': 'Cat air',
    'aa.gaya-cat-air-sub': 'Lukisan lembut',
    'aa.gaya-buku-cerita': 'Buku cerita',
    'aa.gaya-buku-cerita-sub': 'Ilustrasi dongeng',
    'aa.gaya-astronaut': 'Astronaut',
    'aa.gaya-astronaut-sub': 'Siap ke bulan',
    'aa.gaya-putri': 'Putri',
    'aa.gaya-putri-sub': 'Gaun dongeng',
    'aa.gaya-pangeran': 'Pangeran',
    'aa.gaya-pangeran-sub': 'Mahkota & jubah',
    'aa.gaya-pahlawan': 'Pahlawan super',
    'aa.gaya-pahlawan-sub': 'Jubah berkibar',
    'aa.gaya-dokter': 'Dokter',
    'aa.gaya-dokter-sub': 'Jas putih cilik',
    'aa.gaya-pilot': 'Pilot',
    'aa.gaya-pilot-sub': 'Kapten pesawat',
    'aa.gaya-pemadam': 'Pemadam kebakaran',
    'aa.gaya-pemadam-sub': 'Helm merah berani',
    'aa.gaya-luar-angkasa': 'Luar angkasa',
    'aa.gaya-luar-angkasa-sub': 'Planet & bintang',
    'aa.gaya-bawah-laut': 'Bawah laut',
    'aa.gaya-bawah-laut-sub': 'Ikan & terumbu',
    'aa.gaya-hutan-dongeng': 'Hutan dongeng',
    'aa.gaya-hutan-dongeng-sub': 'Jamur & kunang-kunang',
    'aa.gaya-istana': 'Istana',
    'aa.gaya-istana-sub': 'Kastil pastel',
    'aa.gaya-latar-putih': 'Latar putih',
    'aa.gaya-latar-putih-sub': 'Rapi untuk dokumen',
    'aa.gaya-latar-pastel': 'Latar pastel',
    'aa.gaya-latar-pastel-sub': 'Gradasi lembut',
    'ai.lihat-judul': 'Foto AI',
    'ai.nomor': 'Foto {n}',
    'ai.grup-klasik': 'Klasik & lembut',
    'ai.grup-mimpi': 'Dunia mimpi',
    'ai.grup-lucu': 'Lucu & menggemaskan',
    'ai.grup-nuansa': 'Nuansa khas',
    'ai.tema-studio-putih': 'Studio putih',
    'ai.tema-studio-putih-sub': 'Bersih dan elegan',
    'ai.tema-keranjang-rotan': 'Keranjang rotan',
    'ai.tema-keranjang-rotan-sub': 'Hangat dan klasik',
    'ai.tema-bungkus-pastel': 'Bungkus pastel',
    'ai.tema-bungkus-pastel-sub': 'Bedong lembut',
    'ai.tema-rustic': 'Kayu & bulu',
    'ai.tema-rustic-sub': 'Rustic natural',
    'ai.tema-awan-lembut': 'Awan lembut',
    'ai.tema-awan-lembut-sub': 'Tidur di awan',
    'ai.tema-bulan-bintang': 'Bulan & bintang',
    'ai.tema-bulan-bintang-sub': 'Mimpi indah',
    'ai.tema-taman-bunga': 'Taman bunga',
    'ai.tema-taman-bunga-sub': 'Segar dan manis',
    'ai.tema-pelangi': 'Pelangi ceria',
    'ai.tema-pelangi-sub': 'Warna-warni lembut',
    'ai.tema-kostum-hewan': 'Kostum hewan',
    'ai.tema-kostum-hewan-sub': 'Topi rajut beruang',
    'ai.tema-mahkota': 'Pangeran & putri',
    'ai.tema-mahkota-sub': 'Mahkota kain mungil',
    'ai.tema-islami': 'Islami',
    'ai.tema-islami-sub': 'Bedong putih syahdu',
    'ai.tema-batik': 'Batik Nusantara',
    'ai.tema-batik-sub': 'Kain jarik hangat',
    'ai.nuansa-pink': 'Pink',
    'ai.nuansa-biru': 'Biru',
    'ai.nuansa-netral': 'Netral',
    'ai.nuansa-krem': 'Krem',
    'ai.rasio-1-1': '1:1',
    'ai.rasio-1-1-sub': 'Post IG',
    'ai.rasio-4-5': '4:5',
    'ai.rasio-4-5-sub': 'Feed / 10R',
    'ai.rasio-9-16': '9:16',
    'ai.rasio-9-16-sub': 'Story / WA',
    'ai.rasio-3-4': '3:4',
    'ai.rasio-3-4-sub': 'Cetak foto',
    'ai.galat-foto': 'Unggah foto si kecil dulu ya.',
    'ai.galat-tema': 'Pilih salah satu tema dulu.',
    'ai.galat-rasio': 'Pilih ukuran foto.',
    'ai.galat-nuansa': 'Pilih nuansa warna.',
    'ai.galat-jumlah': 'Jumlah variasi 1 sampai 4.',
    'ai.galat-kuota': 'Batas pemakaian AI di akun Google ini sedang tercapai. Tunggu beberapa menit lalu coba lagi.',
    'ai.galat-sibuk': 'Server AI Google sedang sibuk. Coba lagi sebentar lagi.',
    'ai.galat-ditolak': 'Permintaan ditolak AI. Coba foto lain yang lebih jelas.',
    'ai.galat-akses': 'AI belum bisa diakses. Buka aplikasi ini lewat Gemini Canvas lalu coba lagi.',
    'ai.galat-umum': 'AI gagal membuat foto. Coba lagi.',
    'ai.galat-jaringan': 'Koneksi internet terputus. Periksa sinyal lalu coba lagi.',
    'ai.galat-kosong': 'AI tidak mengirim gambar. Coba lagi atau pilih tema lain.',
    'ai.galat-diblokir': 'Foto ditolak filter keamanan AI. Coba foto lain, pastikan si kecil berpakaian.',
    'ai.galat-waktu': 'AI terlalu lama merespons. Coba lagi.',
    'ai.dibatalkan': 'Pembuatan foto dibatalkan.',
    'beranda.sapa-pendek': 'Hai keluarga {nama}',
    'beranda.ai-judul': 'Foto newborn ala studio, cukup dari HP',
    'beranda.ai-sub': 'Unggah satu foto si kecil, pilih tema lucu, dan AI menyulapnya jadi foto newborn profesional. Wajahnya tetap si kecil.',
    'beranda.ai-mulai': 'Buat foto newborn dengan AI',
    'editor.babyborn-ai-sub': 'Foto newborn AI dan kartu kelahiran',
    'login.judul': 'Masuk ke Kids Studio',
    'login.sub': 'Ketik email yang kamu pakai saat membeli Kids Studio di Lynk.id.',
    'login.label': 'Email pembelian',
    'login.ph': 'contoh: nama@gmail.com',
    'login.masuk': 'Masuk',
    'login.memproses': 'Memeriksa email...',
    'login.bantuan': 'Belum punya akses? Beli Kids Studio di Lynk.id, lalu masuk dengan email yang sama. Foto si kecil tetap tersimpan di HP-mu, tidak dikirim ke server kami.',
    'login.keluar': 'Keluar',
    'login.selamat': 'Selamat datang, {nama}!',
    'login.selamat-anon': 'Berhasil masuk. Selamat berkarya!',
    'login.ditendang': 'Berhasil masuk. Perangkat lain yang paling lama login dikeluarkan (batas {max} perangkat).',
    'login.sudah-keluar': 'Kamu sudah keluar.',
    'login.g-EMAIL_TIDAK_VALID': 'Format email belum benar. Periksa lagi ya.',
    'login.g-TIDAK_TERDAFTAR': 'Email ini belum terdaftar. Pakai email yang sama saat membeli Kids Studio di Lynk.id. Baru bayar? Tunggu 1 menit lalu coba lagi.',
    'login.g-NONAKTIF': 'Akun ini sedang tidak aktif. Hubungi admin Kids Studio.',
    'login.g-SESI_HABIS': 'Kamu dikeluarkan karena akun ini masuk di perangkat lain. Silakan masuk lagi.',
    'login.g-TERLALU_SERING': 'Terlalu banyak percobaan. Tunggu 1 menit lalu coba lagi.',
    'login.g-GAGAL': 'Server login sedang bermasalah. Coba lagi sebentar lagi.',
    'login.g-jaringan': 'Tidak bisa terhubung ke server login. Coba langkah ini:',
    'login.tips-1': 'Ganti jaringan (WiFi ke data seluler, atau sebaliknya).',
    'login.tips-2': 'Matikan VPN atau aplikasi penghemat data.',
    'login.tips-3': 'Buka lewat Chrome atau Safari.',
    'login.inapp': 'Kamu membuka dari aplikasi {app}. Supaya login lancar, ketuk menu titik tiga lalu pilih "Buka di browser" (Chrome atau Safari).'
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
  function terapkanTemplate(tpl, data, ukuranId, varian, tampilData) {
    var uk = UKURAN[ukuranId];
    if (!uk) throw new Error('ukuran tidak dikenal: ' + ukuranId);
    var pal = tpl.palet[varian] || tpl.palet.N;
    var m = tampilData || dataBayiTampil(data);
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
      if (e.jenis === 'foto') o.src = (data && data[e.sumber || 'foto']) || null;
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
  ],
  milestone: [
    {
      id: 'angka-besar', nama: 'Angka Besar',
      palet: {
        L: { a: '#378ADD', t: '#0C447C', l: '#B5D4F4', bg: '#E6F1FB' },
        P: { a: '#D4537E', t: '#72243E', l: '#F4C0D1', bg: '#FBEAF0' },
        N: { a: '#1D9E75', t: '#085041', l: '#9FE1CB', bg: '#E1F5EE' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '#FFFFFF' },
        { jenis: 'stiker', id: 'bintang', x: 90, y: 0.08, size: 70, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'balon', x: 910, y: 0.1, size: 110, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'kilau', x: 920, y: 0.9, size: 60, warnaStiker: '$l' },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.09, size: 62, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', lebar: 760 },
        { jenis: 'teks', teks: '{tanggal}', x: 500, y: 0.09, dy: 58, size: 26, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 760, perlu: ['tanggal'] },
        { jenis: 'teks', teks: '{angka}', x: 260, y: 0.47, size: 380, font: 'Baloo 2', tebalHuruf: 800, warna: '$a', lebar: 460, tinggiBaris: 1, perlu: ['angka'] },
        { jenis: 'teks', teks: '{satuan}', x: 260, y: 0.47, dy: 215, size: 64, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', jarakHuruf: 200, lebar: 460, perlu: ['angka'] },
        { jenis: 'teks', teks: '{momen}', x: 250, y: 0.47, size: 80, font: 'Baloo 2', tebalHuruf: 800, warna: '$a', lebar: 400, tinggiBaris: 1, perlu: ['momen'] },
        { jenis: 'bulat', x: 690, y: 0.47, r: 270, warna: '#FFFFFF' },
        { jenis: 'foto', x: 690, y: 0.47, w: 500, h: 500, bentuk: 'bulat', garis: '$l', tebal: 14 },
        { jenis: 'kotak', x: 500, y: 0.85, w: 760, h: 76, rx: 38, warna: '#FFFFFF', garis: '$l', tebal: 4, perlu: ['ukuran'] },
        { jenis: 'teks', teks: '{ukuran}', x: 500, y: 0.85, size: 30, font: 'Baloo 2', tebalHuruf: 700, warna: '$t', lebar: 740, perlu: ['ukuran'] },
        { jenis: 'teks', teks: '{suka}', x: 500, y: 0.85, dy: 70, size: 24, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 900, perlu: ['suka'] }
      ]
    },
    {
      id: 'papan-tulis', nama: 'Papan Tulis',
      palet: {
        L: { a: '#85B7EB', t: '#FFFFFF', l: '#B5D4F4', bg: '#2F4A3A' },
        P: { a: '#F4C0D1', t: '#FFFFFF', l: '#ED93B1', bg: '#2F4A3A' },
        N: { a: '#FAC775', t: '#FFFFFF', l: '#C0DD97', bg: '#2F4A3A' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '#25382D' },
        { jenis: 'kotak', x: 500, y: 0.5, w: 960, hTinggi: 0.96, warna: 'rgba(0,0,0,0)', garis: '#8C5A2B', tebal: 22 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.1, size: 70, font: 'Caveat', tebalHuruf: 700, warna: '$t', lebar: 860 },
        { jenis: 'teks', teks: '{judul}', x: 500, y: 0.1, dy: 74, size: 52, font: 'Baloo 2', tebalHuruf: 800, warna: '$a', lebar: 860 },
        { jenis: 'foto', x: 290, y: 0.52, w: 400, h: 480, bentuk: 'kotak', garis: '#FFFFFF', tebal: 10, sudut: -3 },
        { jenis: 'teks', teks: '{tanggal}', x: 730, y: 0.34, size: 32, font: 'Caveat', tebalHuruf: 700, warna: '$t', lebar: 400, perlu: ['tanggal'] },
        { jenis: 'teks', teks: '{ukuran}', x: 730, y: 0.34, dy: 56, size: 30, font: 'Caveat', tebalHuruf: 700, warna: '$t', lebar: 400, perlu: ['ukuran'] },
        { jenis: 'teks', teks: '{bisaJudul}', x: 730, y: 0.5, size: 36, font: 'Caveat', tebalHuruf: 700, warna: '$a', lebar: 400, perlu: ['bisa'] },
        { jenis: 'teks', teks: '{bisa}', x: 730, y: 0.62, size: 30, font: 'Caveat', tebalHuruf: 700, warna: '$t', lebar: 380, rata: 'left', perlu: ['bisa'] },
        { jenis: 'teks', teks: '{suka}', x: 500, y: 0.89, size: 32, font: 'Caveat', tebalHuruf: 700, warna: '$t', lebar: 820, perlu: ['suka'] },
        { jenis: 'stiker', id: 'bintang', x: 880, y: 0.1, size: 50, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'kilau', x: 120, y: 0.1, size: 44, warnaStiker: '$l' }
      ]
    },
    {
      id: 'kalender', nama: 'Kalender Tumbuh',
      palet: {
        L: { a: '#378ADD', t: '#0C447C', l: '#B5D4F4', bg: '#E6F1FB' },
        P: { a: '#D4537E', t: '#72243E', l: '#F4C0D1', bg: '#FBEAF0' },
        N: { a: '#EF9F27', t: '#633806', l: '#FAC775', bg: '#FAEEDA' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg' },
        { jenis: 'kotak', x: 500, y: 0.53, w: 860, hTinggi: 0.86, rx: 40, warna: '#FFFFFF', bayangan: true },
        { jenis: 'kotak', x: 500, y: 0.1, dy: 65, w: 860, h: 130, rx: 40, warna: '$a' },
        { jenis: 'bulat', x: 300, y: 0.1, dy: 10, r: 18, warna: '#FFFFFF' },
        { jenis: 'bulat', x: 700, y: 0.1, dy: 10, r: 18, warna: '#FFFFFF' },
        { jenis: 'teks', teks: '{judul}', x: 500, y: 0.1, dy: 75, size: 50, font: 'Baloo 2', tebalHuruf: 800, warna: '#FFFFFF', lebar: 800 },
        { jenis: 'foto', x: 500, y: 0.48, w: 620, h: 470, bentuk: 'membulat' },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.8, size: 56, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', lebar: 800 },
        { jenis: 'teks', teks: '{tanggal}', x: 500, y: 0.8, dy: 54, size: 26, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 800, perlu: ['tanggal'] },
        { jenis: 'teks', teks: '{ukuran}', x: 500, y: 0.8, dy: 96, size: 26, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 800, perlu: ['ukuran'] }
      ]
    },
    {
      id: 'dulu-sekarang', nama: 'Dulu & Sekarang', perluDulu: true,
      palet: {
        L: { a: '#378ADD', t: '#0C447C', l: '#B5D4F4', bg: '#E6F1FB' },
        P: { a: '#D4537E', t: '#72243E', l: '#F4C0D1', bg: '#FBEAF0' },
        N: { a: '#534AB7', t: '#26215C', l: '#CECBF6', bg: '#EEEDFE' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '#FFFFFF' },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.1, size: 60, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', lebar: 900 },
        { jenis: 'teks', teks: '{judul}', x: 500, y: 0.1, dy: 60, size: 36, font: 'Nunito', tebalHuruf: 800, warna: '$a', lebar: 900 },
        { jenis: 'kotak', x: 270, y: 0.5, w: 410, h: 520, rx: 24, warna: '#FFFFFF', bayangan: true, sudut: -3 },
        { jenis: 'foto', sumber: 'fotoDulu', x: 269, y: 0.5, dy: -20, w: 370, h: 440, bentuk: 'membulat', sudut: -3 },
        { jenis: 'teks', teks: 'Dulu', x: 282, y: 0.5, dy: 225, size: 38, font: 'Caveat', tebalHuruf: 700, warna: '$t', lebar: 300, sudut: -3 },
        { jenis: 'kotak', x: 730, y: 0.5, w: 410, h: 520, rx: 24, warna: '#FFFFFF', bayangan: true, sudut: 3 },
        { jenis: 'foto', x: 731, y: 0.5, dy: -20, w: 370, h: 440, bentuk: 'membulat', sudut: 3 },
        { jenis: 'teks', teks: 'Sekarang', x: 718, y: 0.5, dy: 225, size: 38, font: 'Caveat', tebalHuruf: 700, warna: '$t', lebar: 300, sudut: 3 },
        { jenis: 'stiker', id: 'hati', x: 500, y: 0.5, size: 70, warnaStiker: '$a' },
        { jenis: 'teks', teks: '{ukuran}', x: 500, y: 0.87, size: 28, font: 'Baloo 2', tebalHuruf: 700, warna: '$t', lebar: 900, perlu: ['ukuran'] },
        { jenis: 'teks', teks: '{tanggal}', x: 500, y: 0.87, dy: 44, size: 24, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 900, perlu: ['tanggal'] }
      ]
    },
    {
      id: 'balon', nama: 'Balon Ceria',
      palet: {
        L: { a: '#378ADD', t: '#0C447C', l: '#85B7EB', bg: '#E6F1FB' },
        P: { a: '#D4537E', t: '#72243E', l: '#ED93B1', bg: '#FBEAF0' },
        N: { a: '#EF9F27', t: '#633806', l: '#5DCAA5', bg: '#FFF4D6' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '#FFFFFF' },
        { jenis: 'stiker', id: 'balon', x: 140, y: 0.22, size: 170, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'balon', x: 870, y: 0.18, size: 140, warnaStiker: '$l' },
        { jenis: 'stiker', id: 'balon', x: 880, y: 0.66, size: 110, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'konfeti', x: 120, y: 0.66, size: 110, warnaStiker: '$l' },
        { jenis: 'teks', teks: '{sapaan}', x: 500, y: 0.08, size: 36, font: 'Nunito', tebalHuruf: 800, warna: '$a', lebar: 860 },
        { jenis: 'foto', x: 500, y: 0.42, w: 520, h: 520, bentuk: 'bulat', garis: '#FFFFFF', tebal: 16 },
        { jenis: 'teks', teks: '{judul}', x: 500, y: 0.76, size: 70, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', lebar: 860, tinggiBaris: 1 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.76, dy: 76, size: 40, font: 'Baloo 2', tebalHuruf: 700, warna: '$a', lebar: 860 },
        { jenis: 'teks', teks: '{tanggal}', x: 500, y: 0.76, dy: 124, size: 24, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 860, perlu: ['tanggal'] }
      ]
    },
    {
      id: 'minimalis', nama: 'Minimalis',
      palet: {
        L: { a: '#378ADD', t: '#26215C', l: '#B5D4F4', bg: '#FFFFFF' },
        P: { a: '#D4537E', t: '#26215C', l: '#F4C0D1', bg: '#FFFFFF' },
        N: { a: '#888780', t: '#26215C', l: '#D3D1C7', bg: '#FFFFFF' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg' },
        { jenis: 'foto', x: 500, y: 0.4, w: 860, h: 680, bentuk: 'kotak' },
        { jenis: 'kotak', x: 500, y: 0.4, dy: 368, w: 120, h: 4, warna: '$a' },
        { jenis: 'teks', teks: '{judul}', x: 500, y: 0.4, dy: 420, size: 54, font: 'Playfair Display', tebalHuruf: 700, warna: '$t', lebar: 900 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.4, dy: 478, size: 28, font: 'Nunito', tebalHuruf: 700, warna: '$a', jarakHuruf: 120, lebar: 900 },
        { jenis: 'teks', teks: '{tanggal}', x: 500, y: 0.4, dy: 518, size: 22, font: 'Nunito', tebalHuruf: 600, warna: '#888780', lebar: 900, perlu: ['tanggal'] }
      ]
    },
    {
      id: 'polaroid', nama: 'Polaroid',
      palet: {
        L: { a: '#378ADD', t: '#0C447C', l: '#B5D4F4', bg: '#E6F1FB' },
        P: { a: '#D4537E', t: '#72243E', l: '#F4C0D1', bg: '#FBEAF0' },
        N: { a: '#1D9E75', t: '#085041', l: '#C0DD97', bg: '#EAF3DE' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '$l' },
        { jenis: 'kotak', x: 500, y: 0.44, w: 660, h: 760, warna: '#FFFFFF', sudut: -4, bayangan: true },
        { jenis: 'foto', x: 497, y: 0.44, dy: -50, w: 580, h: 580, bentuk: 'kotak', sudut: -4 },
        { jenis: 'teks', teks: '{judul}', x: 520, y: 0.44, dy: 300, size: 52, font: 'Caveat', tebalHuruf: 700, warna: '#26215C', lebar: 600, sudut: -4 },
        { jenis: 'stiker', id: 'pita', x: 790, y: 0.1, size: 100, warnaStiker: '$a' },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.9, size: 40, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', lebar: 900 },
        { jenis: 'teks', teks: '{tanggal}', x: 500, y: 0.9, dy: 44, size: 24, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 900, perlu: ['tanggal'] }
      ]
    },
    {
      id: 'pita', nama: 'Pita Perayaan',
      palet: {
        L: { a: '#378ADD', t: '#0C447C', l: '#B5D4F4', bg: '#E6F1FB' },
        P: { a: '#D4537E', t: '#72243E', l: '#F4C0D1', bg: '#FBEAF0' },
        N: { a: '#534AB7', t: '#26215C', l: '#FAC775', bg: '#FFF4D6' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '#FFFFFF' },
        { jenis: 'stiker', id: 'konfeti', x: 150, y: 0.1, size: 150, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'konfeti', x: 860, y: 0.9, size: 150, warnaStiker: '$l' },
        { jenis: 'stiker', id: 'pita', x: 860, y: 0.08, size: 90, warnaStiker: '$a' },
        { jenis: 'foto', x: 500, y: 0.4, w: 640, h: 560, bentuk: 'membulat', garis: '$l', tebal: 12 },
        { jenis: 'kotak', x: 500, y: 0.73, w: 820, h: 120, rx: 20, warna: '$a' },
        { jenis: 'teks', teks: '{judul}', x: 500, y: 0.73, size: 60, font: 'Baloo 2', tebalHuruf: 800, warna: '#FFFFFF', lebar: 780, tinggiBaris: 1 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.73, dy: 100, size: 40, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', lebar: 860 },
        { jenis: 'teks', teks: '{tanggal}', x: 500, y: 0.73, dy: 145, size: 24, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 860, perlu: ['tanggal'] }
      ]
    },
    {
      id: 'malam-bintang', nama: 'Malam Berbintang',
      palet: {
        L: { a: '#FAC775', t: '#FFFFFF', l: '#85B7EB', bg: '#26215C' },
        P: { a: '#FAC775', t: '#FFFFFF', l: '#ED93B1', bg: '#26215C' },
        N: { a: '#FAC775', t: '#FFFFFF', l: '#CECBF6', bg: '#26215C' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg', warna2: '#3C3489' },
        { jenis: 'stiker', id: 'bulanbintang', x: 150, y: 0.12, size: 160, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'bintang', x: 860, y: 0.1, size: 50, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'bintang', x: 900, y: 0.28, size: 30, warnaStiker: '$l' },
        { jenis: 'stiker', id: 'kilau', x: 100, y: 0.86, size: 50, warnaStiker: '$l' },
        { jenis: 'stiker', id: 'bintang', x: 890, y: 0.86, size: 40, warnaStiker: '$a' },
        { jenis: 'foto', x: 500, y: 0.42, w: 520, h: 520, bentuk: 'bulat', garis: '$a', tebal: 12 },
        { jenis: 'teks', teks: '{judul}', x: 500, y: 0.76, size: 72, font: 'Baloo 2', tebalHuruf: 800, warna: '$a', lebar: 860, tinggiBaris: 1 },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.76, dy: 76, size: 40, font: 'Baloo 2', tebalHuruf: 700, warna: '$t', lebar: 860 },
        { jenis: 'teks', teks: '{tanggal}', x: 500, y: 0.76, dy: 122, size: 24, font: 'Nunito', tebalHuruf: 700, warna: '$l', lebar: 860, perlu: ['tanggal'] }
      ]
    },
    {
      id: 'catatan', nama: 'Catatan Tumbuh',
      palet: {
        L: { a: '#378ADD', t: '#0C447C', l: '#B5D4F4', bg: '#E6F1FB' },
        P: { a: '#D4537E', t: '#72243E', l: '#F4C0D1', bg: '#FBEAF0' },
        N: { a: '#1D9E75', t: '#085041', l: '#9FE1CB', bg: '#E1F5EE' }
      },
      elemen: [
        { jenis: 'latar', warna: '$bg' },
        { jenis: 'foto', x: 500, y: 0.27, w: 440, h: 440, bentuk: 'lengkung', garis: '#FFFFFF', tebal: 12 },
        { jenis: 'kotak', x: 500, y: 0.73, w: 880, h: 440, rx: 36, warna: '#FFFFFF' },
        { jenis: 'teks', teks: '{nama}', x: 500, y: 0.73, dy: -175, size: 48, font: 'Baloo 2', tebalHuruf: 800, warna: '$t', lebar: 820 },
        { jenis: 'teks', teks: '{judulTanggal}', x: 500, y: 0.73, dy: -125, size: 28, font: 'Nunito', tebalHuruf: 800, warna: '$a', lebar: 820 },
        { jenis: 'teks', teks: '{ukuran}', x: 500, y: 0.73, dy: -80, size: 26, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 820, perlu: ['ukuran'] },
        { jenis: 'teks', teks: '{bisaJudul}', x: 500, y: 0.73, dy: -30, size: 28, font: 'Baloo 2', tebalHuruf: 700, warna: '$t', lebar: 820, perlu: ['bisa'] },
        { jenis: 'teks', teks: '{bisa}', x: 500, y: 0.73, dy: 70, size: 25, font: 'Nunito', tebalHuruf: 700, warna: '$t', lebar: 660, rata: 'left', perlu: ['bisa'] },
        { jenis: 'teks', teks: '{suka}', x: 500, y: 0.73, dy: 175, size: 24, font: 'Nunito', tebalHuruf: 700, warna: '$a', lebar: 820, perlu: ['suka'] },
        { jenis: 'stiker', id: 'daun', x: 140, y: 0.12, size: 90, warnaStiker: '$a' },
        { jenis: 'stiker', id: 'bintang', x: 870, y: 0.1, size: 60, warnaStiker: '$l' }
      ]
    }
  ]
};

  },
  function () {

(function () {
  var GRUP = [
    { id: 'klasik', judulKey: 'ai.grup-klasik' },
    { id: 'mimpi', judulKey: 'ai.grup-mimpi' },
    { id: 'lucu', judulKey: 'ai.grup-lucu' },
    { id: 'nuansa', judulKey: 'ai.grup-nuansa' }
  ];
  var TEMA = [
    { id: 'studio-putih', grup: 'klasik', ikon: '\u2728', warna: ['#FFFFFF', '#ECEAF6'], judulKey: 'ai.tema-studio-putih', subKey: 'ai.tema-studio-putih-sub',
      adegan: 'Clean high-key newborn studio portrait: the baby lies on a smooth seamless white backdrop with a soft white blanket, bright even studio light, minimal and timeless, plenty of clean negative space.',
      variasi: ['baby lying on the back, camera from above', 'baby resting on one side, hands near the chest', 'close-up portrait of the face and tiny hands', 'close portrait with soft vignette'] },
    { id: 'keranjang-rotan', grup: 'klasik', ikon: '\uD83E\uDDFA', warna: ['#F5E6CC', '#D9B98C'], judulKey: 'ai.tema-keranjang-rotan', subKey: 'ai.tema-keranjang-rotan-sub',
      adegan: 'The baby sleeps peacefully swaddled inside a shallow, well-padded woven rattan basket lined with a soft knitted blanket, the basket sits safely on the studio floor on a fluffy rug.',
      variasi: ['close view from above, face clearly visible', 'three-quarter view with the basket edge in front', 'small dried flowers placed around the basket rim', 'warm window light from the side'] },
    { id: 'bungkus-pastel', grup: 'klasik', ikon: '\uD83C\uDF80', warna: ['#FBEAF0', '#E6F1FB'], judulKey: 'ai.tema-bungkus-pastel', subKey: 'ai.tema-bungkus-pastel-sub',
      adegan: 'The baby is neatly swaddled in a soft stretchy pastel wrap with a matching tiny knotted headband or bonnet, lying on a cozy textured blanket in layered pastel tones.',
      variasi: ['tight cocoon swaddle, baby asleep', 'swaddle with a small bow on the chest', 'baby on a round fluffy pillow', 'flat lay from directly above'] },
    { id: 'rustic', grup: 'nuansa', ikon: '\uD83C\uDF42', warna: ['#E8D9C4', '#8C6A4F'], judulKey: 'ai.tema-rustic', subKey: 'ai.tema-rustic-sub',
      adegan: 'Rustic newborn set: the baby lies swaddled on a thick faux-fur rug over a weathered wooden floor, natural earthy tones, linen and wool textures, warm soft light.',
      variasi: ['inside a shallow wooden crate padded with fur', 'on a sheepskin with a small wooden toy nearby', 'wrapped in an oatmeal knit, view from above', 'warm golden side light'] },
    { id: 'awan-lembut', grup: 'mimpi', ikon: '\u2601\uFE0F', warna: ['#E6F1FB', '#FFFFFF'], judulKey: 'ai.tema-awan-lembut', subKey: 'ai.tema-awan-lembut-sub',
      adegan: 'Dreamy cloud set: the baby sleeps swaddled on a big fluffy cloud-shaped pillow, surrounded by soft cotton clouds, a light airy sky backdrop and gentle glow.',
      variasi: ['tiny felt stars hanging softly in the background', 'a small felt rainbow behind the clouds', 'baby curled on the side, view from above', 'soft morning sunbeam'] },
    { id: 'bulan-bintang', grup: 'mimpi', ikon: '\uD83C\uDF19', warna: ['#26215C', '#7F77DD'], judulKey: 'ai.tema-bulan-bintang', subKey: 'ai.tema-bulan-bintang-sub',
      adegan: 'Night sky dream set: the baby sleeps swaddled on a large soft crescent-moon shaped cushion placed on the floor, a deep starry backdrop with tiny glowing stars and soft bokeh.',
      variasi: ['wearing a soft knitted sleepy cap', 'small felt stars on the blanket', 'view from above with a warm glow', 'soft clouds around the moon cushion'] },
    { id: 'taman-bunga', grup: 'mimpi', ikon: '\uD83C\uDF38', warna: ['#FBEAF0', '#C0DD97'], judulKey: 'ai.tema-taman-bunga', subKey: 'ai.tema-taman-bunga-sub',
      adegan: 'Flower garden set: the baby lies swaddled on a soft blanket surrounded by fresh blooming flowers and greenery arranged safely around (never on the face), soft natural daylight.',
      variasi: ['a delicate flower crown headband', 'roses and baby breath around', 'wildflowers and daisies, view from above', 'peonies in soft focus in the foreground'] },
    { id: 'pelangi', grup: 'lucu', ikon: '\uD83C\uDF08', warna: ['#FAC775', '#ED93B1'], judulKey: 'ai.tema-pelangi', subKey: 'ai.tema-pelangi-sub',
      adegan: 'Cheerful rainbow set: the baby lies swaddled on a soft blanket under a big felt rainbow arch, little felt clouds and a gentle bright backdrop, joyful but soft colours.',
      variasi: ['rainbow arch behind the baby', 'small knitted rainbow toy beside the baby', 'view from above on a striped blanket', 'confetti-like felt dots in the background'] },
    { id: 'kostum-hewan', grup: 'lucu', ikon: '\uD83E\uDDF8', warna: ['#FAEEDA', '#EF9F27'], judulKey: 'ai.tema-kostum-hewan', subKey: 'ai.tema-kostum-hewan-sub',
      adegan: 'Cute animal costume set: the baby wears a soft knitted animal bonnet with little ears and a matching knitted wrap, lying on a fluffy blanket with a plush toy nearby.',
      variasi: ['little teddy bear ears bonnet', 'long bunny ears bonnet', 'fluffy lamb bonnet', 'little fox ears bonnet'] },
    { id: 'mahkota', grup: 'lucu', ikon: '\uD83D\uDC51', warna: ['#FAC775', '#CECBF6'], judulKey: 'ai.tema-mahkota', subKey: 'ai.tema-mahkota-sub',
      adegan: 'Little royal set: the baby wears a tiny soft felt crown (soft fabric, no sharp parts) and is swaddled in a velvet wrap, lying on a plush velvet cushion with an elegant soft backdrop.',
      variasi: ['little prince look', 'little princess look', 'tiny cape-like wrap', 'soft golden bokeh behind'] },
    { id: 'islami', grup: 'nuansa', ikon: '\uD83D\uDD4C', warna: ['#FFFFFF', '#E1F5EE'], judulKey: 'ai.tema-islami', subKey: 'ai.tema-islami-sub',
      adegan: 'Serene modest set: the baby is neatly wrapped in a clean white muslin swaddle (bedong) with a simple soft white bonnet, lying on white linen, calm minimal atmosphere, soft window light, pure and peaceful.',
      variasi: ['simple soft crescent shaped pillow', 'soft cream drapery in the background', 'view from above on white linen', 'gentle warm morning light'] },
    { id: 'batik', grup: 'nuansa', ikon: '\uD83C\uDF3A', warna: ['#F3E3C3', '#8C5A2B'], judulKey: 'ai.tema-batik', subKey: 'ai.tema-batik-sub',
      adegan: 'Indonesian heritage set: the baby is neatly swaddled in soft batik-patterned cloth (kain jarik), lying on a woven mat with a warm wooden backdrop and a few jasmine flowers placed safely aside.',
      variasi: ['classic brown sogan batik cloth', 'soft pastel batik cloth', 'view from above on a woven mat', 'warm afternoon light'] }
  ];
  var VARIASI_PERHALUS = ['straight-on framing like the original', 'slightly closer crop', 'soft warm tone', 'soft neutral tone'];
  var NUANSA = [
    { id: 'pink', judulKey: 'ai.nuansa-pink', warna: '#ED93B1', palet: 'soft blush pink and cream colour palette' },
    { id: 'biru', judulKey: 'ai.nuansa-biru', warna: '#85B7EB', palet: 'soft baby blue and white colour palette' },
    { id: 'netral', judulKey: 'ai.nuansa-netral', warna: '#D3D1C7', palet: 'neutral soft white, beige and light grey colour palette' },
    { id: 'krem', judulKey: 'ai.nuansa-krem', warna: '#EBD9B4', palet: 'warm cream, ivory and light tan colour palette' }
  ];
  var RASIO = [
    { id: '1:1', judulKey: 'ai.rasio-1-1', subKey: 'ai.rasio-1-1-sub', ukuran: 'ig-post', w: 1, h: 1 },
    { id: '4:5', judulKey: 'ai.rasio-4-5', subKey: 'ai.rasio-4-5-sub', ukuran: 'cetak-10r', w: 4, h: 5 },
    { id: '9:16', judulKey: 'ai.rasio-9-16', subKey: 'ai.rasio-9-16-sub', ukuran: 'ig-story', w: 9, h: 16 },
    { id: '3:4', judulKey: 'ai.rasio-3-4', subKey: 'ai.rasio-3-4-sub', ukuran: 'cetak-10r', w: 3, h: 4 }
  ];
  var KUNCI = [
    'Use the baby in the provided photo as the only subject.',
    'Keep the baby EXACTLY the same person: same face, same face shape, eyes, nose, mouth, ears, skin tone, birthmarks and hair. Do not change the identity, age or ethnicity, and do not turn the baby into a different baby.',
    'The baby is always fully clothed or neatly swaddled and covered, modest and tidy.',
    'Safe, natural, comfortable newborn pose lying down and fully supported. No froggy pose, no hanging or suspended baby, no standing or sitting unsupported, nothing covering the face, no dangerous or sharp objects, no open flames.',
    'Only the baby: no other people, no adults, no hands, no extra babies.',
    'Absolutely no text, letters, numbers, logos, signatures or watermark anywhere in the image.',
    'Natural soft skin with realistic texture, no heavy retouching, realistic proportions.',
    'Framing: medium close-up. The baby\'s face is the clear focal point, large, sharp and easy to recognise; the baby fills most of the frame, props and set stay around the edges.'
  ];
  function cari(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  function susunPrompt(o) {
    o = o || {};
    var nuansa = cari(NUANSA, o.nuansa);
    var rasio = cari(RASIO, o.rasio);
    if (!nuansa || !rasio) return null;
    var bagian;
    if (o.mode === 'perhalus') {
      bagian = ['Professional newborn photo retouch of the provided photo.'].concat(KUNCI, [
        'Enhance only: soft professional studio light, gentle even exposure, natural smooth skin, reduce noise and blur, sharpen details gently.',
        'Replace a messy background with a clean, simple, softly blurred backdrop in a ' + nuansa.palet + '.',
        'Keep the original pose, clothing and framing.'
      ]);
    } else {
      var tema = cari(TEMA, o.tema);
      if (!tema) return null;
      bagian = ['Professional newborn photography session, high-end studio quality, soft diffused light, shallow depth of field, gentle and warm mood.'].concat(KUNCI, [
        'Scene: ' + tema.adegan,
        'Colours: ' + nuansa.palet + '.'
      ]);
    }
    if (o.variasi) bagian.push('Variation for this shot: ' + o.variasi + '.');
    bagian.push('Aspect ratio: ' + rasio.id + '.');
    return bagian.join('\n');
  }
  function validasiAi(o) {
    o = o || {};
    if (typeof o.foto !== 'string' || !/^data:image\/[a-z+]+;base64,/.test(o.foto)) return { ok: false, galat: 'ai.galat-foto' };
    if (o.mode !== 'perhalus' && !cari(TEMA, o.tema)) return { ok: false, galat: 'ai.galat-tema' };
    if (!cari(RASIO, o.rasio)) return { ok: false, galat: 'ai.galat-rasio' };
    if (!cari(NUANSA, o.nuansa)) return { ok: false, galat: 'ai.galat-nuansa' };
    if (typeof o.jumlah !== 'number' || o.jumlah < 1 || o.jumlah > 4 || o.jumlah % 1) return { ok: false, galat: 'ai.galat-jumlah' };
    return { ok: true };
  }
  function rasioKeUkuran(id) {
    var r = cari(RASIO, id);
    return r ? r.ukuran : 'ig-post';
  }
  function ukuranPiksel(id, lebar) {
    var r = cari(RASIO, id) || RASIO[0];
    return { w: lebar, h: Math.round(lebar * r.h / r.w) };
  }
  function pecahDataUrl(url) {
    var m = /^data:(image\/[a-z+]+);base64,(.+)$/.exec(url || '');
    return m ? { mimeType: m[1], data: m[2] } : null;
  }
  function galatHttp(status) {
    if (!status) return 'ai.galat-jaringan';
    if (status === 429) return 'ai.galat-kuota';
    if (status >= 500) return 'ai.galat-sibuk';
    if (status === 401 || status === 403) return 'ai.galat-akses';
    if (status === 400) return 'ai.galat-ditolak';
    return 'ai.galat-umum';
  }
  var BLOKIR = /SAFETY|PROHIBITED|BLOCKLIST|SPII|RECITATION/;
  function bacaRespons(json) {
    if (!json || typeof json !== 'object') return { ok: false, galat: 'ai.galat-kosong' };
    if (json.error) return { ok: false, galat: galatHttp(json.error.code || 0) };
    var blokir = !!(json.promptFeedback && json.promptFeedback.blockReason);
    var kand = json.candidates || [];
    for (var i = 0; i < kand.length; i++) {
      var c = kand[i] || {};
      if (BLOKIR.test(c.finishReason || '')) blokir = true;
      var parts = (c.content && c.content.parts) || [];
      for (var j = 0; j < parts.length; j++) {
        var d = parts[j] && (parts[j].inlineData || parts[j].inline_data);
        if (d && d.data) {
          var mime = d.mimeType || d.mime_type || 'image/png';
          if (/^image\//.test(mime)) return { ok: true, mimeType: mime, data: d.data, src: 'data:' + mime + ';base64,' + d.data };
        }
      }
    }
    return { ok: false, galat: blokir ? 'ai.galat-diblokir' : 'ai.galat-kosong' };
  }
  var ULANG = { 'ai.galat-sibuk': 1, 'ai.galat-jaringan': 1, 'ai.galat-kosong': 1, 'ai.galat-waktu': 1 };
  function jedaUlang(galat, ke, dasar) {
    if (galat === 'ai.galat-kuota') return ke < 1 ? dasar * 4 : -1;
    if (!ULANG[galat] || ke >= 2) return -1;
    return dasar * Math.pow(2, ke);
  }
  function pilihVariasi(tema, n, rnd) {
    rnd = rnd || Math.random;
    var asal = tema ? tema.variasi : VARIASI_PERHALUS;
    var hasil = [];
    var kantong = [];
    while (hasil.length < n) {
      if (!kantong.length) {
        kantong = asal.slice();
        for (var i = kantong.length - 1; i > 0; i--) {
          var j = Math.floor(rnd() * (i + 1));
          var x = kantong[i]; kantong[i] = kantong[j]; kantong[j] = x;
        }
      }
      hasil.push(kantong.pop());
    }
    return hasil;
  }
  function jalankanTerbatas(tugas, batas, onSelesai) {
    var hasil = new Array(tugas.length);
    var berikut = 0;
    function pekerja() {
      if (berikut >= tugas.length) return Promise.resolve();
      var i = berikut++;
      return Promise.resolve().then(function () { return tugas[i](); }).then(
        function (v) { hasil[i] = { ok: true, nilai: v }; },
        function (e) { hasil[i] = { ok: false, error: e }; }
      ).then(function () {
        if (onSelesai) onSelesai(i, hasil[i]);
        return pekerja();
      });
    }
    var jalan = [];
    for (var k = 0; k < Math.min(batas, tugas.length); k++) jalan.push(pekerja());
    return Promise.all(jalan).then(function () { return hasil; });
  }
  var MODE_ANAK = [
    { id: 'kartun', ikon: '\uD83C\uDFA8', judulKey: 'aa.mode-kartun', subKey: 'aa.mode-kartun-sub',
      pembuka: 'Turn the child in the provided photo into a charming, high-quality illustration in the art style described below, while keeping the child clearly recognisable.' },
    { id: 'kostum', ikon: '\uD83D\uDE80', judulKey: 'aa.mode-kostum', subKey: 'aa.mode-kostum-sub',
      pembuka: 'Professional, playful children\'s portrait photo: dress the child from the provided photo in the costume described below, realistic photo quality, bright and cheerful.' },
    { id: 'latar', ikon: '\uD83C\uDF0C', judulKey: 'aa.mode-latar', subKey: 'aa.mode-latar-sub',
      pembuka: 'Magical children\'s photo: place the child from the provided photo into the enchanting scene described below, realistic photo quality with a touch of wonder.' },
    { id: 'hapus-latar', ikon: '\u2702\uFE0F', judulKey: 'aa.mode-hapus', subKey: 'aa.mode-hapus-sub',
      pembuka: 'Clean background replacement of the provided photo: cut out the child precisely and keep the original pose, clothing, expression and framing exactly as they are.' }
  ];
  var GAYA_ANAK = [
    { id: 'kartun-3d', mode: 'kartun', ikon: '\uD83E\uDDF8', warna: ['#FBEAF0', '#CECBF6'], judulKey: 'aa.gaya-kartun-3d', subKey: 'aa.gaya-kartun-3d-sub',
      arahan: 'Cute 3D animated movie character style: soft rounded shapes, big expressive eyes, smooth stylised skin, warm cinematic lighting, colourful and friendly.',
      variasi: ['big cheerful smile', 'playful pose with a small toy', 'soft pastel background with bokeh', 'bright sunny outdoor background'] },
    { id: 'anime', mode: 'kartun', ikon: '\uD83C\uDF38', warna: ['#E6F1FB', '#ED93B1'], judulKey: 'aa.gaya-anime', subKey: 'aa.gaya-anime-sub',
      arahan: 'Gentle Japanese anime illustration style: clean line art, soft cel shading, bright clear eyes, light pastel colours, wholesome slice-of-life mood.',
      variasi: ['cherry blossom petals in the background', 'blue sky with soft clouds', 'cozy room with warm window light', 'gentle sparkles around'] },
    { id: 'cat-air', mode: 'kartun', ikon: '\uD83D\uDD8C\uFE0F', warna: ['#E1F5EE', '#FAC775'], judulKey: 'aa.gaya-cat-air', subKey: 'aa.gaya-cat-air-sub',
      arahan: 'Soft watercolour painting style: delicate brush strokes, transparent washes of colour, visible paper texture, light airy palette, artistic and tender.',
      variasi: ['loose floral splashes around', 'soft blue and green washes', 'warm peach and pink washes', 'simple white paper background'] },
    { id: 'buku-cerita', mode: 'kartun', ikon: '\uD83D\uDCD6', warna: ['#FAEEDA', '#C0DD97'], judulKey: 'aa.gaya-buku-cerita', subKey: 'aa.gaya-buku-cerita-sub',
      arahan: 'Classic children\'s storybook illustration style: warm hand-painted gouache look, soft textures, whimsical details, cosy and heart-warming like a picture book page.',
      variasi: ['in a flowery meadow', 'next to a friendly little animal', 'under a big tree with soft light', 'in a cosy reading nook'] },
    { id: 'astronaut', mode: 'kostum', ikon: '\uD83D\uDC69\u200D\uD83D\uDE80', warna: ['#26215C', '#85B7EB'], judulKey: 'aa.gaya-astronaut', subKey: 'aa.gaya-astronaut-sub',
      arahan: 'The child wears a well-fitted white child-size astronaut suit with colourful mission patches, helmet held under the arm so the face is fully visible, space station or starry backdrop.',
      variasi: ['waving at the camera', 'proud pose with hands on hips', 'looking up at the stars in wonder', 'giving a thumbs up'] },
    { id: 'putri', mode: 'kostum', ikon: '\uD83D\uDC78', warna: ['#FBEAF0', '#FAC775'], judulKey: 'aa.gaya-putri', subKey: 'aa.gaya-putri-sub',
      arahan: 'The child wears a modest, elegant fairy-tale princess gown with long sleeves and a small sparkly tiara, standing in a soft royal garden or palace hall.',
      variasi: ['gentle curtsy pose', 'holding a small bouquet', 'twirling the gown happily', 'soft golden light behind'] },
    { id: 'pangeran', mode: 'kostum', ikon: '\uD83E\uDD34', warna: ['#CECBF6', '#FAC775'], judulKey: 'aa.gaya-pangeran', subKey: 'aa.gaya-pangeran-sub',
      arahan: 'The child wears a neat fairy-tale prince outfit with a short cape and a small golden crown, standing in a grand but friendly royal hall.',
      variasi: ['confident smile', 'waving a small royal flag', 'standing on palace steps', 'warm candle-like glow'] },
    { id: 'pahlawan', mode: 'kostum', ikon: '\uD83E\uDDB8', warna: ['#ED93B1', '#534AB7'], judulKey: 'aa.gaya-pahlawan', subKey: 'aa.gaya-pahlawan-sub',
      arahan: 'The child wears an original, colourful superhero costume (generic, no existing brand or logo) with a flowing cape and a simple star emblem, city skyline at golden hour behind.',
      variasi: ['heroic pose with fists on hips', 'cape flowing in the wind', 'flying pose close to the ground', 'big brave smile'] },
    { id: 'dokter', mode: 'kostum', ikon: '\uD83E\uDE7A', warna: ['#FFFFFF', '#85B7EB'], judulKey: 'aa.gaya-dokter', subKey: 'aa.gaya-dokter-sub',
      arahan: 'The child wears a child-size white doctor coat over neat clothes with a toy stethoscope around the neck, bright friendly clinic background.',
      variasi: ['holding a clipboard', 'listening to a teddy bear with the stethoscope', 'friendly smile, arms crossed', 'soft blurred clinic behind'] },
    { id: 'pilot', mode: 'kostum', ikon: '\u2708\uFE0F', warna: ['#E6F1FB', '#26215C'], judulKey: 'aa.gaya-pilot', subKey: 'aa.gaya-pilot-sub',
      arahan: 'The child wears a neat airline pilot uniform with a captain hat and wing badge, standing at an airport with an airplane in the background.',
      variasi: ['saluting proudly', 'holding the captain hat', 'airplane window view behind', 'sunny runway behind'] },
    { id: 'pemadam', mode: 'kostum', ikon: '\uD83D\uDE92', warna: ['#F09595', '#FAC775'], judulKey: 'aa.gaya-pemadam', subKey: 'aa.gaya-pemadam-sub',
      arahan: 'The child wears a child-size firefighter uniform with reflective stripes and a red helmet, friendly red fire truck in the background, no fire or smoke.',
      variasi: ['standing next to the fire truck', 'holding a toy hose', 'thumbs up with a big smile', 'waving from the truck step'] },
    { id: 'luar-angkasa', mode: 'latar', ikon: '\uD83E\uDE90', warna: ['#26215C', '#7F77DD'], judulKey: 'aa.gaya-luar-angkasa', subKey: 'aa.gaya-luar-angkasa-sub',
      arahan: 'Scene: a dreamy outer space setting with colourful planets, glowing stars and soft nebula clouds; the child floats gently or stands on a friendly little moon.',
      variasi: ['a ringed planet behind', 'a tiny rocket flying by', 'sitting on a crescent moon', 'shooting stars around'] },
    { id: 'bawah-laut', mode: 'latar', ikon: '\uD83D\uDC20', warna: ['#85B7EB', '#5DCAA5'], judulKey: 'aa.gaya-bawah-laut', subKey: 'aa.gaya-bawah-laut-sub',
      arahan: 'Scene: a bright magical underwater world with colourful coral, friendly fish and sun rays from above; the child looks happy and comfortable, no diving gear needed.',
      variasi: ['a friendly sea turtle nearby', 'bubbles floating around', 'colourful coral garden', 'a school of small fish'] },
    { id: 'hutan-dongeng', mode: 'latar', ikon: '\uD83C\uDF44', warna: ['#C0DD97', '#5DCAA5'], judulKey: 'aa.gaya-hutan-dongeng', subKey: 'aa.gaya-hutan-dongeng-sub',
      arahan: 'Scene: an enchanted fairy-tale forest with soft glowing lights, giant mushrooms, flowers and gentle woodland animals, warm magical atmosphere.',
      variasi: ['fireflies glowing around', 'a little bunny and a deer nearby', 'sunbeams through the trees', 'a tiny fairy house behind'] },
    { id: 'istana', mode: 'latar', ikon: '\uD83C\uDFF0', warna: ['#CECBF6', '#FBEAF0'], judulKey: 'aa.gaya-istana', subKey: 'aa.gaya-istana-sub',
      arahan: 'Scene: in front of a beautiful fairy-tale castle with pastel towers, a flower garden and soft clouds, bright and dreamy.',
      variasi: ['castle gate behind', 'rainbow over the castle', 'garden path with flowers', 'soft sunset colours'] },
    { id: 'latar-putih', mode: 'hapus-latar', ikon: '\u2B1C', warna: ['#FFFFFF', '#ECEAF6'], judulKey: 'aa.gaya-latar-putih', subKey: 'aa.gaya-latar-putih-sub',
      arahan: 'Replace the background with a clean, plain, pure white seamless studio backdrop with a very soft natural shadow under the child.',
      variasi: ['straight framing like the original', 'slightly closer crop', 'very soft shadow', 'bright even light'] },
    { id: 'latar-pastel', mode: 'hapus-latar', ikon: '\uD83C\uDF6C', warna: ['#FBEAF0', '#E6F1FB'], judulKey: 'aa.gaya-latar-pastel', subKey: 'aa.gaya-latar-pastel-sub',
      arahan: 'Replace the background with a smooth, plain soft pastel gradient studio backdrop (pink to light blue), gentle even light.',
      variasi: ['straight framing like the original', 'slightly closer crop', 'soft pink tone', 'soft blue tone'] }
  ];
  var KUNCI_ANAK = [
    'Use the child in the provided photo as the only subject.',
    'Keep the child as the SAME child: same face, face shape, eyes, nose, mouth, skin tone, hair and approximate age. Do not change identity, age or ethnicity.',
    'The child is always fully clothed in modest, age-appropriate clothing; wholesome, family-friendly and safe for a children\'s photo album.',
    'Natural, happy, safe pose; nothing covering the face, no dangerous objects, no weapons, no fire.',
    'Only the child: no other people, no adults, no extra children.',
    'Absolutely no text, letters, numbers, logos, brand marks, signatures or watermark anywhere in the image.',
    'Framing: the child\'s face is the clear focal point, large, sharp and easy to recognise.'
  ];
  function susunPromptAnak(o) {
    o = o || {};
    var gaya = cari(GAYA_ANAK, o.gaya);
    var rasio = cari(RASIO, o.rasio);
    if (!gaya || !rasio) return null;
    var mode = cari(MODE_ANAK, gaya.mode);
    var bagian = [mode.pembuka].concat(KUNCI_ANAK, ['Style: ' + gaya.arahan]);
    if (o.variasi) bagian.push('Variation for this shot: ' + o.variasi + '.');
    bagian.push('Aspect ratio: ' + rasio.id + '.');
    return bagian.join('\n');
  }
  function validasiAnak(o) {
    o = o || {};
    if (typeof o.foto !== 'string' || !/^data:image\/[a-z+]+;base64,/.test(o.foto)) return { ok: false, galat: 'ai.galat-foto' };
    if (!cari(GAYA_ANAK, o.gaya)) return { ok: false, galat: 'aa.galat-gaya' };
    if (!cari(RASIO, o.rasio)) return { ok: false, galat: 'ai.galat-rasio' };
    if (typeof o.jumlah !== 'number' || o.jumlah < 1 || o.jumlah > 4 || o.jumlah % 1) return { ok: false, galat: 'ai.galat-jumlah' };
    return { ok: true };
  }
  window.KSAi = {
    MODE_ANAK: MODE_ANAK, GAYA_ANAK: GAYA_ANAK, susunPromptAnak: susunPromptAnak, validasiAnak: validasiAnak,
    GRUP: GRUP, TEMA: TEMA, NUANSA: NUANSA, RASIO: RASIO,
    cari: cari, susunPrompt: susunPrompt, validasiAi: validasiAi, rasioKeUkuran: rasioKeUkuran, ukuranPiksel: ukuranPiksel,
    pecahDataUrl: pecahDataUrl, galatHttp: galatHttp, bacaRespons: bacaRespons, jedaUlang: jedaUlang,
    pilihVariasi: pilihVariasi, jalankanTerbatas: jalankanTerbatas
  };
})();

  },
  function () {

(function () {
  var P = window.KSPure;
  var MODE = [
    { id: 'bulanan', judulKey: 'ms.mode-bulanan' },
    { id: 'ultah', judulKey: 'ms.mode-ultah' },
    { id: 'pertama', judulKey: 'ms.mode-pertama' }
  ];
  var MOMEN = [
    { id: 'gigi', judulKey: 'ms.momen-gigi' },
    { id: 'jalan', judulKey: 'ms.momen-jalan' },
    { id: 'kata', judulKey: 'ms.momen-kata' },
    { id: 'makan', judulKey: 'ms.momen-makan' },
    { id: 'merangkak', judulKey: 'ms.momen-merangkak' },
    { id: 'duduk', judulKey: 'ms.momen-duduk' },
    { id: 'rambut', judulKey: 'ms.momen-rambut' },
    { id: 'sekolah', judulKey: 'ms.momen-sekolah' },
    { id: 'lain', judulKey: 'ms.momen-lain' }
  ];
  var TITIK = ' · ';
  function kamus() {
    return P.createT((window.KS_I18N && window.KS_I18N.id) || {});
  }
  function teks(v) { return String(v == null ? '' : v).trim(); }
  function angka(v) {
    var s = teks(v).replace(',', '.');
    return /^\d+(\.\d+)?$/.test(s) ? parseFloat(s) : null;
  }
  function bulat(v) {
    var n = Number(v);
    return n % 1 === 0 ? n : NaN;
  }
  function cari(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  function gabung(arr, sep) { return arr.filter(function (x) { return x; }).join(sep); }
  function labelMomen(d, t) {
    if (d.momen === 'lain') return teks(d.momenLain);
    var m = cari(MOMEN, d.momen);
    return m ? t(m.judulKey) : '';
  }
  function tampil(d, t) {
    d = d || {};
    t = t || kamus();
    var n = d.mode === 'bulanan' ? bulat(d.bulanKe) : d.mode === 'ultah' ? bulat(d.tahunKe) : NaN;
    var punyaAngka = n >= 1;
    var momen = d.mode === 'pertama' ? labelMomen(d, t) : '';
    var judul = d.mode === 'bulanan' ? t('ms.judul-bulan', { n: n }) : d.mode === 'ultah' ? t('ms.judul-tahun', { n: n }) : momen;
    var sapaan = d.mode === 'bulanan' ? t('ms.sapaan-bulan', { n: n }) : d.mode === 'ultah' ? t('ms.sapaan-tahun', { n: n }) : t('ms.sapaan-pertama');
    var berat = P.formatBerat(d.berat);
    var tinggi = P.formatPanjang(d.tinggi);
    var baris = teks(d.bisa).split(/\r?\n/).map(teks).filter(function (x) { return x; }).slice(0, 4);
    var bisa = baris.map(function (x) { return '• ' + x; }).join('\n');
    var suka = teks(d.suka);
    var tanggal = P.formatTanggal(d.tanggal);
    var m = {
      nama: teks(d.nama),
      angka: punyaAngka ? String(n) : '',
      satuan: punyaAngka ? t(d.mode === 'bulanan' ? 'ms.satuan-bulan' : 'ms.satuan-tahun') : '',
      momen: momen,
      judul: judul,
      sapaan: sapaan,
      tanggal: tanggal,
      ukuran: gabung([berat ? t('ms.berat-tampil', { v: berat }) : '', tinggi ? t('ms.tinggi-tampil', { v: tinggi }) : ''], TITIK),
      bisa: bisa,
      bisaJudul: bisa ? t('ms.bisa-judul') : '',
      suka: suka ? t('ms.suka-tampil', { v: suka }) : '',
      umur: P.labelUmur(P.hitungUmur(d.tglLahir, d.tanggal), t)
    };
    m.judulTanggal = gabung([m.judul, m.tanggal], TITIK);
    return m;
  }
  function terapkan(tpl, d, ukuranId, varian, t) {
    return P.terapkanTemplate(tpl, d, ukuranId, varian, tampil(d, t));
  }
  function saranAngka(mode, tglLahir, tanggal) {
    var u = P.hitungUmur(tglLahir, tanggal);
    if (!u) return null;
    if (mode === 'bulanan') return Math.min(12, Math.max(1, u.totalBulan));
    if (mode === 'ultah') return Math.min(12, Math.max(1, u.tahun));
    return null;
  }
  function lanjutSeri(d) {
    d = d || {};
    var baru = {
      mode: d.mode, nama: d.nama, tglLahir: d.tglLahir || '', jenisKelamin: d.jenisKelamin || 'N',
      seriId: d.seriId, templateId: d.templateId, ukuran: d.ukuran,
      bulanKe: d.bulanKe, tahunKe: d.tahunKe, momen: d.momen, momenLain: d.momenLain,
      fotoDulu: d.fotoDulu || null, foto: null, berat: '', tinggi: '', bisa: '', suka: d.suka || '', tanggal: ''
    };
    if (d.mode === 'bulanan') baru.bulanKe = Math.min(12, (bulat(d.bulanKe) || 0) + 1);
    if (d.mode === 'ultah') baru.tahunKe = Math.min(12, (bulat(d.tahunKe) || 0) + 1);
    return baru;
  }
  function validasi(d, templateId) {
    d = d || {};
    var nama = teks(d.nama);
    if (!nama || nama.length > 40) return { ok: false, galat: 'ms.galat-nama' };
    if (d.mode === 'bulanan') { var b = bulat(d.bulanKe); if (!(b >= 1 && b <= 12)) return { ok: false, galat: 'ms.galat-bulan' }; }
    else if (d.mode === 'ultah') { var y = bulat(d.tahunKe); if (!(y >= 1 && y <= 12)) return { ok: false, galat: 'ms.galat-tahun' }; }
    else if (d.mode === 'pertama') { if (!cari(MOMEN, d.momen) || (d.momen === 'lain' && !teks(d.momenLain))) return { ok: false, galat: 'ms.galat-momen' }; }
    else return { ok: false, galat: 'ms.galat-momen' };
    if (teks(d.berat)) { var w = angka(d.berat); if (w === null || w < 1 || w > 60) return { ok: false, galat: 'ms.galat-berat' }; }
    if (teks(d.tinggi)) { var h = angka(d.tinggi); if (h === null || h < 30 || h > 180) return { ok: false, galat: 'ms.galat-tinggi' }; }
    if (typeof d.foto !== 'string' || !/^data:image\//.test(d.foto)) return { ok: false, galat: 'ms.galat-foto' };
    var tpl = cari((window.KSTemplates && window.KSTemplates.milestone) || [], templateId);
    if (tpl && tpl.perluDulu && !(typeof d.fotoDulu === 'string' && /^data:image\//.test(d.fotoDulu))) return { ok: false, galat: 'ms.galat-foto-dulu' };
    return { ok: true };
  }
  window.KSMilestone = { MODE: MODE, MOMEN: MOMEN, tampil: tampil, terapkan: terapkan, saranAngka: saranAngka, lanjutSeri: lanjutSeri, validasi: validasi };
})();

  },
  function () {

(function () {
  var P = window.KSPure;
  var PALET = [
    { id: 'pastel', judulKey: 'kl.palet-pastel', latar: '#FBEAF0', latar2: '#E6F1FB', judul: '#534AB7', teks: '#5F5E5A', aksen: '#ED93B1', stiker: ['bintang', 'awan'] },
    { id: 'ceria', judulKey: 'kl.palet-ceria', latar: '#FFF4D6', latar2: '#FAC775', judul: '#D85A30', teks: '#633806', aksen: '#534AB7', stiker: ['konfeti', 'balon'] },
    { id: 'alam', judulKey: 'kl.palet-alam', latar: '#EAF3DE', latar2: '#C0DD97', judul: '#27500A', teks: '#3B6D11', aksen: '#EF9F27', stiker: ['daun', 'bunga'] },
    { id: 'malam', judulKey: 'kl.palet-malam', latar: '#26215C', latar2: '#3C3489', judul: '#FAC775', teks: '#EEEDFE', aksen: '#FAC775', stiker: ['bulanbintang', 'bintang'] },
    { id: 'putih', judulKey: 'kl.palet-putih', latar: '#FFFFFF', latar2: null, judul: '#26215C', teks: '#5F5E5A', aksen: '#B4B2A9', stiker: ['kilau', 'hati'] }
  ];
  var JARAK = [
    { id: 'rapat', judulKey: 'kl.jarak-rapat', nilai: 0.008 },
    { id: 'sedang', judulKey: 'kl.jarak-sedang', nilai: 0.022 },
    { id: 'lega', judulKey: 'kl.jarak-lega', nilai: 0.04 }
  ];
  var SUDUT = [
    { id: 'kotak', judulKey: 'kl.sudut-kotak' },
    { id: 'membulat', judulKey: 'kl.sudut-membulat' }
  ];
  var ACARA = [
    { id: 'liburan', judulKey: 'kl.acara-liburan' },
    { id: 'sekolah', judulKey: 'kl.acara-sekolah' },
    { id: 'ultah', judulKey: 'kl.acara-ultah' },
    { id: 'keluarga', judulKey: 'kl.acara-keluarga' },
    { id: 'lebaran', judulKey: 'kl.acara-lebaran' },
    { id: 'wisuda', judulKey: 'kl.acara-wisuda' },
    { id: 'main', judulKey: 'kl.acara-main' }
  ];
  var MIRING = [-6, 5, -3, 7, -5, 4, -7, 3, -4, 6, -2, 5];

  function sel(x, y, w, h, o) {
    var s = { x: x + w / 2, y: y + h / 2, w: w, h: h };
    if (o) for (var k in o) s[k] = o[k];
    return s;
  }
  function pilihGrid(n, W, H) {
    var terbaik = null;
    for (var c = 1; c <= n; c++) {
      var r = Math.ceil(n / c);
      var kosong = r * c - n;
      if (kosong >= c) continue;
      var nilai = Math.abs(Math.log((W / c) / (H / r))) + kosong * 0.35;
      if (!terbaik || nilai < terbaik.nilai) terbaik = { c: c, r: r, nilai: nilai };
    }
    return terbaik;
  }
  function grid(n, a, g, opsi) {
    var gr = pilihGrid(n, a.w, a.h);
    var cw = (a.w - g * (gr.c - 1)) / gr.c;
    var ch = (a.h - g * (gr.r - 1)) / gr.r;
    var out = [];
    for (var i = 0; i < n; i++) {
      var row = Math.floor(i / gr.c);
      var dalamBaris = row === gr.r - 1 ? n - row * gr.c : gr.c;
      var col = i % gr.c;
      var geser = (gr.c - dalamBaris) * (cw + g) / 2;
      var x = a.x + geser + col * (cw + g);
      var y = a.y + row * (ch + g);
      if (opsi && opsi.persegi) {
        var s = Math.min(cw, ch);
        out.push(sel(x + (cw - s) / 2, y + (ch - s) / 2, s, s, { bentuk: 'bulat' }));
      } else out.push(sel(x, y, cw, ch));
    }
    return out;
  }
  function kolom(n, a, g) {
    var cw = (a.w - g * (n - 1)) / n;
    var out = [];
    for (var i = 0; i < n; i++) out.push(sel(a.x + i * (cw + g), a.y, cw, a.h));
    return out;
  }
  function baris(n, a, g) {
    var ch = (a.h - g * (n - 1)) / n;
    var out = [];
    for (var i = 0; i < n; i++) out.push(sel(a.x, a.y + i * (ch + g), a.w, ch));
    return out;
  }
  function mozaik(n, a, g) {
    var besarW = (a.w - g) * 0.62;
    var out = [sel(a.x, a.y, besarW, a.h)];
    return out.concat(baris(n - 1, { x: a.x + besarW + g, y: a.y, w: a.w - besarW - g, h: a.h }, g));
  }
  function sorot(n, a, g) {
    var besarH = (a.h - g) * 0.6;
    var out = [sel(a.x, a.y, a.w, besarH)];
    return out.concat(kolom(n - 1, { x: a.x, y: a.y + besarH + g, w: a.w, h: a.h - besarH - g }, g));
  }
  function polaroid(n, a, g, opsi) {
    var gr = pilihGrid(n, a.w, a.h);
    var cw = a.w / gr.c;
    var ch = a.h / gr.r;
    var fw = Math.min(cw * 0.86, ch * 0.86 / 1.18);
    var fh = fw * 1.18;
    var out = [];
    for (var i = 0; i < n; i++) {
      var row = Math.floor(i / gr.c);
      var dalamBaris = row === gr.r - 1 ? n - row * gr.c : gr.c;
      var col = i % gr.c;
      var cx = a.x + (gr.c - dalamBaris) * cw / 2 + col * cw + cw / 2;
      var cy = a.y + row * ch + ch / 2;
      var sudut = MIRING[i % MIRING.length];
      var rad = sudut * Math.PI / 180;
      var bingkai = { jenis: 'kotak', x: cx, y: cy, w: fw, h: fh, warna: '#FFFFFF', sudut: sudut, bayangan: true };
      var dy = -fh * 0.07;
      var foto = { x: cx - Math.sin(rad) * dy, y: cy + Math.cos(rad) * dy, w: fw * 0.88, h: fw * 0.88, sudut: sudut, bingkai: bingkai, bentuk: 'kotak' };
      out.push(foto);
    }
    return out;
  }
  function scrapbook(n, a, g) {
    return grid(n, a, g * 2.5).map(function (s, i) {
      var k = 0.86;
      return { x: s.x, y: s.y, w: s.w * k, h: s.h * k, sudut: MIRING[i % MIRING.length] * 0.6, garis: '#FFFFFF', tebal: Math.max(8, s.w * 0.035) };
    });
  }
  function film(n, a, g, opsi) {
    var tegak = a.h >= a.w * 0.9;
    var out = [];
    var hiasan = [];
    var tebalPita = (tegak ? a.w : a.h) * 0.12;
    if (tegak) {
      var lebar = Math.min(a.w * 0.82, a.h);
      var x0 = a.x + (a.w - lebar) / 2;
      hiasan.push({ jenis: 'kotak', x: x0 + lebar / 2, y: a.y + a.h / 2, w: lebar, h: a.h, warna: '#1F1E1C' });
      var dalam = { x: x0 + tebalPita, y: a.y + tebalPita * 0.5, w: lebar - tebalPita * 2, h: a.h - tebalPita };
      out = baris(n, dalam, tebalPita * 0.35);
      var lubang = Math.max(6, Math.round(a.h / (tebalPita * 0.9)));
      for (var i = 0; i < lubang; i++) {
        var yy = a.y + (i + 0.5) * a.h / lubang;
        hiasan.push({ jenis: 'kotak', x: x0 + tebalPita / 2, y: yy, w: tebalPita * 0.42, h: tebalPita * 0.32, warna: '#FFFFFF', rx: tebalPita * 0.06 });
        hiasan.push({ jenis: 'kotak', x: x0 + lebar - tebalPita / 2, y: yy, w: tebalPita * 0.42, h: tebalPita * 0.32, warna: '#FFFFFF', rx: tebalPita * 0.06 });
      }
    } else {
      var tinggi = Math.min(a.h * 0.86, a.w);
      var y0 = a.y + (a.h - tinggi) / 2;
      hiasan.push({ jenis: 'kotak', x: a.x + a.w / 2, y: y0 + tinggi / 2, w: a.w, h: tinggi, warna: '#1F1E1C' });
      var dalam2 = { x: a.x + tebalPita * 0.5, y: y0 + tebalPita, w: a.w - tebalPita, h: tinggi - tebalPita * 2 };
      out = kolom(n, dalam2, tebalPita * 0.35);
      var lubang2 = Math.max(6, Math.round(a.w / (tebalPita * 0.9)));
      for (var j = 0; j < lubang2; j++) {
        var xx = a.x + (j + 0.5) * a.w / lubang2;
        hiasan.push({ jenis: 'kotak', x: xx, y: y0 + tebalPita / 2, w: tebalPita * 0.32, h: tebalPita * 0.42, warna: '#FFFFFF', rx: tebalPita * 0.06 });
        hiasan.push({ jenis: 'kotak', x: xx, y: y0 + tinggi - tebalPita / 2, w: tebalPita * 0.32, h: tebalPita * 0.42, warna: '#FFFFFF', rx: tebalPita * 0.06 });
      }
    }
    out.forEach(function (s) { s.bentuk = 'kotak'; });
    out.hiasan = hiasan;
    return out;
  }
  function hati(n, a, g) {
    var sisi = Math.min(a.w, a.h * 0.92);
    var tinggi = Math.min(a.h, sisi * 1.08);
    a = { x: a.x + (a.w - sisi) / 2, y: a.y + (a.h - tinggi) / 2, w: sisi, h: tinggi };
    var sisa = n - 1;
    var cx = a.x + a.w / 2;
    var cy = a.y + a.h / 2;
    var kecil = Math.min(a.w, a.h) * (sisa > 5 ? 0.21 : 0.28);
    var rx = (a.w - kecil) / 2;
    var ry = (a.h - kecil) / 2;
    var besar = Math.min((rx - kecil * 0.55) * 2, (ry - kecil * 0.55) * 2, Math.min(a.w, a.h) * 0.62);
    var out = [{ x: cx, y: cy, w: besar, h: besar * 80 / 88, bentuk: 'hati' }];
    for (var i = 0; i < sisa; i++) {
      var sud = -Math.PI / 2 + Math.PI / sisa + i * 2 * Math.PI / sisa;
      out.push({ x: cx + Math.cos(sud) * rx, y: cy + Math.sin(sud) * ry, w: kecil, h: kecil, bentuk: 'bulat' });
    }
    return out;
  }
  function gelembung(n, a, g) { return grid(n, a, g, { persegi: true }); }
  function lengkung(n, a, g) {
    var cw = (a.w - g * (n - 1)) / n;
    var ch = Math.min(a.h, cw * 2.6);
    var y = a.y + (a.h - ch) / 2;
    var out = [];
    for (var i = 0; i < n; i++) out.push(sel(a.x + i * (cw + g), y, cw, ch, { bentuk: 'lengkung' }));
    return out;
  }
  function tangga(n, a, g) {
    var lw = (a.w - g) * 0.56;
    var lh = (a.h - g * (n - 1)) / n * 1.55;
    var langkah = (a.h - lh) / (n - 1);
    var out = [];
    for (var i = 0; i < n; i++) {
      var kiri = i % 2 === 0;
      out.push(sel(kiri ? a.x : a.x + a.w - lw, a.y + i * langkah, lw, lh, { sudut: kiri ? -2 : 2, garis: '#FFFFFF', tebal: Math.max(6, lw * 0.025) }));
    }
    return out;
  }
  var TATA_LETAK = [
    { id: 'grid', judulKey: 'kl.tl-grid', min: 2, max: 12, buat: grid },
    { id: 'mozaik', judulKey: 'kl.tl-mozaik', min: 3, max: 5, buat: mozaik },
    { id: 'sorot', judulKey: 'kl.tl-sorot', min: 3, max: 6, buat: sorot },
    { id: 'polaroid', judulKey: 'kl.tl-polaroid', min: 2, max: 9, buat: polaroid },
    { id: 'scrapbook', judulKey: 'kl.tl-scrapbook', min: 2, max: 9, buat: scrapbook },
    { id: 'film', judulKey: 'kl.tl-film', min: 2, max: 5, buat: film },
    { id: 'hati', judulKey: 'kl.tl-hati', min: 3, max: 9, buat: hati },
    { id: 'gelembung', judulKey: 'kl.tl-gelembung', min: 2, max: 12, buat: gelembung },
    { id: 'kolom', judulKey: 'kl.tl-kolom', min: 2, max: 5, buat: kolom },
    { id: 'baris', judulKey: 'kl.tl-baris', min: 2, max: 4, buat: baris },
    { id: 'lengkung', judulKey: 'kl.tl-lengkung', min: 2, max: 4, buat: lengkung },
    { id: 'tangga', judulKey: 'kl.tl-tangga', min: 3, max: 6, buat: tangga }
  ];
  function cari(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  function cocokUntuk(n) {
    return TATA_LETAK.filter(function (tl) { return n >= tl.min && n <= tl.max; });
  }
  function jumlahDari(o) {
    var f = Array.isArray(o.fotos) ? o.fotos.length : 0;
    return f || o.jumlah || 0;
  }
  function susunKolase(o) {
    o = o || {};
    var uk = P.UKURAN[o.ukuran];
    var tl = cari(TATA_LETAK, o.tataLetak);
    var n = jumlahDari(o);
    if (!uk || !tl || n < tl.min || n > tl.max) return null;
    var pal = cari(PALET, o.palet) || PALET[0];
    var jarak = cari(JARAK, o.jarak) || JARAK[1];
    var bentukDasar = o.sudut === 'kotak' ? 'kotak' : 'membulat';
    var W = uk.w, H = uk.h;
    var m = W * 0.06;
    var g = W * jarak.nilai;
    var judul = (o.judul || '').trim();
    var tanggal = o.tanggal ? P.formatTanggal(o.tanggal) : '';
    var items = [{ jenis: 'latar', warna: pal.latar, warna2: pal.latar2 || undefined }];
    if (!pal.latar2) delete items[0].warna2;
    var atas = m;
    var teks = [];
    if (judul) {
      var size = W * 0.074 * Math.min(1, 20 / Math.max(judul.length, 1));
      size = Math.max(W * 0.05, size);
      teks.push({ jenis: 'teks', x: W / 2, y: atas + size * 0.62, size: size, lebar: W - m * 3.4, teks: judul, font: 'Baloo 2', tebalHuruf: 800, warna: pal.judul });
      atas += size * 1.3;
    }
    if (tanggal) {
      var sz = W * 0.032;
      teks.push({ jenis: 'teks', x: W / 2, y: atas + sz * 0.7, size: sz, lebar: W - m * 2, teks: tanggal, font: 'Nunito', tebalHuruf: 700, warna: pal.teks });
      atas += sz * 1.5;
    }
    if (teks.length) atas += W * 0.025;
    var area = { x: m, y: atas, w: W - m * 2, h: H - atas - m };
    var slot = tl.buat(n, area, g);
    (slot.hiasan || []).forEach(function (x) { items.push(x); });
    slot.forEach(function (s, i) {
      if (s.bingkai) items.push(s.bingkai);
      var f = { jenis: 'foto', x: s.x, y: s.y, w: s.w, h: s.h, bentuk: s.bentuk || bentukDasar, src: (o.fotos && o.fotos[i]) || null };
      if (s.sudut) f.sudut = s.sudut;
      if (s.garis) { f.garis = s.garis; f.tebal = s.tebal; }
      items.push(f);
    });
    teks.forEach(function (x) { items.push(x); });
    if (teks.length) {
      var ss = W * 0.085;
      items.push({ jenis: 'stiker', id: pal.stiker[0], x: m * 0.95, y: m * 1.05, size: ss, sudut: -12, warnaStiker: pal.aksen });
      items.push({ jenis: 'stiker', id: pal.stiker[1], x: W - m * 0.95, y: m * 1.05, size: ss, sudut: 10, warnaStiker: pal.aksen });
    }
    return { w: W, h: H, items: items };
  }
  function validasiKolase(o) {
    o = o || {};
    var n = Array.isArray(o.fotos) ? o.fotos.length : 0;
    if (n < 2) return { ok: false, galat: 'kl.galat-foto-kurang' };
    if (n > 12) return { ok: false, galat: 'kl.galat-foto-lebih' };
    var tl = cari(TATA_LETAK, o.tataLetak);
    if (!tl || n < tl.min || n > tl.max) return { ok: false, galat: 'kl.galat-tata-letak' };
    if ((o.judul || '').trim().length > 40) return { ok: false, galat: 'kl.galat-judul' };
    if (!P.UKURAN[o.ukuran]) return { ok: false, galat: 'kl.galat-tata-letak' };
    return { ok: true };
  }
  window.KSKolase = {
    PALET: PALET, JARAK: JARAK, SUDUT: SUDUT, ACARA: ACARA, TATA_LETAK: TATA_LETAK,
    cari: cari, cocokUntuk: cocokUntuk, susunKolase: susunKolase, validasiKolase: validasiKolase
  };
})();

  },
  function () {

const apiKey = "";
document.addEventListener('DOMContentLoaded', () => {
  const KS = window.KS = window.KS || {};
  KS.version = '0.7.0';
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
      masuk: '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 17l5-5-5-5"/><path d="M15 12H4"/>',
      keluar: '<path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',
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
      plus: '<path d="M12 5v14M5 12h14"/>',
      perisai: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
      ulang: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
      simpan: '<path d="M6 3h12v18l-6-4-6 4z"/>',
      cek: '<path d="M5 12l5 5 9-10"/>',
      bandingkan: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 3v18"/>',
      kartu: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 16h8"/>',
      panel: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/><path d="M15 10l-2 2 2 2"/>'
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
    function dataUrlKeBlob(url) {
      const [kepala, isi] = url.split(',');
      const mime = kepala.match(/:(.*?);/)[1];
      const bin = atob(isi);
      const arr = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
      return new Blob([arr], { type: mime });
    }
    function unduhBlob(blob, nama) {
      const url = URL.createObjectURL(blob);
      const a = h('a', { href: url, download: nama });
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    }
    KS.ui = { toast, tombolHapus, h, modal, bacaFoto, dataUrlKeBlob, unduhBlob };
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
    const hp = () => window.innerWidth < 768;
    const KUNCI_CIUT = 'kidsstudio_sidebar_ciut';
    function aturCiut(ya) {
      body.classList.toggle('nav-ciut', ya);
      try { localStorage.setItem(KUNCI_CIUT, ya ? '1' : '0'); } catch (e) {}
    }
    try { if (localStorage.getItem(KUNCI_CIUT) === '1') body.classList.add('nav-ciut'); } catch (e) {}
    $('nav-show').addEventListener('click', () => { if (hp()) body.classList.add('nav-open'); else aturCiut(false); });
    $('nav-hide').addEventListener('click', () => { if (hp()) body.classList.remove('nav-open'); else aturCiut(true); });
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
      const dasar = Object.assign({ originX: 'center', originY: 'center', left: 0, top: 0 }, opsi || {});
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
      if (p && p.jenis === 'foto-ai') {
        const modul = p.editor === 'aianak' ? KS.aiAnak : KS.babybornAi;
        if (modul) modul.lihat(p);
        return;
      }
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
    const dataUrlKeBlob = KS.ui.dataUrlKeBlob;
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
      KS.ui.unduhBlob(hasil.blob, nama);
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
        aturFoto(await KS.ui.bacaFoto(file));
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
    let modeAktif = 'ai';
    function mode(m) {
      if (m !== 'ai' && m !== 'manual') return modeAktif;
      modeAktif = m;
      $('bb-ai').classList.toggle('hidden', m !== 'ai');
      $('bb-manual').classList.toggle('hidden', m !== 'manual');
      $('bb-mode').querySelectorAll('.seg-btn').forEach(b => {
        b.classList.toggle('aktif', b.dataset.mode === m);
        b.setAttribute('aria-selected', b.dataset.mode === m ? 'true' : 'false');
      });
      $('bb-sub').textContent = t(m === 'ai' ? 'ai.sub' : 'ai.manual-sub');
      if (m === 'manual') { bangunGaleri(); jadwalGaleri(); }
      return m;
    }
    $('bb-mode').addEventListener('click', e => {
      const b = e.target.closest('.seg-btn');
      if (b) mode(b.dataset.mode);
    });
    function aturFoto(src) {
      state.foto = src;
      fotoPv.innerHTML = '';
      fotoPv.append(h('img', { src: src, alt: '' }));
    }
    async function pakaiFoto(src, ukuran) {
      aturFoto(src);
      if (ukuran && P.UKURAN[ukuran]) { state.ukuran = ukuran; aturChip($('bb-ukuran'), ukuran); }
      if (P.validasiBayi(data(), P.hariIni()).ok) return buat();
      KS.nav.switchTab('babyborn');
      mode('manual');
      galat.textContent = '';
      KS.ui.toast(t('ai.kartu-isi-data'));
      return null;
    }
    $('bb-contoh').addEventListener('click', isiContoh);
    $('bb-buat').addEventListener('click', () => { buat(); });
    KS.nav.onSwitch(tab => { if (tab === 'babyborn') { muatProfil(); if (modeAktif === 'manual') { bangunGaleri(); jadwalGaleri(); } } });
    KS.babyborn = { isiContoh, buat, data, mode, pakaiFoto };
  })();

  (function () {
    const A = window.KSAi;
    const opsi = { batasMs: 90000, jedaMs: 1500 };
    function galatDari(kunci) {
      const e = new Error(kunci);
      e.galat = kunci;
      return e;
    }
    function tunggu(ms, sinyal) {
      return new Promise((ok, no) => {
        if (sinyal && sinyal.aborted) { no(galatDari('ai.dibatalkan')); return; }
        const henti = () => { clearTimeout(tm); no(galatDari('ai.dibatalkan')); };
        const tm = setTimeout(() => { if (sinyal) sinyal.removeEventListener('abort', henti); ok(); }, ms);
        if (sinyal) sinyal.addEventListener('abort', henti, { once: true });
      });
    }
    async function sekali(body, sinyal) {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent?key=${apiKey}`;
      const ctrl = new AbortController();
      let habis = false;
      const tm = setTimeout(() => { habis = true; ctrl.abort(); }, opsi.batasMs);
      const teruskan = () => ctrl.abort();
      if (sinyal) sinyal.addEventListener('abort', teruskan, { once: true });
      const sebab = () => (sinyal && sinyal.aborted ? 'ai.dibatalkan' : habis ? 'ai.galat-waktu' : null);
      try {
        let res;
        try {
          res = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, signal: ctrl.signal });
        } catch (e) {
          throw galatDari(sebab() || 'ai.galat-jaringan');
        }
        let json = null;
        try { json = await res.json(); } catch (e) { json = null; }
        if (sebab()) throw galatDari(sebab());
        if (!res.ok) throw galatDari(A.galatHttp(res.status));
        const r = A.bacaRespons(json);
        if (!r.ok) throw galatDari(r.galat);
        return r;
      } finally {
        clearTimeout(tm);
        if (sinyal) sinyal.removeEventListener('abort', teruskan);
      }
    }
    async function gambar(o) {
      const foto = A.pecahDataUrl(o.foto);
      if (!o.prompt || !foto) throw galatDari('ai.galat-umum');
      const body = JSON.stringify({
        contents: [{ parts: [{ text: o.prompt }, { inlineData: foto }] }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'], imageConfig: { aspectRatio: o.rasio } }
      });
      for (let ke = 0; ; ke++) {
        try {
          return await sekali(body, o.sinyal);
        } catch (e) {
          const kunci = e.galat || 'ai.galat-umum';
          const jeda = A.jedaUlang(kunci, ke, opsi.jedaMs);
          if (jeda < 0 || (o.sinyal && o.sinyal.aborted)) throw e.galat ? e : galatDari(kunci);
          console.warn('[kidsstudio] AI diulang (' + kunci + '), percobaan ' + (ke + 2));
          await tunggu(jeda, o.sinyal);
        }
      }
    }
    KS.ai = { gambar, opsi };
  })();

  (function () {
    const t = KS.i18n.t;
    const P = window.KSPure;
    const A = window.KSAi;
    const h = KS.ui.h;
    const unggah = $('ai-unggah');
    const fotoIn = $('ai-foto');
    const fotoPv = $('ai-foto-pv');
    const galat = $('ai-galat');
    const btnBuat = $('ai-buat');
    const btnPerhalus = $('ai-perhalus');
    const btnBatal = $('ai-batal');
    const status = $('ai-status');
    const kosong = $('ai-kosong');
    const wadah = $('ai-hasil');
    const st = { foto: null, tema: 'keranjang-rotan', rasio: '4:5', nuansa: 'netral', jumlah: 2, hasil: [], ctrl: null, aktif: 0 };

    function ikon(nama) { return h('span', { kelas: 'ico', html: KS.ikon.svg(nama) }); }
    function aksi(nama, kunci, fn, kelas) {
      return h('button', { type: 'button', kelas: 'aksi' + (kelas ? ' ' + kelas : ''), onclick: fn }, ikon(nama), h('span', { teks: t(kunci) }));
    }
    function tandai(wadahEl, attr, nilai) {
      wadahEl.querySelectorAll('[' + attr + ']').forEach(el => el.classList.toggle('aktif', el.getAttribute(attr) === String(nilai)));
    }

    const temaWadah = $('ai-tema');
    A.GRUP.forEach(g => {
      temaWadah.append(h('div', { kelas: 'ai-grup', teks: t(g.judulKey) }));
      temaWadah.append(h('div', { kelas: 'ai-tema-grid' }, A.TEMA.filter(x => x.grup === g.id).map(tm =>
        h('button', { type: 'button', kelas: 'ai-tema', 'data-tema': tm.id, 'aria-label': t(tm.judulKey), onclick: () => pilihTema(tm.id) },
          h('span', { kelas: 'ai-tema-pv', gaya: 'background:linear-gradient(135deg,' + tm.warna[0] + ',' + tm.warna[1] + ')', teks: tm.ikon }),
          h('b', { teks: t(tm.judulKey) }),
          h('small', { teks: t(tm.subKey) })))));
    });
    function pilihTema(id) {
      st.tema = id;
      tandai(temaWadah, 'data-tema', id);
      galat.textContent = '';
    }
    const rasioWadah = $('ai-rasio');
    A.RASIO.forEach(r => {
      const s = 26 / Math.max(r.w, r.h);
      rasioWadah.append(h('button', { type: 'button', 'data-rasio': r.id, onclick: () => { st.rasio = r.id; tandai(rasioWadah, 'data-rasio', r.id); } },
        h('i', { gaya: 'width:' + Math.round(r.w * s) + 'px;height:' + Math.round(r.h * s) + 'px' }),
        h('span', { teks: t(r.judulKey) }),
        h('small', { teks: t(r.subKey) })));
    });
    const nuansaWadah = $('ai-nuansa');
    A.NUANSA.forEach(n => {
      nuansaWadah.append(h('button', { type: 'button', kelas: 'chip', 'data-nuansa': n.id, onclick: () => { st.nuansa = n.id; tandai(nuansaWadah, 'data-nuansa', n.id); } },
        h('span', { kelas: 'titik', gaya: 'background:' + n.warna }), h('span', { teks: t(n.judulKey) })));
    });
    const jumlahWadah = $('ai-jumlah');
    [1, 2, 3, 4].forEach(n => {
      jumlahWadah.append(h('button', { type: 'button', kelas: 'chip', 'data-jumlah': String(n), teks: String(n), onclick: () => { st.jumlah = n; tandai(jumlahWadah, 'data-jumlah', n); } }));
    });
    pilihTema(st.tema);
    tandai(rasioWadah, 'data-rasio', st.rasio);
    tandai(nuansaWadah, 'data-nuansa', st.nuansa);
    tandai(jumlahWadah, 'data-jumlah', st.jumlah);

    function aturFoto(src) {
      st.foto = src;
      fotoPv.src = src;
      fotoPv.classList.remove('hidden');
      unggah.classList.add('ada');
      galat.textContent = '';
    }
    fotoIn.addEventListener('change', async () => {
      const f = fotoIn.files && fotoIn.files[0];
      if (!f) return;
      try {
        aturFoto(await KS.ui.bacaFoto(f));
      } catch (e) {
        galat.textContent = t('bb.galat-foto');
      }
    });

    function namaTema(it) {
      const tm = A.cari(A.TEMA, it.tema);
      return it.mode === 'perhalus' || !tm ? t('ai.perhalus-nama') : t('ai.nama-proyek', { tema: t(tm.judulKey) });
    }
    function ekstensi(src) { return /^data:image\/jpe?g/.test(src) ? 'jpg' : 'png'; }
    function namaFile(dasar, src, n) {
      return ('baby-born-' + dasar + (n ? '-' + n : '')).replace(/[^\w-]+/g, '-').toLowerCase() + '.' + ekstensi(src);
    }
    function kartu(it, i) {
      const r = A.cari(A.RASIO, it.rasio) || A.RASIO[0];
      const nomor = h('span', { kelas: 'ai-nomor', teks: t('ai.nomor', { n: i + 1 }) });
      if (it.status === 'ok') {
        return h('div', { kelas: 'ai-kartu', 'data-i': String(i), 'data-status': 'ok' },
          h('img', { src: it.src, alt: namaTema(it) }), nomor,
          h('div', { kelas: 'aksi-grid' },
            aksi('unduh', 'ai.unduh', () => unduh(i), 'utama'),
            aksi('bagikan', 'ai.bagikan', () => bagikan(i)),
            it.proyekId ? aksi('cek', 'ai.sudah-simpan', () => KS.nav.switchTab('proyekku'), 'tersimpan') : aksi('simpan', 'ai.simpan', () => simpan(i)),
            aksi('kartu', 'ai.jadikan-kartu', () => jadikanKartu(i)),
            aksi('ulang', 'ai.ulang', () => ulang(i)),
            aksi('bandingkan', 'ai.bandingkan', () => bandingkan(i))));
      }
      const gagal = it.status === 'gagal';
      return h('div', { kelas: 'ai-kartu', 'data-i': String(i), 'data-status': it.status },
        h('div', { kelas: 'ai-tunggu' + (gagal ? ' gagal' : ''), gaya: 'aspect-ratio:' + r.w + '/' + r.h },
          gagal ? null : h('span', { kelas: 'ai-putar' }),
          h('span', { teks: gagal ? t(it.galat) : t(it.status === 'jalan' ? 'ai.memproses-satu' : 'ai.menunggu') }),
          gagal && it.galat !== 'ai.galat-diblokir' ? h('button', { type: 'button', kelas: 'ks-btn ks-btn-kecil ks-btn-sekunder', onclick: () => ulang(i) }, ikon('ulang'), h('span', { teks: t('ai.ulang') })) : null),
        nomor);
    }
    function render() {
      wadah.innerHTML = '';
      st.hasil.forEach((it, i) => wadah.append(kartu(it, i)));
      kosong.classList.toggle('hidden', st.hasil.length > 0);
    }
    function renderSatu(i) {
      const lama = wadah.querySelector('.ai-kartu[data-i="' + i + '"]');
      const baru = kartu(st.hasil[i], i);
      if (lama) lama.replaceWith(baru); else render();
    }
    function perbaruiStatus() {
      const total = st.hasil.length;
      const selesai = st.hasil.filter(x => x.status === 'ok' || x.status === 'gagal').length;
      const sibuk = st.aktif > 0;
      status.classList.toggle('hidden', !sibuk);
      if (sibuk) status.textContent = t('ai.memproses', { selesai: selesai, total: total });
      btnBuat.disabled = sibuk;
      btnPerhalus.disabled = sibuk;
      btnBatal.classList.toggle('hidden', !sibuk);
    }
    async function jalankan(i, sinyal) {
      const it = st.hasil[i];
      if (sinyal.aborted) { it.status = 'gagal'; it.galat = 'ai.dibatalkan'; renderSatu(i); return; }
      it.status = 'jalan';
      renderSatu(i);
      try {
        const r = await KS.ai.gambar({ prompt: A.susunPrompt(it), foto: st.foto, rasio: it.rasio, sinyal: sinyal });
        it.src = r.src;
        it.status = 'ok';
        it.proyekId = null;
      } catch (e) {
        if (!e.galat) console.error('[kidsstudio] AI:', e);
        it.status = 'gagal';
        it.galat = e.galat || 'ai.galat-umum';
      }
      renderSatu(i);
      perbaruiStatus();
    }
    function mulaiKerja() {
      if (!st.ctrl) st.ctrl = new AbortController();
      st.aktif++;
      perbaruiStatus();
      return st.ctrl.signal;
    }
    function selesaiKerja() {
      st.aktif = Math.max(0, st.aktif - 1);
      if (!st.aktif) st.ctrl = null;
      perbaruiStatus();
    }
    async function buat(modeBuat) {
      if (st.aktif) return null;
      const m = modeBuat === 'perhalus' ? 'perhalus' : 'tema';
      const cek = A.validasiAi({ foto: st.foto, tema: st.tema, rasio: st.rasio, nuansa: st.nuansa, jumlah: st.jumlah, mode: m });
      if (!cek.ok) {
        galat.textContent = t(cek.galat);
        galat.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return null;
      }
      galat.textContent = '';
      const tm = m === 'perhalus' ? null : A.cari(A.TEMA, st.tema);
      st.hasil = A.pilihVariasi(tm, st.jumlah).map(v => ({ mode: m, tema: tm ? tm.id : null, rasio: st.rasio, nuansa: st.nuansa, variasi: v, status: 'tunggu' }));
      render();
      if (window.innerWidth < 1001) $('ai-hasil').parentElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
      const sinyal = mulaiKerja();
      await A.jalankanTerbatas(st.hasil.map((_, i) => () => jalankan(i, sinyal)), 2);
      selesaiKerja();
      const ok = st.hasil.filter(x => x.status === 'ok').length;
      if (ok === st.hasil.length) KS.ui.toast(t('ai.selesai', { n: ok }));
      else if (ok) KS.ui.toast(t('ai.sebagian', { n: ok, total: st.hasil.length }));
      else KS.ui.toast(t((st.hasil[0] && st.hasil[0].galat) || 'ai.galat-umum'), 'galat');
      return st.hasil;
    }
    async function ulang(i) {
      const it = st.hasil[i];
      if (!it || it.status === 'jalan' || it.status === 'tunggu') return null;
      const sinyal = mulaiKerja();
      await jalankan(i, sinyal);
      selesaiKerja();
      return it;
    }
    function itemOk(i) {
      const it = st.hasil[i];
      return it && it.status === 'ok' ? it : null;
    }
    function unduhSrc(src, nama) {
      KS.ui.unduhBlob(KS.ui.dataUrlKeBlob(src), nama);
      KS.ui.toast(t('ekspor.selesai'));
    }
    async function bagikanSrc(src, nama) {
      const blob = KS.ui.dataUrlKeBlob(src);
      const berkas = new File([blob], nama, { type: blob.type });
      if (navigator.canShare && navigator.canShare({ files: [berkas] })) {
        try { await navigator.share({ files: [berkas] }); } catch (e) {}
        return;
      }
      KS.ui.toast(t('ai.bagikan-tidak-bisa'));
      KS.ui.unduhBlob(blob, nama);
    }
    function unduh(i) {
      const it = itemOk(i);
      if (it) unduhSrc(it.src, namaFile(it.tema || 'perhalus', it.src, i + 1));
    }
    function bagikan(i) {
      const it = itemOk(i);
      if (it) return bagikanSrc(it.src, namaFile(it.tema || 'perhalus', it.src, i + 1));
    }
    function kecilkan(src, lebar) {
      return new Promise(ok => {
        const img = new Image();
        img.onload = () => {
          const s = Math.min(1, lebar / img.naturalWidth);
          const c = document.createElement('canvas');
          c.width = Math.max(1, Math.round(img.naturalWidth * s));
          c.height = Math.max(1, Math.round(img.naturalHeight * s));
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          ok(c.toDataURL('image/jpeg', 0.78));
        };
        img.onerror = () => ok(null);
        img.src = src;
      });
    }
    async function simpan(i) {
      const it = itemOk(i);
      if (!it) return null;
      if (it.proyekId) return it.proyekId;
      const sekarang = Date.now();
      const p = {
        id: P.buatId(), editor: 'babyborn', jenis: 'foto-ai', nama: namaTema(it), mode: it.mode, tema: it.tema, rasio: it.rasio, nuansa: it.nuansa,
        ukuran: A.rasioKeUkuran(it.rasio), gambar: it.src, thumbnail: await kecilkan(it.src, 360), dibuat: sekarang, diubah: sekarang
      };
      try {
        await KS.store.saveProject(p);
      } catch (e) {
        console.error('[kidsstudio] simpan foto AI:', e);
        KS.ui.toast(t('galat.penyimpanan'), 'galat');
        return null;
      }
      it.proyekId = p.id;
      renderSatu(i);
      KS.ui.toast(t('ai.tersimpan'));
      return p.id;
    }
    function jadikanKartu(i) {
      const it = itemOk(i);
      return it ? KS.babyborn.pakaiFoto(it.src, A.rasioKeUkuran(it.rasio)) : null;
    }
    function bandingkan(i) {
      const it = itemOk(i);
      if (it && st.foto) bandingkanSrc(st.foto, it.src);
    }
    function bandingkanSrc(sebelum, sesudah) {
      let tutup = () => {};
      tutup = KS.ui.modal(h('div', null,
        h('b', { kelas: 'judul-font', gaya: 'font-size:22px', teks: t('ai.bandingkan') }),
        h('div', { kelas: 'ai-banding' },
          h('div', null, h('b', { teks: t('ai.sebelum') }), h('img', { src: sebelum, alt: t('ai.sebelum') })),
          h('div', null, h('b', { teks: t('ai.sesudah') }), h('img', { src: sesudah, alt: t('ai.sesudah') }))),
        h('button', { type: 'button', kelas: 'ks-btn ks-btn-sekunder ks-btn-lebar', gaya: 'margin-top:14px', teks: t('nav.tutup'), onclick: () => tutup() })));
    }
    function lihat(p) {
      let tutup = () => {};
      const nama = namaFile(p.tema || 'perhalus', p.gambar, 0);
      tutup = KS.ui.modal(h('div', null,
        h('b', { kelas: 'judul-font', gaya: 'font-size:22px', teks: p.nama || t('ai.lihat-judul') }),
        h('img', { src: p.gambar, alt: p.nama || '' }),
        h('div', { kelas: 'aksi-grid' },
          aksi('unduh', 'ai.unduh', () => unduhSrc(p.gambar, nama), 'utama'),
          aksi('bagikan', 'ai.bagikan', () => bagikanSrc(p.gambar, nama)),
          aksi('kartu', 'ai.jadikan-kartu', () => { tutup(); KS.babyborn.pakaiFoto(p.gambar, p.ukuran); })),
        h('button', { type: 'button', kelas: 'ks-btn ks-btn-sekunder ks-btn-lebar', gaya: 'margin-top:14px', teks: t('nav.tutup'), onclick: () => tutup() })));
      return tutup;
    }
    btnBuat.addEventListener('click', () => { buat('tema'); });
    btnPerhalus.addEventListener('click', () => { buat('perhalus'); });
    btnBatal.addEventListener('click', () => { if (st.ctrl) st.ctrl.abort(); KS.ui.toast(t('ai.dibatalkan')); });
    KS.babybornAi = { buat, ulang, unduh, bagikan, simpan, jadikanKartu, bandingkan, lihat, pilihTema, state: () => st };
    KS.aiAlat = { unduhSrc, bagikanSrc, kecilkan, bandingkanSrc, aksi };
  })();

  (function () {
    const t = KS.i18n.t;
    const P = window.KSPure;
    const A = window.KSAi;
    const h = KS.ui.h;
    const X = KS.aiAlat;
    const aksi = X.aksi;
    const unggah = $('aa-unggah');
    const fotoIn = $('aa-foto');
    const fotoPv = $('aa-foto-pv');
    const galat = $('aa-galat');
    const btnBuat = $('aa-buat');
    const btnBatal = $('aa-batal');
    const status = $('aa-status');
    const kosong = $('aa-kosong');
    const wadah = $('aa-hasil');
    const modeWadah = $('aa-mode');
    const gayaWadah = $('aa-gaya');
    const st = { foto: null, mode: 'kartun', gaya: 'kartun-3d', rasio: '4:5', jumlah: 2, hasil: [], ctrl: null, aktif: 0 };

    function tandai(el, attr, nilai) {
      el.querySelectorAll('[' + attr + ']').forEach(b => b.classList.toggle('aktif', b.getAttribute(attr) === String(nilai)));
    }
    function kartuPilih(attr, id, warna, ikonTeks, judulKey, subKey, fn) {
      return h('button', { type: 'button', kelas: 'ai-tema', [attr]: id, 'aria-label': t(judulKey), onclick: fn },
        h('span', { kelas: 'ai-tema-pv', gaya: 'background:linear-gradient(135deg,' + warna[0] + ',' + warna[1] + ')', teks: ikonTeks }),
        h('b', { teks: t(judulKey) }),
        h('small', { teks: t(subKey) }));
    }
    const WARNA_MODE = { kartun: ['#FBEAF0', '#CECBF6'], kostum: ['#E6F1FB', '#85B7EB'], latar: ['#26215C', '#7F77DD'], 'hapus-latar': ['#FFFFFF', '#ECEAF6'] };
    A.MODE_ANAK.forEach(m => modeWadah.append(kartuPilih('data-mode', m.id, WARNA_MODE[m.id], m.ikon, m.judulKey, m.subKey, () => pilihMode(m.id))));
    function pilihMode(id) {
      if (!A.cari(A.MODE_ANAK, id)) return;
      st.mode = id;
      tandai(modeWadah, 'data-mode', id);
      gayaWadah.innerHTML = '';
      const daftar = A.GAYA_ANAK.filter(g => g.mode === id);
      daftar.forEach(g => gayaWadah.append(kartuPilih('data-gaya', g.id, g.warna, g.ikon, g.judulKey, g.subKey, () => pilihGaya(g.id))));
      const g = A.cari(A.GAYA_ANAK, st.gaya);
      pilihGaya(g && g.mode === id ? g.id : daftar[0].id);
    }
    function pilihGaya(id) {
      const g = A.cari(A.GAYA_ANAK, id);
      if (!g) return;
      if (g.mode !== st.mode) { st.gaya = id; pilihMode(g.mode); return; }
      st.gaya = id;
      tandai(gayaWadah, 'data-gaya', id);
      galat.textContent = '';
    }
    const rasioWadah = $('aa-rasio');
    A.RASIO.forEach(r => {
      const s = 26 / Math.max(r.w, r.h);
      rasioWadah.append(h('button', { type: 'button', 'data-rasio': r.id, onclick: () => { st.rasio = r.id; tandai(rasioWadah, 'data-rasio', r.id); } },
        h('i', { gaya: 'width:' + Math.round(r.w * s) + 'px;height:' + Math.round(r.h * s) + 'px' }),
        h('span', { teks: t(r.judulKey) }),
        h('small', { teks: t(r.subKey) })));
    });
    const jumlahWadah = $('aa-jumlah');
    [1, 2, 3, 4].forEach(n => {
      jumlahWadah.append(h('button', { type: 'button', kelas: 'chip', 'data-jumlah': String(n), teks: String(n), onclick: () => { st.jumlah = n; tandai(jumlahWadah, 'data-jumlah', n); } }));
    });
    pilihMode(st.mode);
    tandai(rasioWadah, 'data-rasio', st.rasio);
    tandai(jumlahWadah, 'data-jumlah', st.jumlah);

    fotoIn.addEventListener('change', async () => {
      const f = fotoIn.files && fotoIn.files[0];
      if (!f) return;
      try {
        st.foto = await KS.ui.bacaFoto(f);
        fotoPv.src = st.foto;
        fotoPv.classList.remove('hidden');
        unggah.classList.add('ada');
        galat.textContent = '';
      } catch (e) {
        galat.textContent = t('bb.galat-foto');
      }
    });

    function namaGaya(it) {
      const g = A.cari(A.GAYA_ANAK, it.gaya);
      return t('aa.nama-proyek', { gaya: g ? t(g.judulKey) : '' });
    }
    function namaFile(gaya, src, n) {
      return ('ai-anak-' + gaya + (n ? '-' + n : '')).replace(/[^\w-]+/g, '-').toLowerCase() + '.' + (/^data:image\/jpe?g/.test(src) ? 'jpg' : 'png');
    }
    function kartu(it, i) {
      const r = A.cari(A.RASIO, it.rasio) || A.RASIO[0];
      const nomor = h('span', { kelas: 'ai-nomor', teks: t('ai.nomor', { n: i + 1 }) });
      if (it.status === 'ok') {
        return h('div', { kelas: 'ai-kartu', 'data-i': String(i), 'data-status': 'ok' },
          h('img', { src: it.src, alt: namaGaya(it) }), nomor,
          h('div', { kelas: 'aksi-grid' },
            aksi('unduh', 'ai.unduh', () => unduh(i), 'utama'),
            aksi('bagikan', 'ai.bagikan', () => bagikan(i)),
            it.proyekId ? aksi('cek', 'ai.sudah-simpan', () => KS.nav.switchTab('proyekku'), 'tersimpan') : aksi('simpan', 'ai.simpan', () => simpan(i)),
            aksi('kartu', 'aa.edit', () => edit(i)),
            aksi('ulang', 'ai.ulang', () => ulang(i)),
            aksi('bandingkan', 'ai.bandingkan', () => bandingkan(i))));
      }
      const gagal = it.status === 'gagal';
      return h('div', { kelas: 'ai-kartu', 'data-i': String(i), 'data-status': it.status },
        h('div', { kelas: 'ai-tunggu' + (gagal ? ' gagal' : ''), gaya: 'aspect-ratio:' + r.w + '/' + r.h },
          gagal ? null : h('span', { kelas: 'ai-putar' }),
          h('span', { teks: gagal ? t(it.galat) : t(it.status === 'jalan' ? 'ai.memproses-satu' : 'ai.menunggu') }),
          gagal && it.galat !== 'ai.galat-diblokir' ? h('button', { type: 'button', kelas: 'ks-btn ks-btn-kecil ks-btn-sekunder', onclick: () => ulang(i) }, h('span', { kelas: 'ico', html: KS.ikon.svg('ulang') }), h('span', { teks: t('ai.ulang') })) : null),
        nomor);
    }
    function render() {
      wadah.innerHTML = '';
      st.hasil.forEach((it, i) => wadah.append(kartu(it, i)));
      kosong.classList.toggle('hidden', st.hasil.length > 0);
    }
    function renderSatu(i) {
      const lama = wadah.querySelector('.ai-kartu[data-i="' + i + '"]');
      const baru = kartu(st.hasil[i], i);
      if (lama) lama.replaceWith(baru); else render();
    }
    function perbaruiStatus() {
      const selesai = st.hasil.filter(x => x.status === 'ok' || x.status === 'gagal').length;
      const sibuk = st.aktif > 0;
      status.classList.toggle('hidden', !sibuk);
      if (sibuk) status.textContent = t('ai.memproses', { selesai: selesai, total: st.hasil.length });
      btnBuat.disabled = sibuk;
      btnBatal.classList.toggle('hidden', !sibuk);
    }
    async function jalankan(i, sinyal) {
      const it = st.hasil[i];
      if (sinyal.aborted) { it.status = 'gagal'; it.galat = 'ai.dibatalkan'; renderSatu(i); return; }
      it.status = 'jalan';
      renderSatu(i);
      try {
        const r = await KS.ai.gambar({ prompt: A.susunPromptAnak(it), foto: st.foto, rasio: it.rasio, sinyal: sinyal });
        it.src = r.src;
        it.status = 'ok';
        it.proyekId = null;
      } catch (e) {
        if (!e.galat) console.error('[kidsstudio] AI anak:', e);
        it.status = 'gagal';
        it.galat = e.galat || 'ai.galat-umum';
      }
      renderSatu(i);
      perbaruiStatus();
    }
    function mulaiKerja() {
      if (!st.ctrl) st.ctrl = new AbortController();
      st.aktif++;
      perbaruiStatus();
      return st.ctrl.signal;
    }
    function selesaiKerja() {
      st.aktif = Math.max(0, st.aktif - 1);
      if (!st.aktif) st.ctrl = null;
      perbaruiStatus();
    }
    async function buat() {
      if (st.aktif) return null;
      const cek = A.validasiAnak({ foto: st.foto, gaya: st.gaya, rasio: st.rasio, jumlah: st.jumlah });
      if (!cek.ok) {
        galat.textContent = t(cek.galat);
        galat.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return null;
      }
      galat.textContent = '';
      const g = A.cari(A.GAYA_ANAK, st.gaya);
      st.hasil = A.pilihVariasi(g, st.jumlah).map(v => ({ gaya: g.id, rasio: st.rasio, variasi: v, status: 'tunggu' }));
      render();
      if (window.innerWidth < 1001) wadah.parentElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
      const sinyal = mulaiKerja();
      await A.jalankanTerbatas(st.hasil.map((_, i) => () => jalankan(i, sinyal)), 2);
      selesaiKerja();
      const ok = st.hasil.filter(x => x.status === 'ok').length;
      if (ok === st.hasil.length) KS.ui.toast(t('ai.selesai', { n: ok }));
      else if (ok) KS.ui.toast(t('ai.sebagian', { n: ok, total: st.hasil.length }));
      else KS.ui.toast(t((st.hasil[0] && st.hasil[0].galat) || 'ai.galat-umum'), 'galat');
      return st.hasil;
    }
    async function ulang(i) {
      const it = st.hasil[i];
      if (!it || it.status === 'jalan' || it.status === 'tunggu') return null;
      const sinyal = mulaiKerja();
      await jalankan(i, sinyal);
      selesaiKerja();
      return it;
    }
    function itemOk(i) {
      const it = st.hasil[i];
      return it && it.status === 'ok' ? it : null;
    }
    function unduh(i) {
      const it = itemOk(i);
      if (it) X.unduhSrc(it.src, namaFile(it.gaya, it.src, i + 1));
    }
    function bagikan(i) {
      const it = itemOk(i);
      if (it) return X.bagikanSrc(it.src, namaFile(it.gaya, it.src, i + 1));
    }
    function bandingkan(i) {
      const it = itemOk(i);
      if (it && st.foto) X.bandingkanSrc(st.foto, it.src);
    }
    async function simpan(i) {
      const it = itemOk(i);
      if (!it) return null;
      if (it.proyekId) return it.proyekId;
      const sekarang = Date.now();
      const p = {
        id: P.buatId(), editor: 'aianak', jenis: 'foto-ai', nama: namaGaya(it), gaya: it.gaya, rasio: it.rasio,
        ukuran: A.rasioKeUkuran(it.rasio), gambar: it.src, thumbnail: await X.kecilkan(it.src, 360), dibuat: sekarang, diubah: sekarang
      };
      try {
        await KS.store.saveProject(p);
      } catch (e) {
        console.error('[kidsstudio] simpan AI anak:', e);
        KS.ui.toast(t('galat.penyimpanan'), 'galat');
        return null;
      }
      it.proyekId = p.id;
      renderSatu(i);
      KS.ui.toast(t('ai.tersimpan'));
      return p.id;
    }
    async function editSrc(src, ukuran, nama) {
      if (typeof fabric === 'undefined') { KS.ui.toast(t('galat.editor'), 'galat'); return null; }
      const idUk = P.UKURAN[ukuran] ? ukuran : 'ig-post';
      const uk = P.UKURAN[idUk];
      const objek = await KS.render.objekDari({ w: uk.w, h: uk.h, items: [
        { jenis: 'latar', warna: '#FFFFFF' },
        { jenis: 'foto', x: uk.w / 2, y: uk.h / 2, w: uk.w, h: uk.h, src: src }
      ] });
      const sekarang = Date.now();
      const proyek = { id: P.buatId(), editor: 'aianak', templateId: null, ukuran: idUk, nama: nama, data: { foto: src }, fabric: null, dibuat: sekarang, diubah: sekarang };
      await KS.editor.buka(proyek, objek);
      return proyek;
    }
    function edit(i) {
      const it = itemOk(i);
      return it ? editSrc(it.src, A.rasioKeUkuran(it.rasio), namaGaya(it)) : null;
    }
    function lihat(p) {
      let tutup = () => {};
      const nama = namaFile(p.gaya || 'foto', p.gambar, 0);
      tutup = KS.ui.modal(h('div', null,
        h('b', { kelas: 'judul-font', gaya: 'font-size:22px', teks: p.nama || t('aa.judul') }),
        h('img', { src: p.gambar, alt: p.nama || '' }),
        h('div', { kelas: 'aksi-grid' },
          aksi('unduh', 'ai.unduh', () => X.unduhSrc(p.gambar, nama), 'utama'),
          aksi('bagikan', 'ai.bagikan', () => X.bagikanSrc(p.gambar, nama)),
          aksi('kartu', 'aa.edit', () => { tutup(); editSrc(p.gambar, p.ukuran, p.nama || t('aa.judul')); })),
        h('button', { type: 'button', kelas: 'ks-btn ks-btn-sekunder ks-btn-lebar', gaya: 'margin-top:14px', teks: t('nav.tutup'), onclick: () => tutup() })));
      return tutup;
    }
    btnBuat.addEventListener('click', () => { buat(); });
    btnBatal.addEventListener('click', () => { if (st.ctrl) st.ctrl.abort(); KS.ui.toast(t('ai.dibatalkan')); });
    KS.aiAnak = { buat, ulang, unduh, bagikan, simpan, edit, bandingkan, lihat, pilihMode, pilihGaya, state: () => st };
  })();

  (function () {
    const t = KS.i18n.t;
    const P = window.KSPure;
    const K = window.KSKolase;
    const h = KS.ui.h;
    const fotoIn = $('kl-foto');
    const fotoGrid = $('kl-foto-grid');
    const jumlahEl = $('kl-jumlah');
    const judulIn = $('kl-judul-acara');
    const tglIn = $('kl-tanggal');
    const galat = $('kl-galat');
    const grid = $('kl-template');
    const catatan = $('kl-catatan');
    const st = { fotos: [], kecil: [], tataLetak: 'grid', palet: 'pastel', jarak: 'sedang', sudut: 'membulat', ukuran: 'ig-post' };
    let timer = null;
    let nomorRender = 0;

    tglIn.value = P.hariIni();
    function chips(wadah, list, kunciState) {
      list.forEach(x => wadah.append(h('button', { type: 'button', kelas: 'chip', 'data-nilai': x.id, teks: t(x.judulKey), onclick: () => { st[kunciState] = x.id; tandai(wadah, x.id); jadwal(); } })));
      tandai(wadah, st[kunciState]);
    }
    function tandai(wadah, nilai) {
      wadah.querySelectorAll('.chip').forEach(c => c.classList.toggle('aktif', c.dataset.nilai === nilai));
    }
    K.PALET.forEach(p => $('kl-palet').append(h('button', { type: 'button', kelas: 'chip', 'data-nilai': p.id, onclick: () => { st.palet = p.id; tandai($('kl-palet'), p.id); jadwal(); } },
      h('span', { kelas: 'titik', gaya: 'background:linear-gradient(135deg,' + p.latar + ',' + (p.latar2 || p.aksen) + ')' }), h('span', { teks: t(p.judulKey) }))));
    tandai($('kl-palet'), st.palet);
    chips($('kl-jarak'), K.JARAK, 'jarak');
    chips($('kl-sudut'), K.SUDUT, 'sudut');
    chips($('kl-ukuran'), [{ id: 'ig-post', judulKey: 'ukuran.ig-post' }, { id: 'ig-story', judulKey: 'ukuran.ig-story' }, { id: 'cetak-10r', judulKey: 'ukuran.cetak-10r' }], 'ukuran');
    K.ACARA.forEach(a => $('kl-acara').append(h('button', { type: 'button', kelas: 'chip', teks: t(a.judulKey), onclick: () => { judulIn.value = t(a.judulKey); jadwal(); } })));
    judulIn.addEventListener('input', jadwal);
    tglIn.addEventListener('input', jadwal);

    function renderFoto() {
      fotoGrid.innerHTML = '';
      st.kecil.forEach((src, i) => fotoGrid.append(h('div', { kelas: 'kl-foto' },
        h('img', { src: src, alt: '' }),
        h('span', { kelas: 'kl-foto-no', teks: String(i + 1) }),
        h('button', { type: 'button', kelas: 'kl-foto-x', 'aria-label': t('kl.hapus-foto', { n: i + 1 }), onclick: () => hapusFoto(i) }, h('span', { kelas: 'ico', html: KS.ikon.svg('x') })))));
      jumlahEl.textContent = t('kl.jumlah', { n: st.fotos.length });
    }
    function hapusFoto(i) {
      st.fotos.splice(i, 1);
      st.kecil.splice(i, 1);
      renderFoto();
      jadwal();
    }
    async function tambahFile(files) {
      let gagal = false;
      for (const f of files) {
        if (st.fotos.length >= 12) { galat.textContent = t('kl.galat-foto-lebih'); break; }
        try {
          const src = await KS.ui.bacaFoto(f);
          st.fotos.push(src);
          st.kecil.push((await KS.aiAlat.kecilkan(src, 320)) || src);
        } catch (e) { gagal = true; }
      }
      if (gagal) KS.ui.toast(t('kl.galat-baca'), 'galat');
      else if (st.fotos.length <= 12) galat.textContent = '';
      renderFoto();
      jadwal();
    }
    fotoIn.addEventListener('change', async () => {
      const files = [...(fotoIn.files || [])];
      fotoIn.value = '';
      if (files.length) await tambahFile(files);
    });

    function jumlahPratinjau() { return st.fotos.length >= 2 ? Math.min(12, st.fotos.length) : 4; }
    function data(kecil) {
      const n = jumlahPratinjau();
      const ada = st.fotos.length >= 2;
      return {
        tataLetak: st.tataLetak, ukuran: st.ukuran, palet: st.palet, jarak: st.jarak, sudut: st.sudut,
        judul: judulIn.value.trim(), tanggal: tglIn.value,
        fotos: ada ? (kecil ? st.kecil : st.fotos).slice(0, 12) : [], jumlah: n
      };
    }
    function bangunGaleri() {
      const n = jumlahPratinjau();
      const cocok = K.cocokUntuk(n);
      if (!cocok.some(x => x.id === st.tataLetak)) st.tataLetak = cocok[0].id;
      grid.innerHTML = '';
      cocok.forEach(tl => grid.append(h('button', { type: 'button', kelas: 'tpl' + (tl.id === st.tataLetak ? ' aktif' : ''), 'data-id': tl.id, onclick: () => pilih(tl.id) },
        h('div', { kelas: 'tpl-img' }, h('img', { alt: t(tl.judulKey) })),
        h('div', { kelas: 'tpl-nama', teks: t(tl.judulKey) }))));
      catatan.classList.toggle('hidden', st.fotos.length >= 2);
      return cocok;
    }
    function pilih(id) {
      st.tataLetak = id;
      grid.querySelectorAll('.tpl').forEach(el => el.classList.toggle('aktif', el.dataset.id === id));
      galat.textContent = '';
    }
    async function renderGaleri() {
      const cocok = bangunGaleri();
      if (typeof fabric === 'undefined') return;
      const nomor = ++nomorRender;
      const d = data(true);
      for (const tl of cocok) {
        if (nomor !== nomorRender) return;
        const hasil = K.susunKolase(Object.assign({}, d, { tataLetak: tl.id }));
        if (!hasil) continue;
        const url = await KS.render.gambarMini(hasil, 300);
        if (nomor !== nomorRender) return;
        const img = grid.querySelector('.tpl[data-id="' + tl.id + '"] img');
        if (img) img.src = url;
      }
    }
    function jadwal() {
      clearTimeout(timer);
      timer = setTimeout(renderGaleri, 400);
    }
    async function buat(tataLetak) {
      if (tataLetak) pilih(tataLetak);
      const d = data(false);
      const cek = K.validasiKolase(d);
      if (!cek.ok) {
        galat.textContent = t(cek.galat);
        galat.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return null;
      }
      galat.textContent = '';
      if (typeof fabric === 'undefined') { KS.ui.toast(t('galat.editor'), 'galat'); return null; }
      const objek = await KS.render.objekDari(K.susunKolase(d));
      const sekarang = Date.now();
      const nama = d.judul ? t('kl.nama-proyek', { judul: d.judul }) : t('kl.nama-polos');
      const proyek = {
        id: P.buatId(), editor: 'kolase', templateId: d.tataLetak, ukuran: d.ukuran, nama: nama,
        data: { judul: d.judul, tanggal: d.tanggal, palet: d.palet, jarak: d.jarak, sudut: d.sudut, jumlah: d.fotos.length },
        fabric: null, dibuat: sekarang, diubah: sekarang
      };
      await KS.editor.buka(proyek, objek);
      return proyek;
    }
    $('kl-buat').addEventListener('click', () => { buat(); });
    KS.nav.onSwitch(tab => { if (tab === 'kolase') jadwal(); });
    KS.kolase = { buat, tambahFile, hapusFoto, pilih, state: () => st, segarkan: renderGaleri };
  })();

  (function () {
    const t = KS.i18n.t;
    const P = window.KSPure;
    const M = window.KSMilestone;
    const h = KS.ui.h;
    const TPL = (window.KSTemplates && window.KSTemplates.milestone) || [];
    const f = {
      nama: $('ms-nama'), tglLahir: $('ms-tgl-lahir'), tanggal: $('ms-tanggal'), bulanKe: $('ms-bulan'), tahunKe: $('ms-tahun'),
      momen: $('ms-momen'), momenLain: $('ms-momen-lain'), berat: $('ms-berat'), tinggi: $('ms-tinggi'), bisa: $('ms-bisa'), suka: $('ms-suka')
    };
    const galat = $('ms-galat');
    const grid = $('ms-template');
    const profilSel = $('ms-profil');
    const st = { mode: 'bulanan', jenisKelamin: 'N', foto: null, fotoDulu: null, templateId: TPL.length ? TPL[0].id : null, ukuran: 'ig-post', seriId: null };
    let profilList = [];
    let timer = null;
    let nomorRender = 0;

    for (let i = 1; i <= 12; i++) {
      f.bulanKe.append(h('option', { value: String(i), teks: String(i) }));
      f.tahunKe.append(h('option', { value: String(i), teks: String(i) }));
    }
    M.MOMEN.forEach(m => f.momen.append(h('option', { value: m.id, teks: t(m.judulKey) })));
    f.tanggal.value = P.hariIni();
    f.tanggal.max = P.hariIni();
    f.tglLahir.max = P.hariIni();

    function tandai(wadah, nilai) {
      wadah.querySelectorAll('.chip').forEach(c => c.classList.toggle('aktif', c.dataset.nilai === nilai));
    }
    function pasangChip(wadah, kunci) {
      wadah.addEventListener('click', e => {
        const c = e.target.closest('.chip');
        if (!c) return;
        st[kunci] = c.dataset.nilai;
        tandai(wadah, st[kunci]);
        if (kunci === 'mode') { aturMode(); saran(); }
        jadwal();
      });
    }
    M.MODE.forEach(m => $('ms-mode').append(h('button', { type: 'button', kelas: 'chip', 'data-nilai': m.id, teks: t(m.judulKey) })));
    pasangChip($('ms-mode'), 'mode');
    pasangChip($('ms-jk'), 'jenisKelamin');
    pasangChip($('ms-ukuran'), 'ukuran');
    function aturMode() {
      tandai($('ms-mode'), st.mode);
      $('ms-baris-bulan').classList.toggle('hidden', st.mode !== 'bulanan');
      $('ms-baris-tahun').classList.toggle('hidden', st.mode !== 'ultah');
      $('ms-baris-momen').classList.toggle('hidden', st.mode !== 'pertama');
      f.momenLain.classList.toggle('hidden', !(st.mode === 'pertama' && f.momen.value === 'lain'));
    }
    function saran() {
      const n = M.saranAngka(st.mode, f.tglLahir.value, f.tanggal.value || P.hariIni());
      const u = P.hitungUmur(f.tglLahir.value, f.tanggal.value || P.hariIni());
      const hint = $('ms-umur');
      if (n && st.mode === 'bulanan') f.bulanKe.value = String(n);
      if (n && st.mode === 'ultah') f.tahunKe.value = String(n);
      hint.textContent = u && st.mode !== 'pertama' ? t('ms.umur-otomatis', { umur: P.labelUmur(u, t) }) : '';
    }
    f.tglLahir.addEventListener('input', () => { saran(); jadwal(); });
    f.tanggal.addEventListener('input', () => { saran(); jadwal(); });
    f.momen.addEventListener('change', () => { aturMode(); jadwal(); });
    Object.keys(f).forEach(k => { if (k !== 'tglLahir' && k !== 'tanggal') f[k].addEventListener('input', jadwal); });

    function pratinjauFoto(el, src) {
      el.innerHTML = '';
      el.append(src ? h('img', { src: src, alt: '' }) : h('span', { kelas: 'ico', html: KS.ikon.svg('foto') }));
    }
    async function bacaKe(input, kunci, pv) {
      const file = input.files && input.files[0];
      if (!file) return;
      try {
        st[kunci] = await KS.ui.bacaFoto(file);
        pratinjauFoto(pv, st[kunci]);
        galat.textContent = '';
        jadwal();
      } catch (e) {
        galat.textContent = t('bb.galat-foto');
      }
    }
    $('ms-foto').addEventListener('change', () => bacaKe($('ms-foto'), 'foto', $('ms-foto-pv')));
    $('ms-foto-dulu').addEventListener('change', () => bacaKe($('ms-foto-dulu'), 'fotoDulu', $('ms-foto-dulu-pv')));

    profilSel.addEventListener('change', () => {
      const p = profilList.find(x => x.id === profilSel.value);
      if (!p) return;
      f.nama.value = p.panggilan || p.nama;
      f.tglLahir.value = p.tglLahir;
      st.jenisKelamin = p.jenisKelamin;
      tandai($('ms-jk'), st.jenisKelamin);
      saran();
      jadwal();
    });
    function muatProfil() {
      KS.store.getProfiles().then(list => {
        profilList = list;
        $('ms-profil-wrap').classList.toggle('hidden', !list.length);
        profilSel.innerHTML = '';
        profilSel.append(h('option', { value: '', teks: t('bb.pilih-profil') }));
        list.forEach(p => profilSel.append(h('option', { value: p.id, teks: p.nama })));
      }).catch(() => $('ms-profil-wrap').classList.add('hidden'));
    }

    function data() {
      return {
        mode: st.mode, nama: f.nama.value.trim(), tglLahir: f.tglLahir.value, tanggal: f.tanggal.value,
        bulanKe: Number(f.bulanKe.value), tahunKe: Number(f.tahunKe.value), momen: f.momen.value, momenLain: f.momenLain.value.trim(),
        berat: f.berat.value.trim(), tinggi: f.tinggi.value.trim(), bisa: f.bisa.value, suka: f.suka.value.trim(),
        foto: st.foto, fotoDulu: st.fotoDulu, jenisKelamin: st.jenisKelamin
      };
    }
    function dataPratinjau() {
      const d = data();
      if (!d.nama) d.nama = t('bb.contoh-nama');
      if (d.mode === 'pertama' && d.momen === 'lain' && !d.momenLain) d.momen = 'gigi';
      return d;
    }
    function tandaiTemplate() {
      grid.querySelectorAll('.tpl').forEach(el => el.classList.toggle('aktif', el.dataset.id === st.templateId));
    }
    function bangunGaleri() {
      if (grid.children.length) return;
      TPL.forEach(tpl => grid.append(h('button', { type: 'button', kelas: 'tpl', 'data-id': tpl.id, onclick: () => { st.templateId = tpl.id; tandaiTemplate(); galat.textContent = ''; } },
        h('div', { kelas: 'tpl-img' }, h('img', { alt: tpl.nama })),
        h('div', { kelas: 'tpl-nama', teks: tpl.nama }))));
      tandaiTemplate();
    }
    async function renderGaleri() {
      bangunGaleri();
      if (typeof fabric === 'undefined') return;
      const nomor = ++nomorRender;
      const d = dataPratinjau();
      for (const tpl of TPL) {
        if (nomor !== nomorRender) return;
        const url = await KS.render.gambarMini(M.terapkan(tpl, d, st.ukuran, d.jenisKelamin), 300);
        if (nomor !== nomorRender) return;
        const img = grid.querySelector('.tpl[data-id="' + tpl.id + '"] img');
        if (img) img.src = url;
      }
    }
    function jadwal() {
      clearTimeout(timer);
      timer = setTimeout(renderGaleri, 450);
    }

    async function muatSeri() {
      const wadah = $('ms-seri-list');
      let list = [];
      try { list = await KS.store.listProjects(); } catch (e) { list = []; }
      const seri = [];
      const sudah = {};
      list.forEach(p => {
        const id = p.editor === 'milestone' && p.data && p.data.seriId;
        if (id && !sudah[id]) { sudah[id] = 1; seri.push(p); }
      });
      wadah.innerHTML = '';
      seri.slice(0, 4).forEach(p => {
        const lanjut = M.lanjutSeri(Object.assign({}, p.data, { templateId: p.templateId, ukuran: p.ukuran }));
        wadah.append(h('button', { type: 'button', kelas: 'ks-btn ks-btn-kecil ks-btn-sekunder ms-seri-btn', 'data-seri': p.data.seriId, onclick: () => pakaiSeri(lanjut) },
          h('span', { kelas: 'ico', html: KS.ikon.svg('ulang') }),
          h('span', { teks: lanjut.nama + ' · ' + t('ms.seri-lanjut', { judul: M.tampil(lanjut).judul }) })));
      });
      $('ms-seri').classList.toggle('hidden', !seri.length);
      return seri.length;
    }
    function pakaiSeri(d) {
      st.mode = d.mode;
      st.jenisKelamin = d.jenisKelamin || 'N';
      st.seriId = d.seriId;
      st.foto = null;
      st.fotoDulu = d.fotoDulu || null;
      if (d.templateId && TPL.some(x => x.id === d.templateId)) st.templateId = d.templateId;
      if (d.ukuran && P.UKURAN[d.ukuran]) st.ukuran = d.ukuran;
      f.nama.value = d.nama || '';
      f.tglLahir.value = d.tglLahir || '';
      f.tanggal.value = P.hariIni();
      if (d.bulanKe) f.bulanKe.value = String(d.bulanKe);
      if (d.tahunKe) f.tahunKe.value = String(d.tahunKe);
      if (d.momen) f.momen.value = d.momen;
      f.momenLain.value = d.momenLain || '';
      f.berat.value = '';
      f.tinggi.value = '';
      f.bisa.value = '';
      f.suka.value = d.suka || '';
      pratinjauFoto($('ms-foto-pv'), null);
      pratinjauFoto($('ms-foto-dulu-pv'), st.fotoDulu);
      tandai($('ms-jk'), st.jenisKelamin);
      tandai($('ms-ukuran'), st.ukuran);
      tandaiTemplate();
      aturMode();
      if (d.mode === 'bulanan' && d.bulanKe) f.bulanKe.value = String(d.bulanKe);
      if (d.mode === 'ultah' && d.tahunKe) f.tahunKe.value = String(d.tahunKe);
      galat.textContent = '';
      KS.ui.toast(t('ms.seri-dimuat'));
      jadwal();
      return d;
    }

    async function buat(templateId) {
      if (templateId) { st.templateId = templateId; tandaiTemplate(); }
      const d = data();
      const cek = M.validasi(d, st.templateId);
      if (!cek.ok) {
        galat.textContent = t(cek.galat);
        galat.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return null;
      }
      galat.textContent = '';
      if (typeof fabric === 'undefined') { KS.ui.toast(t('galat.editor'), 'galat'); return null; }
      const tpl = TPL.find(x => x.id === st.templateId) || TPL[0];
      const objek = await KS.render.objekDari(M.terapkan(tpl, d, st.ukuran, st.jenisKelamin));
      const sekarang = Date.now();
      if (!st.seriId) st.seriId = P.buatId();
      const simpanData = Object.assign({}, d, { seriId: st.seriId });
      delete simpanData.foto;
      const proyek = {
        id: P.buatId(), editor: 'milestone', templateId: tpl.id, ukuran: st.ukuran, varian: st.jenisKelamin,
        nama: t('ms.nama-proyek', { nama: d.nama, judul: M.tampil(d).judul }), data: simpanData, fabric: null, dibuat: sekarang, diubah: sekarang
      };
      await KS.editor.buka(proyek, objek);
      return proyek;
    }
    $('ms-buat').addEventListener('click', () => { buat(); });
    KS.nav.onSwitch(tab => { if (tab === 'milestone') { muatProfil(); muatSeri(); aturMode(); jadwal(); } });
    tandai($('ms-jk'), st.jenisKelamin);
    tandai($('ms-ukuran'), st.ukuran);
    KS.milestone = { buat, data, muatSeri, pakaiSeri, state: () => st, segarkan: renderGaleri };
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
    $('beranda-mulai').addEventListener('click', () => { KS.nav.switchTab('babyborn'); KS.babyborn.mode('ai'); });
    document.querySelectorAll('[data-buka]').forEach(b => b.addEventListener('click', () => KS.nav.switchTab(b.dataset.buka)));
    function segarkan() {
      KS.store.getProfiles().then(items => {
        const anak = items[0];
        sapa.textContent = anak ? t('beranda.sapa-pendek', { nama: anak.panggilan || anak.nama }) : t('beranda.kecil');
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

  (function () {
    const t = KS.i18n.t;
    const body = document.body;
    const AUTH_BASES = ['https://kidsstudio-auth.mursalinasrul.workers.dev/'];
    const KUNCI_SESI = 'kidsstudio_sesi';
    const KUNCI_BASE = 'kidsstudio_auth_base';
    const KUNCI_DEV = 'kidsstudio_auth_dev';
    const LAMA_CEK = 60000;
    const BATAS_WAKTU = 12000;
    const lokal = location.protocol === 'file:' || /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
    const opsi = { lamaCek: LAMA_CEK };
    const baca = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
    const tulis = (k, v) => { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} };

    function daftarBase() {
      const dev = lokal ? baca(KUNCI_DEV) : null;
      if (dev && /^http:\/\/(localhost|127\.0\.0\.1):\d{1,5}\/$/.test(dev)) return [dev];
      const ingat = baca(KUNCI_BASE);
      return AUTH_BASES.includes(ingat) ? [ingat, ...AUTH_BASES.filter(b => b !== ingat)] : AUTH_BASES.slice();
    }

    async function authFetch(muatan) {
      for (const base of daftarBase()) {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), BATAS_WAKTU);
        try {
          const r = await fetch(base + 'auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(muatan), signal: ctrl.signal });
          if (r.status >= 500) continue;
          const data = await r.json();
          if (AUTH_BASES.includes(base)) tulis(KUNCI_BASE, base);
          return data;
        } catch (e) {
          console.warn('[kidsstudio] server login tidak terjangkau:', base);
        } finally {
          clearTimeout(timer);
        }
      }
      throw new Error('jaringan');
    }

    function sesi() {
      try {
        const s = JSON.parse(baca(KUNCI_SESI) || 'null');
        return s && typeof s.email === 'string' && typeof s.token === 'string' && s.token ? s : null;
      } catch (e) { return null; }
    }

    function perangkat() {
      const ua = navigator.userAgent || '';
      const os = /Android/i.test(ua) ? 'Android' : /iPhone/i.test(ua) ? 'iPhone' : /iPad/i.test(ua) ? 'iPad' : /Windows/i.test(ua) ? 'Windows' : /Mac OS/i.test(ua) ? 'Mac' : /Linux/i.test(ua) ? 'Linux' : 'Lainnya';
      const br = /SamsungBrowser/i.test(ua) ? 'Samsung' : /Edg\//i.test(ua) ? 'Edge' : /Firefox|FxiOS/i.test(ua) ? 'Firefox' : /Chrome|CriOS/i.test(ua) ? 'Chrome' : /Safari/i.test(ua) ? 'Safari' : 'Browser';
      return os + ' / ' + br;
    }

    function appBawaan() {
      const ua = navigator.userAgent || '';
      if (/FBAN|FBAV|FB_IAB/i.test(ua)) return 'Facebook';
      if (/Instagram/i.test(ua)) return 'Instagram';
      if (/TikTok|musical_ly|BytedanceWebview/i.test(ua)) return 'TikTok';
      if (/WhatsApp/i.test(ua)) return 'WhatsApp';
      if (/\bLine\//i.test(ua)) return 'LINE';
      return '';
    }

    const elGalat = $('login-galat');
    const elEmail = $('login-email');
    const elMasuk = $('login-masuk');
    const elMasukTeks = $('login-masuk-teks');
    const elInapp = $('login-inapp');
    $('login-versi').textContent = KS.version;
    const app = appBawaan();
    if (app) { elInapp.textContent = t('login.inapp', { app }); elInapp.classList.remove('hidden'); }

    function tampilGalat(kode, cadangan) {
      elGalat.innerHTML = '';
      const kunci = 'login.g-' + kode;
      const pesan = t(kunci);
      elGalat.append(document.createTextNode(pesan !== kunci ? pesan : (cadangan || t('login.g-GAGAL'))));
      if (kode === 'jaringan') {
        const ul = document.createElement('ul');
        ['login.tips-1', 'login.tips-2', 'login.tips-3'].forEach(k => { const li = document.createElement('li'); li.textContent = t(k); ul.append(li); });
        elGalat.append(ul);
      }
      elGalat.classList.remove('hidden');
    }

    function kunci(kode) {
      body.classList.add('ks-terkunci');
      body.classList.remove('nav-open');
      if (kode) tampilGalat(kode); else elGalat.classList.add('hidden');
    }

    function buka(s) {
      body.classList.remove('ks-terkunci');
      $('akun-email').textContent = s.email;
      elGalat.classList.add('hidden');
    }

    let timer = null;
    let terakhirCek = 0;
    function mulaiCek() {
      clearInterval(timer);
      timer = setInterval(cek, opsi.lamaCek);
    }

    function keluarLokal(kode) {
      clearInterval(timer);
      timer = null;
      tulis(KUNCI_SESI, null);
      kunci(kode);
    }

    async function cek() {
      const s = sesi();
      if (!s) return null;
      terakhirCek = Date.now();
      let data;
      try { data = await authFetch({ action: 'cek', email: s.email, token: s.token }); } catch (e) { return 'jaringan'; }
      if (data && data.ok) return 'VALID';
      if (data && (data.code === 'SESI_HABIS' || data.code === 'NONAKTIF')) {
        keluarLokal(data.code);
        return data.code;
      }
      return (data && data.code) || 'GAGAL';
    }

    let sibuk = false;
    async function login(emailMentah) {
      if (sibuk) return null;
      const email = String(emailMentah || '').trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { tampilGalat('EMAIL_TIDAK_VALID'); return 'EMAIL_TIDAK_VALID'; }
      sibuk = true;
      elMasuk.disabled = true;
      elMasukTeks.textContent = t('login.memproses');
      elGalat.classList.add('hidden');
      try {
        const data = await authFetch({ action: 'login', email, device: perangkat() });
        if (!data || !data.ok || typeof data.token !== 'string') {
          tampilGalat((data && data.code) || 'GAGAL', data && data.message);
          return (data && data.code) || 'GAGAL';
        }
        const s = { email: data.email || email, token: data.token, nama: data.nama || '' };
        tulis(KUNCI_SESI, JSON.stringify(s));
        buka(s);
        mulaiCek();
        KS.ui.toast(data.ditendang ? t('login.ditendang', { max: data.maxPerangkat }) : s.nama ? t('login.selamat', { nama: s.nama }) : t('login.selamat-anon'));
        return 'SUKSES';
      } catch (e) {
        tampilGalat('jaringan');
        return 'jaringan';
      } finally {
        sibuk = false;
        elMasuk.disabled = false;
        elMasukTeks.textContent = t('login.masuk');
      }
    }

    function logout() {
      const s = sesi();
      if (s) authFetch({ action: 'logout', email: s.email, token: s.token }).catch(() => {});
      keluarLokal(null);
      if (s) elEmail.value = s.email;
      KS.ui.toast(t('login.sudah-keluar'));
    }

    elMasuk.addEventListener('click', () => login(elEmail.value));
    elEmail.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); login(elEmail.value); } });
    $('akun-keluar').addEventListener('click', logout);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && sesi() && Date.now() - terakhirCek > 15000) cek();
    });

    KS.auth = { login, cek, logout, sesi, opsi, AUTH_BASES };
    const awal = sesi();
    if (awal) { buka(awal); mulaiCek(); cek(); } else kunci(null);
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
