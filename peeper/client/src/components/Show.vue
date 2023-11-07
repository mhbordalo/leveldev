<script lang="ts">
import { defineComponent } from "vue";
import api from "../http.ts";

interface Post {
  title: string;
  body: string;
}

interface Comments {
  body: string;
  post_id: number;
}

export default defineComponent({
  data() {
    return {
      title: String,
      body: String,
      comment: String,
      comments: [] as Comments[],
    }
  },

  methods: {
    clearForm() {
      this.comment = ""
    },

    async getPost() {
      const response = await api.get(`/posts/${this.$route.params.id}`);
      this.title = response.data.title;
      this.body = response.data.body;
    },

    async createComments() {
      await api.post(`/posts/${this.$route.params.id}/comments`, { body: this.comment });
      this.clearForm();
      await this.getAllComments()
    },

    async getAllComments() {
      const response = await api.get(`/posts/${this.$route.params.id}/comments`)
      this.comments = response.data as Comments[];
    }
  },

  async beforeMount() {
    this.clearForm()
    await this.getPost()
    await this.getAllComments()
  }
})
</script>

<template>
  <v-container>
    <v-row class="mb-5">
      <v-col>
        <h1>{{ title }}</h1>
        <p>{{ body }}</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mt-4">
      <v-col>
        <h2>Comentários ({{ comments.length }}):</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-list lines="two">
          <v-list-item
            v-for="comment in comments"
            :key="comment.id"
            :title="comment.body"
            prependIcon="mdi-comment">
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="center">
      <v-col cols="12" md="8">
        <v-textarea
          clearable
          label="Comentário"
          v-model="comment"
          variant="solo">
        </v-textarea>
        <v-btn
          variant="elevated"
          color="primary"
          @click="createComments">
          Enviar Comentário
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
