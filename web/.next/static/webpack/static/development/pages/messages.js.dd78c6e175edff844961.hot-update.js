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


var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/guest-book-app/web/pages/messages.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Messages = function Messages(props) {
  return __jsx(_components_UI_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_UI_MessagesContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-3257379584",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Messages"), props.messages.map(function (message) {
    return __jsx(_components_UI_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: message.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "jsx-3257379584",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, message.name + " from " + message.city + " said:"), __jsx("p", {
      className: "jsx-3257379584",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, message.message), __jsx("p", {
      className: "jsx-3257379584" + " " + "date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, message.createdAt.substring(8, 10), message.createdAt.substring(4, 8), message.createdAt.substring(0, 4)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3257379584",
    __self: _this
  }, ".jsx-3257379584{font-size:12px;}@media( min-width:800px){.date.jsx-3257379584{text-align:right;font-size:14px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9ndWVzdC1ib29rLWFwcC93ZWIvcGFnZXMvbWVzc2FnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J3QixBQUU0QixBQUdVLGVBS3pCLEVBSnVCLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9ndWVzdC1ib29rLWFwcC93ZWIvcGFnZXMvbWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0dsb2JhbFwiXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9saWIvYXBpXCJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL01lc3NhZ2VcIlxuaW1wb3J0IE1lc3NhZ2VzQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL01lc3NhZ2VzQ29udGFpbmVyXCJcblxuY29uc3QgTWVzc2FnZXMgPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxHbG9iYWw+XG4gICAgICAgICAgICA8TWVzc2FnZXNDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2VzPC9oMT5cbiAgICAgICAgICAgICAgICB7cHJvcHMubWVzc2FnZXMubWFwKG1lc3NhZ2UgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lc3NhZ2UubmFtZSArIFwiIGZyb20gXCIgKyBtZXNzYWdlLmNpdHkgKyBcIiBzYWlkOlwifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPnttZXNzYWdlLmNyZWF0ZWRBdC5zdWJzdHJpbmcoOCwgMTApfXttZXNzYWdlLmNyZWF0ZWRBdC5zdWJzdHJpbmcoNCwgOCl9e21lc3NhZ2UuY3JlYXRlZEF0LnN1YnN0cmluZygwLCA0KX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9NZXNzYWdlc0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBAbWVkaWEoIG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9HbG9iYWw+XG4gICAgKVxufVxuXG5NZXNzYWdlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL3Bvc3RzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2VzOiBkYXRhXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlcyJdfQ== */\n/*@ sourceURL=/Users/andresmartin/Documents/Coding/guest-book-app/web/pages/messages.js */"));
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
//# sourceMappingURL=messages.js.dd78c6e175edff844961.hot-update.js.map