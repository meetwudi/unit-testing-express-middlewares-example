var should = require('should');
var mocksHttp = require('node-mocks-http');
var usersMiddlewares = require('../routes/users').middlewares;

describe('Users endpoint', function () {
  describe('getUserById middleware', function () {
    it('should have users object attached to request object', function (done) {
      var request = mocksHttp.createRequest({
        params: { id: 1 }
      });
      var response = mocksHttp.createResponse();
      usersMiddlewares.getUserById(request, response, function (err) {
        if (err) done (err);
        should.exist(request.user);
        request.user.should.have.properties(['id', 'name', 'position']);
        done();
      });
    })
  });
});
