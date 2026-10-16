/* Lembar C.3 - Pendengar hanya memanggil fungsi pengubah di state.js */
import { pilihKategori, tambahPenampilan } from "./state.js";
import {
  barisFilter,
  form,
  inputAcara,
  inputTanggal,
  inputLagu,
  tombolKirim,
  periksaSemuaKolom
} from "./dom.js";

export function pasangPendengar() {
  // Klik tombol filter hanya memanggil pilihKategori
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    pilihKategori(tombol.dataset.kategori);
  });

  // Validasi saat pengguna mengetik di form
  form.addEventListener("input", () => {
    periksaSemuaKolom();
  });

  // Pengiriman form hanya memanggil tambahPenampilan
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const sah = periksaSemuaKolom();
    if (!sah) {
      const kolomBermasalah = form.querySelector("[aria-invalid='true']");
      if (kolomBermasalah) kolomBermasalah.focus();
      return;
    }

    tambahPenampilan({
      judul: inputAcara.value.trim(),
      tanggal: inputTanggal.value,
      role: "Male Vocal",
      jumlahLagu: Number(inputLagu.value)
    });

    form.reset();
    tombolKirim.disabled = true;
  });
}