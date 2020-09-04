"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _effects = require("redux-saga/effects");

var _itemReducer = require("../store/ducks/itemReducer");

var _item = require("../crud/item.crud");

var _index = require("../constant/index");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(featchItem),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(uploadItem),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(itemAction);

function featchItem() {
  var result, error;
  return regeneratorRuntime.wrap(function featchItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_item.getdata);

        case 3:
          result = _context.sent;
          console.log(result);
          _context.next = 7;
          return (0, _effects.put)(_itemReducer.itemActions.loadingsuccess(result.data));

        case 7:
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          error = _context.t0.response ? _context.t0.response.data.msg : _context.t0.stack;
          _context.next = 14;
          return (0, _effects.put)(_itemReducer.itemActions.error(error));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function uploadItem(payload) {
  var city, price, description, quantity, image, result, error;
  return regeneratorRuntime.wrap(function uploadItem$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          city = payload.city, price = payload.price, description = payload.description, quantity = payload.quantity, image = payload.image;
          console.log(payload);
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _effects.call)(_item.addItem, {
            city: city,
            price: price,
            description: description,
            quantity: quantity,
            image: image
          });

        case 5:
          result = _context2.sent;
          console.log(result);
          _context2.next = 9;
          return (0, _effects.put)(_itemReducer.itemActions.uploaditemsuccess(result.data));

        case 9:
          _context2.next = 17;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          error = _context2.t0.response ? _context2.t0.response.data.msg : _context2.t0.stack;
          _context2.next = 16;
          return (0, _effects.put)(_itemReducer.itemActions.error(error));

        case 16:
          console.log(error);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[2, 11]]);
}

function itemAction() {
  return regeneratorRuntime.wrap(function itemAction$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)(_index.itemActionTypes.loadingitem, featchItem);

        case 2:
          _context3.next = 4;
          return (0, _effects.takeEvery)(_index.itemActionTypes.uploadItem, uploadItem);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

var _default = itemAction;
exports["default"] = _default;