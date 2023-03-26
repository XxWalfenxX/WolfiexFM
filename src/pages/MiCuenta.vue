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
          @submit="cambiarImagenCuenta"
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
import { storage } from "src/firebase/index";
import { useQuasar } from "quasar";
import { ref as refvue } from "vue";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";

export default {
  setup() {
    const $q = useQuasar();
    const user = $q.localStorage.getItem("user");
    const auth = getAuth();

    return {
      // ACTUALIZAR IMAGEN DEL USUARIO
      file: refvue(null),
      name: refvue(null),

      cambiarImagenCuenta(evt) {
        const formData = new FormData(evt.target);
        const imgRef = "/user-img/" + user.email;
        var imgURL = "";

        for (const [name, value] of formData.entries()) {
          if (value.name.length > 0) {
            // Subir fichero
            uploadBytes(ref(storage, imgRef), value).then((snapshot) => {
              console.log("La imagen subida a Firebase");
              // Conseguir link imagen
              getDownloadURL(snapshot.ref).then((downloadURL) => {
                imgURL = downloadURL;
                console.log("url de la imagen", imgURL);

                // Cambiar imagen en la cuenta
                updateProfile(auth.currentUser, {
                  photoURL: imgURL,
                }).then(() => {
                  console.log("Foto de perfil actualizada");
                });
              });
            });
          }
        }
      },
    };
  },
};
</script>
