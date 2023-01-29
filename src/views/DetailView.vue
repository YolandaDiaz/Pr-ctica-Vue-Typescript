<template>
  <Links></Links>
  <HelloWorld msg="Detalle del producto" />
  <DetailCard>
    <template v-slot:header>
      <h2 class="card-title">Producto: {{ product.title }}</h2>
    </template>
    <template v-slot:image>
      <div class="picture">
        <img :src="product.images[0]" class="card-img" alt="" />
        <img :src="product.images[1]" class="card-img" alt="" />
        <img :src="product.images[2]" class="card-img" alt="" />
      </div>
    </template>
    <template v-slot:body>
      <p class="card-text">{{ product.description }}</p>
    </template>
    <template v-slot:footer>
      <h2>Precio: {{ product.price }} €</h2>
    </template>
  </DetailCard>
  <div>
    <FooterGracias></FooterGracias>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Links from "@/components/Links.vue";
import FooterGracias from "@/components/FooterGracias.vue";
import useProducts from "@/composables/useProducts";
import DetailCard from "@/components/DetailCard.vue";

export default defineComponent({
  name: "DetailView",
  components: {
    HelloWorld,
    Links,
    DetailCard,
    FooterGracias,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    productRole: String,
  },
  setup(props) {
    const { product, fetchProductsById } = useProducts();
    fetchProductsById(props.id);
    return { product };
  },
});
</script>

<style scoped>
h2 {
  padding: 2%;
  color: #0b9b5a;
}
.card-text {
  padding: 5%s;
}
.picture {
  scroll-snap-type: x mandatory;
  display: flex;
  margin: 2% 10% 2% 10%;
  overflow-x: scroll;
}
.picture img {
  flex: 0 0 100%;
  width: 100%;
  object-fit: cover;
  scroll-snap-align: center;
}
</style>
