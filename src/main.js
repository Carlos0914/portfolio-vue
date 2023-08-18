import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
import AboutMe from "./pages/AboutMe.vue";
import Services from "./pages/Services.vue";
import History from "./pages/History.vue";
import Projects from "./pages/Projects.vue";
import Contact from "./pages/Contact.vue";
import { messages } from "./locales/LocalizedStrings";
import i18n from "./utils/i18n";



const routes = [
  { path: "/", component: AboutMe },
  { path: "/services", component: Services },
  { path: "/history", component: History },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({});
app.use(i18n);
app.use(router);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.min"
