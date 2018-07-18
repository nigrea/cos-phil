import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes";

Vue.config.productionTip = false;

// Actual Vue Instance

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
