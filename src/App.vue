<template lang="pug">
div
  h1 Mars Dashboard
  m-list(:data=rovers)
  rover-detail
  m-map
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

export default {
  components: {
    MList,
    MMap,
    RoverDetail
  }
}
</script>
