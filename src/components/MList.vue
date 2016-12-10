<template>
<table class="list pa2 ma2 center b--white ba">
  <thead>
    <th class="pa2">name</th>
    <th class="pa2">
      <div class="flex items-center">
        <span>x</span>
        <div class="flex flex-column f-1 ma1">
          <span class="pointer" @click="setSort('x', true)">▲</span>
          <span class="pointer rot180" @click="setSort('x', false)">▲</span>
        </div>
      </div>
    </th>
    <th class="pa2">
      <div class="flex items-center">
        <span>y</span>
        <div class="flex flex-column f-1 ma1">
          <span class="pointer" @click="setSort('y', true)">▲</span>
          <span class="pointer rot180" @click="setSort('y', false)">▲</span>
        </div>
      </div>
    </th>
    <th class="pa2">direction</th>
    <th class="pa2">speed</th>
    <th class="pa2">
      <div class="flex items-center">
        <span>distance</span>
        <div class="flex flex-column f-1 ma1">
          <span class="pointer" @click="setSort('distance', true)">▲</span>
          <span class="pointer rot180" @click="setSort('distance', false)">▲</span>
        </div>
      </div>
    </th>
  </thead>
  <tbody>
    <tr v-for="rover of list" :key="rover.id" class="pointer" @click="select(rover.id)">
      <td class="pa2 tc">{{rover.name}}</td>
      <td class="pa2 tc">{{rover.position.x}}</td>
      <td class="pa2 tc">{{rover.position.y}}</td>
      <td class="pa2 tc">{{rover.direction}}</td>
      <td class="pa2 tc">{{rover.speed}}</td>
      <td class="pa2 tc">{{rover.distance}}</td>
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
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      what: '',
      direction: false
    }
  },
  computed: {
    data: () => {
      const array = this.list.slice();
      return array.sort((a,b) => {
        if(this.what === 'distance') {
          if(!this.direction) {
            return b.distance - a.distance;
          }
          return a.distance - b.distance;
        } else {
          if(!direction) {
            return b.position[this.what] - a.position[this.what];
          }
          return a.position[this.what] - b.position[this.what];
        }
      });
    }
  },
  methods: {
    setSort: (what, direction) => {
      this.what = what;
      this.direction = direction;
    },
    select: function(id) {
      // alert(id);
      this.$emit('select', id);
    }
  }
}
</script>
