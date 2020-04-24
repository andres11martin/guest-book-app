webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MessageForm.js":
/*!***********************************!*\
  !*** ./components/MessageForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _UI_FormStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/FormStyle */ "./components/UI/FormStyle.js");
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/Button */ "./components/UI/Button.js");
/* harmony import */ var _UI_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Input */ "./components/UI/Input.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");


var _this = undefined,
    _jsxFileName = "/Users/andresmartin/Documents/Coding/guest-book-app/web/components/MessageForm.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var messageStyle = {
  height: "20vh",
  marginBottom: "10px",
  padding: "5px",
  width: "100%",
  wordBreak: "break-word",
  fontFamily: "San Francisco",
  fontSize: "16px"
};

var MessageForm = function MessageForm() {
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      name: "",
      city: "",
      message: ""
    },
    onSubmit: function onSubmit(data) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onSubmit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_lib_api__WEBPACK_IMPORTED_MODULE_6__["default"].post('/posts', data));

            case 2:
              response = _context.sent;
              console.log('response', response);
              formik.resetForm();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  });
  return __jsx(_UI_FormStyle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSubmit: formik.handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Leave your message!"), __jsx("label", {
    "for": "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Name:"), __jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    name: "name",
    placeholder: "Ana, Pedro, Juan...",
    value: formik.values.name,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Your city:"), __jsx(_UI_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    name: "city",
    placeholder: "Montevideo, Dublin...",
    value: formik.values.city,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), __jsx("label", {
    "for": "message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Your message:"), __jsx("textarea", {
    style: messageStyle,
    type: "text",
    name: "message",
    placeholder: "Andr\xE9s, sos un capo...",
    value: formik.values.message,
    onChange: formik.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx(_UI_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "Submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Submit"));
};

/* harmony default export */ __webpack_exports__["default"] = (MessageForm);

/***/ })

})
//# sourceMappingURL=index.js.8403a91bb3f812114451.hot-update.js.map