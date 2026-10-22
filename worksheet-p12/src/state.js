import { reactive } from 'vue';
import { daftarPenampilan } from './data.js';

export const state = reactive({
  daftarPenampilan: daftarPenampilan,
  kategoriAktif: 'semua'
});

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
}