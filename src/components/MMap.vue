<template>
  <div class="rover-map">
    <div class="base"></div>
    <template v-for="rover in data">
      <div class="rover" :style="{top: rover.position.y + 'px', left: rover.position.x +'px'}">
      </div>
    </template>
  </div>
</template>

<style>
  .rover-map {
    position: relative;
    width: 800px;
    height: 800px;
    background-image: url("/assets/img/mars.jpg");
    background-repeat: repeat;
    margin: 1em auto;
  }
  .base {
    position: absolute;
    left: 400px;
    top: 400px;
    background-size: 100%;
    width: 3em;
    height: 3em;
    background-image: url("/assets/img/base.png");
  }
  .rover {
    position: absolute;
    background-size: 100%;
    width: 2em;
    height: 2em;
    background-image: url("/assets/img/rover.png");
  }
  body {
    background-color: #000;
    color:#fff;
  }
  h1 {
    text-align: center;
  }
</style>
<script>
export default {
  data() {
    return [
      {
        "id": "iets",
        "name": "ZigZagRover1",
        "position": {
          "x": 21,
          "y": 50
        },
        "direction": 2,
        "speed": 1,
        "distance": 5
      },
      {
        "id": "iets",
        "name": "ZigZagRover1",
        "position": {
          "x": 20,
          "y": 0
        },
        "direction": 2,
        "speed": 1,
        "distance": 2
      },
      {
        "id": "iets",
        "name": "ZigZagRover1",
        "position": {
          "x": 1,
          "y": 51
        },
        "direction": 2,
        "speed": 1,
        "distance": 200
      }
    ]
  }
}
</script>
