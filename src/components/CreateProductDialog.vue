<script setup lang="ts">
import ModalDialog from "./ModalDialog.vue"
const props = defineProps<{
  show: boolean;
  onClose: () => void;
}>();

</script>

<template>
  <ModalDialog :show @onClose="onClose">
    <form @click.prevent="">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="date" />
      <button>Aplicar</button>
      <button>Limpiar</button>
    </form>
  </ModalDialog>
</template>

<style scoped></style>
