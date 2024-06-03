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
    style: {
      paddingTop: "-60px"
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWRlby5qcyJdLCJuYW1lcyI6WyJWaWRlbyIsInVzZVN0YXRlIiwiaXNPcGVuIiwib3BlbiIsInNldE9wZW4iLCJvcGVuTW9kYWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsIlZJREVPX0RBVEEiLCJpbWFnZSIsInZpZGVvSUQiLCJwYWRkaW5nVG9wIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDO0FBQy9CQyxVQUFNLEVBQUU7QUFEdUIsR0FBRCxDQURkO0FBQUEsTUFDWEMsSUFEVztBQUFBLE1BQ0xDLE9BREs7O0FBSWxCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FILFdBQU8sQ0FBQztBQUNORixZQUFNLEVBQUU7QUFERixLQUFELENBQVA7QUFHRCxHQUxEOztBQUprQixNQVVWTSxLQVZVLEdBVWdCQyxzREFWaEIsQ0FVVkQsS0FWVTtBQUFBLE1BVUhFLEtBVkcsR0FVZ0JELHNEQVZoQixDQVVIQyxLQVZHO0FBQUEsTUFVSUMsT0FWSixHQVVnQkYsc0RBVmhCLENBVUlFLE9BVko7QUFXbEIsU0FDRTtBQUFTLGFBQVMsRUFBQyxXQUFuQjtBQUErQixNQUFFLEVBQUMsT0FBbEM7QUFBMEMsU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUU7QUFBYixLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixLQUFMLENBREosQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsU0FBSyxFQUFFO0FBQUVLLHFCQUFlLGdCQUFTSCxLQUFUO0FBQWpCLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksV0FBTyxFQUFFTCxTQUFyQjtBQUFnQyxhQUFTLEVBQUMsNEJBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBSkYsRUFTRSxNQUFDLHdEQUFEO0FBQ0UsV0FBTyxFQUFDLFNBRFY7QUFFRSxVQUFNLEVBQUVGLElBQUksQ0FBQ0QsTUFGZjtBQUdFLFdBQU8sRUFBRVMsT0FIWDtBQUlFLFdBQU8sRUFBRTtBQUFBLGFBQU1QLE9BQU8sQ0FBQztBQUFFRixjQUFNLEVBQUU7QUFBVixPQUFELENBQWI7QUFBQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGO0FBa0JELENBN0JEOztHQUFNRixLOztLQUFBQSxLO0FBK0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMmUwNWJiNjViNDBjYzQwZjBiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gXCJyZWFjdC1tb2RhbC12aWRlb1wiO1xyXG5pbXBvcnQgeyBWSURFT19EQVRBIH0gZnJvbSBcIkBkYXRhL2luZGV4XCI7XHJcblxyXG5jb25zdCBWaWRlbyA9ICgpID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpc09wZW46IGZhbHNlXHJcbiAgfSk7XHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldE9wZW4oe1xyXG4gICAgICBpc09wZW46IHRydWVcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIHZpZGVvSUQgfSA9IFZJREVPX0RBVEE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpZGVvLW9uZVwiIGlkPVwidmlkZW9cIiBzdHlsZT17e3BhZGRpbmdUb3A6IFwiLTYwcHhcIn19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLXRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAgfX0+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtvcGVuTW9kYWx9IGNsYXNzTmFtZT1cInZpZGVvLW9uZV9fYnRuIHZpZGVvLXBvcHVwXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbGF5XCI+PC9pPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFZpZGVvXHJcbiAgICAgICAgY2hhbm5lbD1cInlvdXR1YmVcIlxyXG4gICAgICAgIGlzT3Blbj17b3Blbi5pc09wZW59XHJcbiAgICAgICAgdmlkZW9JZD17dmlkZW9JRH1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuKHsgaXNPcGVuOiBmYWxzZSB9KX1cclxuICAgICAgLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=