import Vue from 'vue';
import CarbonComponentsVue from '@carbon/vue/src/index';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(CarbonComponentsVue);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
