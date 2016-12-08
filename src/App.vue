<template lang="pug">
div
  h1 Mars Dashboard
  m-list(:list='rovers')
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

const opts = {
  timeout: 5000
}

const getWorkingRovers = (callback) => {
  fetch('http://roguerovers-api-develop.azurewebsites.net/api/channel/')
    .then(function(res) {
      return res.json();
    }).then((dataRovers) => {
      workingRovers = [];
      dataRovers.forEach((rover, i) => {
        fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            workingRovers.push(rover);
            if(i === dataRovers.length-2) {
              callback();
            }
          })
          .catch(()=>{
            // suppress
          });
      });
    }).catch(function(err) {
      io.emit('list', {error: err});
    });
}

let workingRovers = [];
let roversData = [];

const sendData = (callback) => {
  roversData = [];
  workingRovers.forEach((rover, i) => {
    Promise.all([
      fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}`),
      fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}/sensor/w1`),
      fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}/sensor/t1`)
    ]).then((values) => {
      return Promise.all([
        values[0].json(),
        values[1].text(),
        values[2].text()
      ]).catch(()=>{});
    })
    .then((values) => {
      let roverObj = values[0];
      let water = parseFloat(values[1]);
      let temp = parseFloat(values[2]);
      roverObj.w1 = water;
      roverObj.t1 = temp;
      roverObj.id = rover;
      roverObj.distance = distanceToBase(roverObj.position);
      roversData.push(roverObj);
      if(roversData.length === workingRovers.length) {
        callback(roversData);
        setTimeout(()=>{
          sendData(callback);
        }, 100);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  });
}

/**
 * Distance between two points
 * @param  {Object} first  {x1, y1}
 * @param  {Object} second {x2, y2}
 * @return {Number}        the distance between them
 */
function distance(first, second) {
  return Math.sqrt(Math.pow(second.x - first.x,2) + Math.pow(second.y - first.y,2));
}

/**
 * distance to the base
 * @param  {Object} rover position of rover {x, y}
 * @return {Number}       distance from the base
 */
function distanceToBase(rover) {
  return distance(rover, {
    x: 200,
    y: 200
  });
}

export default {
  data() {
    return {
      rovers: []
    };
  },
  mounted() {
    getWorkingRovers(() => {
      sendData((res)=> {
        this.rovers = res;
      })
    });
  },
  components: {
    MList,
    MMap,
    RoverDetail
  }
}
</script>
