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

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(require('./controllers'));

server.listen(port, function () {
  console.log('Listening on port ' + port);
});

io.on('connection', function (socket) {
  getWorkingRovers(sendData);
});

function getWorkingRovers(callback) {
  console.log("getWorking");
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
          .catch((err) => {
          });
      });
    }).catch(function(err) {
      io.emit('list', {error: err});
    });
};

function sendData() {
  console.log("send");
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
      ]);
    })
    .then((values) => {
      let roverObj = values[0];
      let water = parseFloat(values[1]);
      let temp = parseFloat(values[2]);
      roverObj.w1 = water;
      roverObj.t1 = temp;
      roverObj.id = rover;
      roversData.push(roverObj);
      if(i === workingRovers.length-1) {
        io.emit('list', roversData);
        setTimeout(sendData, 200);
      }
    })
    .catch((err) => {
      console.log(err)
    });
  });
};
