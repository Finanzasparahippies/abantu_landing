"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delay\": () => (/* binding */ delay),\n/* harmony export */   \"fadeIn\": () => (/* binding */ fadeIn),\n/* harmony export */   \"fadeOut\": () => (/* binding */ fadeOut),\n/* harmony export */   \"getSiblings\": () => (/* binding */ getSiblings),\n/* harmony export */   \"animateEl\": () => (/* binding */ animateEl)\n/* harmony export */ });\nvar opacity = 0;\nvar intervalID = 0;\nfunction show(el) {\n    opacity = Number(window.getComputedStyle(el).getPropertyValue(\"opacity\"));\n    if (opacity < 1) {\n        opacity = opacity + 1;\n        el.style.opacity = opacity;\n    } else {\n        clearInterval(intervalID);\n    }\n}\nfunction hide(el) {\n    opacity = Number(window.getComputedStyle(el).getPropertyValue(\"opacity\"));\n    if (opacity > 0) {\n        opacity = 0;\n        el.style.opacity = opacity;\n    } else {\n        clearInterval(intervalID);\n    }\n}\nconst delay = (time, callback)=>{\n    setTimeout(function() {\n        callback;\n    }, time);\n};\nconst fadeIn = (el, time)=>{\n    setInterval(show(el), time);\n};\nconst fadeOut = (el, time)=>{\n    setInterval(hide(el), time);\n};\nconst getSiblings = (e)=>{\n    let siblings = [];\n    if (!e.parentNode) {\n        return siblings;\n    }\n    let sibling = e.parentNode.firstChild;\n    while(sibling){\n        if (sibling.nodeType === 1 && sibling !== e) {\n            siblings.push(sibling);\n        }\n        sibling = sibling.nextSibling;\n    }\n    return siblings;\n};\nconst animateEl = (el, to)=>{\n    function draw() {\n        el.style.left = to;\n    }\n    draw();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2N1c3RvbUZ1bmN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEdBQUcsQ0FBQ0EsT0FBTyxHQUFHLENBQUM7QUFDZixHQUFHLENBQUNDLFVBQVUsR0FBRyxDQUFDO1NBQ1RDLElBQUksQ0FBQ0MsRUFBRSxFQUFFLENBQUM7SUFDakJILE9BQU8sR0FBR0ksTUFBTSxDQUFDQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDSCxFQUFFLEVBQUVJLGdCQUFnQixDQUFDLENBQVM7SUFDdkUsRUFBRSxFQUFFUCxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDaEJBLE9BQU8sR0FBR0EsT0FBTyxHQUFHLENBQUM7UUFDckJHLEVBQUUsQ0FBQ0ssS0FBSyxDQUFDUixPQUFPLEdBQUdBLE9BQU87SUFDNUIsQ0FBQyxNQUFNLENBQUM7UUFDTlMsYUFBYSxDQUFDUixVQUFVO0lBQzFCLENBQUM7QUFDSCxDQUFDO1NBQ1FTLElBQUksQ0FBQ1AsRUFBRSxFQUFFLENBQUM7SUFDakJILE9BQU8sR0FBR0ksTUFBTSxDQUFDQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDSCxFQUFFLEVBQUVJLGdCQUFnQixDQUFDLENBQVM7SUFDdkUsRUFBRSxFQUFFUCxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDaEJBLE9BQU8sR0FBRyxDQUFDO1FBQ1hHLEVBQUUsQ0FBQ0ssS0FBSyxDQUFDUixPQUFPLEdBQUdBLE9BQU87SUFDNUIsQ0FBQyxNQUFNLENBQUM7UUFDTlMsYUFBYSxDQUFDUixVQUFVO0lBQzFCLENBQUM7QUFDSCxDQUFDO0FBRU0sS0FBSyxDQUFDVSxLQUFLLElBQUlDLElBQUksRUFBRUMsUUFBUSxHQUFLLENBQUM7SUFDeENDLFVBQVUsQ0FBQyxRQUFRLEdBQUksQ0FBQztRQUN0QkQsUUFBUTtJQUNWLENBQUMsRUFBRUQsSUFBSTtBQUNULENBQUM7QUFFTSxLQUFLLENBQUNHLE1BQU0sSUFBSVosRUFBRSxFQUFFUyxJQUFJLEdBQUssQ0FBQztJQUNuQ0ksV0FBVyxDQUFDZCxJQUFJLENBQUNDLEVBQUUsR0FBR1MsSUFBSTtBQUM1QixDQUFDO0FBQ00sS0FBSyxDQUFDSyxPQUFPLElBQUlkLEVBQUUsRUFBRVMsSUFBSSxHQUFLLENBQUM7SUFDcENJLFdBQVcsQ0FBQ04sSUFBSSxDQUFDUCxFQUFFLEdBQUdTLElBQUk7QUFDNUIsQ0FBQztBQUVNLEtBQUssQ0FBQ00sV0FBVyxJQUFJQyxDQUFDLEdBQUssQ0FBQztJQUNqQyxHQUFHLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsRUFBRSxHQUFHRCxDQUFDLENBQUNFLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQ0QsUUFBUTtJQUNqQixDQUFDO0lBQ0QsR0FBRyxDQUFDRSxPQUFPLEdBQUdILENBQUMsQ0FBQ0UsVUFBVSxDQUFDRSxVQUFVO1VBQzlCRCxPQUFPLENBQUUsQ0FBQztRQUNmLEVBQUUsRUFBRUEsT0FBTyxDQUFDRSxRQUFRLEtBQUssQ0FBQyxJQUFJRixPQUFPLEtBQUtILENBQUMsRUFBRSxDQUFDO1lBQzVDQyxRQUFRLENBQUNLLElBQUksQ0FBQ0gsT0FBTztRQUN2QixDQUFDO1FBQ0RBLE9BQU8sR0FBR0EsT0FBTyxDQUFDSSxXQUFXO0lBQy9CLENBQUM7SUFDRCxNQUFNLENBQUNOLFFBQVE7QUFDakIsQ0FBQztBQUVNLEtBQUssQ0FBQ08sU0FBUyxJQUFJeEIsRUFBRSxFQUFFeUIsRUFBRSxHQUFLLENBQUM7YUFDM0JDLElBQUksR0FBRyxDQUFDO1FBQ2YxQixFQUFFLENBQUNLLEtBQUssQ0FBQ3NCLElBQUksR0FBR0YsRUFBRTtJQUNwQixDQUFDO0lBQ0RDLElBQUk7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJhbnR1Ly4vc3JjL2NvbW1vbi9jdXN0b21GdW5jdGlvbnMuanM/ODEzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgb3BhY2l0eSA9IDA7XHJcbnZhciBpbnRlcnZhbElEID0gMDtcclxuZnVuY3Rpb24gc2hvdyhlbCkge1xyXG4gIG9wYWNpdHkgPSBOdW1iZXIod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoXCJvcGFjaXR5XCIpKTtcclxuICBpZiAob3BhY2l0eSA8IDEpIHtcclxuICAgIG9wYWNpdHkgPSBvcGFjaXR5ICsgMTtcclxuICAgIGVsLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBoaWRlKGVsKSB7XHJcbiAgb3BhY2l0eSA9IE51bWJlcih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShcIm9wYWNpdHlcIikpO1xyXG4gIGlmIChvcGFjaXR5ID4gMCkge1xyXG4gICAgb3BhY2l0eSA9IDA7XHJcbiAgICBlbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxheSA9ICh0aW1lLCBjYWxsYmFjaykgPT4ge1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgY2FsbGJhY2s7XHJcbiAgfSwgdGltZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsLCB0aW1lKSA9PiB7XHJcbiAgc2V0SW50ZXJ2YWwoc2hvdyhlbCksIHRpbWUpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbCwgdGltZSkgPT4ge1xyXG4gIHNldEludGVydmFsKGhpZGUoZWwpLCB0aW1lKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaWJsaW5ncyA9IChlKSA9PiB7XHJcbiAgbGV0IHNpYmxpbmdzID0gW107XHJcbiAgaWYgKCFlLnBhcmVudE5vZGUpIHtcclxuICAgIHJldHVybiBzaWJsaW5ncztcclxuICB9XHJcbiAgbGV0IHNpYmxpbmcgPSBlLnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuICB3aGlsZSAoc2libGluZykge1xyXG4gICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZSkge1xyXG4gICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgfVxyXG4gICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgfVxyXG4gIHJldHVybiBzaWJsaW5ncztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhbmltYXRlRWwgPSAoZWwsIHRvKSA9PiB7XHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGVsLnN0eWxlLmxlZnQgPSB0bztcclxuICB9XHJcbiAgZHJhdygpO1xyXG59OyJdLCJuYW1lcyI6WyJvcGFjaXR5IiwiaW50ZXJ2YWxJRCIsInNob3ciLCJlbCIsIk51bWJlciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3R5bGUiLCJjbGVhckludGVydmFsIiwiaGlkZSIsImRlbGF5IiwidGltZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImZhZGVJbiIsInNldEludGVydmFsIiwiZmFkZU91dCIsImdldFNpYmxpbmdzIiwiZSIsInNpYmxpbmdzIiwicGFyZW50Tm9kZSIsInNpYmxpbmciLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJwdXNoIiwibmV4dFNpYmxpbmciLCJhbmltYXRlRWwiLCJ0byIsImRyYXciLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/customFunctions.js\n");
=======
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);
>>>>>>> 82feb931f0e21dbf73a07f6c87001f655b67c7cf

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./src/common/mouseEffect.js
const mousecursor = ()=>{
    const cursorInner = document.querySelector(".cursor-inner"), cursorOuter = document.querySelector(".cursor-outer");
    let n, i = 0, o = !1;
    window.onmousemove = function(s) {
        o || (cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
    };
    if (document.querySelector(".cursor-pointer")) {
        document.querySelector(".cursor-pointer").addEventListener("mouseenter", function() {
            cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
        });
        document.querySelector(".cursor-pointer").addEventListener("mouseleave", function() {
            cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
        }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
    }
    document.querySelectorAll("a").forEach(function(item) {
        item.addEventListener("mouseenter", function() {
            cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
        });
    });
    document.querySelectorAll("a").forEach(function(item) {
        item.addEventListener("mouseleave", function() {
            cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
        });
    }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
};
/* harmony default export */ const mouseEffect = (mousecursor);

<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _customFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customFunctions */ \"./src/common/customFunctions.js\");\n\nconst loadingPace = ()=>{\n    Pace.on(\"start\", function() {\n        //When Pace Start\n        document.querySelector(\"#preloader\").classList.remove(\"isdone\");\n    });\n    Pace.on(\"done\", function() {\n        //When Pace End\n        if (document.querySelector(\".hamenu\")) {\n            (0,_customFunctions__WEBPACK_IMPORTED_MODULE_0__.delay)(300, (0,_customFunctions__WEBPACK_IMPORTED_MODULE_0__.animateEl)(document.querySelector(\".hamenu\"), \"-100%\"));\n            document.querySelector(\".topnav .menu-icon\").classList.remove(\"open\");\n        }\n        document.querySelector(\"#preloader\").classList.add(\"isdone\");\n    });\n    if (document.querySelector(\"body\").classList.contains(\"pace-done\")) {\n        document.querySelector(\"#preloader\").classList.add(\"isdone\");\n    }\n    document.addEventListener(\"load\", ()=>{\n        document.querySelector(\"#preloader\").classList.add(\"isdone\");\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingPace);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2xvYWRpbmdQYWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9EO0FBRXBELEtBQUssQ0FBQ0UsV0FBVyxPQUFTLENBQUM7SUFDekJDLElBQUksQ0FBQ0MsRUFBRSxDQUFDLENBQU8sUUFBRSxRQUFRLEdBQUksQ0FBQztRQUM1QixFQUFpQjtRQUNqQkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBWSxhQUFFQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFRO0lBQ2hFLENBQUM7SUFDREwsSUFBSSxDQUFDQyxFQUFFLENBQUMsQ0FBTSxPQUFFLFFBQVEsR0FBSSxDQUFDO1FBQzNCLEVBQWU7UUFDZixFQUFFLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVMsV0FBRyxDQUFDO1lBQ3RDTix1REFBSyxDQUFDLEdBQUcsRUFBRUMsMkRBQVMsQ0FBQ0ksUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBUyxXQUFHLENBQU87WUFDL0RELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQW9CLHFCQUFFQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxDQUFNO1FBQ3RFLENBQUM7UUFDREgsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBWSxhQUFFQyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxDQUFRO0lBQzdELENBQUM7SUFFRCxFQUFFLEVBQUVKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQU0sT0FBRUMsU0FBUyxDQUFDRyxRQUFRLENBQUMsQ0FBVyxhQUFHLENBQUM7UUFDbkVMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVksYUFBRUMsU0FBUyxDQUFDRSxHQUFHLENBQUMsQ0FBUTtJQUM3RCxDQUFDO0lBRURKLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsQ0FBTSxXQUFRLENBQUM7UUFDdkNOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVksYUFBRUMsU0FBUyxDQUFDRSxHQUFHLENBQUMsQ0FBUTtJQUM3RCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlUCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmFudHUvLi9zcmMvY29tbW9uL2xvYWRpbmdQYWNlLmpzPzdmMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsYXksIGFuaW1hdGVFbCB9IGZyb20gXCIuL2N1c3RvbUZ1bmN0aW9uc1wiO1xyXG5cclxuY29uc3QgbG9hZGluZ1BhY2UgPSAoKSA9PiB7XHJcbiAgUGFjZS5vbihcInN0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vV2hlbiBQYWNlIFN0YXJ0XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXNkb25lXCIpO1xyXG4gIH0pO1xyXG4gIFBhY2Uub24oXCJkb25lXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vV2hlbiBQYWNlIEVuZFxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtZW51XCIpKSB7XHJcbiAgICAgIGRlbGF5KDMwMCwgYW5pbWF0ZUVsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtZW51XCIpLCBcIi0xMDAlXCIpKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3BuYXYgLm1lbnUtaWNvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlbG9hZGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJpc2RvbmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWNlLWRvbmVcIikpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJlbG9hZGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJpc2RvbmVcIik7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKS5jbGFzc0xpc3QuYWRkKFwiaXNkb25lXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1BhY2U7XHJcbiJdLCJuYW1lcyI6WyJkZWxheSIsImFuaW1hdGVFbCIsImxvYWRpbmdQYWNlIiwiUGFjZSIsIm9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY29udGFpbnMiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/loadingPace.js\n");
=======
;// CONCATENATED MODULE: ./src/components/Cursor/index.jsx
>>>>>>> 82feb931f0e21dbf73a07f6c87001f655b67c7cf



<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mousecursor = ()=>{\n    const cursorInner = document.querySelector(\".cursor-inner\"), cursorOuter = document.querySelector(\".cursor-outer\");\n    let n, i = 0, o = !1;\n    window.onmousemove = function(s) {\n        o || (cursorOuter.style.transform = \"translate(\" + s.clientX + \"px, \" + s.clientY + \"px)\"), cursorInner.style.transform = \"translate(\" + s.clientX + \"px, \" + s.clientY + \"px)\", n = s.clientY, i = s.clientX;\n    };\n    if (document.querySelector(\".cursor-pointer\")) {\n        document.querySelector(\".cursor-pointer\").addEventListener(\"mouseenter\", function() {\n            cursorInner.classList.add(\"cursor-hover\"), cursorOuter.classList.add(\"cursor-hover\");\n        });\n        document.querySelector(\".cursor-pointer\").addEventListener(\"mouseleave\", function() {\n            cursorInner.classList.remove(\"cursor-hover\"), cursorOuter.classList.remove(\"cursor-hover\");\n        }), cursorInner.style.visibility = \"visible\", cursorOuter.style.visibility = \"visible\";\n    }\n    document.querySelectorAll(\"a\").forEach(function(item) {\n        item.addEventListener(\"mouseenter\", function() {\n            cursorInner.classList.add(\"cursor-hover\"), cursorOuter.classList.add(\"cursor-hover\");\n        });\n    });\n    document.querySelectorAll(\"a\").forEach(function(item) {\n        item.addEventListener(\"mouseleave\", function() {\n            cursorInner.classList.remove(\"cursor-hover\"), cursorOuter.classList.remove(\"cursor-hover\");\n        });\n    }), cursorInner.style.visibility = \"visible\", cursorOuter.style.visibility = \"visible\";\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mousecursor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL21vdXNlRWZmZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLFdBQVcsT0FBUyxDQUFDO0lBQ3pCLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFlLGlCQUN4REMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFlO0lBQ3RELEdBQUcsQ0FBQ0UsQ0FBQyxFQUNIQyxDQUFDLEdBQUcsQ0FBQyxFQUNMQyxDQUFDLElBQUksQ0FBQztJQUNSQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQUVDLENBQUMsRUFBRSxDQUFDO1FBQ2pDSCxDQUFDLEtBQ0VILFdBQVcsQ0FBQ08sS0FBSyxDQUFDQyxTQUFTLEdBQzFCLENBQVksY0FBR0YsQ0FBQyxDQUFDRyxPQUFPLEdBQUcsQ0FBTSxRQUFHSCxDQUFDLENBQUNJLE9BQU8sR0FBRyxDQUFLLE9BQ3REYixXQUFXLENBQUNVLEtBQUssQ0FBQ0MsU0FBUyxHQUMxQixDQUFZLGNBQUdGLENBQUMsQ0FBQ0csT0FBTyxHQUFHLENBQU0sUUFBR0gsQ0FBQyxDQUFDSSxPQUFPLEdBQUcsQ0FBSyxNQUN0RFQsQ0FBQyxHQUFHSyxDQUFDLENBQUNJLE9BQU8sRUFDYlIsQ0FBQyxHQUFHSSxDQUFDLENBQUNHLE9BQU87SUFDbEIsQ0FBQztJQUNELEVBQUUsRUFBRVgsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBaUIsbUJBQUcsQ0FBQztRQUM5Q0QsUUFBUSxDQUNMQyxhQUFhLENBQUMsQ0FBaUIsa0JBQy9CWSxnQkFBZ0IsQ0FBQyxDQUFZLGFBQUUsUUFBUSxHQUFJLENBQUM7WUFDM0NkLFdBQVcsQ0FBQ2UsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBYyxnQkFDdENiLFdBQVcsQ0FBQ1ksU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBYztRQUM1QyxDQUFDO1FBQ0hmLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLENBQWlCLGtCQUMvQlksZ0JBQWdCLENBQUMsQ0FBWSxhQUFFLFFBQVEsR0FBSSxDQUFDO1lBQzNDZCxXQUFXLENBQUNlLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQWMsZ0JBQ3pDZCxXQUFXLENBQUNZLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQWM7UUFDL0MsQ0FBQyxHQUNBakIsV0FBVyxDQUFDVSxLQUFLLENBQUNRLFVBQVUsR0FBRyxDQUFTLFVBQ3hDZixXQUFXLENBQUNPLEtBQUssQ0FBQ1EsVUFBVSxHQUFHLENBQVM7SUFDN0MsQ0FBQztJQUNEakIsUUFBUSxDQUFDa0IsZ0JBQWdCLENBQUMsQ0FBRyxJQUFFQyxPQUFPLENBQUMsUUFBUSxDQUFFQyxJQUFJLEVBQUUsQ0FBQztRQUN0REEsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQyxDQUFZLGFBQUUsUUFBUSxHQUFJLENBQUM7WUFDL0NkLFdBQVcsQ0FBQ2UsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBYyxnQkFDdENiLFdBQVcsQ0FBQ1ksU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBYztRQUM1QyxDQUFDO0lBQ0gsQ0FBQztJQUNEZixRQUFRLENBQUNrQixnQkFBZ0IsQ0FBQyxDQUFHLElBQUVDLE9BQU8sQ0FBQyxRQUFRLENBQUVDLElBQUksRUFBRSxDQUFDO1FBQ3REQSxJQUFJLENBQUNQLGdCQUFnQixDQUFDLENBQVksYUFBRSxRQUFRLEdBQUksQ0FBQztZQUMvQ2QsV0FBVyxDQUFDZSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxDQUFjLGdCQUN6Q2QsV0FBVyxDQUFDWSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxDQUFjO1FBQy9DLENBQUM7SUFDSCxDQUFDLEdBQ0VqQixXQUFXLENBQUNVLEtBQUssQ0FBQ1EsVUFBVSxHQUFHLENBQVMsVUFDeENmLFdBQVcsQ0FBQ08sS0FBSyxDQUFDUSxVQUFVLEdBQUcsQ0FBUztBQUM3QyxDQUFDO0FBQ0QsaUVBQWVuQixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmFudHUvLi9zcmMvY29tbW9uL21vdXNlRWZmZWN0LmpzPzVhOGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW91c2VjdXJzb3IgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3Vyc29ySW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvci1pbm5lclwiKSxcclxuICAgIGN1cnNvck91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3Itb3V0ZXJcIik7XHJcbiAgbGV0IG4sXHJcbiAgICBpID0gMCxcclxuICAgIG8gPSAhMTtcclxuICB3aW5kb3cub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAocykge1xyXG4gICAgbyB8fFxyXG4gICAgICAoY3Vyc29yT3V0ZXIuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICBcInRyYW5zbGF0ZShcIiArIHMuY2xpZW50WCArIFwicHgsIFwiICsgcy5jbGllbnRZICsgXCJweClcIiksXHJcbiAgICAgIChjdXJzb3JJbm5lci5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgIFwidHJhbnNsYXRlKFwiICsgcy5jbGllbnRYICsgXCJweCwgXCIgKyBzLmNsaWVudFkgKyBcInB4KVwiKSxcclxuICAgICAgKG4gPSBzLmNsaWVudFkpLFxyXG4gICAgICAoaSA9IHMuY2xpZW50WCk7XHJcbiAgfTtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3ItcG9pbnRlclwiKSkge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yLXBvaW50ZXJcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjdXJzb3JJbm5lci5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWhvdmVyXCIpLFxyXG4gICAgICAgICAgY3Vyc29yT3V0ZXIuY2xhc3NMaXN0LmFkZChcImN1cnNvci1ob3ZlclwiKTtcclxuICAgICAgfSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jdXJzb3ItcG9pbnRlclwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnNvcklubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3ItaG92ZXJcIiksXHJcbiAgICAgICAgICBjdXJzb3JPdXRlci5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yLWhvdmVyXCIpO1xyXG4gICAgICB9KSxcclxuICAgICAgKGN1cnNvcklubmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiksXHJcbiAgICAgIChjdXJzb3JPdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIpO1xyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY3Vyc29ySW5uZXIuY2xhc3NMaXN0LmFkZChcImN1cnNvci1ob3ZlclwiKSxcclxuICAgICAgICBjdXJzb3JPdXRlci5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWhvdmVyXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGN1cnNvcklubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3ItaG92ZXJcIiksXHJcbiAgICAgICAgY3Vyc29yT3V0ZXIuY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvci1ob3ZlclwiKTtcclxuICAgIH0pO1xyXG4gIH0pLFxyXG4gICAgKGN1cnNvcklubmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiksXHJcbiAgICAoY3Vyc29yT3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbW91c2VjdXJzb3I7XHJcbiJdLCJuYW1lcyI6WyJtb3VzZWN1cnNvciIsImN1cnNvcklubmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3Vyc29yT3V0ZXIiLCJuIiwiaSIsIm8iLCJ3aW5kb3ciLCJvbm1vdXNlbW92ZSIsInMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNsaWVudFgiLCJjbGllbnRZIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInZpc2liaWxpdHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/mouseEffect.js\n");
=======
const Cursor = ()=>{
    external_react_default().useEffect(()=>{
        mouseEffect();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-inner"
            })
        ]
    }));
};
/* harmony default export */ const components_Cursor = (Cursor);
>>>>>>> 82feb931f0e21dbf73a07f6c87001f655b67c7cf

