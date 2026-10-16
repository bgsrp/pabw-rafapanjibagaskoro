/* Lembar B.3 - Objek state tunggal dan fungsi pengubahnya */
import { daftarPenampilan } from "./data.js";

export const state = {
  daftarPenampilan: [...daftarPenampilan],
  kategoriAktif: "semua"
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
}

export function tambahPenampilan(dataBaru) {
  state.daftarPenampilan = [...state.daftarPenampilan, dataBaru];
}