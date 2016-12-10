<template lang="pug">
div(@select='handleSelect(id)')
  h1.tc Mars Dashboard
  m-list(:list='rovers')
  rover-detail(:rover='detail')
  m-map(:data='rovers')
</template>

<script>
import MList from './components/MList.vue';
import MMap from './components/MMap.vue';
import RoverDetail from './components/RoverDetail.vue';
import {getWorkingRovers, getDetails} from './lib/get-data.js';

export default {
  data() {
    return {
      rovers: [],
      detail: {"id": "iets","name": "ZigZagRover1","position": {"x": 21,"y": 50},"direction": 2,"speed": 1,"distance": 5}
    };
  },
  mounted() {
    getWorkingRovers(() => {
      getDetails((res)=> {
        this.rovers = res;
      })
    });
  },
  methods: {
    handleSelect: function(id) {
      alert(id);
      this.detail = this.rovers[this.rovers.findIndex(id)];
    }
  },
  components: {
    MList,
    MMap,
    RoverDetail
  }
}
</script>
