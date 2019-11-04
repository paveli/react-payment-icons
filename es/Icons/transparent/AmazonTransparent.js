(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.AmazonTransparent = mod.exports;
  }
})(this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var SvgAmazonTransparent = function SvgAmazonTransparent(props) {
    return _react["default"].createElement("svg", _extends({
      fill: "#221f1f",
      viewBox: "0 0 603 182"
    }, props), _react["default"].createElement("path", {
      d: "M374.006 142.184c-35 25.797-85.729 39.561-129.406 39.561-61.242 0-116.376-22.651-158.087-60.325-3.278-2.962-.341-7 3.591-4.693 45.015 26.191 100.673 41.947 158.166 41.947 38.775 0 81.43-8.022 120.65-24.67 5.925-2.516 10.88 3.88 5.086 8.18",
      fill: "#f90"
    }), _react["default"].createElement("path", {
      d: "M388.557 125.536c-4.457-5.715-29.573-2.7-40.846-1.363-3.434.42-3.959-2.57-.865-4.719 20.003-14.078 52.827-10.015 56.654-5.296 3.828 4.745-.996 37.648-19.793 53.352-2.884 2.411-5.637 1.127-4.352-2.072 4.22-10.539 13.685-34.16 9.202-39.902",
      fill: "#f90"
    }), _react["default"].createElement("path", {
      d: "M348.497 20.066V6.381c0-2.071 1.573-3.46 3.461-3.46h61.269c1.966 0 3.54 1.415 3.54 3.46V18.1c-.027 1.966-1.679 4.535-4.615 8.599l-31.749 45.329c11.798-.289 24.25 1.468 34.947 7.498 2.412 1.363 3.068 3.356 3.251 5.322V99.45c0 1.992-2.202 4.325-4.509 3.12-18.85-9.884-43.887-10.96-64.73.104-2.123 1.154-4.351-1.153-4.351-3.146V85.661c0-2.229.026-6.03 2.254-9.412L384.047 23.5h-32.01c-1.967 0-3.54-1.39-3.54-3.434m-223.498 85.388h-18.64c-1.783-.13-3.199-1.468-3.33-3.172V6.617c0-1.914 1.6-3.435 3.592-3.435h17.382c1.809.079 3.25 1.468 3.382 3.199v12.505h.34c4.536-12.086 13.056-17.722 24.54-17.722 11.666 0 18.954 5.636 24.198 17.722 4.509-12.086 14.76-17.722 25.744-17.722 7.813 0 16.36 3.224 21.577 10.46 5.899 8.049 4.693 19.741 4.693 29.992l-.026 60.378c0 1.913-1.6 3.46-3.592 3.46h-18.614c-1.862-.13-3.356-1.625-3.356-3.46V51.29c0-4.037.367-14.104-.524-17.932-1.39-6.423-5.558-8.232-10.959-8.232-4.51 0-9.228 3.015-11.142 7.839-1.914 4.824-1.73 12.898-1.73 18.325v50.704c0 1.913-1.6 3.46-3.592 3.46h-18.614c-1.888-.13-3.356-1.625-3.356-3.46l-.026-50.704c0-10.67 1.757-26.374-11.483-26.374-13.397 0-12.872 15.31-12.872 26.374v50.704c0 1.913-1.6 3.46-3.592 3.46M469.514 1.164c27.66 0 42.629 23.752 42.629 53.954 0 29.18-16.543 52.329-42.629 52.329-27.16 0-41.947-23.753-41.947-53.352 0-29.782 14.97-52.931 41.947-52.931m.158 19.531c-13.738 0-14.603 18.719-14.603 30.386 0 11.692-.184 36.65 14.445 36.65 14.446 0 15.128-20.134 15.128-32.403 0-8.075-.341-17.723-2.78-25.378-2.097-6.66-6.265-9.255-12.19-9.255m78.336 84.759h-18.562c-1.861-.13-3.356-1.625-3.356-3.46l-.026-95.692c.157-1.756 1.704-3.12 3.592-3.12h17.277c1.625.079 2.962 1.18 3.33 2.674v14.63h.34c5.217-13.083 12.532-19.322 25.404-19.322 8.363 0 16.517 3.015 21.76 11.273 4.877 7.655 4.877 20.528 4.877 29.782v60.22c-.21 1.678-1.757 3.015-3.592 3.015h-18.693c-1.704-.13-3.12-1.39-3.303-3.015V50.478c0-10.461 1.206-25.772-11.667-25.772-4.535 0-8.704 3.042-10.775 7.656-2.621 5.846-2.962 11.666-2.962 18.116v51.516c-.026 1.913-1.652 3.46-3.644 3.46"
    }), _react["default"].createElement("use", {
      xlinkHref: "#amazon_transparent_svg__a",
      transform: "translate(244.367)"
    }), _react["default"].createElement("path", {
      d: "M55.288 59.758v-4.037c-13.475 0-27.71 2.884-27.71 18.771 0 8.049 4.168 13.502 11.325 13.502 5.243 0 9.936-3.225 12.898-8.468 3.67-6.45 3.487-12.506 3.487-19.768m18.798 45.434c-1.232 1.101-3.015 1.18-4.405.446-6.187-5.139-7.288-7.524-10.696-12.427-10.225 10.434-17.46 13.554-30.726 13.554-15.678 0-27.895-9.674-27.895-29.048 0-15.127 8.206-25.43 19.872-30.464 10.12-4.457 24.25-5.244 35.052-6.476v-2.412c0-4.43.341-9.674-2.254-13.501-2.281-3.435-6.633-4.85-10.46-4.85-7.106 0-13.45 3.644-14.997 11.194-.315 1.678-1.547 3.33-3.225 3.408l-18.09-1.94c-1.52-.34-3.198-1.573-2.778-3.906C7.652 6.853 27.446.246 45.169.246c9.07 0 20.92 2.412 28.078 9.28 9.07 8.469 8.206 19.768 8.206 32.064v29.048c0 8.73 3.618 12.558 7.026 17.277 1.206 1.678 1.468 3.697-.053 4.955-3.801 3.172-10.565 9.071-14.288 12.375l-.052-.053",
      id: "amazon_transparent_svg__a"
    }));
  };

  var _default = SvgAmazonTransparent;
  _exports["default"] = _default;
});