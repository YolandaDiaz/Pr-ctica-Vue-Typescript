<template>
  <div>
    <Links></Links>
    <HelloWorld msg="Perfil" />
  </div>
  <DetailCard>
    <template v-slot:header>
      <h2 class="card-title">Nombre: {{ user.name }}</h2>
    </template>
    <template v-slot:image>
      <div class="picture">
        <img :src="user.avatar" class="card-img" alt="" />
      </div>
    </template>
    <template v-slot:body>
      <p class="card-text">>Role: {{ userRole }}</p>
    </template>
    <template v-slot:footer>
      <h2>Email: {{ user.email }}</h2>
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
import useUsers from "@/composables/useUsers";
import DetailCard from "@/components/DetailCard.vue";

export default defineComponent({
  name: "ProfileView",
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
    userRole: String,
  },
  setup(props) {
    const { user, fetchUserById } = useUsers();
    fetchUserById(props.id);
    return { user };
  },
});
</script>

<style scoped>
h2 {
  color: #0b9b5a;
}
.card-text {
  padding: 5%s;
}
</style>
