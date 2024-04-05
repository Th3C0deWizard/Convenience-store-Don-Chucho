<script setup></script>

<template>
  <section id="home">
    <h1>welcome to Don Chucho convenience store!</h1>
    <p>Here you can find mecato</p>
    <div>
      <RouterLink to="/shopping">
        <button>Shopping!</button>
      </RouterLink>
      <RouterLink to="/admin">
        <button>Admin!</button>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 4rem;
  min-height: calc(100dvh - 4rem);
  gap: 1rem;
}

h1 {
  font-size: 5rem;
  font-weight: 900;
  width: 60%;
}

p {
  width: fit-content;
  padding-left: 1rem;
  font-size: 1.3rem;
}

div {
  display: flex;
  gap: 2rem;
  padding: 1rem;
}

button {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;
  transition: scale 0.5s;
}

button:hover {
  scale: 1.1;
}
</style>
