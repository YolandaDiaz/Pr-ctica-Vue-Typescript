<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="image"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DetailCard",
});
</script>

<style scoped>
.card {
  margin: 2% 0 5% 5%;
  width: 90%;
  min-height: 200px;
  border: 2px dotted rgb(145, 85, 6);
  border-radius: 1.5rem;
  box-shadow: 0px 10px 10px rgba(8, 128, 24, 0.582);
  background-color: rgb(245, 244, 242);
}
</style>
