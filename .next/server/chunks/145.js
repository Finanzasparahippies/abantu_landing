"use strict";
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 5145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Works_three_column_with_filter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(8063);
;// CONCATENATED MODULE: ./src/data/sections/equipos.json
const equipos_namespaceObject = JSON.parse('[{"id":1,"foto":"","equipo":"Adolfo De La Huerta","directorTecnico":"Antonio Oropeza","grupo":"A","numeroJugadores":24,"jugadoresMas60":3,"folioAfes":null,"alt":"ADH"},{"id":2,"foto":"","equipo":"Benjamin Hill FC","directorTecnico":"Jorge Higuera Olivarria","grupo":"A","numeroJugadores":22,"jugadoresMas60":3,"folioAfes":null,"alt":"BH"},{"id":3,"foto":"","equipo":"Enertel Llantera La Palma","directorTecnico":"Gabriel Rodriguez","grupo":"A","numeroJugadores":23,"jugadoresMas60":1,"folioAfes":null},{"id":4,"foto":"/img/equipos/CIAD-UT-A.jpg","equipo":"FC CIAD-UT","directorTecnico":"Gustavo Gonzalez","grupo":"A","numeroJugadores":23,"jugadoresMas60":0,"folioAfes":null},{"id":5,"foto":"/img/equipos/FC-Huatabampo-CAT-A.png","equipo":"FC Huatabampo","directorTecnico":"Andres Barredez","grupo":"","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":6,"foto":"","equipo":"Despacho Contable Lara","directorTecnico":"Manuel Roig","grupo":"A","numeroJugadores":25,"jugadoresMas60":2,"folioAfes":null},{"id":7,"foto":"","equipo":"Bucaneros A","directorTecnico":"Miguel Angel Gonzalez","grupo":"A","numeroJugadores":21,"jugadoresMas60":3,"folioAfes":null},{"id":8,"foto":"/img/equipos/Splash-Water-A.jpg","equipo":"Splash Water","directorTecnico":"Gabriel Rodriguez","grupo":"A","numeroJugadores":25,"jugadoresMas60":1,"folioAfes":null},{"id":9,"foto":"","equipo":"Interlogic HACCP","directorTecnico":"Nacho Medina","grupo":"A","numeroJugadores":24,"jugadoresMas60":0,"folioAfes":null},{"id":10,"foto":"/img/equipos/Bustamante-CAT-A.png","equipo":"Team Bustamante","directorTecnico":"Marco Antonio Villalba","grupo":"A","numeroJugadores":22,"jugadoresMas60":0,"folioAfes":null},{"id":11,"foto":"/img/equipos/Equipo-Birrieria-el-tapatio-categoria-A.jpg","equipo":"Birrieria El Tapatio","directorTecnico":"Juan Carlos Briceño","grupo":"A","numeroJugadores":25,"jugadoresMas60":1,"folioAfes":null},{"id":12,"foto":"","equipo":"Aguilas De Villa De Seris","directorTecnico":"","grupo":"A","numeroJugadores":11,"jugadoresMas60":1,"folioAfes":null},{"id":13,"foto":"","equipo":"Chiltepinos Winggs","directorTecnico":"Javier Solano","grupo":"A","numeroJugadores":25,"jugadoresMas60":1,"folioAfes":null},{"id":14,"foto":"/img/equipos/buhos_3.jpeg","equipo":"Buhos Unison","directorTecnico":"Gilberto Leon Leon","grupo":"A","numeroJugadores":21,"jugadoresMas60":7,"folioAfes":null},{"id":15,"foto":"/img/equipos/Seccion-28-Cenaduria-Colibri-A.jpg","equipo":"Seccion 28/ Cenaduria El Colibri","directorTecnico":"Profe Juan Manuel","grupo":"A","numeroJugadores":24,"jugadoresMas60":2,"folioAfes":null},{"id":16,"foto":"","equipo":"JG Carpinteria y Diseño","directorTecnico":"","grupo":"A","numeroJugadores":20,"jugadoresMas60":0,"folioAfes":null},{"id":17,"foto":"","equipo":"Clinica Dental Cazarez","directorTecnico":"Julio Duarte","grupo":"B","numeroJugadores":26,"jugadoresMas60":8,"folioAfes":null},{"id":18,"foto":"","equipo":"Flamengo","directorTecnico":"Sergio Dominguez Acuña","grupo":"B","numeroJugadores":21,"jugadoresMas60":4,"folioAfes":null},{"id":19,"foto":"/img/equipos/federal_2_B.jpeg","equipo":"Federal 2 Cajeme","directorTecnico":"Rigoberto Quintana","grupo":"B","numeroJugadores":24,"jugadoresMas60":13,"folioAfes":null},{"id":20,"foto":"/img/equipos/Bucaneros_B.png","equipo":"Bucaneros B","grupo":"B"},{"id":21,"foto":"/img/equipos/Equipo-sastreria-york-B.jpg","equipo":"Sastreria York","directorTecnico":"","grupo":"B","numeroJugadores":8,"jugadoresMas60":1,"folioAfes":null},{"id":22,"foto":"/img/equipos/Balderrama-FC-B.jpg","equipo":"Deportivo Balderrama","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":23,"foto":"/img/equipos/Valle-Grande-B.png","equipo":"Valle Grande","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":24,"foto":"","equipo":"Summimex Procart Dismed","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":25,"foto":"/img/equipos/Naranjos-Perisur-B.jpg","equipo":"Naranjos Perisur","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":26,"foto":"/img/equipos/Capilla-del-Carmen-B.jpg","equipo":"Capilla Carmen","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":27,"foto":"/img/equipos/PUMAS_B.jpeg","equipo":"Pumas Estructural","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":28,"foto":"/img/equipos/Baloncito-tianguero-B.png","equipo":"Baloncito Tianguero","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":29,"foto":"","equipo":"Deportivo Monarcas","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":30,"foto":"","equipo":"Mp Arquitectura Interior","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":31,"foto":"","equipo":"Promocion Activa Br","directorTecnico":"","grupo":"B","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":32,"foto":"","equipo":"KGB Fumigaciones Sur","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":33,"foto":"","equipo":"Deportivo Mariachi","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":34,"foto":"/img/equipos/la_candelaria_C.jpeg","equipo":"La Candelaria FC","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":35,"foto":"","equipo":"Caja Ahorros Unison","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":37,"foto":"/img/equipos/Casesa_ranchito_C.jpg","equipo":"Casesa Ranchito","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":38,"foto":"/img/equipos/Equipo-medicina-deportiva-dr.-Pacillas-C.jpg","equipo":"Medicinas Deportivas Dr Pasillas","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":39,"foto":"","equipo":"Decanos","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":40,"foto":"/img/equipos/Equipo-tostinoza-C.jpg","equipo":"Tostinoza","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":41,"foto":"/img/equipos/deportivo_reforma-C.png","equipo":"Reforma Clinica Dental Juarez","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":42,"foto":"/img/equipos/Union-Apolo-C.jpg","equipo":"Union Apolo","directorTecnico":"","grupo":"C","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":43,"foto":"","equipo":"Renegados","directorTecnico":"","grupo":"D","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":44,"foto":"","equipo":"Govalma Contable Leon Peralta","directorTecnico":"","grupo":"D","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":45,"foto":"","equipo":"Sidsa/ Nubary Logistics","directorTecnico":"","grupo":"D","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":46,"foto":"","equipo":"Vethermanos York","directorTecnico":"","grupo":"D","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":47,"foto":"","equipo":"Deportivo Sahuaro","directorTecnico":"","grupo":"D","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null},{"id":48,"foto":"","equipo":"Panaderia Navolato","directorTecnico":"","grupo":"D","numeroJugadores":13,"jugadoresMas60":13,"folioAfes":null}]');
;// CONCATENATED MODULE: ./src/components/Works-three-column-with-filter/index.jsx

