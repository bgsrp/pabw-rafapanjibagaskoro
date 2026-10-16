/* Lembar B.1 & B.3 - Data mentah dan fungsi murni pemformat */

export const profil = {
  nama: "Rafa Panji Bagaskoro",
  peran: "Mahasiswa Informatika UII & Vokalis Unisi Music Community",
  keahlian: ["Lead Vocal", "PA Vocalist", "Male Vocal"]
};

export const daftarPenampilan = [
  { judul: "Pesona Ta'aruf UII 2026", tanggal: "5 September 2026", role: "Lead Vocal", jumlahLagu: 3 },
  { judul: "Kuliah Perdana UII 2026", tanggal: "2 September 2026", role: "PA Vocalist", jumlahLagu: 12 },
  { judul: "Senja di Stasiun Jogja", tanggal: "8 Agustus 2026", role: "Male Vocal", jumlahLagu: 12 }
];

// Fungsi murni 1: menyusun kalimat perkenalan
export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// Fungsi murni 2: merapikan daftar keahlian menjadi satu baris teks
export const formatKeahlian = (daftar) => daftar.join(" · ");