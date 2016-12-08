const express = require('express');

const router = new express.Router();

router.get('/', function (req, res) {
  res.render('index.pug');
});

module.exports = router;
