"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNativeWeb = require("react-native-web");

var _proptypes = _interopRequireDefault(require("proptypes"));

var _FlyingObject = _interopRequireDefault(require("components/FlyingObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Fly = function Fly(_ref) {
  var flyingObjects = _ref.flyingObjects,
      objectConfig = _ref.objectConfig,
      objectToFly = _ref.objectToFly,
      setFlyingObjects = _ref.setFlyingObjects;
  var counter = (0, _react.useRef)(0);
  var objectKeys = (0, _react.useRef)(new Set()).current;
  (0, _react.useEffect)(function () {
    if (!objectToFly) return;
    counter.current += 1;
    var key = counter.current;
    objectKeys.add(key);

    var flyingObject = /*#__PURE__*/_react["default"].createElement(_FlyingObject["default"], {
      key: key,
      objectToFly: objectToFly,
      onAnimationEnd: function onAnimationEnd() {
        return objectKeys["delete"](key);
      },
      objectConfig: objectConfig
    });

    setFlyingObjects(function (prev) {
      return [].concat(_toConsumableArray(prev), [flyingObject]).filter(function (object) {
        return objectKeys.has(parseInt(object.key, 10));
      });
    });
  }, [counter, objectConfig, objectKeys, objectToFly, setFlyingObjects]);
  return /*#__PURE__*/_react["default"].createElement(_reactNativeWeb.View, {
    style: {
      position: 'relative'
    }
  }, flyingObjects);
};

Fly.propTypes = {
  flyingObjects: _propTypes["default"].arrayOf(_propTypes["default"].node).isRequired,
  objectToFly: _propTypes["default"].node.isRequired,
  objectConfig: _proptypes["default"].objectConfigShape.isRequired,
  setFlyingObjects: _propTypes["default"].func.isRequired
};
var _default = Fly;
exports["default"] = _default;