<script setup lang="ts"></script>

<template>
  <v-toolbar
    density="comfortable"
    :elevation="8"
    title="Blog"
  >
    <router-link to="/">
      <v-btn
        prepend-icon="$vuetify"
        variant="text"
      >
        Inicio
      </v-btn>
    </router-link>
    <router-link to="/posts">
      <v-btn
        prepend-icon="$vuetify"
        variant="text"
      >
        Criar Post
      </v-btn>
    </router-link>
  </v-toolbar>
  <router-view />
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