;// CONCATENATED MODULE: ./src/common/scrollToTo.js
const scrollToTop = ()=>{
    let progressPath = document.querySelector(".progress-wrap path");
    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    const updateProgress = function() {
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress);
    let progressWrap = document.querySelector(".progress-wrap");
    let offset = 150;
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > offset) {
            progressWrap.classList.add("active-progress");
        } else {
            document.querySelector(".progress-wrap").classList.remove("active-progress");
        }
    });
    progressWrap.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        return false;
    });
};
/* harmony default export */ const scrollToTo = (scrollToTop);

;// CONCATENATED MODULE: ./src/components/Scroll-to-top/index.jsx

<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollToTop = ()=>{\n    let progressPath = document.querySelector(\".progress-wrap path\");\n    let pathLength = progressPath.getTotalLength();\n    progressPath.style.transition = progressPath.style.WebkitTransition = \"none\";\n    progressPath.style.strokeDasharray = pathLength + \" \" + pathLength;\n    progressPath.style.strokeDashoffset = pathLength;\n    progressPath.getBoundingClientRect();\n    progressPath.style.transition = progressPath.style.WebkitTransition = \"stroke-dashoffset 10ms linear\";\n    const updateProgress = function() {\n        let scroll = window.pageYOffset;\n        let height = document.documentElement.scrollHeight - window.innerHeight;\n        let progress = pathLength - scroll * pathLength / height;\n        progressPath.style.strokeDashoffset = progress;\n    };\n    updateProgress();\n    window.addEventListener(\"scroll\", updateProgress);\n    let progressWrap = document.querySelector(\".progress-wrap\");\n    let offset = 150;\n    window.addEventListener(\"scroll\", function() {\n        if (window.pageYOffset > offset) {\n            progressWrap.classList.add(\"active-progress\");\n        } else {\n            document.querySelector(\".progress-wrap\").classList.remove(\"active-progress\");\n        }\n    });\n    progressWrap.addEventListener(\"click\", function(event) {\n        event.preventDefault();\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n        return false;\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3Njcm9sbFRvVG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQ0EsV0FBVyxPQUFTLENBQUM7SUFDekIsR0FBRyxDQUFDQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQXFCO0lBQy9ELEdBQUcsQ0FBQ0MsVUFBVSxHQUFHSCxZQUFZLENBQUNJLGNBQWM7SUFDNUNKLFlBQVksQ0FBQ0ssS0FBSyxDQUFDQyxVQUFVLEdBQUdOLFlBQVksQ0FBQ0ssS0FBSyxDQUFDRSxnQkFBZ0IsR0FBRyxDQUFNO0lBQzVFUCxZQUFZLENBQUNLLEtBQUssQ0FBQ0csZUFBZSxHQUFHTCxVQUFVLEdBQUcsQ0FBRyxLQUFHQSxVQUFVO0lBQ2xFSCxZQUFZLENBQUNLLEtBQUssQ0FBQ0ksZ0JBQWdCLEdBQUdOLFVBQVU7SUFDaERILFlBQVksQ0FBQ1UscUJBQXFCO0lBQ2xDVixZQUFZLENBQUNLLEtBQUssQ0FBQ0MsVUFBVSxHQUFHTixZQUFZLENBQUNLLEtBQUssQ0FBQ0UsZ0JBQWdCLEdBQ2pFLENBQStCO0lBQ2pDLEtBQUssQ0FBQ0ksY0FBYyxHQUFHLFFBQVEsR0FBSSxDQUFDO1FBQ2xDLEdBQUcsQ0FBQ0MsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFdBQVc7UUFDL0IsR0FBRyxDQUFDQyxNQUFNLEdBQUdkLFFBQVEsQ0FBQ2UsZUFBZSxDQUFDQyxZQUFZLEdBQUdKLE1BQU0sQ0FBQ0ssV0FBVztRQUN2RSxHQUFHLENBQUNDLFFBQVEsR0FBR2hCLFVBQVUsR0FBSVMsTUFBTSxHQUFHVCxVQUFVLEdBQUlZLE1BQU07UUFDMURmLFlBQVksQ0FBQ0ssS0FBSyxDQUFDSSxnQkFBZ0IsR0FBR1UsUUFBUTtJQUNoRCxDQUFDO0lBQ0RSLGNBQWM7SUFDZEUsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUVULGNBQWM7SUFDaEQsR0FBRyxDQUFDVSxZQUFZLEdBQUdwQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFnQjtJQUMxRCxHQUFHLENBQUNvQixNQUFNLEdBQUcsR0FBRztJQUNoQlQsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUUsUUFBUSxHQUFJLENBQUM7UUFDN0MsRUFBRSxFQUFFUCxNQUFNLENBQUNDLFdBQVcsR0FBR1EsTUFBTSxFQUFFLENBQUM7WUFDaENELFlBQVksQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBaUI7UUFDOUMsQ0FBQyxNQUFNLENBQUM7WUFDTnZCLFFBQVEsQ0FDTEMsYUFBYSxDQUFDLENBQWdCLGlCQUM5QnFCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQWlCO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBQ0RKLFlBQVksQ0FBQ0QsZ0JBQWdCLENBQUMsQ0FBTyxRQUFFLFFBQVEsQ0FBRU0sS0FBSyxFQUFFLENBQUM7UUFDdkRBLEtBQUssQ0FBQ0MsY0FBYztRQUNwQmQsTUFBTSxDQUFDZSxRQUFRLENBQUMsQ0FBQztZQUFDQyxHQUFHLEVBQUUsQ0FBQztZQUFFQyxRQUFRLEVBQUUsQ0FBUTtRQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLEtBQUs7SUFDZCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlL0IsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiYW50dS8uL3NyYy9jb21tb24vc2Nyb2xsVG9Uby5qcz9mM2IyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gIGxldCBwcm9ncmVzc1BhdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLXdyYXAgcGF0aFwiKTtcclxuICBsZXQgcGF0aExlbmd0aCA9IHByb2dyZXNzUGF0aC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gIHByb2dyZXNzUGF0aC5zdHlsZS50cmFuc2l0aW9uID0gcHJvZ3Jlc3NQYXRoLnN0eWxlLldlYmtpdFRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICBwcm9ncmVzc1BhdGguc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gcGF0aExlbmd0aCArIFwiIFwiICsgcGF0aExlbmd0aDtcclxuICBwcm9ncmVzc1BhdGguc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IHBhdGhMZW5ndGg7XHJcbiAgcHJvZ3Jlc3NQYXRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIHByb2dyZXNzUGF0aC5zdHlsZS50cmFuc2l0aW9uID0gcHJvZ3Jlc3NQYXRoLnN0eWxlLldlYmtpdFRyYW5zaXRpb24gPVxyXG4gICAgXCJzdHJva2UtZGFzaG9mZnNldCAxMG1zIGxpbmVhclwiO1xyXG4gIGNvbnN0IHVwZGF0ZVByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIGxldCBoZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgbGV0IHByb2dyZXNzID0gcGF0aExlbmd0aCAtIChzY3JvbGwgKiBwYXRoTGVuZ3RoKSAvIGhlaWdodDtcclxuICAgIHByb2dyZXNzUGF0aC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gcHJvZ3Jlc3M7XHJcbiAgfTtcclxuICB1cGRhdGVQcm9ncmVzcygpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZVByb2dyZXNzKTtcclxuICBsZXQgcHJvZ3Jlc3NXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy13cmFwXCIpO1xyXG4gIGxldCBvZmZzZXQgPSAxNTA7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IG9mZnNldCkge1xyXG4gICAgICBwcm9ncmVzc1dyYXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9ncmVzc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3Mtd3JhcFwiKVxyXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXByb2dyZXNzXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHByb2dyZXNzV3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbFRvVG9wIl0sIm5hbWVzIjpbInNjcm9sbFRvVG9wIiwicHJvZ3Jlc3NQYXRoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGF0aExlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiV2Via2l0VHJhbnNpdGlvbiIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVQcm9ncmVzcyIsInNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJwcm9ncmVzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9ncmVzc1dyYXAiLCJvZmZzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/scrollToTo.js\n");
=======
>>>>>>> 82feb931f0e21dbf73a07f6c87001f655b67c7cf


const ScrollToTop = ()=>{
    external_react_default().useEffect(()=>{
        scrollToTo();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "progress-wrap cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "progress-circle svg-content",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            })
        })
    }));
};
/* harmony default export */ const Scroll_to_top = (ScrollToTop);

