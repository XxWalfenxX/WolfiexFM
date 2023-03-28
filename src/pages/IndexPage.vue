<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-3 q-gutter-md" v-if="!state.cargandoRadios">
        <TarjetaRadio
          v-for="radio in state.listaRadios"
          :key="radio.nombre"
          v-bind="radio"
        />
      </div>
      <div class="text-center" v-else>Cargando radios...</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import TarjetaRadio from "src/components/TarjetaRadio.vue";
import getRadios from "src/firebase/ObtenerRadios";

export default defineComponent({
  name: "IndexPage",
  components: {
    TarjetaRadio,
  },
  setup() {
    const state = reactive({
      listaRadios: [],
      cargandoRadios: true,
    });

    getRadios.then((radios) => {
      state.listaRadios = radios;
      state.cargandoRadios = false;
    });

    return { state };
  },
});
</script>
