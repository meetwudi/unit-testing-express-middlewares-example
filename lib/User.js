var db = require('./db');
var Promise = require('bluebird');

/**
 * Get user by its id
 *
 * @param  {integer} id - User ID
 * @return {object} - User object
 */
function getUserById (userId) {
  return new Promise(function (resolve, reject) {
    db.findOne({ type: 'User', id: userId }, function (err, userDoc) {
      if (err) reject(err);
      if (!userDoc) reject(new Error('User not found'));
      resolve(userDoc);
    })
  });
}

module.exports = {
  getUserById: getUserById
}
