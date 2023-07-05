import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "lib-flexible"
import "./font/iconfont.css"
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store';
Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.$axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
