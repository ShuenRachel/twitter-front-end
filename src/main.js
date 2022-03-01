import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  position: "top-right",
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  closeButton: false,
  icon: false,
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: false,
  toastClassName: "custom-toast",
  bodyClassName: ["custom-class-body"],
};

Vue.use(Toast, options);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
