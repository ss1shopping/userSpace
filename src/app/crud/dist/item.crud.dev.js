"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getdata = getdata;
exports.addItem = addItem;
exports.addImage = addImage;
exports.deleteImageItem = deleteImageItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;

var _apiConstants = require("../constant/api/apiConstants");

var _apiConfig = _interopRequireDefault(require("./apiConfig/apiConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getdata() {
  return (0, _apiConfig["default"])(false).get(_apiConstants.API_URLS.GET_ITEM);
}

function addItem(data) {
  return (0, _apiConfig["default"])(true).post(_apiConstants.API_URLS.ADD_ITEM, data);
}

function addImage(data) {
  return (0, _apiConfig["default"])(false).post(_apiConstants.API_URLS.ADD_ITEM);
}

function deleteImageItem(data) {
  return (0, _apiConfig["default"])(false)["delete"](_apiConstants.API_URLS.DELETE_IMAGE_ITEM);
}

function updateItem(data) {
  return (0, _apiConfig["default"])(false).patch(_apiConstants.API_URLS.UPDATE_ITEM);
}

function deleteItem(data) {
  return (0, _apiConfig["default"])(false).post(_apiConstants.API_URLS.DELETE_ITEM);
}