import Home from "../pages/index.vue";
import About from "../pages/about.vue";

export const routes = [
  { path: "/", component: Home, name: "HOME" },
  { path: "/about", component: About, name: "ABOUT" },
];
