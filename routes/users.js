var express = require('express');
var router = express.Router();
var User = require('../lib/User');

router.get('/:id', function(req, res, next) {
  var userId = parseInt(req.params.id, 10);
  User.getUserById(userId).then(function (user) {
    req.user = user;
    next();
  });
}, function (req, res, next) {
  User.getUserProjects(req.user).then(function (projects) {
    req.projects = projects;
    next();
  });
}, function (req, res, next) {
  req.user.projects = req.projects;
  res.json(req.user);
});

module.exports = router;