<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_mouseEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/mouseEffect */ \"./src/common/mouseEffect.js\");\n\n\n\nconst Cursor = ()=>{\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        (0,_common_mouseEffect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"mouse-cursor cursor-outer\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Cursor\\\\index.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"mouse-cursor cursor-inner\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Cursor\\\\index.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: undefined\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXJzb3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDeUI7QUFFbEQsS0FBSyxDQUFDRSxNQUFNLE9BQVMsQ0FBQztJQUNwQkYsc0RBQWUsS0FBTyxDQUFDO1FBQ3JCQywrREFBVztJQUNiLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNOztpRkFFREcsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTJCOzs7Ozs7OztpRkFDekNELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUEyQjs7Ozs7Ozs7OztBQUdoRCxDQUFDO0FBRUQsaUVBQWVILE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiYW50dS8uL3NyYy9jb21wb25lbnRzL0N1cnNvci9pbmRleC5qc3g/ODljNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb3VzZWN1cnNvciBmcm9tIFwiLi4vLi4vY29tbW9uL21vdXNlRWZmZWN0XCI7XHJcblxyXG5jb25zdCBDdXJzb3IgPSAoKSA9PiB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG1vdXNlY3Vyc29yKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdXNlLWN1cnNvciBjdXJzb3Itb3V0ZXJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3VzZS1jdXJzb3IgY3Vyc29yLWlubmVyXCI+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3Vyc29yO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3VzZWN1cnNvciIsIkN1cnNvciIsInVzZUVmZmVjdCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Cursor/index.jsx\n");
=======
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(2455);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
>>>>>>> 82feb931f0e21dbf73a07f6c87001f655b67c7cf

