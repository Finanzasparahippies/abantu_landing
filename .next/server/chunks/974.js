"use strict";
exports.id = 974;
exports.ids = [974];
exports.modules = {

/***/ 8063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initIsotope = ()=>{
    var grid = document.querySelectorAll(".gallery");
    var iso;
    grid.forEach((item)=>{
        iso = new Isotope(item, {
            itemSelector: ".items"
        });
    });
    var filtersElem = document.querySelector(".filtering");
    if (filtersElem) {
        filtersElem.addEventListener("click", function(event) {
            if (!matchesSelector(event.target, "span")) {
                return;
            }
            var filterValue = event.target.getAttribute("data-filter");
            filterValue = filterValue;
            iso.arrange({
                filter: filterValue
            });
        });
        var buttonGroups = document.querySelectorAll(".filtering");
        for(var i = 0, len = buttonGroups.length; i < len; i++){
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }
        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener("click", function(event) {
                if (!matchesSelector(event.target, "span")) {
                    return;
                }
                buttonGroup.querySelector(".active").classList.remove("active");
                event.target.classList.add("active");
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initIsotope);


/***/ }),

/***/ 2623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SmallFooter = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "footer-half sub-bg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "copyrights text-center mt-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " ",
                        "Desarrollado por",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            children: "Desersoft"
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmallFooter);


/***/ })

};
;