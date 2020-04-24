import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {
    App,
  },
  router,
  vuetify,
  render: (h) => h(App),
  template: '<App />',
});
