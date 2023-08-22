import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css";
import AboutMe from "./pages/AboutMe.vue";
import Services from "./pages/Services.vue";
import History from "./pages/History.vue";
import Projects from "./pages/Projects.vue";
import FlagIcon from 'vue-flag-icon';
import Contact from "./pages/Contact.vue";
import i18n from "./utils/i18n";
import { createHead } from "@unhead/vue";
// Import icons from material design
import Laptop from "vue-material-design-icons/Laptop.vue"
import Account from "vue-material-design-icons/Account.vue"
import FaceAgent from "vue-material-design-icons/FaceAgent.vue"
import Email from "vue-material-design-icons/EmailOutline.vue"
import Briefcase from "vue-material-design-icons/Briefcase.vue"
import School from "vue-material-design-icons/School.vue"
import MapMarker from "vue-material-design-icons/MapMarker.vue"
import AccountHardHat from "vue-material-design-icons/AccountHardHat.vue"
import CalendarMonth from "vue-material-design-icons/CalendarMonth.vue"
import ChartBox from "vue-material-design-icons/ChartBox.vue"
import Earth from "vue-material-design-icons/Earth.vue"
import EarthRemove from "vue-material-design-icons/EarthRemove.vue"
import Label from "vue-material-design-icons/Label.vue"
import Send from "vue-material-design-icons/Send.vue"


const head = createHead()

const routes = [
  { path: "/", component: AboutMe },
  { path: "/services", component: Services },
  { path: "/history", component: History },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp({});
// Install icons, flags and plugins
app.component('send-icon', Send);
app.component('Label',Label)
app.component('earth', Earth);
app.component('earthremove', EarthRemove);
app.component('school', School);
app.component('mapmarker', MapMarker);
app.component('accounthardhat', AccountHardHat);
app.component('calendarmonth', CalendarMonth);
app.component('chartbox', ChartBox);
app.component('account', Account);
app.component('faceagent', FaceAgent);
app.component('email', Email);
app.component('briefcase', Briefcase);
app.component('laptop', Laptop);
app.use(head)
app.use(FlagIcon)
app.use(i18n);
app.use(router);
app.mount("#app");

import "bootstrap"