const loadingPace = ()=>{
    Pace.on("start", function() {
        //When Pace Start
        document.querySelector("#preloader").classList.remove("isdone");
    });
    Pace.on("done", function() {
        //When Pace End
        if (document.querySelector(".hamenu")) {
            (0,customFunctions/* delay */.gw)(300, (0,customFunctions/* animateEl */.mM)(document.querySelector(".hamenu"), "-100%"));
            document.querySelector(".topnav .menu-icon").classList.remove("open");
        }
        document.querySelector("#preloader").classList.add("isdone");
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        document.querySelector("#preloader").classList.add("isdone");
    }
    document.addEventListener("load", ()=>{
        document.querySelector("#preloader").classList.add("isdone");
    });
};
/* harmony default export */ const common_loadingPace = (loadingPace);

// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/components/Loading-Screen/index.jsx

<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_loadingPace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/loadingPace.js */ \"./src/common/loadingPace.js\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n\n\n\n\n\nconst LoadingScreen = ()=>{\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        let bodyEl = document.querySelector(\"body\");\n        if (_data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading) {\n            (0,_common_loadingPace_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            if (bodyEl.classList.contains(\"hideX\")) {\n                bodyEl.classList.remove(\"hideX\");\n            }\n        } else {\n            bodyEl.classList.add(\"hideX\");\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: `${_data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading === true ? \"showX\" : \"hideX\"}`,\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Loading-Screen\\\\index.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    id: \"preloader\",\n                    __source: {\n                        fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Loading-Screen\\\\index.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    },\n                    __self: undefined\n                })\n            }),\n            _data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"pace\",\n                strategy: \"beforeInteractive\",\n                src: \"/js/pace.min.js\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Loading-Screen\\\\index.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                },\n                __self: undefined\n            }) : \"\"\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLVNjcmVlbi9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBQ3FCO0FBQ1o7QUFFekMsS0FBSyxDQUFDSSxhQUFhLE9BQVMsQ0FBQztJQUMzQkosc0RBQWUsS0FBTyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQ00sTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFNO1FBQzFDLEVBQUUsRUFBRUwsdURBQW1CLEVBQUUsQ0FBQztZQUN4QkQsa0VBQVc7WUFFWCxFQUFFLEVBQUVJLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDQyxRQUFRLENBQUMsQ0FBTyxTQUFHLENBQUM7Z0JBQ3ZDTCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQU87WUFDakMsQ0FBQztRQUNILENBQUMsTUFBTSxDQUFDO1lBQ05OLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDRyxHQUFHLENBQUMsQ0FBTztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU07O2lGQUVEQyxDQUFHO2dCQUFDQyxTQUFTLEtBQUtaLHVEQUFtQixLQUFLLElBQUksR0FBRyxDQUFPLFNBQUcsQ0FBTzs7Ozs7OzsrRkFDaEVXLENBQUc7b0JBQUNFLEVBQUUsRUFBQyxDQUFXOzs7Ozs7Ozs7WUFFcEJiLHVEQUFtQix3RUFDakJGLG9EQUFNO2dCQUNMZSxFQUFFLEVBQUMsQ0FBTTtnQkFDVEMsUUFBUSxFQUFDLENBQW1CO2dCQUM1QkMsR0FBRyxFQUFDLENBQWlCOzs7Ozs7O2lCQUd2QixDQUFFOzs7QUFJVixDQUFDO0FBRUQsaUVBQWVkLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiYW50dS8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmctU2NyZWVuL2luZGV4LmpzeD82OGI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IGxvYWRpbmdQYWNlIGZyb20gXCIuLi8uLi9jb21tb24vbG9hZGluZ1BhY2UuanNcIjtcclxuaW1wb3J0IGFwcERhdGEgZnJvbSBcIi4uLy4uL2RhdGEvYXBwLmpzb25cIjtcclxuXHJcbmNvbnN0IExvYWRpbmdTY3JlZW4gPSAoKSA9PiB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGlmIChhcHBEYXRhLnNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGxvYWRpbmdQYWNlKCk7XHJcblxyXG4gICAgICBpZiAoYm9keUVsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVYXCIpKSB7XHJcbiAgICAgICAgYm9keUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlWFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keUVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlWFwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FwcERhdGEuc2hvd0xvYWRpbmcgPT09IHRydWUgPyBcInNob3dYXCIgOiBcImhpZGVYXCJ9YH0+XHJcbiAgICAgICAgPGRpdiBpZD1cInByZWxvYWRlclwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2FwcERhdGEuc2hvd0xvYWRpbmcgPyAoXHJcbiAgICAgICAgPFNjcmlwdFxyXG4gICAgICAgICAgaWQ9XCJwYWNlXCJcclxuICAgICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgICAgc3JjPVwiL2pzL3BhY2UubWluLmpzXCJcclxuICAgICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNjcmlwdCIsImxvYWRpbmdQYWNlIiwiYXBwRGF0YSIsIkxvYWRpbmdTY3JlZW4iLCJ1c2VFZmZlY3QiLCJib2R5RWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzaG93TG9hZGluZyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJzdHJhdGVneSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Loading-Screen/index.jsx\n");
=======
>>>>>>> 82feb931f0e21dbf73a07f6c87001f655b67c7cf



