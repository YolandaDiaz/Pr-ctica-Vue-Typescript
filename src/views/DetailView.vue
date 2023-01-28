<template>
  <Links></Links>
  <HelloWorld msg="Detalle del producto" />
  <div class="prod-detail">
    <h1>Producto: {{ product.title }}</h1>
    <div class="picture">
      <img :src="product.images[0]" class="card-img" alt="" />
    </div>
    <div class="product-description">{{ product.description }}</div>
    <h2>Precio: {{ product.price }} €</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Links from "@/components/Links.vue";
import useProducts from "@/composables/useProducts";
//import detailCard from "@/components/detailCard.vue";

export default defineComponent({
  name: "DetailView",
  components: {
    HelloWorld,
    Links,
    //detailCard,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String,
  },
  setup(props) {
    const { product, fetchProductsById } = useProducts();
    fetchProductsById(props.id);
    return { product };
  },
});
</script>

<style scoped>
.prod-detail {
  width: 100%;
  display: flex;
  text-align: center;
  border: 1px dotted black;
  border-radius: 10px;
}
.picture {
  width: 100%;
  height: 100%;
}

.card-title {
  color: chocolate;
}
</style>
