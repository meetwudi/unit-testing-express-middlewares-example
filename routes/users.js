var express = require('express');
var router = express.Router();
var Datastore = require('nedb');
var path = require('path');

var db = new Datastore({
  autoload: true,
  filename: path.resolve(__dirname, '../datastore.txt')
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
