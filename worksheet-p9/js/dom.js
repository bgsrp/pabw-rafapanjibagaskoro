/* Lembar B & C - Render Data dan Event Delegation Filter */
import { daftarPenampilan } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

// Fungsi murni pembuat elemen kartu
function buatKartu(tampil) {
  const article = document.createElement("article");
  article.className = "kartu";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = tampil.judul;

  const tanggal = document.createElement("p");
  tanggal.textContent = `Tanggal: ${tampil.tanggal}`;

  isi.append(judul, tanggal);

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

  const lencana = document.createElement("span");
  lencana.className = "lencana";
  lencana.textContent = tampil.role;

  const lagu = document.createElement("span");
  lagu.textContent = `${tampil.jumlahLagu} Lagu`;

  kaki.append(lencana, lagu);
  article.append(isi, kaki);

  return article;
}

// Fungsi render: mengosongkan wadah, cek keadaan kosong, lalu mengisi kartu
function render(daftar) {
  wadah.textContent = ""; // Kosongkan wadah sebelum diisi ulang

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;
  daftar.forEach((tampil) => wadah.append(buatKartu(tampil)));
}

// Menandai tombol aktif dengan class .aktif
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Lembar C.1 - Event Delegation: satu pendengar di induk (#filter)
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // Abaikan bila klik bukan pada tombol

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarPenampilan.filter(
    (tampil) => kategori === "semua" || tampil.role === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

// Render pertama kali saat halaman dibuka
render(daftarPenampilan);