import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import AboutMe from "./pages/AboutMe.vue";
const routes = [{ path: "/", component: AboutMe }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({});
app.use(router);
app.mount("#app");
