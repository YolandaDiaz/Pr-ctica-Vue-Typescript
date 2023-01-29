<template>
  <div>
    <Links></Links>
    <HelloWorld msg="Listado de productos" />
  </div>
  <!---<form @submit.prevent="submitSearch">
    <div class="input-group search-form">
      <input
        v-model="searchQuery"
        type="search"
        class="form-control rounded"
        placeholder="Introduce tu búsqueda"
        aria-label="search"
        aria-describedby="search-addon"
      />
      <button type="button" class="btn btn-dark">Buscar</button>
    </div>
  </form>--->
  <div class="prods-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @goDetail="goDetail"
    />
  </div>
  <div> <FooterGracias></FooterGracias> </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Links from "@/components/Links.vue";
import FooterGracias from "@/components/FooterGracias.vue";
import ProductItem from "@/components/ProductItem.vue";
import { Product } from "../models/products";
//import axios from "axios";
import useProducts from "@/composables/useProducts";
import { useRouter } from "vue-router";
//import { useStore } from "vuex";
import store from "@/store";

export default defineComponent({
  name: "ProductsView",
  components: {
    HelloWorld,
    Links,
    ProductItem,
    FooterGracias
},
  props: {
    id: {
      type: Number,
      required: true,
    },
    productRole: String,
  },
  setup() {
    store.state;
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

<style scoped>
.prods-list {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem 1rem;
  margin: 1% 2% 0 2%;
  width: 100%;
}
</style>
