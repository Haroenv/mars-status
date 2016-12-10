<template>
<table class="list pa2 ma2 center ba">
  <thead>
    <th class="pa2">{{name}}</th>
  </thead>
  <tbody>
    <tr class="bb">
      <td class="pa2">Id</td>
      <td class="pa2 tc">{{id}}</td>
    </tr>
    <tr class="bb">
      <td class="pa2">Position</td>
      <td class="pa2 tc">X: {{position.x}} Y: {{position.y}}</td>
    </tr>
    <tr class="bb">
      <td class="pa2">Speed</td>
      <td class="pa2 tc">{{speed}}</td>
    </tr>
    <tr class="bb">
      <td class="pa2">Distance to base</td>
      <td class="pa2 tc">{{distance}}</td>
    </tr>
    <tr class="bb">
      <td class="pa2">Direction</td>
      <td class="pa2 tc">{{direction}}</td>
    </tr>
    <tr class="bb">
      <td class="pa2">Temperature</td>
      <td class="pa2 tc">{{w1}}</td>
    </tr>
    <tr class="bb">
      <td class="pa2">Water</td>
      <td class="pa2 tc">{{direction}}</td>
    </tr>
  </tbody>
</table>
</template>

<style>
.rot180 {
  transform: rotate(180deg);
}
.f-1 {
  font-size: .8em;
}
</style>

<script>
export default {
  sockets: {
    list: (val) => {
      console.log('this method fired by socket server. eg: io.emit("data", data)');
      console.log(val);
    }
  },
  data() {
    return {
        "id": "iets",
        "name": "ZigZagRover1",
        "position": {
          "x": 21,
          "y": 50
        },
        "direction": 2,
        "speed": 1,
        "distance": 5
      };
  },
  methods: {
  }
}
</script>
