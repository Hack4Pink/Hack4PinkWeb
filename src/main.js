import "bootstrap/dist/css/bootstrap.css";
import BootstrapVue from 'bootstrap-vue';
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faLink,
  faListUl,
  faRandom,
  faUndo,
  faStar,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faLink, faListUl, faRandom, faUndo, faStar, faEnvelope);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
