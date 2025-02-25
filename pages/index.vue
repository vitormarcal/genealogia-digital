<script setup lang="ts">
const people = await useGenealogy();
</script>

<template>
  <div class="container">
    <h1>🌳 Árvore Genealógica</h1>
    <div class="grid">
      <NuxtLink
          v-for="person in Object.values(people)"
          :key="person.id"
          :to="`/person/${person.id}`"
          class="card"
      >
        <img
            :src="person.avatar || '/fotos/default.png'"
            alt="Foto de {{ person.name.first }}"
            class="rounded-full"
        />
        <h2>{{ person.name.first }} {{ person.name.family_name }}</h2>
        <p>
          📅 Nascimento: {{ person.birth.date.year }} - {{ person.birth.location.city }},
          {{ person.birth.location.state }}, {{ person.birth.location.country }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
