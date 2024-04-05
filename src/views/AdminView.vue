<script setup lang="ts">
import { ref } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import ItemGrid from '../components/ItemGrid.vue';
import CreateProductDialog from "../components/CreateProductDialog.vue"
import type { Product } from '../models/Product';

const initialData = [
  {
    expiration: "2024-04-05",
    id: 1,
    name: "Papitas",
    price: 2000,
  },
  {
    expiration: "2024-04-10",
    id: 2,
    name: "Refresco",
    price: 1500,
  },
  {
    expiration: "2024-04-08",
    id: 3,
    name: "Chocolate",
    price: 3000,
  },
  {
    expiration: "2024-04-06",
    id: 4,
    name: "Galletas",
    price: 2500,
  },
  {
    expiration: "2024-04-09",
    id: 5,
    name: "Caramelos",
    price: 1000,
  },
  {
    expiration: "2024-04-07",
    id: 6,
    name: "Helado",
    price: 3500,
  },
  {
    expiration: "2024-04-11",
    id: 7,
    name: "Yogurt",
    price: 1800,
  },
  {
    expiration: "2024-04-12",
    id: 8,
    name: "Frutas",
    price: 4000,
  },
  {
    expiration: "2024-04-15",
    id: 9,
    name: "Café",
    price: 2200,
  },
  {
    expiration: "2024-04-14",
    id: 10,
    name: "Té",
    price: 2300,
  }
];

const data = ref<Array<Product>>(initialData)
const showModal = ref<boolean>(false);

const handleSearch = (filteredData: Array<Product>) => {
  data.value = filteredData
}

const closeCreateModal = () => {
  showModal.value = false;
}

const openCreateModal = () => {
  showModal.value = true;
}

</script>

<template>
  <section>
    <SearchBar :data="initialData" @onSearch="handleSearch" />
    <button @click="openCreateModal">create</button>
    <ItemGrid :data />
    <CreateProductDialog :show="showModal" :onClose="closeCreateModal" />
  </section>
</template>

<style scoped>
section {
  padding-top: 2rem;
}

button {
  margin-left: 2.5rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  border: none;
  color: black;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  background-color: green;
}
</style>
