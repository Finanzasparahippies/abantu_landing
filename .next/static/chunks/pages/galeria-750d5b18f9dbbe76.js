(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[620],{320:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/galeria",function(){return t(8614)}])},6705:function(e,n,t){"use strict";var a=t(9669),r=t.n(a)().create({baseURL:"http://127.0.0.1:8000/api",headers:{"Content-Type":"application/json"}});n.Z=r},2115:function(e,n){"use strict";n.Z=function(){window.addEventListener("scroll",(function(){var e=window.scrollY;document.querySelector(".fixed-slider .capt .parlx")&&(document.querySelector(".fixed-slider .capt .parlx").style.transform="translate3d(0, "+-.2*e+"px, 0)",document.querySelector(".fixed-slider .capt .parlx").style.opacity=1-e/600),document.querySelector(".fixed-slider .caption")&&(document.querySelector(".fixed-slider .caption").style.transform="translate3d(0, "+-.2*e+"px, 0)",document.querySelector(".fixed-slider .caption").style.opacity=1-e/600)}))}},8063:function(e,n){"use strict";n.Z=function(){var e;document.querySelectorAll(".gallery").forEach((function(n){e=new Isotope(n,{itemSelector:".items"})}));var n=document.querySelector(".filtering");if(n){var t=function(e){e.addEventListener("click",(function(n){matchesSelector(n.target,"span")&&(e.querySelector(".active").classList.remove("active"),n.target.classList.add("active"))}))};n.addEventListener("click",(function(n){if(matchesSelector(n.target,"span")){var t=n.target.getAttribute("data-filter");t=t,e.arrange({filter:t})}}));for(var a=document.querySelectorAll(".filtering"),r=0,s=a.length;r<s;r++){t(a[r])}}}},7498:function(e,n,t){"use strict";t.d(n,{_:function(){return a}});var a=function(e){e.preventDefault(),document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},1696:function(e,n,t){"use strict";var a=t(5893),r=(t(7294),t(1163),t(1664)),s=t(2806),i=t(7498),c=t(6261);n.Z=function(e){var n=e.lr,t=e.nr,l=e.theme;return(0,a.jsx)("nav",{ref:t,className:"navbar navbar-expand-lg change ".concat("themeL"===l?"light":""),children:(0,a.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,a.jsx)(r.default,{href:"/",children:(0,a.jsx)("a",{className:"logo",children:l&&"themeL"===l?(0,a.jsx)("img",{ref:n,src:"".concat(s.Q1),alt:"logo"}):(0,a.jsx)("img",{ref:n,src:"".concat(s.E8),alt:"logo"})})}),(0,a.jsx)("button",{className:"navbar-toggler",type:"button",onClick:i._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,a.jsx)("span",{className:"icon-bar",children:(0,a.jsx)("i",{className:"fas fa-bars"})})}),(0,a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.default,{href:"/",passHref:!0,children:(0,a.jsx)("a",{className:"nav-link",children:"Inicio"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.default,{href:"https://comunidad.abantu.mx/inicio/",children:(0,a.jsx)("a",{className:"nav-link",children:"Iniciar Sesi\xf3n/ Registrarse"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(r.default,{href:"/aviso-privacidad",children:(0,a.jsx)("a",{className:"nav-link",children:"T\xe9rminos y Privacidad"})})}),(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)(c.rU,{to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,children:(0,a.jsx)("a",{className:"nav-link",children:"Contacto"})})})]})})]})})}},1697:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(8520),r=t.n(a),s=t(5893),i=t(7294),c=t(6705),l=t(8063),o={position:"fixed",zIndex:1,left:0,top:150,width:"100vw",height:"100vh",overflow:"auto",backgroundColor:"rgba(0, 0, 0, 0.8)"},d={position:"absolute",top:15,right:35,color:"#f1f1f1",fontSize:40,fontWeight:"bold",cursor:"pointer"},u={display:"flex",alignItems:"center",width:"85%",height:"100%",margin:"auto"},f=function(e){var n=e.onOpen,t=e.children;return(0,s.jsxs)("div",{onClick:n,children:[" ",t]})},h=function(e){var n=e.onClose,t=e.children;return(0,s.jsxs)("div",{style:o,children:[(0,s.jsx)("span",{style:d,onClick:n,children:"\xd7"}),(0,s.jsx)("div",{style:u,children:t})]})};function v(e,n,t,a,r,s,i){try{var c=e[s](i),l=c.value}catch(o){return void t(o)}c.done?n(l):Promise.resolve(l).then(a,r)}var m=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],a=function(){return t((function(e){return!e}))},o=(0,i.useState)(""),d=o[0],u=o[1],m=(0,i.useState)(!1),x=m[0],p=m[1];(0,i.useEffect)((function(){p(!0),x&&setTimeout((function(){(0,l.Z)()}),1e3)}),[x]);var j=(0,i.useState)([]),g=j[0],w=j[1];return(0,i.useEffect)((function(){var e;(e=r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/galeria/images");case 2:n=e.sent,w(n.data);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(a,r){var s=e.apply(n,t);function i(e){v(s,a,r,i,c,"next",e)}function c(e){v(s,a,r,i,c,"throw",e)}i(void 0)}))})()}),[]),(0,s.jsx)("section",{className:"portfolio section-padding pb-70",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"gallery full-width",children:g.map((function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{onOpen:a,children:(0,s.jsx)("div",{className:"col-md-6 items graphic",onClick:function(){return u(e.image)},children:(0,s.jsx)("div",{className:"item-img wow fadeInUp","data-wow-delay":".4s",children:(0,s.jsx)("img",{src:e.image,alt:e.id})})})},e.id),n&&(0,s.jsx)(h,{onClose:function(){return t(!1)},children:(0,s.jsx)("img",{src:d,alt:"modal"})})]})}))})})})}},2623:function(e,n,t){"use strict";var a=t(5893);t(7294);n.Z=function(){return(0,a.jsx)("footer",{className:"footer-half sub-bg",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"copyrights text-center mt-0",children:(0,a.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ","Desarrollado por"," ",(0,a.jsx)("a",{href:"#",children:"Desersoft"})]})})})})}},2532:function(e,n,t){"use strict";var a=t(5893),r=(t(7294),t(9008));n.Z=function(e){var n=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("link",{rel:"stylesheet",href:"/css/dark.css"})}),n]})}},8614:function(e,n,t){"use strict";t.r(n);var a=t(5893),r=t(7294),s=t(2532),i=t(1696),c=t(2623),l=t(2115),o=t(1697);n.default=function(){var e=(0,r.useRef)(null),n=(0,r.useRef)(null),t=(0,r.useRef)(null),d=(0,r.useRef)(null),u=(0,r.useState)(!1),f=u[0],h=u[1];return(0,r.useEffect)((function(){h(!0),f&&(0,l.Z)()}),[f]),(0,r.useEffect)((function(){e.current=document.querySelector(".works-header")}),[]),(0,r.useEffect)((function(){var e=t.current;window.scrollY>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.scrollY>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll")}))}),[t]),(0,r.useEffect)((function(){window.addEventListener("load",(function(){setTimeout((function(){if(e.current)e.current.offsetHeight}),0)}))}),[e,n]),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(i.Z,{nr:t,lr:d}),(0,a.jsx)("header",{ref:e,className:"works-header valign",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-lg-9 col-md-11 static",children:(0,a.jsxs)("div",{className:"capt mt-50",children:[(0,a.jsxs)("div",{className:"parlx",children:[(0,a.jsx)("h2",{className:"custom-font",children:"Galeria"}),(0,a.jsx)("p",{children:"Fotos de la liga"})]}),(0,a.jsx)("div",{className:"bactxt custom-font valign",children:(0,a.jsx)("span",{className:"full-width",children:"Galeria"})})]})})})})}),(0,a.jsxs)("div",{className:"main-content",children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)(c.Z,{})]})]})}}},function(e){e.O(0,[815,669,774,888,179],(function(){return n=320,e(e.s=n);var n}));var n=e.O();_N_E=n}]);