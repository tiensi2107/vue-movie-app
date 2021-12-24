import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import MovieDetail from "../views/MovieDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
