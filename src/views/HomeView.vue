<template>
  <div>
    <HelloWorld msg="Bienvenid@ a la tienda de Yoli" />
  </div>
  <div class="login">
    <h3>Lógate para acceder a la tienda</h3>
    <form action="post" class="form" v-on:submit.prevent="goLogin">
      <label class="form-label" for="email">Email:</label>
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Introduce tu email"
      />
      <label class="form-label" for="password">Password:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="Introduce tu contraseña"
      />
      <input class="form-submit" type="submit" value="Acceder" />
    </form>
    <div class="error" v-if="error">
      "El email introducido o la contraseña no son correctos. Se ha producido el siguiente
      error:"{{ errormsg }}
    </div>
  </div>
  <div>
    <FooterGracias></FooterGracias>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import FooterGracias from "@/components/FooterGracias.vue";
import axios from "axios";
import router from "@/router";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    FooterGracias,
  },
  data: function () {
    return {
      email: "",
      password: "",
      error: false,
      errormsg: "",
    };
  },
  methods: {
    async goLogin() {
      let json = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post(
          "https://api.escuelajs.co/api/v1/auth/login",
          json
        );
        localStorage.setItem("accessToken", response.data.access_token);
        router.push({ name: "profile" });
      } catch (err) {
        this.error = true;
        this.errormsg = `${err}`;
      }
    },
  },
});
</script>

<style scoped>
.login {
  padding: 2rem;
}
h3 {
  text-align: center;
  color: rgba(13, 122, 13, 0.651);
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background-color: rgba(47, 61, 71, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 2px 4px 10px 4px rgba(13, 122, 13, 0.651);
}
.form-label {
  margin-top: 2rem;
  color: rgb(148, 243, 145);
  margin-bottom: 0.5rem;
}
.form-input {
  padding: 10px 15px;
  background-color: rgba(69, 74, 78, 0.9);
  color: antiquewhite;
  border: 1px solid rgb(148, 243, 145);
}
.form-submit {
  background: #1ab1899f;
  border: none;
  border-radius: 5px;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: 0.2s;
}
.form-submit :hover {
  background: #0b9170;
}
</style>
