import { createApp } from "vue";

import App from "./App.vue";
let app = createApp(App);

import Router from "@/router";
app.use(Router);

import Store from "@/store";
app.use(Store);

import mitt from "mitt";
app.config.globalProperties.$mittBus = mitt();

import * as directives from "@/plugins/directive/index.js";
Object.keys(directives).forEach((key) => {
	app.directive(key, directives[key]);
});

import "amfe-flexible";

import "./assets/styles/fonts.scss";
import "vant/lib/index.css";
import "./assets/styles/index.scss";

import "animate.css/animate.min.css";
import "animate.css/animate.compat.css";

import "vant/lib/index.css";

app.mount("#app");
