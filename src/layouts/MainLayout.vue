<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> WolfiexFM </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" overlay elevated>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item to="mi-cuenta" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Mi cuenta</q-item-label>
            </q-item-section>
          </q-item>
          <q-item @click="confirm = true" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Cerrar sesión</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="avatar" />
          </q-avatar>
          <div class="text-weight-bold">{{ name }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="info" color="info" text-color="white" />
            <span class="q-ml-sm">¿Deseas cerrar tu sesión?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancelar" v-close-popup />
            <q-btn
              flat
              label="Cerrar sesión"
              color="primary"
              v-close-popup
              @click="logout"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import signout from "src/firebase/firebase-signout";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const user = $q.localStorage.getItem("user");
    const logout = () => {
      signout().then(() => {
        router.push("/login");
      });
    };

    console.log(user);
    return {
      avatar: user.photoURL,
      name: user.displayName,
      logout: logout,
      confirm: ref(false),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
