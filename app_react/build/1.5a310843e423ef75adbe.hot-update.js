webpackHotUpdate(1,{

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(94);\n\nvar _auth = __webpack_require__(80);\n\nvar auth = _interopRequireWildcard(_auth);\n\nvar _HomePage = __webpack_require__(625);\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _Logout = __webpack_require__(273);\n\nvar _Logout2 = _interopRequireDefault(_Logout);\n\nvar _Detail = __webpack_require__(626);\n\nvar _Detail2 = _interopRequireDefault(_Detail);\n\nvar _Main = __webpack_require__(624);\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nvar _NotFound = __webpack_require__(274);\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar requireAuth = function requireAuth(nextState, replace) {\n  if (!auth.isLoggedIn()) {\n    replace('/login');\n  }\n};\n\nexports.default = _react2.default.createElement(\n  _reactRouter.Route,\n  { path: '/app/', component: _Main2.default },\n  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),\n  _react2.default.createElement(_reactRouter.Route, { path: 'account', component: _Detail2.default }),\n  _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: _Logout2.default }),\n  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })\n);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcF9yZWFjdC9yb3V0ZXMuanM/ZmJhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIEluZGV4Um91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0ICogYXMgYXV0aCBmcm9tICcuL3V0aWxzL2F1dGgnO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vY29udGFpbmVycy9Ib21lUGFnZSc7XG5pbXBvcnQgTG9nb3V0IGZyb20gJy4vY29udGFpbmVycy9Mb2dvdXQnO1xuaW1wb3J0IERldGFpbCBmcm9tICcuL2NvbnRhaW5lcnMvRGV0YWlsJztcbmltcG9ydCBNYWluIGZyb20gJy4vY29udGFpbmVycy9NYWluJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbnRhaW5lcnMvTm90Rm91bmQnO1xuXG5jb25zdCByZXF1aXJlQXV0aCA9IChuZXh0U3RhdGUsIHJlcGxhY2UpID0+IHtcbiAgaWYgKCFhdXRoLmlzTG9nZ2VkSW4oKSkge1xuICAgIHJlcGxhY2UoJy9sb2dpbicpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdChcbiAgPFJvdXRlIHBhdGg9XCIvYXBwL1wiIGNvbXBvbmVudD17TWFpbn0+XG4gICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtIb21lUGFnZX0vPlxuICAgIDxSb3V0ZSBwYXRoPVwiYWNjb3VudFwiIGNvbXBvbmVudD17RGV0YWlsfS8+XG4gICAgPFJvdXRlIHBhdGg9XCJsb2dvdXRcIiBjb21wb25lbnQ9e0xvZ291dH0vPlxuICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm90Rm91bmR9Lz5cbiAgPC9Sb3V0ZT5cbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHBfcmVhY3Qvcm91dGVzLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})