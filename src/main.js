import Vue from 'vue';
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'http://localhost:8080');

import App from './App.vue';

const vm = new Vue({
  sockets: {
    list: (val) => {
      console.log(val);
      this.rovers = val;
    }
  },
  data: {
    rovers: []
  },
  el: '#app',
  render: h => h(App)
});
