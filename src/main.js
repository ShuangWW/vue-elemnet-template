import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'              // reset css
import './plugins/element.js'
import '@/styles/index.scss'        // global css

// 基础组件的全局注册
import '@/components/base/baseComponent.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
