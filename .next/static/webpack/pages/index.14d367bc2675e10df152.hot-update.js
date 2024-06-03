webpackHotUpdate_N_E("pages/index",{

/***/ "./components/faq.js":
/*!***************************!*\
  !*** ./components/faq.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_faq_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/faq-card */ "./components/faq-card.js");
/* harmony import */ var _data_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data/index */ "./data/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Jero Guzman\\Documents\\Proyectos\\abantu_landing\\components\\faq.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FAQ = function FAQ() {
  var sectionTitle = _data_index__WEBPACK_IMPORTED_MODULE_3__["FAQ_DATA"].sectionTitle,
      posts = _data_index__WEBPACK_IMPORTED_MODULE_3__["FAQ_DATA"].posts;
  return __jsx("section", {
    className: "faq-one",
    id: "preguntas-frecuentes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "block-title text-center",
    style: {
      paddingTop: "80px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("h3", {
    style: {
      marginTop: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, "Preguntas Frecuentes")), __jsx("div", {
    className: "accrodion-grp faq-accrodion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, posts.map(function (_ref, index) {
    var status = _ref.status,
        title = _ref.title,
        text = _ref.text;
    return __jsx(_components_faq_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "faq-posts-key-".concat(index),
      status: status,
      title: title,
      text: text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    });
  }))));
};

_c = FAQ;
/* harmony default export */ __webpack_exports__["default"] = (FAQ);

var _c;

$RefreshReg$(_c, "FAQ");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mYXEuanMiXSwibmFtZXMiOlsiRkFRIiwic2VjdGlvblRpdGxlIiwiRkFRX0RBVEEiLCJwb3N0cyIsInBhZGRpbmdUb3AiLCJtYXJnaW5Ub3AiLCJtYXAiLCJpbmRleCIsInN0YXR1cyIsInRpdGxlIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUEsTUFDUkMsWUFEUSxHQUNnQkMsb0RBRGhCLENBQ1JELFlBRFE7QUFBQSxNQUNNRSxLQUROLEdBQ2dCRCxvREFEaEIsQ0FDTUMsS0FETjtBQUVoQixTQUNFO0FBQVMsYUFBUyxFQUFDLFNBQW5CO0FBQTZCLE1BQUUsRUFBQyxzQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQXlDLFNBQUssRUFBRTtBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxnQkFBMEJDLEtBQTFCO0FBQUEsUUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsUUFBV0MsS0FBWCxRQUFXQSxLQUFYO0FBQUEsUUFBa0JDLElBQWxCLFFBQWtCQSxJQUFsQjtBQUFBLFdBQ1QsTUFBQyw0REFBRDtBQUNFLFNBQUcsMEJBQW1CSCxLQUFuQixDQURMO0FBRUUsWUFBTSxFQUFFQyxNQUZWO0FBR0UsV0FBSyxFQUFFQyxLQUhUO0FBSUUsVUFBSSxFQUFFQyxJQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUztBQUFBLEdBQVYsQ0FESCxDQUpGLENBREYsQ0FERjtBQW1CRCxDQXJCRDs7S0FBTVYsRztBQXVCU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTRkMzY3YmMyNjc1ZTEwZGYxNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgRmFxQ2FyZCBmcm9tIFwiQGNvbXBvbmVudHMvZmFxLWNhcmRcIjtcclxuaW1wb3J0IHsgRkFRX0RBVEEgfSBmcm9tIFwiQGRhdGEvaW5kZXhcIjtcclxuY29uc3QgRkFRID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2VjdGlvblRpdGxlLCBwb3N0cyB9ID0gRkFRX0RBVEE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZhcS1vbmVcIiBpZD1cInByZWd1bnRhcy1mcmVjdWVudGVzXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay10aXRsZSB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiODBweFwiIH19PlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+UHJlZ3VudGFzIEZyZWN1ZW50ZXM8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjcm9kaW9uLWdycCBmYXEtYWNjcm9kaW9uXCI+XHJcbiAgICAgICAgICB7cG9zdHMubWFwKCh7IHN0YXR1cywgdGl0bGUsIHRleHQgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEZhcUNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2BmYXEtcG9zdHMta2V5LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICBzdGF0dXM9e3N0YXR1c31cclxuICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRkFRO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9