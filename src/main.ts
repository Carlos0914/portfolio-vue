import { createApp } from "vue";
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import "./style.css";
import Home from "./App.vue";
const routes = [{ path: "/home", component: Home }];

const router = createRouter({
    history: createWebHistory(),
  routes,
});

const app = createApp({});
app.use(router);
app.mount("#app");
