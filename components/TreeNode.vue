<script setup lang="ts">
defineProps<{ node: TreeNode }>();
</script>

<template>
  <div class="tree-node">
    <div class="couple">
      <!-- Pessoa principal -->
      <div class="person">
        <img :src="node.person.avatar || '/fotos/default.png'" alt="Foto" class="avatar">
        <span>{{ node.person.name.first }} {{ node.person.name.family_name }}</span>
      </div>

      <!-- Lista de parceiros -->
      <div v-if="node.partners.length" class="partners">
        <span v-for="partner in node.partners" :key="partner.id" class="partner">
          <span class="spouse-separator">❤️</span>
          <img :src="partner.avatar || '/fotos/default.png'" alt="Foto" class="avatar">
          <span>{{ partner.name.first }} {{ partner.name.family_name }}</span>
        </span>
      </div>
    </div>

    <!-- Filhos -->
    <div v-if="node.children.length" class="children">
      <TreeNode v-for="child in node.children" :key="child.person.id" :node="child" />
    </div>
  </div>
</template>

<style scoped>
.tree-node {
  margin-left: 20px;
  border-left: 2px solid #ccc;
  padding-left: 10px;
}

.couple {
  display: flex;
  align-items: center;
  gap: 10px;
}

.partners {
  display: flex;
  align-items: center;
  gap: 10px;
}

.spouse-separator {
  font-size: 20px;
  color: red;
}

.partner {
  display: flex;
  align-items: center;
  gap: 5px;
}

.person {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f9f9f9;
  padding: 5px;
  border-radius: 5px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.children {
  margin-left: 20px;
}
</style>
