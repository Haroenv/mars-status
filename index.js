const express = require('express');

const port = process.env.PORT || 8080;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const fetch = require('node-fetch');
const bodyParser = require('body-parser');
let workingRovers = [];
let roversData = [];

app.use(express.static('dist'));
app.use(express.static('src'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(require('./controllers'));

server.listen(port, function () {
  console.log('Listening on port ' + port);
});

// io.on('connection', function (socket) {
//   getWorkingRovers(sendData);
// });

const opts = {
  timeout: 5000
}

// function getWorkingRovers(callback) {
//   fetch('http://roguerovers-api-develop.azurewebsites.net/api/channel/', opts)
//     .then(function(res) {
//       return res.json();
//     }).then((dataRovers) => {
//       workingRovers = [];
//       dataRovers.forEach((rover, i) => {
//         fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}`, opts)
//           .then((res) => {
//             return res.json();
//           })
//           .then((data) => {
//             workingRovers.push(rover);
//             if(i === dataRovers.length-2) {
//               callback();
//             }
//           })
//           .catch((err) => {
//           });
//       });
//     }).catch(function(err) {
//       io.emit('list', {error: err});
//     });
// }

// function sendData() {
//   console.log('send');
//   roversData = [];
// 	workingRovers.forEach((rover, i) => {
//     Promise.all([
//       fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}`, opts),
//       fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}/sensor/w1`, opts),
//       fetch(`http://roguerovers-api-develop.azurewebsites.net/api/channel/${rover}/sensor/t1`, opts)
//     ]).then((values) => {
//       return Promise.all([
//         values[0].json(),
//         values[1].text(),
//         values[2].text()
//       ]);
//     })
//     .then((values) => {
//       let roverObj = values[0];
//       let water = parseFloat(values[1]);
//       let temp = parseFloat(values[2]);
//       roverObj.w1 = water;
//       roverObj.t1 = temp;
//       roverObj.id = rover;
//       roverObj.distance = distanceToBase(roverObj.position);
//       io.emit(rover, roverObj);
//       roversData.push(roverObj);
//       if(roversData.length === workingRovers.length) {
//         io.emit('list', roversData);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   });
// }

// setInterval(sendData, 10000);

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
