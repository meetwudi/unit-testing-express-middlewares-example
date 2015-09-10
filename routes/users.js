var express = require('express');
var router = express.Router();
var User = require('../lib/User');

var middlewares = {
  getUserById: function (req, res, next) {
    var userId = parseInt(req.params.id, 10);
    User.getUserById(userId).then(function (user) {
      req.user = user;
      next();
    });
  },

  getProjectsForUser: function (req, res, next) {
    User.getUserProjects(req.user).then(function (projects) {
      req.projects = projects;
      next();
    });
  },

  responseUserWithProjects: function (req, res, next) {
    req.user.projects = req.projects;
    res.json(req.user);
  }
}

router.get('/:id',
  middlewares.getUserById,
  middlewares.getProjectsForUser,
  middlewares.responseUserWithProjects
);

module.exports = {
  router: router,
  middlewares: middlewares
}
