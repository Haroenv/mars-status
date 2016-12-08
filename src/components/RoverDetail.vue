<template>
<table class="list pa2 mw6 center ba b--light-silver br2 striped--light-gray">
  <thead>
    <th class="pa2">name</th>
    <th class="pa2">
      <div class="flex items-center">
        <span>x</span>
        <div class="flex flex-column f-1 ma1">
          <span class="pointer" @click="sort('x', true)">▲</span>
          <span class="pointer rot180" @click="sort('x', false)">▲</span>
        </div>
      </div>
    </th>
    <th class="pa2">
      <div class="flex items-center">
        <span>y</span>
        <div class="flex flex-column f-1 ma1">
          <span class="pointer" @click="sort('y', true)">▲</span>
          <span class="pointer rot180" @click="sort('y', false)">▲</span>
        </div>
      </div>
    </th>
    <th class="pa2">direction</th>
    <th class="pa2">speed</th>
    <th class="pa2">
      <div class="flex items-center">
        <span>distance</span>
        <div class="flex flex-column f-1 ma1">
          <span class="pointer" @click="sort('distance', true)">▲</span>
          <span class="pointer rot180" @click="sort('distance', false)">▲</span>
        </div>
      </div>
    </th>
  </thead>
  <tbody>
    <tr v-for="rover of rovers" class="b--light-silver bb">
      <td class="pa2"><a :href="`/rover/${rover.id}`">{{rover.name}}</a></td>
      <td class="pa2 tc">{{rover.position.x}}</td>
      <td class="pa2 tc">{{rover.position.y}}</td>
      <td class="pa2 tc">{{rover.direction}}</td>
      <td class="pa2 tc">{{rover.speed}}</td>
      <td class="pa2 tc
      ">{{rover.distance}}</td>
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
      // this.rovers = {
      //   "meme": {
      //     "name": "ZigZagRover2",
      //     "position": {
      //       "x": 21,
      //       "y": 50
      //     },
      //     "direction": 2,
      //     "speed": 1
      //   },
      //   "memey": {
      //     "name": "ZigZagRover2",
      //     "position": {
      //       "x": 21,
      //       "y": 50
      //     },
      //     "direction": 2,
      //     "speed": 1
      //   },
      //   "memer": {
      //     "name": "ZigZagRover2",
      //     "position": {
      //       "x": 21,
      //       "y": 50
      //     },
      //     "direction": 2,
      //     "speed": 1
      //   }
      // };
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
    sort: (what, direction) => {
      this.rovers.sort((a,b) => {
        if(what === 'distance') {
          if(!direction) {
            return b.distance - a.distance;
          }
          return a.distance - b.distance;

        } else {
          if(!direction) {
            return b.position[what] - a.position[what];
          }
          return a.position[what] - b.position[what];
        }
      });
    }
  }
}
</script>
