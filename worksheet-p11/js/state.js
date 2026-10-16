/* Lembar C.3 - Satu pintu masuk untuk setiap perubahan state */
import { daftarPenampilan } from "./data.js";
import { render } from "./dom.js";

export const state = {
  daftarPenampilan: [...daftarPenampilan],
  kategoriAktif: "semua"
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  render(state);
}

export function tambahPenampilan(dataBaru) {
  state.daftarPenampilan = [...state.daftarPenampilan, dataBaru];
  render(state);
}