/* Lembar C.2 - Seluruh sentuhan halaman dihitung dari state */

export const tombolAturUlang = document.querySelector("#atur-ulang");
export const wadah = document.querySelector("#daftar");
export const kosong = document.querySelector("#pesan-kosong");
export const barisFilter = document.querySelector("#filter");
export const form = document.querySelector("form");
export const inputAcara = document.querySelector("#nama-acara");
export const inputTanggal = document.querySelector("#tanggal-tampil");
export const inputLagu = document.querySelector("#jumlah-lagu");
export const tombolKirim = form.querySelector("button[type='submit']");

export function buatKartu(tampil) {
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

// Lembar C.2 - Fungsi saring(state) tepat sebelum render
export function saring(state) {
  return state.daftarPenampilan.filter(
    (item) => state.kategoriAktif === "semua" || item.role === state.kategoriAktif
  );
}

// Lembar C.2 - render menerima objek state, bukan array mentah
export function render(state) {
  wadah.textContent = ""; // 1. kosongkan

  // Gambar status tombol aktif dari state.kategoriAktif, bukan dari DOM
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === state.kategoriAktif);
  });

  const tampil = saring(state); // dari state, bukan argumen

  if (tampil.length === 0) { // 2. keadaan kosong
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;
  tampil.forEach((item) => wadah.append(buatKartu(item))); // 3. isi ulang
}

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

export function periksaSemuaKolom() {
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