<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_scrollToTo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/scrollToTo */ \"./src/common/scrollToTo.js\");\n\n\n\nconst ScrollToTop = ()=>{\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        (0,_common_scrollToTo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"progress-wrap cursor-pointer\",\n        __source: {\n            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Scroll-to-top\\\\index.jsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n            className: \"progress-circle svg-content\",\n            width: \"100%\",\n            height: \"100%\",\n            viewBox: \"-1 -1 102 102\",\n            __source: {\n                fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Scroll-to-top\\\\index.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                d: \"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Scroll-to-top\\\\index.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                },\n                __self: undefined\n            })\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JvbGwtdG8tdG9wL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ3dCO0FBRWpELEtBQUssQ0FBQ0UsV0FBVyxPQUFTLENBQUM7SUFDekJGLHNEQUFlLEtBQU8sQ0FBQztRQUNyQkMsOERBQVc7SUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSxzRUFDSEcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBOEI7Ozs7Ozs7dUZBQzFDQyxDQUFHO1lBQ0ZELFNBQVMsRUFBQyxDQUE2QjtZQUN2Q0UsS0FBSyxFQUFDLENBQU07WUFDWkMsTUFBTSxFQUFDLENBQU07WUFDYkMsT0FBTyxFQUFDLENBQWU7Ozs7Ozs7MkZBRXRCQyxDQUFJO2dCQUFDQyxDQUFDLEVBQUMsQ0FBNEM7Ozs7Ozs7Ozs7QUFJNUQsQ0FBQztBQUVELGlFQUFlVCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmFudHUvLi9zcmMvY29tcG9uZW50cy9TY3JvbGwtdG8tdG9wL2luZGV4LmpzeD82ZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHNjcm9sbFRvVG9wIGZyb20gXCIuLi8uLi9jb21tb24vc2Nyb2xsVG9Ub1wiO1xyXG5cclxuY29uc3QgU2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvVG9wKClcclxuICB9LCBbXSkgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLXdyYXAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWNpcmNsZSBzdmctY29udGVudFwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICB2aWV3Qm94PVwiLTEgLTEgMTAyIDEwMlwiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aCBkPVwiTTUwLDEgYTQ5LDQ5IDAgMCwxIDAsOTggYTQ5LDQ5IDAgMCwxIDAsLTk4XCIgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9Ub3A7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInNjcm9sbFRvVG9wIiwiU2Nyb2xsVG9Ub3AiLCJ1c2VFZmZlY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Scroll-to-top/index.jsx\n");
=======
>>>>>>> 82feb931f0e21dbf73a07f6c87001f655b67c7cf

