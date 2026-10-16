/* Lembar B.3 - Pemasangan seluruh pendengar peristiwa */
import { state, pilihKategori, tambahPenampilan } from "./state.js";
import {
  barisFilter,
  form,
  inputAcara,
  inputTanggal,
  inputLagu,
  tombolKirim,
  render,
  tandaiTombolAktif,
  periksaSemuaKolom
} from "./dom.js";

export function pasangPendengar() {
  // Pendengar klik untuk baris tombol filter (event delegation)
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    pilihKategori(kategori);

    const terpilih = state.daftarPenampilan.filter(
      (tampil) => state.kategoriAktif === "semua" || tampil.role === state.kategoriAktif
    );

    render(terpilih);
    tandaiTombolAktif(tombol);
  });

  // Pendengar ketikan pada form
  form.addEventListener("input", () => {
    periksaSemuaKolom();
  });

  // Pendengar pengiriman form
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

    const terpilih = state.daftarPenampilan.filter(
      (tampil) => state.kategoriAktif === "semua" || tampil.role === state.kategoriAktif
    );

    render(terpilih);
    form.reset();
    tombolKirim.disabled = true;
  });
}