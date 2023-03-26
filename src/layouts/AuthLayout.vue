<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="pt-0-important bg-auth">
      <q-page>
        <div class="row" style="height: 100vh">
          <div class="col-12 flex content-center justify-center blur">
            <router-view />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.bg-auth {
  background-color: #f0f4f3;
  background-image: url("src/assets/bg-auth.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.blur {
  background: rgba(136, 136, 136, 0.247);
  backdrop-filter: blur(20px);
}
</style>
