var express = require('express');
var router = express.Router();
var User = require('../lib/User');

router.get('/:id', function(req, res, next) {
  var userId = parseInt(req.params.id, 10);
  User.getUserById(userId).then(function (user) {
    res.json(user);
  });
});

module.exports = router;
