import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import store from "./store/index"
import router from "./router"
import "./rem"
import "./assets/confont/iconfont.css"
import PUBLIC from "./public"
Vue.prototype.$publicUrl = PUBLIC
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store, router
}).$mount('#app')
