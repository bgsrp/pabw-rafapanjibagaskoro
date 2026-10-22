<script setup>
import { ref } from 'vue'

const pesan = ref('')

function kirimPesan() {
  pesan.value = '' // Mengosongkan isian form saat tombol kirim ditekan
}
</script>

<template>
  <section>
    <h2>Tambah Catatan Penampilan</h2>
    <form @submit.prevent="kirimPesan">
      <input v-model="pesan" placeholder="Tuliskan acara panggung baru..." required />
      <button type="submit">Kirim</button>
    </form>
    <!-- Teks ini membuktikan input sudah reaktif -->
    <p v-if="pesan">Mengetik: {{ pesan }}</p>
  </section>
</template>