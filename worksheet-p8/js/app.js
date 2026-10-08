/* Lembar B.1 & B.2 - Deklarasi Variabel dan Template Literal */

const profil = {
  nama: "Rafa Panji Bagaskoro",
  peran: "Mahasiswa Informatika UII & Vokalis Unisi Music Community",
  keahlian: ["Lead Vocal", "PA Vocalist", "Male Vocal"]
};

const jumlahPenampilan = 3;

// Merangkai kalimat menggunakan template literal
const kalimatPerkenalan = `Halo, namaku ${profil.nama}. Aku adalah seorang ${profil.peran} dan sudah mencatat ${jumlahPenampilan} riwayat panggung.`;

// Mencetak ke console untuk memastikan datanya masuk
console.log(kalimatPerkenalan);

/* Lembar C - Dua fungsi murni */

// 1. Fungsi menyusun kalimat perkenalan menerima satu argumen objek (destructuring)
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

// 2. Fungsi merapikan daftar array menjadi satu baris teks dengan pemisah " · "
const formatKeahlian = (daftar) => daftar.join(" · ");

// Menguji kedua fungsi dengan mengirim data profil kita sebagai argumen
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));