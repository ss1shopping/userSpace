"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _effects = require("redux-saga/effects");

var _auth = require("../crud/auth.crud");

var _utils = require("../../_metronic/utils/utils");

var _authReducer = require("../store/ducks/authReducer");

var _index = require("../constant/index");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchLogin),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchRegister),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchactiveAccount),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchRefreshToken),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(authSagas);

function fetchLogin(_ref) {
  var payload, email, password, setSubmitting, history, result, error;
  return regeneratorRuntime.wrap(function fetchLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          payload = _ref.payload;
          email = payload.email, password = payload.password, setSubmitting = payload.setSubmitting, history = payload.history;
          _context.prev = 2;
          _context.next = 5;
          return (0, _effects.call)(_auth.login, {
            email: email,
            password: password
          });

        case 5:
          result = _context.sent;
          _context.next = 8;
          return (0, _effects.put)(_authReducer.authActions.loginSuccess(result.data.user));

        case 8:
          _context.next = 10;
          return setSubmitting(false);

        case 10:
          _context.next = 12;
          return (0, _utils.setStorage)('token', result.data.token, result.data.expToken);

        case 12:
          _context.next = 14;
          return (0, _utils.setStorage)("refreshtoken", result.data.refreshToken, result.data.expRefreshToken);

        case 14:
          _context.next = 16;
          return history.push("/profile");

        case 16:
          console.log(result);
          _context.next = 27;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);
          error = _context.t0.response ? _context.t0.response.data.msg : _context.t0.stack;
          _context.next = 25;
          return (0, _effects.put)(_authReducer.authActions.error(error));

        case 25:
          _context.next = 27;
          return setSubmitting(false);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 19]]);
}

function fetchRegister(_ref2) {
  var payload, newUser, setSubmitting, history, dataNewUser, error;
  return regeneratorRuntime.wrap(function fetchRegister$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = _ref2.payload;
          newUser = payload.newUser, setSubmitting = payload.setSubmitting, history = payload.history;
          _context2.prev = 2;
          console.log(newUser, history);
          _context2.next = 6;
          return (0, _effects.call)(_auth.register, newUser);

        case 6:
          dataNewUser = _context2.sent;
          console.log(dataNewUser);
          _context2.next = 10;
          return (0, _effects.put)(_authReducer.authActions.registerSuccess(dataNewUser.data));

        case 10:
          _context2.next = 12;
          return history.push("/confirm-account");

        case 12:
          _context2.next = 21;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](2);
          error = _context2.t0.response ? _context2.t0.response.data.msg : _context2.t0.stack;
          _context2.next = 19;
          return (0, _effects.put)(_authReducer.authActions.error(error));

        case 19:
          _context2.next = 21;
          return setSubmitting(false);

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[2, 14]]);
}

function fetchactiveAccount(_ref3) {
  var payload, token, response, err;
  return regeneratorRuntime.wrap(function fetchactiveAccount$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = _ref3.payload;
          token = payload.token;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _effects.call)(_auth.activeAccount, token);

        case 5:
          response = _context3.sent;
          _context3.next = 8;
          return (0, _effects.put)(_authReducer.authActions.activeAccountSuccess(response.data.msg));

        case 8:
          _context3.next = 15;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](2);
          err = _context3.t0.response ? _context3.t0.response.data.msg : _context3.t0.stack;
          _context3.next = 15;
          return (0, _effects.put)(_authReducer.authActions.activeAccountFailure(err));

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[2, 10]]);
}

function fetchRefreshToken(_ref4) {
  var payload, refreshToken, result, err;
  return regeneratorRuntime.wrap(function fetchRefreshToken$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = _ref4.payload;
          refreshToken = payload.refreshToken;
          _context4.prev = 2;
          _context4.next = 5;
          return (0, _effects.call)(_auth.GenNewToken, {
            refreshToken: refreshToken
          });

        case 5:
          result = _context4.sent;
          _context4.next = 8;
          return (0, _effects.put)(_authReducer.authActions.refreshTokenSuccessful(result));

        case 8:
          _context4.next = 10;
          return (0, _utils.setStorage)("token", result.data.access_token, result.data.expires_in);

        case 10:
          _context4.next = 17;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](2);
          err = _context4.t0.response ? _context4.t0.response.data.msg : _context4.t0.stack;
          _context4.next = 17;
          return (0, _effects.put)(_authReducer.authActions.error(_context4.t0));

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[2, 12]]);
}

function authSagas() {
  return regeneratorRuntime.wrap(function authSagas$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeEvery)(_index.authActionTypes.Login, fetchLogin);

        case 2:
          _context5.next = 4;
          return (0, _effects.takeEvery)(_index.authActionTypes.Register, fetchRegister);

        case 4:
          _context5.next = 6;
          return (0, _effects.takeEvery)(_index.authActionTypes.activeAccount, fetchactiveAccount);

        case 6:
          _context5.next = 8;
          return (0, _effects.takeEvery)(_index.authActionTypes.refreshToken, fetchRefreshToken);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

var _default = authSagas;
exports["default"] = _default;