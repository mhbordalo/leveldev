<script setup lang="ts"></script>

<template>
  <div>
    <v-toolbar
      density="comfortable"
      :elevation="8">
    <v-toolbar-title class="font-weight-bold text-primary" :style="{ 'font-size': '25px', 'margin-left': '40px' }">
      <router-link to="/">
        BLOG LEVEL DEV
      </router-link>
    </v-toolbar-title>
      <router-link to="/">
        <v-btn
          prepend-icon="mdi-home"
          variant="text">
          Inicio
        </v-btn>
      </router-link>
      <router-link to="/posts">
        <v-btn
          prepend-icon="mdi-newspaper-variant-multiple-outline"
          variant="text">
          Criar Post
        </v-btn>
      </router-link>
    </v-toolbar>
    
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>
