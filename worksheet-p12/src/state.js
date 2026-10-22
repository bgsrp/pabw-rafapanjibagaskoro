/* Lembar D.1 & E.2 - Penyimpanan klien menggunakan localStorage, JSON, dan penanganan versi */
import { daftarPenampilan } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

// Fungsi muat: membaca dari localStorage dengan penanganan aman & pengecekan versi
export function muatState() {
  try {
    const hasil = JSON.parse(localStorage.getItem(KUNCI));
    if (hasil?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return hasil;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

// Fungsi simpan: menyimpan properti pilihan ke localStorage
export function simpanState(stateObjek) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateObjek.kategoriAktif
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// Fungsi aturUlang: menghapus simpanan
export function aturUlangSimpanan() {
  localStorage.removeItem(KUNCI);
}

// Muat data tersimpan atau gunakan nilai bawaan pada kunjungan pertama
const simpananLama = muatState();

export const state = {
  daftarPenampilan: [...daftarPenampilan],
  kategoriAktif: simpananLama?.kategoriAktif ?? "semua" // Nilai bawaan "semua"
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpanState(state); // Simpan setiap kali pilihan berubah
  render(state);
}

export function tambahPenampilan(dataBaru) {
  state.daftarPenampilan = [...state.daftarPenampilan, dataBaru];
  render(state);
}

export function resetAplikasi() {
  aturUlangSimpanan();
  state.kategoriAktif = "semua";
  render(state);
}