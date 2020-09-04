"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemActions = exports.itemReducer = void 0;

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _index = require("../../constant/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialAuthState = {
  isPending: false,
  item: undefined,
  error: null,
  notice: null
};
var itemReducer = (0, _reduxPersist.persistReducer)({
  storage: _storage["default"],
  key: 'item',
  whitelist: []
}, function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialAuthState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _index.itemActionTypes.loadingitem:
      return _objectSpread({}, state, {
        isPending: !state.isPending
      });

    case _index.itemActionTypes.loadingItemSuccess:
      return _objectSpread({}, state, {
        isPending: !state.isPending,
        item: action.payload
      });

    case _index.itemActionTypes.uploadItem:
      return _objectSpread({}, state, {
        isPending: !state.isPending
      });

    case _index.itemActionTypes.uploadItemSuccess:
      return _objectSpread({}, state, {
        isPending: !state.isPending,
        notice: action.payload
      });

    case _index.itemActionTypes.Error:
      return _objectSpread({}, state, {
        error: action.payload,
        isPending: false
      });

    case _index.itemActionTypes.deleleerror:
      return _objectSpread({}, state, {
        error: null
      });

    default:
      return state;
  }
});
exports.itemReducer = itemReducer;
var itemActions = {
  loadingitem: function loadingitem() {
    return {
      type: _index.itemActionTypes.loadingitem
    };
  },
  loadingsuccess: function loadingsuccess(payload) {
    return {
      type: _index.itemActionTypes.loadingItemSuccess,
      payload: payload
    };
  },
  loadingfailure: function loadingfailure(payload) {
    return {
      type: _index.itemActionTypes.error,
      payload: payload
    };
  },
  error: function error(payload) {
    return {
      type: _index.itemActionTypes.Error,
      payload: payload
    };
  },
  uploaditem: function uploaditem(city, price, description, quantity, image) {
    return {
      type: _index.itemActionTypes.uploadItem,
      payload: {
        city: city,
        price: price,
        description: description,
        quantity: quantity,
        image: image
      }
    };
  },
  uploaditemsuccess: function uploaditemsuccess(payload) {
    return {
      type: _index.itemActionTypes.uploadItemSuccess,
      payload: payload
    };
  }
};
exports.itemActions = itemActions;