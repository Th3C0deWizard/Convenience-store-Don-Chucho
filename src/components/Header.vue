<script setup lang="ts">

const navLinks = [
  ["/", "Home"],
  ["/#about", "About"],
  ["/shopping", "Products"],
  ["/admin", "Admin"],
]
</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="[link, content] in navLinks">
          <RouterLink :to="link">{{ content }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

ul {
  display: flex;
  gap: 2rem;
}

li {
  list-style: none;
}

a {
  display: block;
  color: inherit;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  transition: scale 0.7s;
}

a:hover {
  scale: 1.2;
}
</style>
