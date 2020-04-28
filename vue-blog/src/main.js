import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入vue-resource插件
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 自定义指令
Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString(16).slice(2, 8);
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')