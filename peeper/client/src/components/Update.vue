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
    async getPost() {
      const response = await api.get(`/posts/${this.$route.params.id}`);
      this.title = response.data.title;
      this.body = response.data.body;
    },
    async updatePost() {
      await api.patch(`/posts/${this.$route.params.id}`, {
        title: this.title,
        body: this.body,
      });
      this.$router.push("/");
    },
    async deletePost() {
      await api.delete(`/posts/${this.$route.params.id}`);
      this.$router.push("/");
    },
  },
  async mounted() {
    await this.getPost();
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
          @click="updatePost"
        >
          Salvar Post
        </v-btn>
        <v-btn
          variant="elevated"
          color="secondary"
          @click="deletePost"
        >
          Excluir Post
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
