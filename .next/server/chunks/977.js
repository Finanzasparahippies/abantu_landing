"use strict";
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 6705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const API = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: 'http://127.0.0.1:8000/api',
    //baseURL: 'https://masterorohermosillo.com:444/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);


/***/ }),

/***/ 6802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fadeWhenScroll = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .caption")) {
            document.querySelectorAll(".fixed-slider .caption").forEach((caption)=>{
                caption.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
                caption.style.opacity = 1 - scrolled / 600;
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeWhenScroll);


/***/ }),

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    if (document.querySelector(".swiper-pagination")) {
        document.querySelector(".swiper-pagination").innerHTML = document.querySelector(".swiper-pagination").innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 2206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_us1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/data/sections/about-us1.json
const about_us1_namespaceObject = JSON.parse('{"Lx":"/img/blog/ubuntu.jpg","bH":"","TN":{"P":"ABANTU está inspirado en la filosofía UBUNTU","E":"soy porque nosotros somos."},"kQ":"Una filosofía de las tribus africanas Zulú y Xhosa enfocada en el TRABAJO EN EQUIPO, COLABORACIÓN y SOLIDARIDAD. UBUNTU es una filosofía que nos enseña que la humanidad está interconectada y que la felicidad y el éxito de uno dependen del bienestar de todos. En ABANTU, creemos que la colaboración y la solidaridad son la clave para el éxito y la felicidad de todos. Por eso, trabajamos juntos para crear un mundo mejor para todos."}');
;// CONCATENATED MODULE: ./src/components/About-us1/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const AboutUs1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "about section-padding",
        style: {
            backgroundColor: "#000000",
            paddingBottom: "10px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            style: {
                paddingTop: "10px"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-mons",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-2 cmd-padding valign"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-7 cmd-padding",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img2 wow imago",
                                            "data-wow-delay": ".3s",
                                            style: {
                                                alignContent: "center",
                                                width: "380px",
                                                height: "400px"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: about_us1_namespaceObject.Lx,
                                                alt: ""
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: about_us1_namespaceObject.bH
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        style: {
                                            color: "#ffffff"
                                        },
                                        className: "words chars splitting main-title wow",
                                        "data-splitting": true,
                                        children: [
                                            about_us1_namespaceObject.TN.P,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                            }),
                                            " ",
                                            about_us1_namespaceObject.TN.E
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "words chars splitting wow txt",
                                        "data-splitting": true,
                                        children: about_us1_namespaceObject.kQ
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ftbox mt-30"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const About_us1 = (AboutUs1);


/***/ }),

/***/ 9276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8636);
/* harmony import */ var _common_API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6705);

/* eslint-disable @next/next/no-img-element */ 



const BlogsThreeColumn2 = ({ subBG  })=>{
    const { 0: noticias , 1: setNoticias  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getNoticias = async ()=>{
            const response = await _common_API__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get('/blog/posts/home');
            setNoticias(response.data);
        };
        getNoticias();
    }, []);
    return console.log(noticias), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `blog-grid section-padding ${subBG ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "sec-head custom-font text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                            className: "wow fadeIn py-6",
                            "data-wow-delay": ".5s",
                            style: {
                                color: "#FFFFFF"
                            },
                            children: "Mantente al tanto"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "wow words chars splitting",
                                "data-splitting": true,
                                children: "Ultimas Noticias."
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "tbg",
                            children: "Noticias"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: noticias ? noticias.map((noticia, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: {
                                    pathname: "/detalle-noticia",
                                    query: {
                                        id: noticia.id
                                    }
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "item list md-mb50 wow fadeInUp",
                                    "data-wow-delay": ".3s",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "img",
                                            style: {
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                style: {
                                                    width: "auto",
                                                    height: 150
                                                },
                                                src: noticia.main_image,
                                                alt: "image"
                                            })
                                        }, id),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "cont",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "date custom-font",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: noticia.created_at.split('T')[0]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    children: noticia.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    style: {
                                                        marginBottom: 20
                                                    },
                                                    children: noticia.excerpt
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "btn-more custom-font",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "simple-btn",
                                                        children: "Leer M\xe1s"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, id)
                    ) : null
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogsThreeColumn2);


/***/ }),

/***/ 6469:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5754);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8636);
/* harmony import */ var _common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6802);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay
]);
const IntroWithSlider2 = ()=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        setTimeout(()=>{
            setLoad(false);
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "slider slider-prlx",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    speed: 1000,
                    autoplay: true,
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        type: "fraction",
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`,
                                    objectFit: "cover",
                                    backgroundPosition: "center center"
                                },
                                "data-overlay-dark": "6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    style: {
                                        marginTop: "100px"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-12",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "caption dig",
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Split__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                style: {
                                                                    color: "#fff",
                                                                    fontSize: "18px",
                                                                    fontWeight: "bold",
                                                                    letterSpacing: "2px",
                                                                    marginBottom: "10px",
                                                                    width: "310px",
                                                                    height: "auto",
                                                                    textAlign: "left"
                                                                },
                                                                children: slide.description
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: "words chars splitting",
                                                                children: typeof slide.title === "object" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: [
                                                                        slide.title.first,
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "tline",
                                                                            children: slide.title.second
                                                                        })
                                                                    ]
                                                                }) : slide.title
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                        href: slide.button.link,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "btn-curve btn-lit mt-30",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: slide.button.text
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id)
                    )
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "setone setwo",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationNextRef,
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-right"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationPrevRef,
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroWithSlider2);

});

