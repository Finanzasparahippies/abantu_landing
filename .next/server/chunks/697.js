"use strict";
exports.id = 697;
exports.ids = [697];
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

/***/ 1697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Portfolio_two_column)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/API.js
var API = __webpack_require__(6705);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(8063);
;// CONCATENATED MODULE: ./src/common/Modal.js


const modal = {
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 150,
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)"
};
const Modal_close = {
    position: "absolute",
    top: 15,
    right: 35,
    color: "#f1f1f1",
    fontSize: 40,
    fontWeight: "bold",
    cursor: "pointer"
};
const modalContent = {
    display: "flex",
    alignItems: "center",
    width: "85%",
    height: "100%",
    margin: "auto"
};
const Modal = ({ onOpen , children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: onOpen,
        children: [
            " ",
            children
        ]
    }));
};
const ModalContent = ({ onClose , children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: modal,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                style: Modal_close,
                onClick: onClose,
                children: "\xd7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: modalContent,
                children: children
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/Portfolio-two-column/index.jsx

/* eslint-disable @next/next/no-img-element */ 



const PortfolioTwoColumn = ()=>{
    const { 0: isOpen , 1: setIsopen  } = (0,external_react_.useState)(false);
    const showModal = ()=>setIsopen((prev)=>!prev
        )
    ;
    const { 0: imageUrl , 1: setImageUrl  } = (0,external_react_.useState)("");
    const { 0: pageLoaded , 1: setPageLoaded  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            setTimeout(()=>{
                (0,initIsotope/* default */.Z)();
            }, 1000);
        }
    }, [
        pageLoaded
    ]);
    const { 0: imagenes , 1: setImagenes  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const getNoticias = async ()=>{
            const response = await API/* default.get */.Z.get('/galeria/images');
            setImagenes(response.data);
        };
        getNoticias();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "portfolio section-padding pb-70",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "gallery full-width",
                children: imagenes.map((imagen)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Modal, {
                                onOpen: showModal,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-6 items graphic",
                                    onClick: ()=>setImageUrl(imagen.image)
                                    ,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "item-img wow fadeInUp",
                                        "data-wow-delay": ".4s",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: imagen.image,
                                            alt: imagen.id
                                        })
                                    })
                                })
                            }, imagen.id),
                            isOpen && /*#__PURE__*/ jsx_runtime_.jsx(ModalContent, {
                                onClose: ()=>setIsopen(false)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: imageUrl,
                                    alt: "modal"
                                })
                            })
                        ]
                    })
                )
            })
        })
    }));
};
/* harmony default export */ const Portfolio_two_column = (PortfolioTwoColumn);


/***/ })

};
;