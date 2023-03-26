<template>
  <q-card class="q-ma-xl">
    <div class="row">
      <div class="col-12">
        <div class="row q-pa-sm-sm q-pa-md">
          <div class="col-12">
            <q-card-section>
              <div class="q-mb-xl">
                <div class="flex justify-center text-center">
                  <div
                    class="text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka"
                  >
                    Crear una cuenta
                  </div>
                </div>
              </div>

              <q-form ref="form" class="q-gutter-md" @submit="submit">
                <q-input
                  v-model="user.displayName"
                  label="Nombre de usuario"
                  name="First Name"
                />
                <q-input
                  v-model="user.email"
                  label="Correo electrónico"
                  name="Email"
                />
                <q-input
                  v-model="user.password"
                  label="Contraseña"
                  name="password"
                  type="password"
                />

                <div>
                  <q-btn
                    class="full-width fredoka"
                    color="primary"
                    label="Crear cuenta"
                    rounded
                    type="submit"
                  ></q-btn>

                  <div class="q-mt-lg">
                    <div class="q-mt-sm">
                      <q-btn
                        class="full-width fredoka"
                        color="primary"
                        label="Inciar sesión"
                        rounded
                        to="/"
                      ></q-btn>
                    </div>
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { ref, reactive } from "vue";
import register from "src/firebase/firebase-register";
import { useRouter } from "vue-router";

const user = reactive({
  displayName: null,
  email: null,
  password: null,
});

const form = ref(null);
const router = useRouter();

const submit = async () => {
  if (form.value.validate() && !!(await register(user))) {
    router.push("/app");
  }
};
</script>
