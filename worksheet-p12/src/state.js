import { reactive } from 'vue';
import { daftarPenampilan } from './data.js';

// Membungkus objek state dengan reactive()
export const state = reactive({
  daftarPenampilan: daftarPenampilan,
  kategoriAktif: 'semua'
});

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai; // Cukup ubah nilainya, Vue akan mengurus tampilannya
}