/***/ }),

/***/ 5715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);




const Services1 = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "services",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sec-head custom-font text-center"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-3 col-md-6 bg-img wow fadeInLeft",
                                "data-wow-delay": ".3s",
                                style: {
                                    backgroundImage: "url(/img/logos/banner_services.jpg)",
                                    objectFit: "contain",
                                    backgroundPosition: "center",
                                    height: "300px"
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box wow fadeInLeft",
                                "data-wow-delay": ".5s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/img/logos/network.png",
                                        alt: "icon",
                                        style: {
                                            width: "100px"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Colaboraci\xf3n Comunitaria"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "En ABANTU creemos que a trav\xe9s de la colaboraci\xf3n en comunidad nos podemos ayudar de manera genuina.            "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box wow fadeInLeft",
                                "data-wow-delay": ".7s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/img/logos/hand.png",
                                        alt: "icon",
                                        style: {
                                            width: "100px"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Ingresos Extras"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "La plataforma de ABANTU crea un ingreso extra para cada uno de sus usuarios."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-3 col-md-6 item-box wow fadeInLeft",
                                "data-wow-delay": ".9s",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/img/logos/financial-profit.png",
                                        alt: "icon",
                                        style: {
                                            width: "100px"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: "Flujo de Efectivo"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "La comunidad ABANTU cuenta con un sistema que tiene el objetivo de crear un flujo de efectivo en la comunidad."
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "half-bg bottom"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services1);


/***/ }),

/***/ 6485:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _data_showcases_full_screen_slider_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(265);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Mousewheel
]);
const ShowcasesFullScreenCircleSlide = ()=>{
    const [load, setLoad] = React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
        });
    }, []);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return(/*#__PURE__*/ _jsxs("header", {
        className: "slider circle-slide showcase-carus",
        children: [
            /*#__PURE__*/ _jsx("div", {
                id: "content-carousel-container-unq-1",
                className: "swiper-container",
                children: !load ? /*#__PURE__*/ _jsx(Swiper, {
                    speed: 1000,
                    mousewheel: true,
                    parallax: true,
                    centeredSlides: true,
                    slidesPerView: 1,
                    autoplay: true,
                    spaceBetween: 500,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    },
                    className: "swiper-wrapper",
                    breakpoints: {
                        0: {
                            spaceBetween: 0
                        },
                        640: {
                            spaceBetween: 0
                        },
                        768: {
                            spaceBetween: 30
                        },
                        1024: {
                            spaceBetween: 500
                        }
                    },
                    children: ShowcassesFullScreenData.map((slide)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "full-width",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "bg-img valign",
                                    style: {
                                        backgroundImage: `url(${slide.image})`
                                    },
                                    "data-overlay-dark": "1",
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "caption ontop valign",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "o-hidden",
                                                children: /*#__PURE__*/ _jsx("h1", {
                                                    "data-swiper-parallax": "-2000",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/project-details2/project-details2-dark",
                                                        children: /*#__PURE__*/ _jsxs("a", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "stroke",
                                                                    children: slide.title.first
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: slide.title.second
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "copy-cap valign",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "cap",
                                                children: /*#__PURE__*/ _jsx("h1", {
                                                    "data-swiper-parallax": "-2000",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/project-details2/project-details2-dark",
                                                        children: /*#__PURE__*/ _jsxs("a", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "stroke",
                                                                    children: slide.title.first
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    children: slide.title.second
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }, slide.id)
                    )
                }) : null
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "txt-botm",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        ref: navigationNextRef,
                        className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("span", {
                                    children: "Siguiente"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("i", {
                                    className: "fas fa-chevron-right"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        ref: navigationPrevRef,
                        className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("i", {
                                    className: "fas fa-chevron-left"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("span", {
                                    children: "Anterior"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ShowcasesFullScreenCircleSlide)));

});

/***/ }),

/***/ 3325:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _data_sections_categorias_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(318);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_5__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Mousewheel
]);
const ShowcasesFullScreen = ()=>{
    const [load, setLoad] = React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
            removeSlashFromPagination();
        }, 1000);
    }, []);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const paginationRef = React.useRef(null);
    return(/*#__PURE__*/ _jsxs("header", {
        className: "slider showcase-full",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "swiper-container parallax-slider",
                children: !load ? /*#__PURE__*/ _jsx(Swiper, {
                    speed: 1000,
                    mousewheel: true,
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        clickable: true,
                        type: "fraction",
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: categorias.map((slide)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "4",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "col-lg-10 offset-lg-1",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "caption",
                                                children: /*#__PURE__*/ _jsx("h1", {
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/project-details2/project-details2-dark",
                                                        children: /*#__PURE__*/ _jsxs("a", {
                                                            children: [
                                                                /*#__PURE__*/ _jsx("div", {
                                                                    className: "stroke",
                                                                    "data-swiper-parallax": "-2000",
                                                                    children: slide.name
                                                                }),
                                                                /*#__PURE__*/ _jsx("span", {
                                                                    "data-swiper-parallax": "-5000",
                                                                    children: slide.name
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id)
                    )
                }) : null
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "swiper-pagination dots",
                ref: paginationRef
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "txt-botm",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        ref: navigationNextRef,
                        className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: " custom-font",
                                    children: "Categoria Anterior"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("i", {
                                    className: "fas fa-chevron-right"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        ref: navigationPrevRef,
                        className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("i", {
                                    className: "fas fa-chevron-left"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: " custom-font",
                                    children: "Categoria Siguiente"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "swiper-pagination steps custom-font",
                ref: paginationRef
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ShowcasesFullScreen)));

});

/***/ }),

/***/ 8624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6705);

/* eslint-disable @next/next/no-img-element */ 






const VideoInicio = ()=>{
    var ref, ref1, ref2;
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.clear();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // const [videos, setVideos] = useState([]);
    // useEffect(() => {
    //   const getVideos = async () => {
    //     const response = await API.get('/galeria/videos');
    //     setVideos(response.data);
    //   }
    //   getVideos();
    // }
    // , []);
    const videos = [
        {
            id: 1,
            texto: "As\xed se forman las Redes de Contribuci\xf3n ABANTU",
            url: "https://www.youtube.com/watch?v=_89SJbL1dek",
            image: "/img/logos/coingrow.jpg"
        }, 
    ];
    return console.log(videos), /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "block-sec",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "background bg-img section-padding pb-3",
            style: {
                backgroundImage: `url(${(ref = videos[0]) === null || ref === void 0 ? void 0 : ref.image})`,
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                backgroundSize: "cover"
            },
            "data-overlay-dark": "8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "vid-area",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "vid-icon",
                                        style: {
                                            position: "relative"
                                        },
                                        children: [
                                             false && /*#__PURE__*/ 0,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "vid",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    setOpen(true);
                                                },
                                                href: "https://www.youtube.com/watch?v=u2KXu6RQ2Ys",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "vid-butn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-play",
                                                            style: {
                                                                color: "#05e09c"
                                                            }
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "wow",
                                                    "data-splitting": true,
                                                    style: {
                                                        textAlign: "center",
                                                        alignContent: "center",
                                                        position: "relative"
                                                    },
                                                    children: (ref2 = videos[0]) === null || ref2 === void 0 ? void 0 : ref2.texto
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5 offset-lg-1"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoInicio);


/***/ }),

/***/ 5745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_works1Slider_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9590);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




// import Swiper core and required modules





swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation
]);
const Works1Slider = ()=>{
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "work-carousel section-padding pt-0 metro position-re",
        style: {
            zIndex: 0
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container ontop",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-12 no-padding",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            style: {
                                textAlign: "center"
                            },
                            children: "Conoce nuestras Redes de Contribuci\xf3n"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "swiper-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                    className: "swiper-wrapper",
                                    slidesPerView: 3,
                                    centeredSlides: true,
                                    loop: true,
                                    navigation: {
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current
                                    },
                                    onBeforeInit: (swiper)=>{
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                    },
                                    onSwiper: (swiper)=>{
                                        setTimeout(()=>{
                                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                                            swiper.params.navigation.nextEl = navigationNextRef.current;
                                            swiper.navigation.destroy();
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                        });
                                    },
                                    autoplay: {
                                        delay: 2500,
                                        disableOnInteraction: false
                                    },
                                    speed: 2000,
                                    breakpoints: {
                                        320: {
                                            slidesPerView: 1,
                                            spaceBetween: 0
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 0
                                        },
                                        767: {
                                            slidesPerView: 2,
                                            spaceBetween: 0,
                                            centeredSlides: false
                                        },
                                        991: {
                                            slidesPerView: 3,
                                            spaceBetween: 0,
                                            centeredSlides: true,
                                            left: "50px"
                                        }
                                    },
                                    children: _data_sections_works1Slider_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                            className: "swiper-slide",
                                            style: {
                                                justifyContent: "center",
                                                alignItems: "center",
                                                paddingBottom: "150px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "content wow noraidus fadeInUp",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "item-img bg-img wow imago animate__fadeIn",
                                                    style: {
                                                        width: "380px",
                                                        height: "680px",
                                                        backgroundColor: "#05e09c",
                                                        // backgroundImage: `url(${slide.img})`,
                                                        // objectFit:"contain",
                                                        paddingBottom: "750px",
                                                        borderRadius: "50px",
                                                        position: "relative",
                                                        textAlign: "center"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "cont",
                                                        style: {
                                                            backgroundColor: "#FFFFFF",
                                                            color: "#019D85",
                                                            width: "300px",
                                                            height: "180px",
                                                            position: "absolute",
                                                            top: "15%",
                                                            left: "50%",
                                                            transform: "translate(-50%, -50%)",
                                                            textAlign: "center",
                                                            borderWidth: "6px !important",
                                                            border: "solid #019D85",
                                                            borderRadius: "50px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "10%",
                                                                    fontSize: "32px",
                                                                    textAlign: "center"
                                                                },
                                                                className: "color-font",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                    href: "https://comunidad.abantu.mx/inicio/redes",
                                                                    children: slide.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                style: {
                                                                    position: "absolute",
                                                                    top: "60%",
                                                                    left: "37%"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                    href: "https://comunidad.abantu.mx/inicio/redes",
                                                                    children: slide.secTex
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                    style: {
                                                                        position: "absolute",
                                                                        marginTop: "-20px",
                                                                        marginBottom: "20px",
                                                                        top: "130%",
                                                                        left: "0%",
                                                                        width: "300px",
                                                                        backgroundColor: "#019D85",
                                                                        color: "#FFFFFF",
                                                                        textAlign: "center",
                                                                        margin: "0",
                                                                        fontSize: "20px",
                                                                        fontWeight: "bold",
                                                                        whiteSpace: "wrap",
                                                                        padding: "30px",
                                                                        borderRadius: "50px"
                                                                    },
                                                                    children: [
                                                                        slide.description,
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                href: slide.button.link,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    className: "btn-curve btn mt-1",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "360%",
                                                                        left: "15%",
                                                                        alignSelf: "center",
                                                                        textAlign: "center",
                                                                        color: "#019D85",
                                                                        backgroundColor: "#FFFFFF"
                                                                    },
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        style: {
                                                                            fontSize: "18px",
                                                                            fontWeight: "bolder"
                                                                        },
                                                                        children: slide.button.text
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        }, slide.id)
                                    )
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: navigationNextRef,
                                    className: "swiper-button-next swiper-nav-ctrl simp-next cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "simple-btn right",
                                        children: "Siguiente"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: navigationPrevRef,
                                    className: "swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "simple-btn",
                                        style: {
                                            marginLeft: "auto"
                                        },
                                        children: "Anterior"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works1Slider);

});

/***/ }),

/***/ 8977:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Blogs_three_column2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9276);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1690);
/* harmony import */ var _components_Intro_with_slider2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6469);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1696);
/* harmony import */ var _layouts_Green__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(730);
/* harmony import */ var _components_VideoInicio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8624);
/* harmony import */ var _components_Showcases_full_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3325);
/* harmony import */ var _components_Showcases_full_screen_circle_slide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6485);
/* harmony import */ var _components_Works1_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5745);
/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5715);
/* harmony import */ var _components_About_us1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2206);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Works1_slider__WEBPACK_IMPORTED_MODULE_10__, _components_Intro_with_slider2__WEBPACK_IMPORTED_MODULE_4__, _components_Showcases_full_screen_circle_slide__WEBPACK_IMPORTED_MODULE_9__, _components_Showcases_full_screen__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Works1_slider__WEBPACK_IMPORTED_MODULE_10__, _components_Intro_with_slider2__WEBPACK_IMPORTED_MODULE_4__, _components_Showcases_full_screen_circle_slide__WEBPACK_IMPORTED_MODULE_9__, _components_Showcases_full_screen__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













