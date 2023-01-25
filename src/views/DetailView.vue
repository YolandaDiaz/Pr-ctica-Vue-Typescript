<template>
    <div>
      <Links></Links>
      <HelloWorld msg="Detalle del producto"/>
    </div>    
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import Links from '@/components/Links.vue';
  
  export default defineComponent({
    name: 'DetailView',
    components: {
      HelloWorld,
      Links
    },
  });
</script>