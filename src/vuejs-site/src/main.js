import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();
Vue.prototype.window = window;
Vue.prototype.document = document;

new Vue({
  render: h => h(App),
}).$mount('#app')
