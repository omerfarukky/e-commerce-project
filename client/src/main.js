import {createApp} from "vue"
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import router from "./router";
import store from "./store/store";

import AppHeader from "@/components/Shared/AppHeader.vue";
import AppFooter from "@/components/Shared/AppFooter.vue";
import { appAxios } from "./utils/appAxios";

const app = createApp(App);
app.component("AppHeader", AppHeader);
app.component("AppFooter", AppFooter);
app.use(router);
app.use(store);

app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");
