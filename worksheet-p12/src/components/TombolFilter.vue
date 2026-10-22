<script setup>
import { state, pilihKategori } from '../state.js'
</script>

<template>
  <nav>
    <button 
      @click="pilihKategori('semua')" 
      :class="{ aktif: state.kategoriAktif === 'semua' }">Semua</button>
    <button 
      @click="pilihKategori('Lead Vocal')" 
      :class="{ aktif: state.kategoriAktif === 'Lead Vocal' }">Lead Vocal</button>
    <button 
      @click="pilihKategori('PA Vocalist')" 
      :class="{ aktif: state.kategoriAktif === 'PA Vocalist' }">PA Vocalist</button>
    <button 
      @click="pilihKategori('Male Vocal')" 
      :class="{ aktif: state.kategoriAktif === 'Male Vocal' }">Male Vocal</button>
  </nav>
</template>