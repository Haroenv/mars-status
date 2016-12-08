const express = require('express');

const port = process.env.PORT || 8080;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const got = require('got');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

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
  sendData();
});

sendData = function() {
	fetch('http://roguerovers-api-develop.azurewebsites.net/api/channel/')
		.then(function(response) {
			response.json().then((data) => {
				io.emit('list', data);
				setTimeout(sendData, 200);
			});
		}).catch(function(err) {
			io.emit('list', {error: err});
		});
};


