<template>
  <div>
    <Links></Links>
    <HelloWorld msg="Perfil" />
  </div>
  <div v-if="user">
    <h1>Nombre: {{ user.name }}</h1>
    <h2>Email: {{ user.email }}</h2>
    <img :src="user.avatar" alt="" />
    <h2>Role: {{ userRole }}</h2>
  </div>
  <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Links from "@/components/Links.vue";
import YoliApi from "@/api/YoliApi";
import { User } from "../models/user";
import { AxiosResponse } from "axios";

export default defineComponent({
  name: "ProfileView",
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
    let user = ref<User>();
    YoliApi.get<unknown, AxiosResponse<User>>(`/users/${props.id}`).then(
      (resp) => (user.value = resp.data)
    );
    return { user };
  },
});
</script>
