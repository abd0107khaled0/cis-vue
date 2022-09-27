import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Nav from "@/components/NavBar/Nav.vue";
import NewLatters from "@/components/NewLater/NewLatters.vue";
import Search from "@/components/Search/Search.vue";
import Error from "@/components/Errors/Error.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Nav",
    name: "Nav",
    component: Nav,
  },
  {
    path: "/NewLatters",
    name: "NewLatters",
    component: NewLatters,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: Error,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
