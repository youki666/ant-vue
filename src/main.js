import Vue from 'vue';

import App from './App';
import './plugins/ant'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
