import 'whatwg-fetch';

import {distanceToBase} from './math.js';

let workingRovers = [];
let roversData = [];

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const getWorkingRovers = (callback) => {
  fetch('http://roguerovers-api-develop.azurewebsites.net/api/channel/')
    .then(function(res) {
      return res.json();
    }).then((dataRovers) => {
      workingRovers = [];
      dataRovers.forEach((rover, i) => {
        fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}`)
          .then(checkStatus)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            workingRovers.push(rover);
            // hardcoded to get length
            if(i === dataRovers.length-2) {
              callback();
            }
          })
          .catch(() => {
          });
      });
    }).catch(() => {
      // io.emit('list', {error: err});
    });
}

export const getDetails = (callback) => {
  roversData = [];
  workingRovers.forEach((rover, i) => {
    Promise.all([
      fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}`)
        .then(checkStatus),
      fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}/sensor/w1`)
        .then(checkStatus),
      fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}/sensor/t1`)
        .then(checkStatus)
    ]).then((values) => {
      return Promise.all([
        values[0].json(),
        values[1].text(),
        values[2].text()
      ]);
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
          getDetails(callback);
        }, 300);
      }
    })
    .catch(() => {
      // console.log(err);
    });
  });
}
