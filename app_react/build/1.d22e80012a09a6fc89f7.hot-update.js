webpackHotUpdate(1,{

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.logout = exports.login = exports.isLoggedIn = exports.getUser = exports.getToken = exports.setUser = exports.setToken = undefined;\n\nvar _promise = __webpack_require__(466);\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nvar _api = __webpack_require__(278);\n\nvar api = _interopRequireWildcard(_api);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar setToken = exports.setToken = function setToken(token) {\n  localStorage.setItem('token', token);\n};\n\nvar setUser = exports.setUser = function setUser(user) {\n  localStorage.setItem('user', JSON.stringify(user));\n};\n\nvar getToken = exports.getToken = function getToken() {\n  return localStorage.getItem('token');\n};\n\nvar getUser = exports.getUser = function getUser() {\n  var user = localStorage.getItem('user');\n  return JSON.parse(user);\n};\n\nvar isLoggedIn = exports.isLoggedIn = function isLoggedIn() {\n  return getToken();\n};\n\nvar login = exports.login = function login() {\n  return new _promise2.default(function (resolve, reject) {\n\n    return api.get('/app/token').then(function (response) {\n      console.log('here');\n      if (response && response.data) {\n        setToken(response.data);\n        console.log('here1');\n        return api.get('/app/account');\n      } else {\n        reject('Not Logged In.');\n      }\n    }).then(function (response) {\n      if (response && response.data) {\n        setUser(response.data);\n        resolve(response.data);\n      } else {\n        reject('User detail Error.');\n      }\n    }).catch(function (error) {\n      reject(error);\n    });\n  });\n};\n\nvar logout = exports.logout = function logout() {\n  return new _promise2.default(function (resolve, reject) {\n    try {\n      localStorage.removeItem('token');\n      localStorage.removeItem('user');\n      resolve(true);\n    } catch (error) {\n      reject(error);\n    }\n  });\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwX3JlYWN0L3V0aWxzL2F1dGguanM/MTMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvbWlzZSBmcm9tICdwcm9taXNlJztcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSc7XG5cbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbikgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0VXNlciA9ICh1c2VyKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCkgPT4ge1xuICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgcmV0dXJuIEpTT04ucGFyc2UodXNlcik7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBpc0xvZ2dlZEluID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0VG9rZW4oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBcbiAgICByZXR1cm4gYXBpLmdldCgnL2FwcC90b2tlbicpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnaGVyZScpO1xuICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlMScpO1xuICAgICAgICByZXR1cm4gYXBpLmdldCgnL2FwcC9hY2NvdW50Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoJ05vdCBMb2dnZWQgSW4uJyk7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5kYXRhKSB7XG4gICAgICAgIHNldFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoJ1VzZXIgZGV0YWlsIEVycm9yLicpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwX3JlYWN0L3V0aWxzL2F1dGguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})