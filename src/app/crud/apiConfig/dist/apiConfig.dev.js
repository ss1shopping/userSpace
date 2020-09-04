"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _utils = require("../../../_metronic/utils/utils");

var _apiConstants = require("../../constant/api/apiConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initApi = function initApi() {
  var setAccessHeader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var setRefreshToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (setAccessHeader) {
    _axios["default"].defaults.headers.common['Authorization'] = "Bearer ".concat((0, _utils.getStorage)("token"));
  }

  _axios["default"].defaults.baseURL = _apiConstants.API_URL;
  console.log("goij");
  return _axios["default"];
};

var _default = initApi;
exports["default"] = _default;