<script lang="ts">
import { defineComponent } from "vue";
import api from "../http.ts";

interface Post {
  title: string;
  body: string;
}

export default defineComponent({
  data() {
    return {
      posts: [] as Post[],
      title: String,
      body: String,
    };
  },
  methods: {
    clearForm() {
      this.title = "";
      this.body = "";
    },
    async createPost() {
      await api.post("/posts", { title: this.title, body: this.body });
      this.clearForm();
      this.$router.push("/");
    },
  },
  async mounted() {
    this.clearForm();
  },
});
</script>

<template>
  <v-container>
    <h1>Novo Post:</h1>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="8"
      >
        <v-text-field
          clearable
          label="Título"
          v-model="title"
          variant="solo"
        ></v-text-field>
        <v-textarea
          clearable
          label="Descrição"
          v-model="body"
          variant="solo"
        ></v-textarea>
        <v-btn
          variant="elevated"
          color="primary"
          @click="createPost"
        >
          Salvar Post
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
