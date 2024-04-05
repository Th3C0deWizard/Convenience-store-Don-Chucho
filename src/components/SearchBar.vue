<script setup lang="ts">
import { defineModel, watchEffect } from 'vue';
import type { Product } from '../models/Product';

const props = defineProps<{
  data: Array<Product>
}>();

const searchInput = defineModel<string>("");
const emit = defineEmits<
  {
    (e: "onSearch", filteredData: Array<Product>): void
  }
>();

watchEffect(() => {
  if (searchInput.value === undefined) return
  const filteredData = searchInput.value === "" ? props.data : props.data.filter((product) => {
    return product.name.toLowerCase().search(RegExp(searchInput.value?.toLowerCase() || "")) !== -1;
  });
  emit("onSearch", filteredData)
})

const handleSearch = () => {
  if (searchInput.value === undefined) return
  const filteredData = searchInput.value === "" ? props.data : props.data.filter((product) => {
    return product.name.toLowerCase() === searchInput.value?.toLowerCase() || "";
  });
  emit("onSearch", filteredData)
}

</script>

<template>
  <section>
    <form @submit.prevent="handleSearch">
      <input type="text" v-model.trim="searchInput">
      <button>Buscar</button>
    </form>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="text"] {
  border: none;
  border-radius: 0.7rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-family: inherit;
  font-size: 1.2rem;
}

button {
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  border: none;
  color: black;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: blue;
}
</style>
