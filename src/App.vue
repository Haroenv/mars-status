<template lang="pug">
div
  h1 Mars Dashboard
  m-list(:data=rovers)
  m-map
</template>

<script>
import MList from './components/MList.vue';
import MMap from './components/MMap.vue';

export default {
  components: {
    MList,
    MMap
  }
}
</script>
