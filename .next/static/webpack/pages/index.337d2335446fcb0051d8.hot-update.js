webpackHotUpdate_N_E("pages/index",{

/***/ "./components/video.js":
/*!*****************************!*\
  !*** ./components/video.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data/index */ "./data/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Jero Guzman\\Documents\\Proyectos\\abantu_landing\\components\\video.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Video = function Video() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isOpen: false
  }),
      open = _useState[0],
      setOpen = _useState[1];

  var openModal = function openModal(e) {
    e.preventDefault();
    setOpen({
      isOpen: true
    });
  };

  var title = _data_index__WEBPACK_IMPORTED_MODULE_2__["VIDEO_DATA"].title,
      image = _data_index__WEBPACK_IMPORTED_MODULE_2__["VIDEO_DATA"].image,
      videoID = _data_index__WEBPACK_IMPORTED_MODULE_2__["VIDEO_DATA"].videoID;
  return __jsx("section", {
    className: "video-one",
    id: "video",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "video-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, title)), __jsx("div", {
    className: "container",
    style: {
      backgroundImage: "url(".concat(image, ")")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    onClick: openModal,
    className: "video-one__btn video-popup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-play",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }))), __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_1___default.a, {
    channel: "youtube",
    isOpen: open.isOpen,
    videoId: videoID,
    onClose: function onClose() {
      return setOpen({
        isOpen: false
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
};

_s(Video, "J8r/wwavoapfGc8Fb0zY3Ozx4tA=");

_c = Video;
/* harmony default export */ __webpack_exports__["default"] = (Video);

var _c;

$RefreshReg$(_c, "Video");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWRlby5qcyJdLCJuYW1lcyI6WyJWaWRlbyIsInVzZVN0YXRlIiwiaXNPcGVuIiwib3BlbiIsInNldE9wZW4iLCJvcGVuTW9kYWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsIlZJREVPX0RBVEEiLCJpbWFnZSIsInZpZGVvSUQiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUM7QUFDL0JDLFVBQU0sRUFBRTtBQUR1QixHQUFELENBRGQ7QUFBQSxNQUNYQyxJQURXO0FBQUEsTUFDTEMsT0FESzs7QUFJbEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUgsV0FBTyxDQUFDO0FBQ05GLFlBQU0sRUFBRTtBQURGLEtBQUQsQ0FBUDtBQUdELEdBTEQ7O0FBSmtCLE1BVVZNLEtBVlUsR0FVZ0JDLHNEQVZoQixDQVVWRCxLQVZVO0FBQUEsTUFVSEUsS0FWRyxHQVVnQkQsc0RBVmhCLENBVUhDLEtBVkc7QUFBQSxNQVVJQyxPQVZKLEdBVWdCRixzREFWaEIsQ0FVSUUsT0FWSjtBQVdsQixTQUNFO0FBQVMsYUFBUyxFQUFDLFdBQW5CO0FBQStCLE1BQUUsRUFBQyxPQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSCxLQUFMLENBREosQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsU0FBSyxFQUFFO0FBQUVJLHFCQUFlLGdCQUFTRixLQUFUO0FBQWpCLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksV0FBTyxFQUFFTCxTQUFyQjtBQUFnQyxhQUFTLEVBQUMsNEJBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBSkYsRUFTRSxNQUFDLHdEQUFEO0FBQ0UsV0FBTyxFQUFDLFNBRFY7QUFFRSxVQUFNLEVBQUVGLElBQUksQ0FBQ0QsTUFGZjtBQUdFLFdBQU8sRUFBRVMsT0FIWDtBQUlFLFdBQU8sRUFBRTtBQUFBLGFBQU1QLE9BQU8sQ0FBQztBQUFFRixjQUFNLEVBQUU7QUFBVixPQUFELENBQWI7QUFBQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGO0FBa0JELENBN0JEOztHQUFNRixLOztLQUFBQSxLO0FBK0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMzdkMjMzNTQ0NmZjYjAwNTFkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gXCJyZWFjdC1tb2RhbC12aWRlb1wiO1xyXG5pbXBvcnQgeyBWSURFT19EQVRBIH0gZnJvbSBcIkBkYXRhL2luZGV4XCI7XHJcblxyXG5jb25zdCBWaWRlbyA9ICgpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpc09wZW46IGZhbHNlXHJcbiAgfSk7XHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldE9wZW4oe1xyXG4gICAgICBpc09wZW46IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIHZpZGVvSUQgfSA9IFZJREVPX0RBVEE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpZGVvLW9uZVwiIGlkPVwidmlkZW9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby10aXRsZVwiPlxyXG4gICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgIH19PlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17b3Blbk1vZGFsfSBjbGFzc05hbWU9XCJ2aWRlby1vbmVfX2J0biB2aWRlby1wb3B1cFwiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGxheVwiPjwvaT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TW9kYWxWaWRlb1xyXG4gICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcclxuICAgICAgICBpc09wZW49e29wZW4uaXNPcGVufVxyXG4gICAgICAgIHZpZGVvSWQ9e3ZpZGVvSUR9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3Blbih7IGlzT3BlbjogZmFsc2UgfSl9XHJcbiAgICAgIC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9