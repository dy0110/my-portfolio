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
  faExternalLinkAlt,
  faAt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"; // 使うアイコンを都度ダウンロードする
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import rate from "vue-rate";
import VueMatchHeights from "vue-match-heights";

// Buefy連携
Vue.use(Buefy);

// vue-rate連携
Vue.use(rate);

// vue-match-heights連携
Vue.use(VueMatchHeights);

// Fontawsome連携
library.add(
  faUserAlt,
  faLaptopCode,
  faFileAlt,
  faLaptop,
  faCodeBranch,
  faExternalLinkAlt,
  faAt,
  faEnvelope,
  faGithub,
  faInstagram
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
