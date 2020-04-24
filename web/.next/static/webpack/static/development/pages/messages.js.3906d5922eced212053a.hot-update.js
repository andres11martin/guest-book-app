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
    className: "jsx-3780053292",
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
      className: "jsx-3780053292",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }, message.name + " from " + message.city + " said:"), __jsx("p", {
      className: "jsx-3780053292",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, message.message), __jsx("p", {
      className: "jsx-3780053292" + " " + "date",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, message.createdAt.substring(8, 10), message.createdAt.substring(4, 8), message.createdAt.substring(0, 4), " / ", message.createdAt.substring(11, 16)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3780053292",
    __self: _this
  }, "h1.jsx-3780053292{text-align:center;}.date.jsx-3780053292{font-size:10px;text-align:right;}@media( min-width:800px){.date.jsx-3780053292{font-size:14px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXNtYXJ0aW4vRG9jdW1lbnRzL0NvZGluZy9ndWVzdC1ib29rLWFwcC93ZWIvcGFnZXMvbWVzc2FnZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJ3QixBQUdtQyxBQUdKLEFBTUssZUFMTixBQU1iLEdBVEosY0FJSiIsImZpbGUiOiIvVXNlcnMvYW5kcmVzbWFydGluL0RvY3VtZW50cy9Db2RpbmcvZ3Vlc3QtYm9vay1hcHAvd2ViL3BhZ2VzL21lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9HbG9iYWxcIlxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vbGliL2FwaVwiXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9NZXNzYWdlXCJcbmltcG9ydCBNZXNzYWdlc0NvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9NZXNzYWdlc0NvbnRhaW5lclwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0hlYWRlclwiXG5cbmNvbnN0IE1lc3NhZ2VzID0gKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8R2xvYmFsIHN0eWxlPXt7IGhlaWdodDogXCJhdXRvXCIgfX0+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8aDE+TWVzc2FnZXM8L2gxPlxuICAgICAgICAgICAgPE1lc3NhZ2VzQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAge3Byb3BzLm1lc3NhZ2VzLm1hcChtZXNzYWdlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlLm5hbWUgKyBcIiBmcm9tIFwiICsgbWVzc2FnZS5jaXR5ICsgXCIgc2FpZDpcIn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj57bWVzc2FnZS5jcmVhdGVkQXQuc3Vic3RyaW5nKDgsIDEwKX17bWVzc2FnZS5jcmVhdGVkQXQuc3Vic3RyaW5nKDQsIDgpfXttZXNzYWdlLmNyZWF0ZWRBdC5zdWJzdHJpbmcoMCwgNCl9IC8ge21lc3NhZ2UuY3JlYXRlZEF0LnN1YnN0cmluZygxMSwgMTYpfTwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01lc3NhZ2VzQ29udGFpbmVyPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEoIG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9HbG9iYWw+XG4gICAgKVxufVxuXG5NZXNzYWdlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL3Bvc3RzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2VzOiBkYXRhXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlcyJdfQ== */\n/*@ sourceURL=/Users/andresmartin/Documents/Coding/guest-book-app/web/pages/messages.js */"));
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
//# sourceMappingURL=messages.js.3906d5922eced212053a.hot-update.js.map