<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div>
    <Links></Links>
    <HelloWorld msg="Listado de productos" />
  </div>
  <div class="prods">
    <a v-for="product in products" :key="product.id">{{ product.title }}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Links from "@/components/Links.vue";
//import YoliApi from "@/api/YoliApi";
//import { Product } from "../models/products";
//import { AxiosResponse } from "axios";
import useProducts from "@/composables/useProducts";

export default defineComponent({
  name: "ProductsView",
  components: {
    HelloWorld,
    Links,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    userRole: String,
  },
  setup() {
    const { products, fetchProducts } = useProducts();
    fetchProducts();
    return { products };
  },
});
</script>
