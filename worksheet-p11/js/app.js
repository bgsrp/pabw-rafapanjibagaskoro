/* Lembar B.1 & B.2 - Deklarasi Variabel dan Template Literal */

const profil = {
  nama: "Rafa Panji Bagaskoro",
  peran: "Mahasiswa Informatika UII & Vokalis Unisi Music Community",
  keahlian: ["Lead Vocal", "PA Vocalist", "Male Vocal"]
};

const jumlahPenampilan = 3;

// Merangkai kalimat menggunakan template literal
const kalimatPerkenalan = `Halo, namaku ${profil.nama}. Aku adalah seorang ${profil.peran} dan sudah mencatat ${jumlahPenampilan} riwayat panggung.`;

// Mencetak ke console untuk memastikan datanya masuk
console.log(kalimatPerkenalan);

/* Lembar C - Dua fungsi murni */

// 1. Fungsi menyusun kalimat perkenalan menerima satu argumen objek (destructuring)
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Fungsi merapikan daftar array menjadi satu baris teks dengan pemisah " · "
const formatKeahlian = (daftar) => daftar.join(" · ");

// Menguji kedua fungsi dengan mengirim data profil kita sebagai argumen
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

/* Lembar D - Struktur data dan array methods */

// D.1 Membuat Array of Object untuk riwayat penampilan
export const daftarPenampilan = [
  { judul: "Pesona Ta'aruf UII 2026", tanggal: "5 September 2026", role: "Lead Vocal", jumlahLagu: 3 },
  { judul: "Kuliah Perdana UII 2026", tanggal: "2 September 2026", role: "PA Vocalist", jumlahLagu: 12 },
  { judul: "Senja di Stasiun Jogja", tanggal: "8 Agustus 2026", role: "Male Vocal", jumlahLagu: 12 }
];

// D.3 Mencetak seluruh data sebagai tabel
console.table(profil.keahlian);
console.table(daftarPenampilan);

// Menggunakan FILTER: menyaring penampilan dengan jumlah lagu lebih dari 5
const konserBesar = daftarPenampilan.filter((tampil) => tampil.jumlahLagu > 5);
console.table(konserBesar);

// Menggunakan FIND: mengambil data satu acara spesifik
const pesonaTaaruf = daftarPenampilan.find((tampil) => tampil.judul === "Pesona Ta'aruf UII 2026");
console.log("Hasil Find:", pesonaTaaruf);

// Menggunakan MAP: membuat array baru yang hanya berisi nama acaranya saja
const namaAcara = daftarPenampilan.map((tampil) => tampil.judul);
console.log("Hasil Map:", namaAcara);

// Menguji SORT pada salinan array (menggunakan ... spread operator agar data asli aman)
const urutLagu = [...daftarPenampilan].sort((a, b) => b.jumlahLagu - a.jumlahLagu);
console.table(urutLagu);

/* Lembar E - Membaca Galat (Versi Sudah Diperbaiki) */

// Kasus 1: Mengambil data nama untuk dicetak (Ejaan sudah benar)
console.log("Kasus 1 - Nama panggung:", profil.nama);

// Kasus 2: Menghitung target lagu baru (Dikonversi ke Number dulu)
const inputLagu = "12"; 
const targetLagu = Number(inputLagu) + 3;
console.log("Kasus 2 - Target lagu bulan ini:", targetLagu);

// Kasus 3: Mengubah teks tombol di halaman (Memilih elemen yang pasti ada)
const tombol = document.querySelector("button"); 
if (tombol) {
  tombol.innerHTML = "Simpan Data Penampilan";
}