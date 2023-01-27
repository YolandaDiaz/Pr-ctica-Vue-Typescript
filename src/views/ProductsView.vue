<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div>
    <Links></Links>
    <HelloWorld msg="Listado de productos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Links from "@/components/Links.vue";
import YoliApi from "@/api/YoliApi";
import { Product } from "../models/products";
import { AxiosResponse } from "axios";

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
    YoliApi.get<unknown, AxiosResponse<Product[]>>("/products").then((resp) =>
      console.log(resp.data)
    );
    return {};
  },
});
</script>
