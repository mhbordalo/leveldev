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
      await api.post("/comments", { body: this.comment, post_id: this.$route.params.id });
      this.clearForm();
      await this.getAllComments()
    },
    async getAllComments() {
      const response = await api.get(`/comments`)
      console.log("response", response)
      // const response = await api.get(`/comments?post_id=${this.$route.params.id}`);
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
    <h1>{{ title }}</h1>
    <h2>{{ body }}</h2>
    <hr/>
    <h3>Novo Comentário:</h3>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="8"
      >
        <v-textarea
          clearable
          label="Comentário"
          v-model="comment"
          variant="solo"
        ></v-textarea>
        <v-btn
          variant="elevated"
          color="primary"
          @click="createComments"
        >
          Salvar Comentário
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <div>
        {{ comments }}
      </div>
    </v-row>
  </v-container>
</template>
