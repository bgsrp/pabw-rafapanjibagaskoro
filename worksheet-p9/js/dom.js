/* Lembar B - Menyusun elemen dari data */

// B.1 Mengimpor data dari app.js
import { daftarPenampilan } from "./app.js";

// Mengambil elemen wadah dari halaman
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

// Fungsi untuk membuat satu kartu dari satu data
function buatKartu(tampil) {
  // Membuat bungkus utama: <article class="kartu">
  const article = document.createElement("article");
  article.className = "kartu";

  // Membuat bagian atas kartu: <div class="kartu__isi">
  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = tampil.judul; // Memakai textContent agar aman

  const tanggal = document.createElement("p");
  tanggal.textContent = `Tanggal: ${tampil.tanggal}`;

  isi.append(judul, tanggal);

  // Membuat bagian bawah kartu: <div class="kartu__kaki">
  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

  const lencana = document.createElement("span");
  lencana.className = "lencana";
  lencana.textContent = tampil.role;

  const lagu = document.createElement("span");
  lagu.textContent = `${tampil.jumlahLagu} Lagu`;

  kaki.append(lencana, lagu);

  // Menggabungkan bagian atas dan bawah ke dalam kartu
  article.append(isi, kaki);

  return article;
}

// B.2 Mengosongkan wadah lalu menyisipkan semua kartu sekaligus
wadah.textContent = ""; 
daftarPenampilan.forEach((tampil) => wadah.append(buatKartu(tampil)));