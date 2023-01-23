<template>
  <div class="home">
    <HelloWorld msg="Bienvenid@ a La tienda de Yoli"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
  
<style>
.hone {
  background-image: src='../assets/green-grunge-paper-background.jpg';
  color: aliceblue;

}
</style>
