import Vue from "vue";
import VueRouter from "vue-router";
import MovieList from "../components/MovieList.vue";
import MovieDetails from "../components/MovieDetails.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: MovieList },
  { path: "/movie/:title", component: MovieDetails, props: true },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
