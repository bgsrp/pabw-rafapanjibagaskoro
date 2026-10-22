<script setup>
import { state } from '../state.js'
</script>

<template>
  <div id="daftar">
    <article 
      v-for="item in state.daftarPenampilan" 
      :key="item.id" 
      v-show="state.kategoriAktif === 'semua' || state.kategoriAktif === item.role"
      class="kartu"
    >
      <h3>{{ item.judul }}</h3>
      <p>Tanggal: {{ item.tanggal }}</p>
      <p>Role: {{ item.role }}</p>
      <p>Jumlah Lagu: {{ item.jumlahLagu }}</p>
    </article>
  </div>
</template>