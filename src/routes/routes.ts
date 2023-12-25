import Home from "../pages/index.vue";
import Component from "../pages/component.vue";
import LayoutDefault from "../layouts/Default.vue";

export const routes = [
  {
    path: "/",
    component: LayoutDefault,
    children: [{ path: "", component: Home, name: "HOME" }],
  },
  { path: "/component", component: Component, name: "COMPONENT" },
];
