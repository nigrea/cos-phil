import '@babel/polyfill'
import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import store from "./store";
import router from "./routes";

Vue.config.productionTip = false;

import StandardInputField from "./components/atoms/StandardInputField.vue";
import SubmitButton from "./components/atoms/SubmitButton.vue";

Vue.component("StandardInputField", StandardInputField);
Vue.component("SubmitButton", SubmitButton);

// Actual Vue Instance
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
