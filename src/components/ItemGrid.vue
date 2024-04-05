<script setup lang="ts">
import type { Product } from "../models/Product.ts"
import ItemCard from './ItemCard.vue';
const props = defineProps<{
  data: Array<Product>
}>();

</script>

<template>
  <section>
    <ItemCard v-for="{ expiration, id, name, price } in data" :expiration :id :name :price="price" />
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;
}
</style>
