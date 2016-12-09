<template lang="pug">
div
  h1 Mars Dashboard
  m-list(:list='rovers')
  rover-detail
  m-map(:data='rovers')
</template>

<style>
  body {
    background-color: #000;
    color:#fff;
  }
  h1 {
    text-align: center;
  }
</style>

<script>
import MList from './components/MList.vue';
import MMap from './components/MMap.vue';
import RoverDetail from './components/RoverDetail.vue';
import {getWorkingRovers, getDetails} from './lib/get-data.js';

// this.$on('select', () => {

// })

export default {
  data() {
    return {
      rovers: [],
      selected: ''
    };
  },
  mounted() {
    getWorkingRovers(() => {
      getDetails((res)=> {
        this.rovers = res;
      })
    });
  },
  components: {
    MList,
    MMap,
    RoverDetail
  }
}
</script>
