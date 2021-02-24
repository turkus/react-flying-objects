"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var objectConfigShape = _propTypes["default"].shape({
  fromValue: _propTypes["default"].number.isRequired,
  toValue: _propTypes["default"].number.isRequired,
  duration: _propTypes["default"].number.isRequired,
  // Easing
  delay: _propTypes["default"].number.isRequired
});

var _default = {
  objectConfigShape: objectConfigShape
};
exports["default"] = _default;