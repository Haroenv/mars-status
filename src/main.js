import Vue from 'vue';
// import socketio from 'socket.io-client';

// const socket = socketio();
//
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'http://localhost:8080');

import App from './App.vue';

const vm = new Vue({
  socket: {
    list: (val) => {
      console.log(val);
      rovers = val;
      this.$set('rovers', val);
    }
  },
  data: {
    rovers: []
  },
  el: '#app',
  render: h => h(App)
});

// socket.on('list', function(msg){
//   console.log(msg);
//   vm.$set('rovers', msg);
//   vm.rovers.push(msg);
// });
