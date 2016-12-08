const express = require('express');

const port = process.env.PORT || 8080;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const got = require('got');

app.use(express.static('dist'));

app.use(require('./controllers'));

server.listen(port, function () {
  console.log('Listening on port ' + port);
});

io.on('connection', function (socket) {
  sendData();
});

setTimeout(function() {
  sendData();
}, 1000 );

sendData = function() {
	got('http://roguerovers-api-develop.azurewebsites.net/api/channel', {
		method: 'get'
	}).then(function(response) {
		io.emit('list', response);
	}).catch(function(err) {
		io.emit('list', {error: "error occured"});
	});
};
