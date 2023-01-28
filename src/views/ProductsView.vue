<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div>
    <Links></Links>
    <HelloWorld msg="Listado de productos" />
  </div>
  <div class="prods-list">
    <productItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @goDetail="goDetail"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Links from "@/components/Links.vue";
import productItem from "@/components/productItem.vue";
//import YoliApi from "@/api/YoliApi";
import { Product } from "../models/products";
//import { AxiosResponse } from "axios";
import useProducts from "@/composables/useProducts";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ProductsView",
  components: {
    HelloWorld,
    Links,
    productItem,
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
    const router = useRouter();
    fetchProducts();
    return {
      products,
      goDetail: (product: Product) =>
        router.push({ name: "detail", params: { id: product.id } }),
    };
  },
});
</script>
