
export const profil = {
  nama: "Rafa Panji Bagaskoro",
  peran: "Mahasiswa Informatika UII & Vokalis Unisi Music Community",
  keahlian: ["Lead Vocal", "PA Vocalist", "Male Vocal"]
};

export const daftarPenampilan = [
  { id: 1, judul: "Pesona Ta'aruf UII 2026", tanggal: "5 September 2026", role: "Lead Vocal", jumlahLagu: 3 },
  { id: 2, judul: "Kuliah Perdana UII 2026", tanggal: "2 September 2026", role: "PA Vocalist", jumlahLagu: 12 },
  { id: 3, judul: "Senja di Stasiun Jogja", tanggal: "8 Agustus 2026", role: "Male Vocal", jumlahLagu: 12 }
];

// Fungsi murni 1: menyusun kalimat perkenalan
export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi murni 2: merapikan daftar keahlian menjadi satu baris teks
export const formatKeahlian = (daftar) => daftar.join(" · ");