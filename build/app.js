"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());
app.use((0, _bodyParser.json)());
var _default = app;
exports["default"] = _default;