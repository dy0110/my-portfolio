import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserAlt,
  faLaptopCode,
  faFileAlt,
  faLaptop,
  faCodeBranch,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons"; // 使うアイコンを都度ダウンロードする
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import rate from "vue-rate";

// Buefy連携
Vue.use(Buefy);

// vue-rate連携
Vue.use(rate);

// Fontawsome連携
library.add(
  faUserAlt,
  faLaptopCode,
  faFileAlt,
  faLaptop,
  faCodeBranch,
  faExternalLinkAlt,
  faGithub
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
