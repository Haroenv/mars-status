import Vue from 'vue';
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'http://localhost:8080');

import App from './App.vue';

// eslint-disable-next-line no-new
new Vue({
  sockets: {
    connect: () => {
      console.log('socket connected');
    },
    data: (val) => {
      console.log('this method fired by socket server. eg: io.emit("data", data)');
      console.log(val);
    }
  },
  el: '#app',
  render: h => h(App)
});
