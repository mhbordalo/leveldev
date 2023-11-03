import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'
import Update from './components/Update.vue'
import NotFound from './components/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts/:id/update',
    name: 'update',
    component: Update
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: "/:pathMatch(.*)*",
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
