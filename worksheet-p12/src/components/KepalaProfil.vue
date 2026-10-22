<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <div>
    <p>{{ props.profil.peran }}</p>
    <p><strong>Keahlian:</strong> {{ props.profil.keahlian.join(' · ') }}</p>
  </div>
</template>