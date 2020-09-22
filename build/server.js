"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var port = 8000;

_app["default"].listen(port, function () {
  console.log("Server started on port ".concat(port));
});