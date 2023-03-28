<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-h6 q-mb-xs">{{ nombre }}</div>
    </q-card-section>

    <img :src="logoURL" />
  </q-card>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TarjetaRadio",
  props: {
    nombre: {
      type: String,
    },

    logoURL: {
      type: String,
      default: "",
    },

    streamURL: {
      type: String,
      default: "",
    },
  },
});
</script>
