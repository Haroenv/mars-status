<template>
<table class="list pa2 ma2 center ba b--white">
  <thead>
    <th class="pa2 tl">name</th>
    <th class="pa2">{{rover.name}}</th>
  </thead>
  <tbody>
    <tr>
      <td class="pa2">ID</td>
      <td class="pa2 tc">{{rover.id}}</td>
    </tr>
    <tr>
      <td class="pa2">Position</td>
      <td class="pa2 tc">X: {{rover.position.x}} Y: {{rover.position.y}}</td>
    </tr>
    <tr>
      <td class="pa2">Speed</td>
      <td class="pa2 tc">{{rover.speed}}</td>
    </tr>
    <tr>
      <td class="pa2">Distance to base</td>
      <td class="pa2 tc">{{rover.distance}}</td>
    </tr>
    <tr>
      <td class="pa2">Direction</td>
      <td class="pa2 tc">{{rover.direction}}</td>
    </tr>
    <tr>
      <td class="pa2">Temperature</td>
      <td class="pa2 tc">{{rover.w1}}</td>
    </tr>
    <tr>
      <td class="pa2">Water</td>
      <td class="pa2 tc">{{rover.direction}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  props: {
    rover: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>
