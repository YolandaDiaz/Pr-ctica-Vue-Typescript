<template>
  <div>
    <Links></Links>
    <HelloWorld msg="Detalle del producto" />
  </div>
  <div v-if="product">
    <h1>Producto: {{ product?.id }}</h1>
    <h2>Role: {{ userRole }}</h2>
    <h2>{{ product?.images }}</h2>
    <h2>Nombre: {{ product?.title }}</h2>
  </div>
  <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Links from "@/components/Links.vue";
import YoliApi from "@/api/YoliApi";
import { Product } from "../models/products";
import { AxiosResponse } from "axios";

export default defineComponent({
  name: "DetailView",
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
  setup(props) {
    let product = ref<Product>();
    YoliApi.get<unknown, AxiosResponse<Product>>(`/products/21`).then(
      (resp) => (product.value = resp.data)
    );
    return { product };
  },
});
</script>
