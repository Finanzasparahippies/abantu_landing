"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aviso-privacidad",{

/***/ "./src/common/navbar.js":
/*!******************************!*\
  !*** ./src/common/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleDropdown\": function() { return /* binding */ handleDropdown; },\n/* harmony export */   \"handleMobileDropdown\": function() { return /* binding */ handleMobileDropdown; }\n/* harmony export */ });\n/* harmony import */ var _customFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customFunctions */ \"./src/common/customFunctions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar handleDropdown = function(e) {\n    (0,_customFunctions__WEBPACK_IMPORTED_MODULE_0__.getSiblings)(e.target.parentElement).filter(function(item) {\n        return item.classList.contains(\"show\");\n    }).map(function(item) {\n        item.classList.remove(\"show\");\n        if (item.childNodes[0]) {\n            item.childNodes[0].setAttribute(\"aria-expanded\", false);\n        }\n        if (item.childNodes[1]) {\n            item.childNodes[1].classList.remove(\"show\");\n        }\n    });\n    e.target.parentElement.classList.toggle(\"show\");\n    e.target.setAttribute(\"aria-expanded\", true);\n    e.target.parentElement.childNodes[1].classList.toggle(\"show\");\n};\nvar handleMobileDropdown = function(e) {\n    e.preventDefault();\n    document.getElementById(\"navbarSupportedContent\").classList.toggle(\"show-with-trans\");\n}; // export const handleSearch = () => {\n //   let searchForm = document.querySelector(\".navbar .search .search-form\");\n //   document\n //     .querySelector(\".navbar .search .icon\")\n //     .addEventListener(\"click\", function () {\n //       searchForm.style.display = \"block\";\n //       fadeIn(searchForm, 200);\n //     });\n //   document\n //     .querySelector(\".navbar .search .search-form .close\")\n //     .addEventListener(\"click\", function () {\n //       searchForm.style.display = \"none\";\n //       fadeOut(searchForm, 200);\n //     });\n // };\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdFO0FBRXpELEdBQUssQ0FBQ0csY0FBYyxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7SUFDcENKLDZEQUFXLENBQUNJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLEVBQy9CQyxNQUFNLENBQUMsUUFBUSxDQUFQQyxJQUFJO1FBQUtBLE1BQU0sQ0FBTkEsSUFBSSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxDQUFNO09BQy9DQyxHQUFHLENBQUMsUUFBUSxDQUFQSCxJQUFJLEVBQUssQ0FBQztRQUNkQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLENBQU07UUFDNUIsRUFBRSxFQUFFSixJQUFJLENBQUNLLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUN2QkwsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQyxFQUFFQyxZQUFZLENBQUMsQ0FBZSxnQkFBRSxLQUFLO1FBQ3hELENBQUM7UUFDRCxFQUFFLEVBQUVOLElBQUksQ0FBQ0ssVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3ZCTCxJQUFJLENBQUNLLFVBQVUsQ0FBQyxDQUFDLEVBQUVKLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLENBQU07UUFDNUMsQ0FBQztJQUNILENBQUM7SUFDSFIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0csU0FBUyxDQUFDTSxNQUFNLENBQUMsQ0FBTTtJQUM5Q1gsQ0FBQyxDQUFDQyxNQUFNLENBQUNTLFlBQVksQ0FBQyxDQUFlLGdCQUFFLElBQUk7SUFDM0NWLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLENBQUNPLFVBQVUsQ0FBQyxDQUFDLEVBQUVKLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLENBQU07QUFDOUQsQ0FBQztBQUVNLEdBQUssQ0FBQ0Msb0JBQW9CLEdBQUcsUUFBUSxDQUFQWixDQUFDLEVBQUssQ0FBQztJQUMxQ0EsQ0FBQyxDQUFDYSxjQUFjO0lBQ2hCQyxRQUFRLENBQ0xDLGNBQWMsQ0FBQyxDQUF3Qix5QkFDdkNWLFNBQVMsQ0FBQ00sTUFBTSxDQUFDLENBQWlCO0FBQ3ZDLENBQUMsQ0FFRCxDQUFzQztBQUN0QyxDQUE2RTtBQUM3RSxDQUFhO0FBQ2IsQ0FBOEM7QUFDOUMsQ0FBK0M7QUFDL0MsQ0FBNEM7QUFDNUMsQ0FBaUM7QUFDakMsQ0FBVTtBQUVWLENBQWE7QUFDYixDQUE0RDtBQUM1RCxDQUErQztBQUMvQyxDQUEyQztBQUMzQyxDQUFrQztBQUNsQyxDQUFVO0FBQ1YsQ0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tbW9uL25hdmJhci5qcz8xZTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNpYmxpbmdzLCBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi9jdXN0b21GdW5jdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVEcm9wZG93biA9IChlKSA9PiB7XHJcbiAgZ2V0U2libGluZ3MoZS50YXJnZXQucGFyZW50RWxlbWVudClcclxuICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSlcclxuICAgIC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgaWYgKGl0ZW0uY2hpbGROb2Rlc1swXSkge1xyXG4gICAgICAgIGl0ZW0uY2hpbGROb2Rlc1swXS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbS5jaGlsZE5vZGVzWzFdKSB7XHJcbiAgICAgICAgaXRlbS5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgdHJ1ZSk7XHJcbiAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU1vYmlsZURyb3Bkb3duID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIilcclxuICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy13aXRoLXRyYW5zXCIpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuLy8gICBsZXQgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyIC5zZWFyY2ggLnNlYXJjaC1mb3JtXCIpO1xyXG4vLyAgIGRvY3VtZW50XHJcbi8vICAgICAucXVlcnlTZWxlY3RvcihcIi5uYXZiYXIgLnNlYXJjaCAuaWNvblwiKVxyXG4vLyAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgIHNlYXJjaEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy8gICAgICAgZmFkZUluKHNlYXJjaEZvcm0sIDIwMCk7XHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgZG9jdW1lbnRcclxuLy8gICAgIC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhciAuc2VhcmNoIC5zZWFyY2gtZm9ybSAuY2xvc2VcIilcclxuLy8gICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICBzZWFyY2hGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgZmFkZU91dChzZWFyY2hGb3JtLCAyMDApO1xyXG4vLyAgICAgfSk7XHJcbi8vIH07XHJcbiJdLCJuYW1lcyI6WyJnZXRTaWJsaW5ncyIsImZhZGVJbiIsImZhZGVPdXQiLCJoYW5kbGVEcm9wZG93biIsImUiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZmlsdGVyIiwiaXRlbSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwibWFwIiwicmVtb3ZlIiwiY2hpbGROb2RlcyIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZSIsImhhbmRsZU1vYmlsZURyb3Bkb3duIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/navbar.js\n");

/***/ })

});