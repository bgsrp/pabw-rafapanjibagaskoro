# PABW — Rafa Panji Bagaskoro — 23523269

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web (Kelas B), satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: pengalaman bermusik dan daftar penampilan panggung saya selama kuliah di UII bersama Unisi Music Community.

- Judul halaman: Perjalanan Bermusik Saya di UII
- Deskripsi: Catatan pengalaman bermusik dan daftar penampilan panggung saya bersama Unisi Music Community selama kuliah hingga semester 7 di UII
- Tautan navigasi: Riwayat Panggung, Catat Penampilan, Tentang Saya
- Dua bagian utama: Riwayat Penampilan Panggung Saya, Tambah Catatan Penampilan Baru
- Kolom tabel: nama acara, tanggal tampil, role, jumlah lagu
- Kolom form: nama acara, tanggal tampil, jumlah lagu
- Gambar: fotopesta.jpg

## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1D3A8C (biru dongker) dengan latar #E0F2FE (biru langit), dipilih karena perpaduan warnanya segar, kontrasnya jelas untuk dibaca, dan senada dengan identitas kampus UII.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1D3A8C | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #E0F2FE | latar halaman |
| --color-surface | #FFFFFF | latar kartu dan panel |
| --color-border | #64748B | garis pemisah dan tepi kotak |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 5 — Layout Modern: Flexbox dan Grid

Sketsa kerangka halaman:
- Kerangka utama halaman: Menggunakan `display: grid` dengan 3 baris (`auto 1fr auto`) dan `min-height: 100dvh` agar footer selalu di bawah.
- Area isi utama: Menggunakan grid dua kolom (`16rem 1fr`) untuk memisahkan sidebar dan konten utama (galeri musik).
- Galeri riwayat panggung: Menggunakan grid adaptif `repeat(auto-fit, minmax(16rem, 1fr))` agar jumlah kolom merespons lebar layar tanpa media query.
- Komponen internal (navbar, isi kartu, dan form): Menggunakan `display: flex` karena hanya membutuhkan susunan satu arah.

## Pertemuan 8 — JavaScript Modern, Struktur Data, dan Array Methods

- **Bagian yang dikerjakan sendiri**: Menentukan ide, menyusun struktur data profil bermusik, membuat array objek penampilan, serta menganalisis letak baris galat (bug) di Console.
- **Bagian yang dibantu AI**: Menggunakan AI sebagai rekan diskusi untuk memperjelas konsep *pure function* dan mendemonstrasikan galat (memancing *bug* secara sengaja untuk simulasi *error handling*).

## Pertemuan 9 — DOM, Event, dan Interaktivitas

- **Elemen yang dihubungkan**: Wadah galeri `#daftar`, baris filter `#filter`, notifikasi `#pesan-kosong`, dan form tambah penampilan.
- **Bagian yang dikerjakan sendiri**: Pemisahan berkas `app.js` dan `dom.js`, penulisan fungsi perakit elemen DOM kartu penampilan, serta pengujian interaktivitas filter dan form secara manual.
- **Bagian yang dibantu AI**: Diskusi implementasi pola *event delegation* memakai `event.target.closest("button")`, penyusunan pola fungsi `render(daftar)` yang aman dari duplikasi, dan validasi form dinamis sebelum `submit`.

## Pertemuan 10 — JavaScript Asinkron: fetch, Promise, dan JSON

- **Alamat API Publik**: `https://jsonplaceholder.typicode.com/todos?_limit=6` (ditetapkan di satu tempat pada `js/api.js` tanpa kunci akses).
- **Lapisan Data & Ekspor**: Pengambilan data dipisahkan di berkas `js/api.js` dan diekspor dengan nama fungsi `ambilNotisia()`.
- **Empat Keadaan Antarmuka**: Menangani keadaan memuat (`Memuat...`), berhasil (merender kartu dengan `createElement` dan `textContent`), kosong (`Belum ada notisia`), dan gagal (`Gagal memuat data: ...`).
- **Bagian yang dikerjakan sendiri**: Pengujian panggilan di panel Network dan Console DevTools, simulasi tiga kasus kegagalan (alamat 404, jaringan Offline, dan larik kosong), serta pengambilan bukti tangkapan layar.
- **Bagian yang dibantu AI**: Diskusi struktur kode `async/await` dengan dua lapis `try/catch` antara `js/api.js` dan `js/app.js`, serta demonstrasi pembacaan JSON dua arah (`JSON.stringify` dan `JSON.parse`).

## Pertemuan 11 — Front-end Foundation: Modul, State, dan Penyimpanan Klien[cite: 1, 2]

- **Pecahan 5 Modul Wajib**: Memisahkan kode dari satu berkas monolitik menjadi `js/data.js`, `js/state.js`, `js/dom.js`, `js/events.js`, dan `js/app.js` dengan jalur relatif berawalan `./` dan berakhiran `.js`[cite: 2].
- **State & Render**: Mengumpulkan seluruh keadaan ke dalam satu objek `state` tunggal dan memisahkan tampilan murni lewat fungsi `render(state)`[cite: 2].
- **Penyimpanan Klien**: Menerapkan `localStorage` dengan penanganan `JSON.stringify`/`JSON.parse`, validasi nomor versi skema, penanganan data rusak via `try/catch`, serta tombol atur ulang (*reset*).
- **Verifikasi Node.js (Pekerjaan Rumah P12)**:
  - `node -v`: v24.12.0 (LTS)
  - `npm -v`: 11.6.2

## Pertemuan 12 — Migrasi Aplikasi Web Statis ke Vue.js dengan Vite[cite: 1]

- **Lingkungan Kerja Node.js**: Memastikan dependensi terpasang dengan baik dan mengelola proyek berbasis Vite.
- **Dekomposisi Komponen Vue (`src/components/`)**: Memecah halaman menjadi komponen modular (`KepalaProfil.vue`, `TombolFilter.vue`, `DaftarProyek.vue`, dan `FormKontak.vue`) yang dirakit melalui `App.vue` menggunakan *props* satu arah.
- **State Reaktif & Penyimpanan Klien**: Menggunakan `reactive()` dari Vue dan menyambungkannya dengan `localStorage` (`simpanan.js`) menggunakan kait reaktif `onMounted` dan `watch`.
- **Build Produksi**: Menjalankan `npm run build` untuk menghasilkan bundel produksi optimal di dalam folder `dist/` serta memverifikasinya melalui `npm run preview`[cite: 1].
- **Metrik Ukuran Berkas**:
  - Ukuran total file sebelum build (mode *dev*): 3.7kB / 23 berkas.
  - Ukuran total file sesudah build (mode produksi): 612B / 4 berkas.

## Catatan penggunaan AI

AI digunakan untuk berdiskusi menyusun panduan langkah pengerjaan modul, memeriksa kesesuaian semantik HTML5 dan atribut aksesibilitas, menyusun skema design token CSS, mendiskusikan pembagian kerangka layout modern, memperjelas konsep DOM traversal dan event handling, merancang alur pengambilan data asinkron (`fetch` dan `async/await`), arsitektur pemisahan modul ES6 beserta penanganan blok `try/catch` pengaman `localStorage`, hingga arsitektur migrasi komponen Vue.js, pengelolaan *props*, reaktivitas state, dan konfigurasi *build* Vite. Adapun pemilihan topik pengalaman bermusik, penentuan palet warna, pengisian data riwayat panggung, penulisan kode antarmuka dan logika interaktivitas, pengujian jaringan di DevTools secara manual, analisis galat murni, dan pengisian laporan dikerjakan dan diputuskan sendiri.