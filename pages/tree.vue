<script setup lang="ts">
import type {Person} from "~/composables/useGenealogy";

const people = await useGenealogy();
const rootId = "josé_antonio_marçal_1808"; // Defina o ID da pessoa raiz (exemplo)


interface TreeNode {
  person: Person;
  partners: Person[];
  children: TreeNode[];
}

const buildTree = (people: Record<string, Person>, rootId: string): TreeNode | null => {
  const rootPerson = people[rootId];
  if (!rootPerson) return null;

  // Obtendo todos os parceiros
  const partners = (rootPerson.relationships?.partners ?? [])
      .map(partnerId => people[partnerId])
      .filter((partner): partner is Person => !!partner);

  return {
    person: rootPerson,
    partners: partners,
    children: (rootPerson.relationships?.children ?? [])
        .map(childId => buildTree(people, childId))
        .filter((child): child is TreeNode => child !== null),
  };
};

const root = buildTree(people, rootId);

</script>

<template>
  <div class="tree-container">
    <h1>🌳 Árvore Genealógica</h1>
    <TreeNode v-if="root" :node="root" />
  </div>
</template>

<style scoped>
.tree-container {
  padding: 20px;
}
</style>
