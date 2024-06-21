"use strict";
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 3766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_inner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./assets/images/abanti.png
var abanti = __webpack_require__(7187);
var abanti_default = /*#__PURE__*/__webpack_require__.n(abanti);
// EXTERNAL MODULE: ./assets/images/abanti2.png
var abanti2 = __webpack_require__(7325);
var abanti2_default = /*#__PURE__*/__webpack_require__.n(abanti2);
// EXTERNAL MODULE: ./components/header/nav-links-inner.js
var nav_links_inner = __webpack_require__(257);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/header/nav-links-inner2.js



const NavLinksInner2 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "main-nav__navigation-box2 one-page-scroll-menu",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Inicio"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/#filosofia",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Filosof\xeda"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/#redes",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Redes"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/#video",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "As\xed se forman las Redes"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/#preguntas-frecuentes",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Preguntas Frecuentes"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const nav_links_inner2 = (NavLinksInner2);

;// CONCATENATED MODULE: ./components/header/header-inner.js







const HeaderInner = ()=>{
    const { 0: sticky , 1: setSticky  } = (0,external_react_.useState)(false);
    const handleScroll = ()=>{
        if (window.scrollY > 70) {
            setSticky(true);
        } else if (window.scrollY < 70) {
            setSticky(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        mobileMenu();
        return ()=>{
            mobileMenu();
            window.removeEventListener("scroll", handleScroll);
        };
    });
    const mobileMenu = ()=>{
        document.querySelectorAll(".side-menu__toggler").forEach((btn)=>{
            btn.addEventListener("click", function(e) {
                document.querySelector(".side-menu__block").classList.toggle("active");
                e.preventDefault();
            });
        });
        document.querySelectorAll(".side-menu__toggler2").forEach((btn)=>{
            btn.addEventListener("click", function(e) {
                document.querySelector(".side-menu__block").classList.toggle("active");
                e.preventDefault();
            });
        });
        //Close Mobile Menu
        let sideMenuCloser = document.querySelectorAll(".side-menu__close-btn, .side-menu__block-overlay");
        sideMenuCloser.forEach((sideMenuCloserBtn)=>{
            sideMenuCloserBtn.addEventListener("click", function(e) {
                document.querySelector(".side-menu__block").classList.remove("active");
                e.preventDefault();
            });
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `site-header-one stricky `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                    fluid: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "site-header-one__logo",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: (abanti_default()),
                                        width: "180",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "side-menu__toggler",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-bars"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-nav__main-navigation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(nav_links_inner/* default */.Z, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-nav__right",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://comunidad.abantu.mx",
                                className: "thm-btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Iniciar Sesi\xf3n / Registrarse"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `site-header-one stricked-menu  site-header-one__fixed-top ${sticky === true ? "stricky-fixed" : null}  `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
                    fluid: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "site-header-one__logo2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: (abanti2_default()),
                                        width: "180",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "side-menu__toggler2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-bars"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-nav__main-navigation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(nav_links_inner2, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-nav__right",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://comunidad.abantu.mx",
                                className: "thm-btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Iniciar Sesi\xf3n / Registrarse"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const header_inner = (HeaderInner);


/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);




const NavLinksInner = ()=>{
    const handleDropdownStatus = (e)=>{
        let clickedItem = e.currentTarget.parentNode;
        clickedItem.querySelector(".dropdown-list").classList.toggle("show");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "main-nav__navigation-box one-page-scroll-menu",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "Inicio"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/#filosofia",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "Filosof\xeda"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/#redes",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "Redes"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/#video",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "As\xed se forman las Redes"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/#preguntas-frecuentes",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: "Preguntas Frecuentes"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLinksInner);


/***/ }),

/***/ 5548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_shapes_close_1_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6743);
/* harmony import */ var _images_shapes_close_1_1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_shapes_close_1_1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header_nav_links_inner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(257);




const MobileNavInner = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "side-menu__block",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "side-menu__block-overlay custom-cursor__overlay",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cursor"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cursor-follower"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "side-menu__block-inner ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "side-menu__top justify-content-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            className: "side-menu__toggler side-menu__close-btn",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: (_images_shapes_close_1_1_png__WEBPACK_IMPORTED_MODULE_2___default()),
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: "mobile-nav__container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_nav_links_inner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "side-menu__sep"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "main-nav__right",
                        style: {
                            marginLeft: "20px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://comunidad.abantu.mx",
                            className: "thm-btn",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Iniciar Sesi\xf3n / Registrarse"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNavInner);


/***/ }),

/***/ 5724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



const PageHeader = ({ title , crumbTitle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "page-header",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "list-unstyled thm-breadcrumb",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/",
                                children: "Inicio"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: crumbTitle
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);


/***/ })

};
;