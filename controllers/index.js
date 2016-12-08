const express = require('express');

const router = new express.Router();

router.use('/api/1', require('./api/1'));

router.get('/', function (req, res) {
  res.render('index.pug');
});

module.exports = router;
