"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootSaga = rootSaga;
exports.rootReducer = void 0;

var _effects = require("redux-saga/effects");

var _redux = require("redux");

var _authReducer = require("./ducks/authReducer");

var _loadingReducer = require("./ducks/loadingReducer");

var _errorReducer = require("./ducks/errorReducer");

var _layoutReducer = _interopRequireDefault(require("./ducks/layoutReducer"));

var _authAction = _interopRequireDefault(require("../sagas/authAction"));

var _crawler = _interopRequireDefault(require("../sagas/crawler.Action"));

var _crawlerReducer = _interopRequireDefault(require("./ducks/crawlerReducer"));

var _metronic = require("../../_metronic");

var _itemReducer = require("./ducks/itemReducer");

var _item = _interopRequireDefault(require("../sagas/item.Action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

var rootReducer = (0, _redux.combineReducers)({
  authReducer: _authReducer.authReducer,
  loadingReducer: _loadingReducer.loadingReducer,
  errorReducer: _errorReducer.errorReducer,
  itemReducer: _itemReducer.itemReducer,
  crawlerReducer: _crawlerReducer["default"],
  i18n: _metronic.metronic.i18n.reducer,
  builder: _metronic.metronic.builder.reducer,
  layoutReducer: _layoutReducer["default"]
});
exports.rootReducer = rootReducer;

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)([(0, _authAction["default"])(), (0, _crawler["default"])(), (0, _item["default"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}