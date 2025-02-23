<script setup lang="ts">
const people = await useGenealogy();
</script>

<template>
  <div class="container">
    <h1>🌳 Árvore Genealógica</h1>
    <div class="grid">
      <NuxtLink
          v-for="person in people"
          :key="person.id"
          :to="`/person/${person.id}`"
          class="card"
      >
        <img
            :src="person.foto || '/fotos/default.png'"
            alt="Foto"
            class="rounded-full"
        />
        <h2>{{ person.name.first }} {{ person.name.family_name }}</h2>
        <p>📅 Nascimento: {{ person.birty.date.year }} - {{ person.birty.location.city }}, {{ person.birty.location.state }}, {{ person.birty.location.country }}</p>
      </NuxtLink>
    </div>
  </div>
</template>
