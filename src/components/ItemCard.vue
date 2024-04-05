<script setup lang="ts">
defineProps<
  {
    expiration: string
    id: number
    name: string
    price: number
  }
>()
</script>

<template>
  <div class="card-container">
    <p>id: {{ id }}</p>
    <p>name: {{ name }}</p>
    <p>price: {{ price }}</p>
    <p>expiration: {{ expiration }}</p>
    <div>
      <button class="red">Edit</button>
      <button class="yellow">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.7rem;
  background-color: #00001f;
  padding: 1rem;
}

p {
  font-size: 1.1rem;
}

button {
  margin-right: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  border: none;
  color: black;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
}
</style>
