import Vue from "vue";
import router from "@/main/router/index";
import App from "@/main/apps/app.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
