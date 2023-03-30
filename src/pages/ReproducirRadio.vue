<template>
  <div class="q-pa-md">
    <div class="row flex-center">
      <div class="col-12 col-md-3 text-center">
        <h4>Escuchando {{ nombre }}</h4>
        <q-img
          :src="logoURL"
          spinner-color="white"
          style="height: 140px; max-width: 150px"
        />
      </div>
      <div class="col-12 col-md-4 text-center">
        <div v-if="!play">
          <q-btn
            round
            flat
            :icon="playing ? 'stop_circle' : 'play_circle'"
            size="50px"
            @click="togglePlay"
          />
        </div>

        <q-item>
          <q-item-section side>
            <q-icon name="volume_down" />
          </q-item-section>
          <q-item-section>
            <q-slider
              v-model="volume"
              :min="0"
              :max="100"
              label
              @change="onVolumeChange"
            />
          </q-item-section>
          <q-item-section side>
            <q-icon name="volume_up" />
          </q-item-section>
        </q-item>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { Howl, Howler } from "howler";
import { ref } from "vue";

export default {
  name: "ReproducirRadio",

  setup() {
    const $q = useQuasar();
    const radio = $q.localStorage.getItem("radioActual");
    console.dir(radio);
    var sound = new Howl({
      src: [radio.streamURL],
      html5: true,
      volume: 0.5,
    });

    const volume = ref(50);

    const onVolumeChange = () => {
      sound.volume(volume.value / 100);
    };

    const playing = ref(false);

    const togglePlay = () => {
      if (playing.value) {
        sound.stop();
      } else {
        sound.play();
      }
      playing.value = !playing.value;
    };

    return {
      volume,
      sound,
      nombre: radio.nombre,
      streamURL: radio.streamURL,
      logoURL: radio.logoURL,
      onVolumeChange,
      playing,
      togglePlay,
    };
  },
};
</script>
