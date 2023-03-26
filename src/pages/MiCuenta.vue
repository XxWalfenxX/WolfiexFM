<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-md-5 col-8">
        <h5>Actualizar información de tu cuenta</h5>
        <q-form @submit="cambiarNombreUsuario" class="q-gutter-md">
          <p>Cambiar nombre de usuario</p>
          <div class="flex items-center">
            <q-input name="name" v-model="name" label="Nombre" filled clearable>
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
            <div class="q-ma-sm">
              <q-btn label="Cambiar" type="submit" color="primary" />
            </div>
          </div>
        </q-form>
        <q-form
          @submit="cambiarImagen"
          class="q-gutter-md"
          enctype="multipart/form-data"
        >
          <p>Cambiar foto de perfil</p>
          <div class="flex items-center">
            <q-file
              name="poster_file"
              v-model="file"
              outlined
              filled
              clearable
              label="Imagen"
              accept="image/*"
              style="max-width: 300px"
            >
              <template v-slot:prepend>
                <q-icon name="image" />
              </template>
            </q-file>
            <div class="q-ma-sm">
              <q-btn label="Cambiar" type="submit" color="primary" />
            </div>
          </div>
        </q-form>
      </div>
      <div class="col-md-2 col-8">
        <h5>Gestionar tu cuenta</h5>
        <q-btn color="red">ELIMINAR CUENTA</q-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { ref as refvue } from "vue";
import cambiarImagenCuenta from "src/firebase/firebase-updateImg";

export default {
  setup() {
    const $q = useQuasar();
    const user = $q.localStorage.getItem("user");

    return {
      // ACTUALIZAR IMAGEN DEL USUARIO
      file: refvue(null),
      name: refvue(null),

      cambiarImagen(evt) {
        cambiarImagenCuenta(evt, user);
      },
    };
  },
};
</script>