const Homepage4 = ()=>{
    const fixedSlider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const MainContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navbarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const logoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInterval(()=>{
            if (fixedSlider.current) {
                var slidHeight = fixedSlider.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        }, 1000);
        var navbar = navbarRef.current;
        if (window.scrollY > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [
        fixedSlider,
        MainContent,
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Green__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                nr: navbarRef,
                lr: logoRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro_with_slider2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                sliderRef: fixedSlider
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: MainContent,
                className: "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blogs_three_column2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        subBG: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_us1__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Works1_slider__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services1__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_VideoInicio__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        id: "footer-half"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage4);

});

/***/ }),

/***/ 318:
/***/ ((module) => {

module.exports = [];

/***/ }),

/***/ 5754:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"ABANTU","second":"Felices de Ayudar"},"image":"/img/logos/monedas.jpg","button":{"text":"Conoce más","link":"https://comunidad.abantu.mx/"},"description":"ABANTU es una comunidad de ayuda que organiza a sus miembros para enviar y recibir donaciones mensuales a través de Redes de Contribución que crean un Flujo de Efectivo dentro de la comunidad"},{"id":2,"title":{"first":"Comunidad ABANTU","second":""},"image":"/img/logos/unidos.jpg","button":{"text":"Únete a la comunidad","link":"https://comunidad.abantu.mx/"}},{"id":3,"title":{"first":"Redes Sociales","second":""},"image":"/img/logos/redes.jpg","button":{"text":"Síguenos en todas nuestras redes","link":"https://abantu.mx/#footer-half"}}]');

