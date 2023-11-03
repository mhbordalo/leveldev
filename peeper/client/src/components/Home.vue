<script lang="ts">
import { defineComponent } from "vue";
import api from "../http.ts";

interface Post {
  title: string;
  body: string;
  comments: String
}

export default defineComponent({
  data() {
    return {
      posts: [] as Post[],
      title: String,
      body: String,
      comments: String,
    };
  },
  methods: {
    async loadPosts() {
      const response = await api.get("/posts");
      this.posts = response.data as Post[];
    },
  },
  async mounted() {
    await this.loadPosts();
  },
});
</script>

<template>

  <v-container>
    <h1 style="font-weight: bold;">Posts</h1>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="m-4"
        cols="auto"
        v-for="post in posts"
      >
        <v-card
          class="mx-auto"
          width="400"
          :title="post.title"
          :text="post.body"
          variant="tonal"
        >
          <v-card-actions>
            <router-link :to="'/posts/'+post.id+'/update'">
              <v-btn>Editar</v-btn>
            </router-link>
            <router-link :to="'/posts/'+post.id">
              <v-btn>Leia mais</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
