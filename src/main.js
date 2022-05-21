import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios'
import VueToast from 'vue-toast-notification';
import intaSend  from 'intasend-inlinejs-sdk'
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

// import vmodal from 'vue-js-modal'
import 'vue-universal-modal/dist/index.css'

// import VueUniversalModal from 'vue-universal-modal'

axios.defaults.baseURL = "http://localhost:8000/"
// axios.defaults.baseURL = "https://easyhouse-booking.herokuapp.com/"

createApp(App).use(store).use(router, axios).use(intaSend).mount("#app").use(VueToast);
