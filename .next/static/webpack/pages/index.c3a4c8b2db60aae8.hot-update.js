"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Footer/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n/* harmony import */ var _Contact_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Contact-section */ \"./src/components/Contact-section/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\nvar _this = undefined;\nvar Footer = function(param) {\n    var noSubBG = param.noSubBG;\n    var validateEmail = function validateEmail(value) {\n        var error;\n        if (!value) {\n            error = \"Required\";\n        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(value)) {\n            error = \"Correo invalido\";\n        }\n        return error;\n    };\n    var sendEmail = function(ms) {\n        return new Promise(function(r) {\n            return setTimeout(r, ms);\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n        __source: {\n            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                className: \"footer-half \".concat(noSubBG ? '' : 'sub-bg', \" pb-0\"),\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"container\",\n                        __source: {\n                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 7\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: \"\".concat(_data_app_json__WEBPACK_IMPORTED_MODULE_2__.lightLogo),\n                                alt: \"\",\n                                style: {\n                                    width: 250\n                                },\n                                __source: {\n                                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"cont\",\n                                __source: {\n                                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"logo\",\n                                        __source: {\n                                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"con-info custom-font\",\n                                        style: {\n                                            whiteSpace: 'nowrap'\n                                        },\n                                        __source: {\n                                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                                            __source: {\n                                                fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                                    __source: {\n                                                        fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                        lineNumber: 28,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this,\n                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                                        style: {\n                                                            color: \"#FFF\"\n                                                        },\n                                                        className: \" wow words chars splitting\",\n                                                        __source: {\n                                                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                            lineNumber: 29,\n                                                            columnNumber: 21\n                                                        },\n                                                        __self: _this,\n                                                        children: \"Contactos: \"\n                                                    })\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                                                    __source: {\n                                                        fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                        lineNumber: 31,\n                                                        columnNumber: 21\n                                                    },\n                                                    __self: _this,\n                                                    children: [\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h6\", {\n                                                            style: {\n                                                                color: \"#FFF\"\n                                                            },\n                                                            __source: {\n                                                                fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                                lineNumber: 31,\n                                                                columnNumber: 30\n                                                            },\n                                                            __self: _this,\n                                                            children: \"felicesdeayudar@abantu.mx\"\n                                                        })\n                                                    ]\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                                    __source: {\n                                                        fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                        lineNumber: 32,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h6\", {\n                                                    style: {\n                                                        color: \"#FFF\"\n                                                    },\n                                                    __source: {\n                                                        fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                        lineNumber: 34,\n                                                        columnNumber: 21\n                                                    },\n                                                    __self: _this,\n                                                    children: \" felicesdeayudar@gmail.com\"\n                                                }),\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                                    __source: {\n                                                        fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                        lineNumber: 35,\n                                                        columnNumber: 19\n                                                    },\n                                                    __self: _this\n                                                })\n                                            ]\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"social-icon\",\n                                        __source: {\n                                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h6\", {\n                                                className: \"custom-font stit simple-btn\",\n                                                __source: {\n                                                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Siguenos en nuestras Redes Sociales\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                                className: \"social\",\n                                                __source: {\n                                                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: \"https://www.facebook.com/profile.php?id=100095195865538\",\n                                                        className: \"icon\",\n                                                        target: \"_blank\",\n                                                        __source: {\n                                                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                            lineNumber: 42,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                            className: \"fab fa-facebook-f\",\n                                                            __source: {\n                                                                fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                                lineNumber: 43,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: \"https://www.instagram.com/abantufelicesdeayudar/\",\n                                                        className: \"icon\",\n                                                        target: \"_blank\",\n                                                        __source: {\n                                                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                            lineNumber: 45,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                            className: \"fab fa-instagram\",\n                                                            __source: {\n                                                                fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                                lineNumber: 46,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: \"https://www.youtube.com/@abantu-felicesdeayudar\",\n                                                        className: \"icon\",\n                                                        target: \"_blank\",\n                                                        __source: {\n                                                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                            lineNumber: 48,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                            className: \"fab fa-youtube\",\n                                                            __source: {\n                                                                fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                                lineNumber: 49,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: \"https://twitter.com/abantumx\",\n                                                        className: \"icon\",\n                                                        target: \"_blank\",\n                                                        __source: {\n                                                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                            className: \"fab fa-twitter\",\n                                                            __source: {\n                                                                fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                                lineNumber: 52,\n                                                                columnNumber: 21\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    }),\n                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                        href: \"https://wa.me/5216623669348\",\n                                                        className: \"icon\",\n                                                        target: \"_blank\",\n                                                        __source: {\n                                                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                            lineNumber: 54,\n                                                            columnNumber: 19\n                                                        },\n                                                        __self: _this,\n                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                                                            className: \"fab fa-whatsapp\",\n                                                            __source: {\n                                                                fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                                                lineNumber: 55,\n                                                                columnNumber: 19\n                                                            },\n                                                            __self: _this\n                                                        })\n                                                    })\n                                                ]\n                                            })\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Contact_section__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        __source: {\n                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"w-100\",\n                __source: {\n                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"copyrights text-center\",\n                    __source: {\n                        fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        __source: {\n                            fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            \"\\xa9 2024, Sitio web desarrollado por \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"#0\",\n                                __source: {\n                                    fileName: \"E:\\\\Documents\\\\Proyectos\\\\abantu_landing\\\\src\\\\components\\\\Footer\\\\index.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 48\n                                },\n                                __self: _this,\n                                children: \"Desersoft\"\n                            }),\n                            \".\"\n                        ]\n                    })\n                })\n            })\n        ]\n    }));\n};\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFrRDt3REFBQ2QsU0FBUyxFQUFDLENBQU07d0RBQUNlLE1BQU0sRUFBQyxDQUFROzs7Ozs7O3VJQUN4RkMsQ0FBQzs0REFBQ2hCLFNBQVMsRUFBQyxDQUFrQjs7Ozs7Ozs7O3lIQUVoQ2EsQ0FBQzt3REFBQ0MsSUFBSSxFQUFDLENBQWlEO3dEQUFDZCxTQUFTLEVBQUMsQ0FBTTt3REFBQ2UsTUFBTSxFQUFDLENBQVE7Ozs7Ozs7dUlBQ3ZGQyxDQUFDOzREQUFDaEIsU0FBUyxFQUFDLENBQWdCOzs7Ozs7Ozs7eUhBRTlCYSxDQUFDO3dEQUFDQyxJQUFJLEVBQUMsQ0FBOEI7d0RBQUNkLFNBQVMsRUFBQyxDQUFNO3dEQUFDZSxNQUFNLEVBQUMsQ0FBUTs7Ozs7Ozt1SUFDcEVDLENBQUM7NERBQUNoQixTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozt5SEFFOUJhLENBQUM7d0RBQUNDLElBQUksRUFBQyxDQUE2Qjt3REFBQ2QsU0FBUyxFQUFDLENBQU07d0RBQUNlLE1BQU0sRUFBQyxDQUFROzs7Ozs7O3VJQUNyRUMsQ0FBQzs0REFBQ2hCLFNBQVMsRUFBQyxDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7eUZBTWpDaEIsd0RBQWM7Ozs7Ozs7Ozs7aUZBRWhCYSxDQUFHO2dCQUFDRyxTQUFTLEVBQUMsQ0FBTzs7Ozs7OzsrRkFDekJILENBQUc7b0JBQUNHLFNBQVMsRUFBQyxDQUF3Qjs7Ozs7OztvR0FDcENpQixDQUFDOzs7Ozs7Ozs0QkFBQyxDQUNrQztpR0FBQ0osQ0FBQztnQ0FBQ0MsSUFBSSxFQUFDLENBQUk7Ozs7Ozs7MENBQUMsQ0FBUzs7NEJBQUksQ0FDL0Q7Ozs7Ozs7QUFLVixDQUFDO0tBakVLN0IsTUFBTTtBQW1FWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qc3g/YTljOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IGFwcERhdGEgZnJvbSBcIi4uLy4uL2RhdGEvYXBwLmpzb25cIjtcclxuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCIuLi9Db250YWN0LXNlY3Rpb25cIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IG5vU3ViQkcgfSkgPT4ge1xyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwodmFsdWUpIHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgZXJyb3IgPSBcIlJlcXVpcmVkXCI7XHJcbiAgICB9IGVsc2UgaWYgKCEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKSkge1xyXG4gICAgICBlcnJvciA9IFwiQ29ycmVvIGludmFsaWRvXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChtcykgPT4gbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgbXMpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgPGRpdiBzdHlsZT17IHsgdGV4dEFsaWduOlwiY2VudGVyXCJ9IH0gIGNsYXNzTmFtZT17YGZvb3Rlci1oYWxmICR7bm9TdWJCRyA/ICcnOidzdWItYmcnfSBwYi0wYH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YCR7YXBwRGF0YS5saWdodExvZ299YH0gYWx0PVwiXCIgc3R5bGU9e3sgd2lkdGg6IDI1MH19Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb24taW5mbyBjdXN0b20tZm9udFwiIHN0eWxlPXsgeyB3aGl0ZVNwYWNlOidub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXsgeyBjb2xvcjpcIiNGRkZcIn19IGNsYXNzTmFtZT1cIiB3b3cgd29yZHMgY2hhcnMgc3BsaXR0aW5nXCI+Q29udGFjdG9zOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+IDxoNiBzdHlsZT17IHsgY29sb3I6XCIjRkZGXCJ9fT5mZWxpY2VzZGVheXVkYXJAYWJhbnR1Lm14PC9oNj48L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBzdHlsZT17IHsgY29sb3I6XCIjRkZGXCJ9fT4gZmVsaWNlc2RlYXl1ZGFyQGdtYWlsLmNvbTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwic29jaWFsLWljb25cIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjdXN0b20tZm9udCBzdGl0IHNpbXBsZS1idG5cIj5TaWd1ZW5vcyBlbiBudWVzdHJhcyBSZWRlcyBTb2NpYWxlczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTEwMDA5NTE5NTg2NTUzOFwiIGNsYXNzTmFtZT1cImljb25cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hYmFudHVmZWxpY2VzZGVheXVkYXIvXCIgY2xhc3NOYW1lPVwiaWNvblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL0BhYmFudHUtZmVsaWNlc2RlYXl1ZGFyXCIgY2xhc3NOYW1lPVwiaWNvblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS15b3V0dWJlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2FiYW50dW14XCIgY2xhc3NOYW1lPVwiaWNvblwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dhLm1lLzUyMTY2MjM2NjkzNDhcIiBjbGFzc05hbWU9XCJpY29uXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS13aGF0c2FwcFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPENvbnRhY3RTZWN0aW9uLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0cyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIMKpIDIwMjQsIFNpdGlvIHdlYiBkZXNhcnJvbGxhZG8gcG9yIDxhIGhyZWY9XCIjMFwiPkRlc2Vyc29mdDwvYT4uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybWlrIiwiRm9ybSIsIkZpZWxkIiwiYXBwRGF0YSIsIkNvbnRhY3RTZWN0aW9uIiwiRm9vdGVyIiwibm9TdWJCRyIsInZhbGlkYXRlRW1haWwiLCJ2YWx1ZSIsImVycm9yIiwidGVzdCIsInNlbmRFbWFpbCIsIm1zIiwiUHJvbWlzZSIsInIiLCJzZXRUaW1lb3V0IiwiZm9vdGVyIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJsaWdodExvZ28iLCJhbHQiLCJ3aWR0aCIsIndoaXRlU3BhY2UiLCJ1bCIsImxpIiwiaDQiLCJjb2xvciIsInN0cm9uZyIsImg2IiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJpIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Footer/index.jsx\n");

/***/ })

});