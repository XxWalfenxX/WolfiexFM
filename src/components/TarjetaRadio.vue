<template>
  <q-card class="my-card" flat bordered>
    <q-btn @click="guardarProps">
      <img :src="logoURL" style="margin: 0; height: 210px" />
    </q-btn>

    <q-card-actions align="center">
      <div class="text-h5 q-mt-sm q-mb-xs">{{ nombre }}</div>
    </q-card-actions>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { LocalStorage } from "quasar";

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
  setup(props) {
    const router = useRouter();
    return {
      guardarProps() {
        const propsGuardados = {
          id: props.id,
          nombre: props.nombre,
          logoURL: props.logoURL,
          streamURL: props.streamURL,
        };
        LocalStorage.set("radioActual", propsGuardados);
        router.push("/reproducir-radio");
      },
    };
  },
});
</script>
