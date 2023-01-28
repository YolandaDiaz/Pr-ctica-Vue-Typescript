<template>
  <div class="product-item">
    <div class="product-images">
      <img :src="product.images[0]" alt="Imagen del producto" />
    </div>
    <div class="product-info">
      <div class="product-name">{{ product.title }}</div>
      <div class="product-price">{{ product.price }} €</div>
      <div class="buttons">
        <button class="button" @click="$emit('goDetail', product)">Detalle</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Product } from "@/models/products";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-item {
  width: 300px;
  display: flex;
  border: 2.5px dotted rgba(18, 48, 7, 0.418);
  border-radius: 10px;
}

.product-images {
  width: 100%;
  height: 100%;
}
.product-images > img {
  width: 100%;
  height: 100%;
  border-start-start-radius: 10px;
  border-bottom-left-radius: 10px;
}
.button {
  border-radius: 5px;
  background-color: rgba(85, 177, 85, 0.637);
}
.product-info {
  display: flexbox;
  text-align: center;
  padding-top: 10%;
}
.product-name {
  color: chocolate;
}
</style>
