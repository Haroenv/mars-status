const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.use(express.static('dist'));

app.use(require('./controllers'));

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
