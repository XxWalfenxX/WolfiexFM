<template>
  <q-card class="my-card" flat bordered>
    <q-btn :to="{ name: 'ReproducirRadio', params: { nombre: id } }">
      <img :src="logoURL" style="margin: 0; height: 210px" />
    </q-btn>

    <q-card-actions align="center">
      <div class="text-h5 q-mt-sm q-mb-xs">{{ nombre }}</div>
    </q-card-actions>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TarjetaRadio",
  props: {
    id: {
      type: String,
    },
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
