/* Lembar A & B - Panggilan fetch dengan async/await dan try/catch */

// A.2 Tetapkan alamat API publik di satu tempat
const ALAMAT = 'https://jsonplaceholder.typicode.com/todos?_limit=6';
// B.1 Fungsi async dengan blok try/catch pertama
export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);
    console.log('status', respons.status, 'ok', respons.ok);
    if (!respons.ok) throw new Error('status ' + respons.status);
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}

// Didaftarkan ke window agar tetap bisa dipanggil dari Console
window.muat = ambilNotisia;