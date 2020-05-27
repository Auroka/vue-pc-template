import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './permission' // permission control

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "@/assets/style/index.scss"; // 一些公用样式


// commit test


console.log(process.env.NODE_ENV);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
