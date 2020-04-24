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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_UI_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/Global */ "./components/UI/Global.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _components_UI_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UI/Message */ "./components/UI/Message.js");
/* harmony import */ var _components_UI_MessagesContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UI/MessagesContainer */ "./components/UI/MessagesContainer.js");
/* harmony import */ var _components_UI_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UI/Header */ "./components/UI/Header.js");


var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/guest-book-app/web/pages/messages.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Messages = function Messages(props) {
  return __jsx(_components_UI_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      height: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_components_UI_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "jsx-2253505126",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Messages"), __jsx(_components_UI_MessagesContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, props.messages.map(function (message) {
    return __jsx(_components_UI_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: message.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "jsx-2253505126",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }, message.name + " from " + message.city + " said:"), __jsx("p", {
      className: "jsx-2253505126",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, message.message), __jsx("p", {
      className: "jsx-2253505126" + " " + "date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, message.createdAt.substring(8, 10), message.createdAt.substring(4, 8), message.createdAt.substring(0, 4), " / ", message.createdAt.substring(11, 16)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2253505126",
    __self: _this
  }, "h1.jsx-2253505126{text-align:center;margin-top:4vh;}.date.jsx-2253505126{font-size:10px;text-align:right;}@media( min-width:800px){.date.jsx-2253505126{font-size:14px;}h1.jsx-2253505126{margin-top:1vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9ndWVzdC1ib29rLWFwcC93ZWIvcGFnZXMvbWVzc2FnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJ3QixBQUdtQyxBQUlKLEFBS0ssQUFHQSxlQVBOLEFBS2IsQUFHQSxHQVplLGNBS3ZCLENBSkkiLCJmaWxlIjoiL1VzZXJzL2FuZHJlc21hcnRpbi9Eb2N1bWVudHMvQ29kaW5nL2d1ZXN0LWJvb2stYXBwL3dlYi9wYWdlcy9tZXNzYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvR2xvYmFsXCJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvTWVzc2FnZVwiXG5pbXBvcnQgTWVzc2FnZXNDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvTWVzc2FnZXNDb250YWluZXJcIlxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9IZWFkZXJcIlxuXG5jb25zdCBNZXNzYWdlcyA9IChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdsb2JhbCBzdHlsZT17eyBoZWlnaHQ6IFwiYXV0b1wiIH19PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cbiAgICAgICAgICAgIDxNZXNzYWdlc0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIHtwcm9wcy5tZXNzYWdlcy5tYXAobWVzc2FnZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGtleT17bWVzc2FnZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZS5uYW1lICsgXCIgZnJvbSBcIiArIG1lc3NhZ2UuY2l0eSArIFwiIHNhaWQ6XCJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lc3NhZ2UubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+e21lc3NhZ2UuY3JlYXRlZEF0LnN1YnN0cmluZyg4LCAxMCl9e21lc3NhZ2UuY3JlYXRlZEF0LnN1YnN0cmluZyg0LCA4KX17bWVzc2FnZS5jcmVhdGVkQXQuc3Vic3RyaW5nKDAsIDQpfSAvIHttZXNzYWdlLmNyZWF0ZWRBdC5zdWJzdHJpbmcoMTEsIDE2KX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9NZXNzYWdlc0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSggbWluLXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAuZGF0ZSB7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxdmg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0dsb2JhbD5cbiAgICApXG59XG5cbk1lc3NhZ2VzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvcG9zdHMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZXM6IGRhdGFcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzIl19 */\n/*@ sourceURL=/Users/andresmartin/Documents/Coding/guest-book-app/web/pages/messages.js */"));
};

Messages.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_lib_api__WEBPACK_IMPORTED_MODULE_4__["default"].get('/posts'));

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
//# sourceMappingURL=messages.js.de6813a9cf7b7b3d75c0.hot-update.js.map