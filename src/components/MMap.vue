<template>
  <div class="rover-map">
    <div class="base"></div>
    <div v-for="rover in data" :key="rover.id" class="rover" :style="{transform: `translate(${rover.position.x}px,${rover.position.y}px)`}" :data-name="rover.name"></div>
  </div>
</template>

<style scoped>
  :root {
    transform-origin: 0% 0%;
  }
  .rover-map {
    position: relative;
    width: 800px;
    height: 800px;
    background-image: url("/assets/img/mars.jpg");
    background-repeat: repeat;
    margin: 1em auto;
  }
  .base {
    transform: translate(200px, 200px);
    background-size: 100%;
    width: 3em;
    height: 3em;
    background-image: url("/assets/img/base.png");
  }
  .rover {
    background-size: 100%;
    width: 2em;
    height: 2em;
    background-image: url("/assets/img/rover.png");
    transition: transform .2s;
    position: relative;
  }
  .rover:before {
    content: attr(data-name);
    font-size: .8em;
    position: absolute;
    left: 2.2em;
  }
</style>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
