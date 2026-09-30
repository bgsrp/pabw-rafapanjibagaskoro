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

## Catatan penggunaan AI

AI digunakan untuk berdiskusi menyusun panduan langkah pengerjaan, memeriksa kesesuaian semantik HTML5 dan atribut aksesibilitas, menyusun skema design token CSS, serta mendiskusikan pembagian kerangka layout modern (Grid dua dimensi dan Flexbox satu dimensi). Adapun pemilihan topik pengalaman bermusik, penentuan palet warna, pengisian data panggung, penulisan kode CSS tata letak, serta pengujian responsivitas halaman secara manual di peramban murni dikerjakan dan diputuskan sendiri.