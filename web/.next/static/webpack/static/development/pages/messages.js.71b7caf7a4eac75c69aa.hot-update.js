webpackHotUpdate("static/development/pages/messages.js",{

/***/ "./pages/messages.js":
/*!***************************!*\
  !*** ./pages/messages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UI_Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UI/Global */ "./components/UI/Global.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _components_UI_Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/Message */ "./components/UI/Message.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UI/Container */ "./components/UI/Container.js");


var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/guest-book-app/web/pages/messages.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Messages = function Messages(props) {
  return __jsx(_components_UI_Global__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_UI_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Messages"), props.messages.map(function (message) {
    return __jsx(_components_UI_Message__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: message.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, message.name + " from " + message.city + " said:"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, message.message), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, message.createdAt.substring(8, 10), message.createdAt.substring(4, 8), message.createdAt.substring(0, 4)));
  })));
};

Messages.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_lib_api__WEBPACK_IMPORTED_MODULE_3__["default"].get('/posts'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            messages: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ })

})
//# sourceMappingURL=messages.js.71b7caf7a4eac75c69aa.hot-update.js.map