/***/ }),

/***/ 9590:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":"Red de Contribución","secTex":"100","description":"La Red de Contribución de $100 pesos mxn es la red con la que te sugerimos iniciar para familiarizarte y comprobar el funcionamiento de la plataforma. Con esta Red generas hasta $3,000 pesos mxn al mes. ","slug":"https://comunidad.abantu.mx/inicio/redes","img":"/img/logos/greencard.jpg","button":{"text":"Registrarme","link":"https://comunidad.abantu.mx/inicio/redes"}},{"id":2,"title":"Red de Contribución","secTex":"500","description":"La Red de Contribución de $500 pesos mxn es nuestra segunda opción para que aumenten tus beneficios en la plataforma. Con esta Red puedes generar hasta $15,000 pesos mxn al mes.","slug":"https://comunidad.abantu.mx/inicio/redes","img":"/img/logos/greencard.jpg","button":{"text":"Registrarme","link":"https://comunidad.abantu.mx/inicio/redes"}},{"id":3,"title":"Red de Contribución","secTex":"1000","description":"La Red de Contribución de $1,000 pesos mxn es la red que más aporta a los miembros de ABANTU. Siguiendo la misma dinámica que las redes anteriores, con esta Red generas hasta $30,000 pesos mxn cada mes.","slug":"/https://comunidad.abantu.mx/inicio/redes","img":"/img/logos/greencard.jpg","button":{"text":"Registrarme","link":"https://comunidad.abantu.mx/inicio/redes"}}]');

/***/ }),

/***/ 265:
/***/ ((module) => {

module.exports = [];

/***/ })

};
;