const LoadingScreen = ()=>{
    external_react_default().useEffect(()=>{
        let bodyEl = document.querySelector("body");
        if (app/* showLoading */.QP) {
            common_loadingPace();
            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${app/* showLoading */.QP === true ? "showX" : "hideX"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "preloader"
                })
            }),
            app/* showLoading */.QP ? /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "pace",
                strategy: "beforeInteractive",
                src: "/js/pace.min.js"
            }) : ""
        ]
    }));
};
/* harmony default export */ const Loading_Screen = (LoadingScreen);

;// CONCATENATED MODULE: ./src/pages/_app.js

<<<<<<< HEAD
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Cursor */ \"./src/components/Cursor/index.jsx\");\n/* harmony import */ var _components_Scroll_to_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Scroll-to-top */ \"./src/components/Scroll-to-top/index.jsx\");\n/* harmony import */ var _components_Loading_Screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading-Screen */ \"./src/components/Loading-Screen/index.jsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 13,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"ABANTU.mx\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/public/favicon.ico\",\n                        __source: {\n                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 14,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Loading_Screen__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Scroll_to_top__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                strategy: \"beforeInteractive\",\n                id: \"wow\",\n                src: \"/js/wow.min.js\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                strategy: \"beforeInteractive\",\n                id: \"splitting\",\n                src: \"/js/splitting.min.js\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"simpleParallax\",\n                src: \"/js/simpleParallax.min.js\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                strategy: \"beforeInteractive\",\n                id: \"isotope\",\n                src: \"/js/isotope.pkgd.min.js\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                strategy: \"lazyOnload\",\n                id: \"initWow\",\n                src: \"/js/initWow.js\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNJO0FBQ1M7QUFDWTtBQUNHO0FBQzFCO1NBRXJCTSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNOztrRkFFRFAsa0RBQUk7Ozs7Ozs7O3lGQUNGUSxDQUFLOzs7Ozs7O2tDQUFDLENBQVM7O3lGQUNmQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQXFCOzs7Ozs7Ozs7O2lGQUU1Q1QsMERBQU07Ozs7Ozs7O2lGQUNORSxrRUFBYTs7Ozs7Ozs7aUZBQ2JELGlFQUFXOzs7Ozs7OztpRkFDWEcsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7aUZBRXZCTixvREFBTTtnQkFDTFcsUUFBUSxFQUFDLENBQW1CO2dCQUM1QkMsRUFBRSxFQUFDLENBQUs7Z0JBQ1JDLEdBQUcsRUFBQyxDQUFnQjs7Ozs7Ozs7aUZBR3JCYixvREFBTTtnQkFDTFcsUUFBUSxFQUFDLENBQW1CO2dCQUM1QkMsRUFBRSxFQUFDLENBQVc7Z0JBQ2RDLEdBQUcsRUFBQyxDQUFzQjs7Ozs7Ozs7aUZBRTNCYixvREFBTTtnQkFBQ1ksRUFBRSxFQUFDLENBQWdCO2dCQUFDQyxHQUFHLEVBQUMsQ0FBMkI7Ozs7Ozs7O2lGQUMxRGIsb0RBQU07Z0JBQ0xXLFFBQVEsRUFBQyxDQUFtQjtnQkFDNUJDLEVBQUUsRUFBQyxDQUFTO2dCQUNaQyxHQUFHLEVBQUMsQ0FBeUI7Ozs7Ozs7O2lGQUU5QmIsb0RBQU07Z0JBQ0xXLFFBQVEsRUFBQyxDQUFZO2dCQUNyQkMsRUFBRSxFQUFDLENBQVM7Z0JBQ1pDLEdBQUcsRUFBQyxDQUFnQjs7Ozs7Ozs7OztBQUk1QixDQUFDO0FBRUQsaUVBQWVULEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiYW50dS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBDdXJzb3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3Vyc29yXCI7XHJcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JvbGwtdG8tdG9wXCI7XHJcbmltcG9ydCBMb2FkaW5nU2NyZWVuIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmctU2NyZWVuXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BQkFOVFUubXg8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3B1YmxpYy9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEN1cnNvciAvPlxyXG4gICAgICA8TG9hZGluZ1NjcmVlbiAvPlxyXG4gICAgICA8U2Nyb2xsVG9Ub3AgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIGlkPVwid293XCJcclxuICAgICAgICBzcmM9XCIvanMvd293Lm1pbi5qc1wiXHJcbiAgICAgID5cclxuICAgICAgPC9TY3JpcHQ+XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCJcclxuICAgICAgICBpZD1cInNwbGl0dGluZ1wiXHJcbiAgICAgICAgc3JjPVwiL2pzL3NwbGl0dGluZy5taW4uanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgIDxTY3JpcHQgaWQ9XCJzaW1wbGVQYXJhbGxheFwiIHNyYz1cIi9qcy9zaW1wbGVQYXJhbGxheC5taW4uanNcIj48L1NjcmlwdD5cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIGlkPVwiaXNvdG9wZVwiXHJcbiAgICAgICAgc3JjPVwiL2pzL2lzb3RvcGUucGtnZC5taW4uanNcIlxyXG4gICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBzdHJhdGVneT1cImxhenlPbmxvYWRcIiBcclxuICAgICAgICBpZD1cImluaXRXb3dcIiBcclxuICAgICAgICBzcmM9XCIvanMvaW5pdFdvdy5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiU2NyaXB0IiwiQ3Vyc29yIiwiU2Nyb2xsVG9Ub3AiLCJMb2FkaW5nU2NyZWVuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwic3RyYXRlZ3kiLCJpZCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");
=======
>>>>>>> 82feb931f0e21dbf73a07f6c87001f655b67c7cf







function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "ABANTU.mx"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Cursor, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Loading_Screen, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Scroll_to_top, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "beforeInteractive",
                id: "wow",
                src: "/js/wow.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "beforeInteractive",
                id: "splitting",
                src: "/js/splitting.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "simpleParallax",
                src: "/js/simpleParallax.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "beforeInteractive",
                id: "isotope",
                src: "/js/isotope.pkgd.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "initWow",
                src: "/js/initWow.js"
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/img/logos/logo.png","Q1":"/img/logos/logo-alt.png","QP":true}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [455], () => (__webpack_exec__(2497)));
module.exports = __webpack_exports__;

})();