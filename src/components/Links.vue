<template>
  <nav>
    <router-link :to="{ name: 'products' }">Listado de productos</router-link> |
    <router-link :to="{ name: 'profile', params: { id: 1 } }">Perfil</router-link> |
    <router-link :to="{ name: 'detail', params: { id: 1 } }">Detail</router-link> |
    <a href="../App.vue" class="button"> 🔓 Logout</a>
  </nav>
  <!---<a href="#" @click="removeSelectedUser">Delete</a>--->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Links",
  setup() {
    const route = useRoute();
    const id = ref<string>(route.params.id as string);
    return { id };
  },
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
