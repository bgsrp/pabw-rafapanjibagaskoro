<script setup>
import { profil } from './data.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
</script>

<template>
  <header>
    <div class="navbar">
      <input type="checkbox" id="tema" class="pengalih-tema">
      <h1>Perjalanan Bermusik Saya</h1>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#riwayat-panggung">Riwayat Panggung</a></li>
          <li><a href="#catat-penampilan">Catat Penampilan</a></li>
        </ul>
      </nav>
      <button id="atur-ulang" class="tombol-sekunder">Atur Ulang Pilihan</button>
      <label for="tema" class="tombol-tema">Tema gelap</label>
    </div>
  </header>

  <div class="isi">
    <aside class="sidebar">
      <h2>Tentang Saya</h2>
      <KepalaProfil :profil="profil" />
    </aside>

    <main class="konten">
      <section id="riwayat-panggung">
        <h2>Riwayat Penampilan Panggung Saya</h2>
        
        <figure>
          <!-- Gambar dipanggil dari folder public/ dengan awalan garis miring -->
          <img src="/fotopesta.jpg" alt="Perform bersama Unisi Music Community" width="640" height="360" loading="lazy">
          <figcaption>Perform Unisi Music Community di Pesona Ta'aruf UII 2026</figcaption>
        </figure>

        <TombolFilter />
        <DaftarProyek />
        <p id="pesan-kosong" hidden>Belum ada riwayat penampilan pada peran ini.</p>
      </section>

      <FormKontak />
    </main>
  </div>

  <footer>
    <p>Rafa Panji Bagaskoro · 23523269 · 2026</p>
  </footer>
</template>