import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia"; // 导入 Pinia
import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");
