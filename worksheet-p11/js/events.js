/* Lembar D.1 - Pendengar termasuk tombol atur ulang */
import { pilihKategori, tambahPenampilan, resetAplikasi } from "./state.js";
import {
  barisFilter,
  form,
  inputAcara,
  inputTanggal,
  inputLagu,
  tombolKirim,
  tombolAturUlang, // <-- Tambahan impor baru
  periksaSemuaKolom
} from "./dom.js";

export function pasangPendengar() {
  // 1. Filter kategori (kode lama tetap ada)
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  // 2. Validasi input form (kode lama tetap ada)
  form.addEventListener("input", () => {
    periksaSemuaKolom();
  });

  // 3. Submit form penambahan data (kode lama tetap ada)
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

  // 4. Pendengar tombol atur ulang (FITUR TAMBAHAN BARU)
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      resetAplikasi();
    });
  }
}