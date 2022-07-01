import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('reverse', (val,a) => {
  return val.split('').reverse().join(a)
})

Vue.filter('toDown',val => {
  return val.toLowerCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
