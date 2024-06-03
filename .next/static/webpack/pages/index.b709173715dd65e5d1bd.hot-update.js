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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWRlby5qcyJdLCJuYW1lcyI6WyJWaWRlbyIsInVzZVN0YXRlIiwiaXNPcGVuIiwib3BlbiIsInNldE9wZW4iLCJvcGVuTW9kYWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsIlZJREVPX0RBVEEiLCJpbWFnZSIsInZpZGVvSUQiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUM7QUFDL0JDLFVBQU0sRUFBRTtBQUR1QixHQUFELENBRGQ7QUFBQSxNQUNYQyxJQURXO0FBQUEsTUFDTEMsT0FESzs7QUFJbEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUgsV0FBTyxDQUFDO0FBQ05GLFlBQU0sRUFBRTtBQURGLEtBQUQsQ0FBUDtBQUdELEdBTEQ7O0FBSmtCLE1BVVZNLEtBVlUsR0FVZ0JDLHNEQVZoQixDQVVWRCxLQVZVO0FBQUEsTUFVSEUsS0FWRyxHQVVnQkQsc0RBVmhCLENBVUhDLEtBVkc7QUFBQSxNQVVJQyxPQVZKLEdBVWdCRixzREFWaEIsQ0FVSUUsT0FWSjtBQVdsQixTQUNFO0FBQVMsYUFBUyxFQUFDLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtILEtBQUwsQ0FESixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixTQUFLLEVBQUU7QUFBRUkscUJBQWUsZ0JBQVNGLEtBQVQ7QUFBakIsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxXQUFPLEVBQUVMLFNBQXJCO0FBQWdDLGFBQVMsRUFBQyw0QkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FKRixFQVNFLE1BQUMsd0RBQUQ7QUFDRSxXQUFPLEVBQUMsU0FEVjtBQUVFLFVBQU0sRUFBRUYsSUFBSSxDQUFDRCxNQUZmO0FBR0UsV0FBTyxFQUFFUyxPQUhYO0FBSUUsV0FBTyxFQUFFO0FBQUEsYUFBTVAsT0FBTyxDQUFDO0FBQUVGLGNBQU0sRUFBRTtBQUFWLE9BQUQsQ0FBYjtBQUFBLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREY7QUFrQkQsQ0E3QkQ7O0dBQU1GLEs7O0tBQUFBLEs7QUErQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3MDkxNzM3MTVkZDY1ZTVkMWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSBcInJlYWN0LW1vZGFsLXZpZGVvXCI7XHJcbmltcG9ydCB7IFZJREVPX0RBVEEgfSBmcm9tIFwiQGRhdGEvaW5kZXhcIjtcclxuXHJcbmNvbnN0IFZpZGVvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHtcclxuICAgIGlzT3BlbjogZmFsc2VcclxuICB9KTtcclxuICBjb25zdCBvcGVuTW9kYWwgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0T3Blbih7XHJcbiAgICAgIGlzT3BlbjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgdmlkZW9JRCB9ID0gVklERU9fREFUQTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlkZW8tb25lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tdGl0bGVcIj5cclxuICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCB9fT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e29wZW5Nb2RhbH0gY2xhc3NOYW1lPVwidmlkZW8tb25lX19idG4gdmlkZW8tcG9wdXBcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsYXlcIj48L2k+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsVmlkZW9cclxuICAgICAgICBjaGFubmVsPVwieW91dHViZVwiXHJcbiAgICAgICAgaXNPcGVuPXtvcGVuLmlzT3Blbn1cclxuICAgICAgICB2aWRlb0lkPXt2aWRlb0lEfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oeyBpc09wZW46IGZhbHNlIH0pfVxyXG4gICAgICAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==