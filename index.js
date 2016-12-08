const express = require('express');

const io = require('socket.io')(server);

const port = process.env.PORT || 8080;

const app = express();

const got = require('got');

app.use(express.static('dist'));

app.use(require('./controllers'));

app.listen(port, function () {
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