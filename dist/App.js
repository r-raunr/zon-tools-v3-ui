"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
var _components = require("./components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "App-header"
  }, "Zon Tools"), /*#__PURE__*/_react.default.createElement(_components.Button, {
    name: "I am a button"
  }));
};
var _default = App;
exports.default = _default;
//# sourceMappingURL=App.js.map