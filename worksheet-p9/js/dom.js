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

/* Lembar D - Pola Render dan Validasi Form */
const form = document.querySelector("form");
const inputAcara = document.querySelector("#nama-acara");
const inputTanggal = document.querySelector("#tanggal-tampil");
const inputLagu = document.querySelector("#jumlah-lagu");
const tombolKirim = form.querySelector("button[type='submit']");

// Memeriksa tiap kolom dan menampilkan pesan galat yang jelas
function validasiKolom(input, kondisiSah, pesan) {
  const kolomWadah = input.closest(".form-kolom");
  const spanPesan = kolomWadah.querySelector(".pesan-galat");

  if (!kondisiSah) {
    input.setAttribute("aria-invalid", "true");
    spanPesan.textContent = pesan;
    spanPesan.style.display = "block";
    return false;
  } else {
    input.removeAttribute("aria-invalid");
    spanPesan.style.display = "none";
    return true;
  }
}

// Memeriksa seluruh kolom sebelum kirim
function periksaSemuaKolom() {
  const sahAcara = validasiKolom(
    inputAcara,
    inputAcara.value.trim() !== "",
    "Nama acara wajib diisi dan tidak boleh hanya spasi."
  );
  const sahTanggal = validasiKolom(
    inputTanggal,
    inputTanggal.value.trim() !== "",
    "Pilih tanggal tampil yang valid."
  );
  const sahLagu = validasiKolom(
    inputLagu,
    inputLagu.value.trim() !== "" && Number(inputLagu.value) >= 1 && Number(inputLagu.value) <= 20,
    "Jumlah lagu harus berupa angka antara 1 sampai 20."
  );

  const semuaSah = sahAcara && sahTanggal && sahLagu;
  tombolKirim.disabled = !semuaSah;
  return semuaSah;
}

// Validasi aktif saat pengguna mengetik
form.addEventListener("input", () => {
  periksaSemuaKolom();
});

// Lembar D.2 - Penangan submit form
form.addEventListener("submit", (event) => {
  event.preventDefault(); // 1. Menghentikan muat ulang bawaan halaman

  const sah = periksaSemuaKolom();
  if (!sah) {
    // Pindahkan fokus ke kolom pertama yang bermasalah
    const kolomBermasalah = form.querySelector("[aria-invalid='true']");
    if (kolomBermasalah) kolomBermasalah.focus();
    return;
  }

  // Tambahkan data baru ke array dan perbarui tampilan dengan render
  daftarPenampilan.push({
    judul: inputAcara.value.trim(),
    tanggal: inputTanggal.value,
    role: "Male Vocal",
    jumlahLagu: Number(inputLagu.value)
  });

  render(daftarPenampilan);
  form.reset();
  tombolKirim.disabled = true;
});