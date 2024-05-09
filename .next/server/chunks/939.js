"use strict";
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 7498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ handleMobileDropdown)
/* harmony export */ });
/* unused harmony export handleDropdown */

const handleDropdown = (e)=>{
    getSiblings(e.target.parentElement).filter((item)=>item.classList.contains("show")
    ).map((item)=>{
        item.classList.remove("show");
        if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
            item.childNodes[1].classList.remove("show");
        }
    });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
};
const handleMobileDropdown = (e)=>{
    e.preventDefault();
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
}; // export const handleSearch = () => {
 //   let searchForm = document.querySelector(".navbar .search .search-form");
 //   document
 //     .querySelector(".navbar .search .icon")
 //     .addEventListener("click", function () {
 //       searchForm.style.display = "block";
 //       fadeIn(searchForm, 200);
 //     });
 //   document
 //     .querySelector(".navbar .search .search-form .close")
 //     .addEventListener("click", function () {
 //       searchForm.style.display = "none";
 //       fadeOut(searchForm, 200);
 //     });
 // };


/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/img/logos/logo.png","Q1":"/img/logos/logo-alt.png","QP":true}');

/***/ })

};
;