<template>
  <div class="q-pa-md">
    <h3>Radios Nacionales</h3>
    <q-scroll-area style="height: 19rem; max-width: 100vw">
      <div
        class="row items-start lista q-gutter-md"
        v-if="!state.cargandoRadios"
      >
        <TarjetaRadio
          v-for="radio in state.listaRadios"
          :key="radio.nombre"
          v-bind="radio"
        />
      </div>
      <div class="text-center" v-else>
        <q-spinner color="primary" size="10em" />
      </div>
    </q-scroll-area>
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

    return {
      state,
    };
  },
});
</script>
<style>
.lista {
  overflow: auto;
  flex-wrap: nowrap !important;
}

.q-pa-lg-m {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
