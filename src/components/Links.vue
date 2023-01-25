<template>
  <nav>
    <router-link to="/products">Listado de productos</router-link> |
    <router-link to="/profile">Perfil</router-link> |
    <a href="../App.vue" class="button">Logout</a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Links",
});
</script>

<style scoped>
.button {
  text-decoration: none;
  color: #8a3513;
}
nav {
  padding: 20px;
  background-color: rgba(146, 187, 146, 0.637);
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #0b9b5a;
}
</style>