/* eslint-disable @next/next/no-img-element */ 



const WorksThreeColumnWithFilter = ({ filterPosition  })=>{
    const [pageLoaded, setPageLoaded] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            setTimeout(()=>{
                (0,initIsotope/* default */.Z)();
            }, 1000);
        }
    }, [
        pageLoaded
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "portfolio section-padding pb-70",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} smplx col-12`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "filter",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": "*",
                                    className: "active",
                                    children: "Todos"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": ".A",
                                    children: "Grupo A"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": ".B",
                                    children: "Grupo B"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": ".C",
                                    children: "Grupo C"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": ".D",
                                    children: "Grupo D"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "gallery full-width",
                        children: equipos_namespaceObject ? equipos_namespaceObject.map((equipo, id)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `col-lg-4 col-md-6 items ${equipo.grupo}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img wow fadeInUp",
                                            "data-wow-delay": ".4s",
                                            children: equipo.foto === "" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                style: {
                                                    width: "auto",
                                                    height: 150
                                                },
                                                src: "/img/equipos/placeholder.png",
                                                alt: "image"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: equipo.foto,
                                                alt: "image",
                                                style: {
                                                    width: "auto",
                                                    height: 150
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "cont",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: equipo.equipo
                                            })
                                        })
                                    ]
                                })
                            }, id)
                        ) : null
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Works_three_column_with_filter = (WorksThreeColumnWithFilter);


/***/ })

};
;