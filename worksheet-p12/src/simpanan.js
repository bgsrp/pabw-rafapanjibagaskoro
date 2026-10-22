const KUNCI = "pabw-p11";
const VERSI = 1;

export function simpan(state) {
  localStorage.setItem(KUNCI, JSON.stringify({ 
    versi: VERSI, 
    kategoriAktif: state.kategoriAktif 
  }));
}

export function muat() {
  try {
    const data = localStorage.getItem(KUNCI);
    if (!data) return null;
    const isi = JSON.parse(data);
    if (isi.versi !== VERSI) return null;
    return isi;
  } catch (e) {
    return null; // Buang jika rusak/bukan JSON
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
}