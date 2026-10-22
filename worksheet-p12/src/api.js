/* Lembar A, B, & E - Panggilan fetch, async/await, try/catch, dan pemeriksaan status */

// A.2 Tetapkan alamat API publik di satu tempat
const ALAMAT = 'https://jsonplaceholder.typicode.com/todos?_limit=6';

// B.1 & E.1 Fungsi async dengan pemeriksaan respons.ok dan Content-Type
export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);
    const tipeIsi = respons.headers.get('content-type');
    console.log('status', respons.status, 'ok', respons.ok, 'content-type', tipeIsi);

    // E.1 Menangani status 404/500 karena fetch tidak otomatis melempar galat
    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }

    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}

// Didaftarkan ke window agar tetap bisa dipanggil dari Console
window.muat = ambilNotisia;