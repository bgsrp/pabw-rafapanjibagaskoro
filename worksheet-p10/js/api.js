
// Tetapkan alamat API publik di satu tempat (memakai https, tanpa apiKey)
const ALAMAT = 'https://jsonplaceholder.typicode.com/todos?_limit=6';

// Panggil fetch dan periksa respons.ok sebelum membaca badan balasan
export async function muat() {
  const respons = await fetch(ALAMAT);
  console.log('status', respons.status, 'ok', respons.ok);
  if (!respons.ok) {
    throw new Error('status ' + respons.status);
  }
  return respons.json();
}

// Didaftarkan ke objek window agar fungsi muat() juga bisa dipanggil langsung lewat ketikan di Console
window.muat = muat;