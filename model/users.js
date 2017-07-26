var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');

module.exports = function(sequelize, Sequelize) {

	var tableName = "users";

    var attributes = {
			id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
			firstName: { type: Sequelize.STRING,notEmpty: true},
			lastName: { type: Sequelize.STRING,notEmpty: true},
			username: {type:Sequelize.TEXT},
			hash: {type: Sequelize.TEXT, allowNull: false}
	};
    

  var instanceMethods = {};
	var classMethods = {};

	classMethods.authenticate = authenticate;
	classMethods.getByUsername = getByUsername;
	classMethods.createUser = createUser;

	function authenticate(username, password) {
			var deferred = Q.defer();

			this.findOne({ 
				where: {
					username: username }
				}).then(function (user) {
					if (user && bcrypt.compareSync(password, user.hash)) {
							// authentication successful
							deferred.resolve(jwt.sign({ sub: user._id }, config.secret));
					} else {
							// authentication failed
							deferred.resolve();
					}
				}).catch(function (err) {
					deferred.reject(err.name + ': ' + err.message);
				});
				return deferred.promise;
		}

		function getByUsername(username) {
				var deferred = Q.defer();
				
				this.findOne({
					where: {
						username: username
					}
				}).then(function (user) {
						if (user) {
									// return user (without hashed password)
									deferred.resolve(_.omit(user, 'hash'));
							} else {
									// user not found
									deferred.resolve();
							}
					}).catch( function (err) {
						deferred.reject(err.name + ': ' + err.message);
					});

				return deferred.promise;
		}

		function createUser(userParam) {
				var deferred = Q.defer();

				// validation
				this.findOne(
						{ 
							where: {
								username: userParam.username 
							}
						}).then(function (user) {
								if (user) {
										// username already exists
										deferred.reject('Username "' + userParam.username + '" is already taken');
								} else {
										var user = _.omit(userParam, 'password');
										// add hashed password to user object
										user.hash = bcrypt.hashSync(userParam.password, 10);
										return global.db.users.create(user);
								}
						}).then(function () {
								deferred.resolve();
						}).catch(function (err) {
							console.log(err);
							deferred.reject(err.name + ': ' + err.message);
						});

				return deferred.promise;
		}

	return sequelize.define(tableName, attributes, {instanceMethods: instanceMethods, classMethods: classMethods});

}