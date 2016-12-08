<template>
<table class="list pa2 mw6 center ba b--light-silver br2 striped--light-gray">
  <thead>
    <th class="pa2">name</th>
    <th class="pa2">position</th>
    <th class="pa2">direction</th>
    <th class="pa2">speed</th>
  </thead>
  <tbody>
    <tr v-for="rover of rovers" class="b--light-silver bb">
      <td class="pa2"><a :href="`/rover/${rover.id}`">{{rover.name}}</a></td>
      <td class="pa2">[{{rover.position.x}},{{rover.position.y}}]</td>
      <td class="pa2">{{rover.direction}}</td>
      <td class="pa2">{{rover.speed}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  computed: {
    rovers() {
      return [{
        "name": "ZigZagRover1",
        "position": {
          "x": 21,
          "y": 50
        },
        "direction": 2,
        "speed": 1
      }, {
        "name": "ZigZagRover1",
        "position": {
          "x": 21,
          "y": 50
        },
        "direction": 2,
        "speed": 1
      }, {
        "name": "ZigZagRover1",
        "position": {
          "x": 21,
          "y": 50
        },
        "direction": 2,
        "speed": 1
      }];
    }
  }
}
</script>
