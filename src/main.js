import { createApp } from "vue";

// 导入 Pinia
import App from "./App.vue";
import "./style.css";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library, dom } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(fas);
dom.watch();

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(createPinia())
  .mount("#app");
