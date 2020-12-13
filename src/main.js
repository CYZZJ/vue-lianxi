/*
 * @Author: your name
 * @Date: 2020-12-13 14:24:39
 * @LastEditTime: 2020-12-13 14:41:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue_housee:\vue\git-project\vue-lianxi\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toastRegistry from "./components/toast.js";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(toastRegistry)
Vue.config.productionTip = false;

Vue.use(ViewUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");