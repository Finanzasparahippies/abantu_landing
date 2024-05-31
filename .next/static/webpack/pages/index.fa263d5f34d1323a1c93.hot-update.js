webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _images_abanti_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @images/abanti.png */ "./assets/images/abanti.png");
/* harmony import */ var _images_abanti_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_abanti_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nav_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-links */ "./components/header/nav-links.js");
/* harmony import */ var _nav_links2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-links2 */ "./components/header/nav-links2.js");
/* harmony import */ var _images_abanti2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @images/abanti2.png */ "./assets/images/abanti2.png");
/* harmony import */ var _images_abanti2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_abanti2_png__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Jero Guzman\\Documents\\Proyectos\\abantu_landing\\components\\header\\header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Header = function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      sticky = _useState[0],
      setSticky = _useState[1];

  var handleScroll = function handleScroll() {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return function () {
      mobileMenu();
      window.removeEventListener("scroll", handleScroll);
    };
  });

  var mobileMenu = function mobileMenu() {
    document.querySelectorAll(".side-menu__toggler2").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle("active");
        e.preventDefault();
      });
    }); //Close Mobile Menu

    var sideMenuCloser = document.querySelectorAll(".side-menu__close-btn, .side-menu__block-overlay");
    sideMenuCloser.forEach(function (sideMenuCloserBtn) {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    className: "site-header-one stricky site-header-one__fixed-top ",
    id: "inicio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "site-header-one__logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _images_abanti_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    width: "180",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  })), __jsx("span", {
    className: "side-menu__toggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fa fa-bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "main-nav__main-navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_nav_links__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "main-nav__right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://comunidad.abantu.mx",
    className: "thm-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Iniciar Sesi\xF3n / Registrarse"))))), __jsx("header", {
    className: "site-header-one stricked-menu  site-header-one__fixed-top ".concat(sticky === true ? "stricky-fixed" : null, "  "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "site-header-one__logo2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _images_abanti2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    width: "180",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  })), __jsx("span", {
    className: "side-menu__toggler2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fa fa-bars",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "main-nav__main-navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(_nav_links2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "main-nav__right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://comunidad.abantu.mx",
    className: "thm-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "Iniciar Sesi\xF3n / Registrarse"))))));
};

_s(Header, "1SazbpEz+dBLziogpySmuzJ4B4M=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVN0YXRlIiwic3RpY2t5Iiwic2V0U3RpY2t5IiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2JpbGVNZW51IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInByZXZlbnREZWZhdWx0Iiwic2lkZU1lbnVDbG9zZXIiLCJzaWRlTWVudUNsb3NlckJ0biIsInJlbW92ZSIsImxvZ28iLCJsb2dvMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUduQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFyQixFQUF5QjtBQUN2QkgsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEtBRkQsTUFFTyxJQUFJRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBckIsRUFBeUI7QUFDOUJILGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDtBQUNGLEdBTkQ7O0FBUUFJLHlEQUFTLENBQUMsWUFBTTtBQUNkRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixZQUFsQztBQUNBSyxjQUFVO0FBQ1YsV0FBTyxZQUFNO0FBQ1hBLGdCQUFVO0FBQ1ZKLFlBQU0sQ0FBQ0ss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QUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVzQiwwREFBVjtBQUFpQixTQUFLLEVBQUMsS0FBdkI7QUFBNkIsT0FBRyxFQUFDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FURixFQVlFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyw2QkFBUjtBQUFzQyxhQUFTLEVBQUMsU0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREYsQ0FERixDQVpGLENBTEYsQ0F2QkYsQ0FERjtBQWtERCxDQTFGRDs7R0FBTXhCLE07O0tBQUFBLE07QUE0RlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhMjYzZDVmMzRkMTMyM2ExYzkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCJAaW1hZ2VzL2FiYW50aS5wbmdcIjtcclxuaW1wb3J0IE5hdkxpbmtzIGZyb20gXCIuL25hdi1saW5rc1wiO1xyXG5pbXBvcnQgTmF2TGlua3MyIGZyb20gXCIuL25hdi1saW5rczJcIjtcclxuaW1wb3J0IGxvZ28yIGZyb20gXCJAaW1hZ2VzL2FiYW50aTIucG5nXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNzApIHtcclxuICAgICAgc2V0U3RpY2t5KHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IDcwKSB7XHJcbiAgICAgIHNldFN0aWNreShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBtb2JpbGVNZW51KCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBtb2JpbGVNZW51KCk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlLW1lbnVfX3RvZ2dsZXIyXCIpLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLW1lbnVfX2Jsb2NrXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vQ2xvc2UgTW9iaWxlIE1lbnVcclxuICAgIGxldCBzaWRlTWVudUNsb3NlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLnNpZGUtbWVudV9fY2xvc2UtYnRuLCAuc2lkZS1tZW51X19ibG9jay1vdmVybGF5XCJcclxuICAgICk7XHJcblxyXG4gICAgc2lkZU1lbnVDbG9zZXIuZm9yRWFjaCgoc2lkZU1lbnVDbG9zZXJCdG4pID0+IHtcclxuICAgICAgc2lkZU1lbnVDbG9zZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLW1lbnVfX2Jsb2NrXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgc2l0ZS1oZWFkZXItb25lIHN0cmlja3kgc2l0ZS1oZWFkZXItb25lX19maXhlZC10b3AgYH0gaWQ9XCJpbmljaW9cIj5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRlci1vbmVfX2xvZ29cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gd2lkdGg9XCIxODBcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZGUtbWVudV9fdG9nZ2xlclwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW5hdl9fbWFpbi1uYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rcyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmF2X19yaWdodFwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb211bmlkYWQuYWJhbnR1Lm14XCIgY2xhc3NOYW1lPVwidGhtLWJ0blwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkluaWNpYXIgU2VzacOzbiAvIFJlZ2lzdHJhcnNlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICB7Lyogc3RyaWNreSBtZW51IGNsb25lZCAqL31cclxuICAgICAgPGhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT17YHNpdGUtaGVhZGVyLW9uZSBzdHJpY2tlZC1tZW51ICBzaXRlLWhlYWRlci1vbmVfX2ZpeGVkLXRvcCAke1xyXG4gICAgICAgICAgc3RpY2t5ID09PSB0cnVlID8gXCJzdHJpY2t5LWZpeGVkXCIgOiBudWxsXHJcbiAgICAgICAgfSAgYH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtaGVhZGVyLW9uZV9fbG9nbzJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nbzJ9IHdpZHRoPVwiMTgwXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaWRlLW1lbnVfX3RvZ2dsZXIyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmF2X19tYWluLW5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmtzMiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmF2X19yaWdodFwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb211bmlkYWQuYWJhbnR1Lm14XCIgY2xhc3NOYW1lPVwidGhtLWJ0blwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkluaWNpYXIgU2VzacOzbiAvIFJlZ2lzdHJhcnNlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9