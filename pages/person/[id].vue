<script setup lang="ts">
const route = useRoute();
const people = await useGenealogy();
const person = people[route.params.id] ?? null;
</script>

<template>
  <div v-if="person" class="container">
    <div class="card">
      <img
          :src="person.foto || '/fotos/default.png'"
          alt="Foto"
          class="rounded-full"
      />
      <h1>{{ person.name.first }} {{ person.name.family_name }}</h1>
      <p>📅 Nascimento: {{ person.birty.data }} - {{ person.birty.location.city }}</p>
      <h2>Relacionamentos</h2>
      <ul>
        <li v-for="parenteId in person.relationships?.parents ?? []" :key="parenteId">
          Pai/Mãe: {{ people[parenteId]?.name.first ?? "Desconhecido" }}
        </li>
        <li v-for="filhoId in person.relationships?.children ?? []" :key="filhoId">
          Filho(a): {{ people[filhoId]?.name.first ?? "Desconhecido" }}
        </li>
      </ul>
    </div>
    <NuxtLink to="/" class="back-link">⬅️ Voltar</NuxtLink>
  </div>
  <p v-else>person não encontrada.</p>
</template>

<style scoped>
.back-link {
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #3498db;
}
</style>
