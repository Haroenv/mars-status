<template lang="pug">
div
  al-stats(:hits=5, :time=100)
  m-list(:data=rovers)
</template>

<script>
import AlStats from './components/AlStats.vue';
import MList from './components/MList.vue';
import MMap from './components/MMap.vue';

export default {
  components: {
    AlStats,
    MList,
    MMap
  }
}
</script>
