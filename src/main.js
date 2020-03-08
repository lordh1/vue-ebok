import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify';
import store from './store';
Vue.config.productionTip = false

import Toasted from 'vue-toasted';
import VueToastify from 'vue-toastify';

Vue.use(Toasted, {
  duration: 2000,
  fullWidth: true,
  fitToScreen: true
});

Vue.use(VueToastify);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
