"use strict";
exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 8656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const heroSkillsProgress = ()=>{
    if (document.querySelector(".hero-sec .skills-box")) {
        window.addEventListener("scroll", ()=>{
            document.querySelectorAll(".skill-progress .progres").forEach((item)=>{
                let myVal = item.getAttribute("data-value");
                if (document.querySelector(".hero-sec")) {
                    if (window.scrollY > document.querySelector(".hero-sec").offsetTop - 800) {
                        item.style.width = myVal;
                    }
                }
            });
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heroSkillsProgress);


/***/ }),

/***/ 9977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_heroSkillsProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8656);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);




const AboutWithSkills = ()=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_common_heroSkillsProgress__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    }, []);
    const Styles = {
        containerP: {
            padding: "0 20px",
            maxWidth: "1200px",
            margin: "0 auto"
        },
        title: {
            fontSize: "2rem",
            textAlign: "center",
            margin: "20px 0"
        },
        privacyPolicySection: {
            margin: "40px 0",
            fontSize: "1.5rem"
        },
        p: {
            margin: "10px 0",
            fontSize: "1rem",
            textAlign: "center"
        },
        h2: {
            fontSize: "1.5rem",
            margin: "20px 0",
            textAlign: "center"
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "preguntas",
        className: "hero-sec section-padding",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    style: Styles.title,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "Preguntas Frecuentes"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: Styles.containerP,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfQu\xe9 es ABANTU?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "La comunidad ABANTU es una organizaci\xf3n social sin fines de lucro que utiliza la tecnolog\xeda para contribuir a la igualdad, promoviendo el trabajo en equipo, cooperaci\xf3n y lealtad. Por lo que ha desarrollado una plataforma en l\xednea al servicio de sus usuarios que crea un flujo de capital para el beneficio de la comunidad."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfC\xf3mo env\xedo mi Contribuci\xf3n?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Las contribuciones se hacen a trav\xe9s de una transferencia bancaria, dep\xf3sito en banco o tiendas de autoservicio. Cada usuario puede consultar la cuenta de banco, n\xfamero de tarjeta y CLABE interbancaria a la que enviar\xe1 la contribuci\xf3n en su cuenta dentro de la plataforma."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfDe cu\xe1nto es la contribuci\xf3n que se env\xeda?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Cada usuario de la plataforma queda de acuerdo en enviar una contribuci\xf3n de $100, $500 \xf3 $1,000 pesos al mes de acuerdo de la Red de Contribuci\xf3n a la que pertenezca a trav\xe9s de una transferencia bancaria. Es necesario contar con una cuenta de banco para formar parte de la plataforma."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfDe cu\xe1nto es la contribuci\xf3n que se recibe?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Cada usuario en la plataforma recibe contribuciones de $100, $500 \xf3 $1,000 pesos por cada usuario dependiendo de la Red de Contribuci\xf3n en la que est\xe9 activo. En la Red de Contribuci\xf3n de $100 pesos se puede recibir hasta $3,000 pesos al mes. En la Red de Contribuci\xf3n de $500 pesos se puede recibir hasta $15,000 pesos al mes. En la Red de Contribuci\xf3n de $1,000 pesos se puede recibir hasta $30,000 pesos al mes. Cada miembro recibe contribuciones desde el primer invitado que se integra en su Red de Contribuci\xf3n. La cantidad total de contribuciones que se reciben aumenta progresivamente conforme su Red de Contribuci\xf3n crece hasta llegar a 30 usuarios."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfQu\xe9 pasa si no env\xedo mi contribuci\xf3n?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "El usuario que no env\xede evidencia de su contribuci\xf3n ser\xe1 dado de baja autom\xe1ticamente de la plataforma. Sin embargo, el usuario tiene hasta 5 d\xedas despu\xe9s de la fecha l\xedmite para enviar su evidencia la cual ser\xe1 considerada como 'contribuci\xf3n tard\xeda'. Si el usuario acumula 3 contribuciones tard\xedas en un periodo de 12 meses ser\xe1 dado de baja autom\xe1ticamente de la plataforma."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfCu\xe1ndo tengo que enviar mi contribuci\xf3n?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "La fecha de contribuci\xf3n mensual es el mismo d\xeda del mes en que el usuario se da de alta en una Red de Contribuci\xf3n. Las fechas de contribuci\xf3n de cada Red de Contribuci\xf3n ($100, $500, \xf3 $1,000 pesos) pueden ser diferentes."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfCu\xe1l es el procedimiento para validar las contribuciones?"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    style: Styles.p,
                                    children: [
                                        "Cada usuario es responsable de enviar evidencia de su contribuci\xf3n antes de la fecha l\xedmite de contribuci\xf3n en la plataforma. Las evidencias ser\xe1n visibles en la tabla de validaciones de cada usuario. Los miembros de la comunidad tienen 1 mes para verificar que no exista alg\xfan error con la contribuci\xf3n recibida, las evidencias se marcan como v\xe1lidas autom\xe1ticamente despu\xe9s de este periodo de tiempo. Si la evidencia no cumple los requisitos, el beneficiario debe marcar la casilla de 'error' en la seccion 'Verificar contribuciones recibidas' de su cuenta en la plataforma. Una notificaci\xf3n se le manda al usuario que mand\xf3 la evidencia para resolver el problema. Despu\xe9s de tres notificaciones el usuario que no manda sus evidencias correctamente se le da de baja de la plataforma. Si el beneficiario marca como invalida una evidencia que s\xed cumple con los requisitos, se le manda una notificaci\xf3n al beneficiario. Despu\xe9s de tres notificaciones el beneficiario se le da de baja de la plataforma. La evidencia de contribuci\xf3n pueden ser foto del dep\xf3sito bancario, foto del ticket de tienda de autoservicio, comprobante emitido por la app del banco, pantallazo de la transferencia en el celular, etc. Sin embargo, una forma m\xe1s segura de comprobar una transferencia bancaria es a trav\xe9s de la clave de rastreo que emite",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "banxico.org.mx",
                                            tarjet: "_blank",
                                            style: {
                                                color: "#000000"
                                            },
                                            children: "banxico.org.mx"
                                        }),
                                        ". La comunidad Abantu promueve usar este m\xe9todo en la medida de lo posible."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfC\xf3mo agrego miembros a mi Red de Contribuci\xf3n?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Cada usuario tiene un c\xf3digo de invitaci\xf3n, el cual puede compartir hasta 4 veces con las personas que quieran unirse a su Red de Contribuci\xf3n. El c\xf3digo es el mismo para las 3 diferentes Redes de Contribuci\xf3n de $100, $500 \xf3 $1,000 pesos."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfQu\xe9 pasa si no agrego nuevos miembros a la Red de Contribuci\xf3n?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Nada. La plataforma s\xf3lo da de baja a los usuarios que no mandan evidencia o no cumplen con los requisitos de evidencia de su contribuci\xf3n mensual. Hay que tener en mente que el objetivo de la plataforma se logra s\xf3lo agregando nuevos miembros a la comunidad."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfMe puedo dar de alta si no tengo un c\xf3digo de invitaci\xf3n?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "S\xed. A los nuevos usuarios que se unen sin c\xf3digo de invitaci\xf3n se les asigna un c\xf3digo de los usuarios activos en la plataforma. De esta manera se forman las Redes de Contribuci\xf3n en autom\xe1tico sin que los usuarios compartan sus c\xf3digos de invitaci\xf3n."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfMe puedo dar de baja de la plataforma?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "S\xed. Todos los usuarios tienen la opci\xf3n de darse de baja de la plataforma en cualquier momento. Puede hacer llegar esta petici\xf3n por medio de un mensaje al correo o whatsapp de ABANTU."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfQu\xe9 pasa si un usuario se da de baja?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "En caso de que un usuario quede dado de baja de la plataforma, las contribuciones a esa persona se suspenden y la posici\xf3n queda disponible para que sea ocupada por un nuevo usuario donado por otro miembro de la comunidad. El nuevo usuario se queda con la Red de Contribuci\xf3n que se hab\xeda formado."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xbfQu\xe9 organismo regula a ABANTU?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Las contribuciones son reguladas por el c\xf3digo civil estatal. ABANTU es una comunidad sin fines de lucro, no presta un servicio financiero, tampoco vende un servicio o producto."
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutWithSkills);


/***/ }),

/***/ 6407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_heroSkillsProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8656);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8636);




const AboutWithSkills = ()=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_common_heroSkillsProgress__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    }, []);
    const Styles = {
        containerP: {
            padding: "0 20px",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center"
        },
        title: {
            fontSize: "2rem",
            textAlign: "center",
            margin: "20px 0",
            fontWeight: "bold"
        },
        privacyPolicySection: {
            margin: "40px 0",
            fontSize: "1.5rem"
        },
        p: {
            margin: "10px 0",
            fontSize: "1rem",
            textAlign: "center"
        },
        h2: {
            fontSize: "1.5rem",
            margin: "20px 0",
            textAlign: "center"
        },
        email: {
            color: "#000000",
            fontWeight: "bold",
            textAlign: "center"
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "terminos",
        className: "hero-sec section-padding",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    style: Styles.title,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: "T\xe9rminos y Condiciones"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: Styles.containerP,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "\xa1Bienvenido a ABANTU!"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    style: Styles.p,
                                    children: [
                                        "ABANTU es propiedad y es operado por Promotora de Apoyo Colectivo del Noroeste SAS de CV. Estos son los t\xe9rminos y condiciones para:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "• https://abantu.mx (en adelante, \"ABANTU\")."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: Styles.privacyPolicySection,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Styles.p,
                                children: "Al registrarte y utilizar la plataforma, usted acepta estar obligado por estos t\xe9rminos y condiciones y nuestra pol\xedtica de privacidad. En estos t\xe9rminos y condiciones, las palabras \"plataforma\" se refieren al sitio web de ABANTU en conjunto, \"nosotros\", \"nuestro\" y \"ABANTU\" se refieren a ABANTU y \"usted\" o \"miembro\" se refieren a usted, el usuario de ABANTU. Los siguientes t\xe9rminos y condiciones se aplican a su uso de la plataforma. Esto incluye las versiones para m\xf3viles y tabletas, as\xed como cualquier otra versi\xf3n de ABANTU accesible a trav\xe9s de ordenadores de sobremesa, m\xf3viles, tabletas, redes sociales u otros dispositivos. POR FAVOR, LEA ESTOS T\xc9RMINOS Y CONDICIONES CUIDADOSAMENTE ANTES DE ACCEDER, UTILIZAR U OBTENER CUALQUIER MATERIAL O INFORMACION DE LA PLATAFORMA."
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "1. ACEPTACI\xd3N DE LOS T\xc9RMINOS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Usted puede utilizar la plataforma s\xf3lo en cumplimiento de estos t\xe9rminos y todas las leyes, normas y reglamentos locales, nacionales e internacionales aplicables. El acceso a la plataforma est\xe1 disponible s\xf3lo para personas mayores de edad o que cuenten con la aprobacion de un adulto. Es responsabilidad de los padres o tutores legales determinar si alguno de los contenidos y funcionalidades disponibles en la plataforma, son apropiados para sus hijos o menores tutelados. Al utilizar la plataforma, usted declara y garantiza que tiene pleno derecho, poder y autoridad para adherirse a estas condiciones y cumplir plenamente todas sus obligaciones en virtud del presente documento. Adem\xe1s, usted representa y garantiza que no est\xe1 bajo ninguna incapacidad legal o restricci\xf3n contractual que le impida adherirse a estos t\xe9rminos. Usted declara y garantiza que el uso de la plataforma no viola ninguna ley o reglamento aplicable en su situaci\xf3n. ABANTU puede, a su sola discreci\xf3n, negarse a ofrecer la plataforma a cualquier usuario y cambiar sus criterios de elegibilidad en cualquier momento. Esta disposici\xf3n es nula donde est\xe9 prohibida por la ley, y el derecho a acceder a la plataforma queda revocado en dichas jurisdicciones."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "2. CUENTA"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    style: Styles.p,
                                    children: [
                                        "Los usuarios pueden registrarse y abrir una cuenta en la plataforma. Al registrarse en la plataforma, el usuario debe elegir una contrase\xf1a y debe proporcionar cierta informaci\xf3n adicional, como el nombre, apellido, direcci\xf3n de correo electr\xf3nico, cuenta bancaria, numero tarjeta, CLABE interbancaria y RFC. Adem\xe1s una vez registrado se debe proporcionar el c\xf3digo de invitaci\xf3n suministrado por otro usuario de la plataforma. Al momento de registrarse el usuario, se le asignar\xe1 un c\xf3digo de invitaci\xf3n el cual podr\xe1 utilizar con otras personas. La comunidad ABANTU crece por la recomendaci\xf3n de sus miembros. El usuario es responsable de mantener la confidencialidad de su contrase\xf1a y de la informaci\xf3n de su cuenta, y es plenamente responsable de todas las actividades que se realicen con su contrase\xf1a o cuenta. Usted se compromete a:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "(a) notificar inmediatamente a ABANTU cualquier uso no autorizado de su contrase\xf1a o cuenta o cualquier otra violaci\xf3n de la seguridad, y"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "(b) asegurarse de que cierra la sesi\xf3n de su cuenta al final de cada sesi\xf3n."
                                        }),
                                        "Nunca podr\xe1 utilizar la cuenta de otro usuario sin la autorizaci\xf3n previa de ABANTU. ABANTU no ser\xe1 responsable de ninguna p\xe9rdida o da\xf1o derivado del incumplimiento de este acuerdo por su parte. Los usuarios pueden cancelar sus cuentas en cualquier momento y por cualquier motivo mandando un mensaje a la informaci\xf3n de contacto de ABANTU. Dicha cancelaci\xf3n s\xf3lo supondr\xe1 la eliminaci\xf3n de la cuenta y la supresi\xf3n de todos los datos personales facilitados a ABANTU. ABANTU se reserva el derecho de cancelar su cuenta o su acceso de forma inmediata, con o sin previo aviso, y sin responsabilidad hacia usted, si ABANTU considera que usted ha violado alguno de estos t\xe9rminos o ha proporcionado informaci\xf3n falsa o enga\xf1osa."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "3. ABANTU"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    style: Styles.p,
                                    children: [
                                        "ABANTU es una plataforma que organiza a sus usuarios para formar REDES DE CONTRIBUCION entre personas que se ayudan a obtener un FLUJO ECONOMICO mensual para cada miembro de la comunidad. ABANTU es una plataforma sin fines de lucro la cual no cobra ni recibe comisiones. Las contribuci\xf3nes se realizan exclusivamente por medio de transferencias bancarias o depositos directamente entre los mismos usuarios. Para unirse y permanecer en la plataforma ABANTU, el usuario debe cumplir dos requisitos:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "Realizar una transferencia mensual a otra persona de la comunidad asignada por la plataforma."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "enviar evidencia de la transferencia antes de la fecha limite asignada al final de cada sesi\xf3n."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: Styles.privacyPolicySection,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Styles.p,
                                children: "Con el prop\xf3sito de recibir contribuci\xf3nes de otros miembros, el usuario debe recomendar a otras personas para que se registren en la plataforma a trav\xe9s del c\xf3digo de invitaci\xf3n asignado a cada usuario durante el registro. Los usuarios referidos que se registren a trav\xe9s del c\xf3digo de invitaci\xf3n del usuario pasar\xe1n a ser parte de la red de contribuci\xf3nes del usuario o a la red decontribuci\xf3n de alg\xfan otro miembro de la comunidad. La plataforma se encarga de notificar a cada usuario de cada RED DE contribuci\xf3n, la fecha y cuenta de banco en la que debe realizar la transferencia. As\xed es como funciona el sistema de ABANTU: Cada miembro dona la cantidad de $100, $500 \xf3 $1,000 pesos mexicanos al mes (dependiendo de la red decontribuci\xf3n en la que se encuentre activo) a otro miembro de su red decontribuci\xf3n a trav\xe9s de una transferencia bancaria. Cada miembro puede recibir hasta 30 contribuci\xf3nes cada mes por medio de transferencias de otros usuarios pertenecientes a su red decontribuci\xf3n. Las contribuci\xf3nes se organizan a trav\xe9s de Redes decontribuci\xf3n y son verificadas por los mismos miembros. En caso de que el usuario no env\xede su evidencia decontribuci\xf3n en tiempo y forma o esta evidencia no cumpla con los requisitos, el usuario recibir\xe1 una notificaci\xf3n para dar solucion al inconveniente, de lo contrar\xedo se dar\xe1 de baja de la plataforma autom\xe1ticamente. El usuario cuenta con un periodo de hasta 5 d\xedas despu\xe9s de la fecha de contribuci\xf3n para mandar su evidencia. Sin embargo, si esto sucede lacontribuci\xf3n ser\xe1 considerada cono tard\xeda. Cada usuario puede acumular 2 contribuci\xf3nes tardias cada 12 meses, a la tercera ser\xe1 dado de baja autom\xe1ticamente."
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "4. REDES DE contribuci\xf3n:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    style: Styles.p,
                                    children: [
                                        "La red decontribuci\xf3n es un sistema para crear flujos econ\xf3micos mensuales para los miembros, que se organiza de la siguiente manera:",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "• Cada miembro completa su ciclo personal con cuatro referidos directos. Esto es el primer ciclo de la red decontribuci\xf3n."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "• Cuando completes tu primer ciclo personal tendras 2 usuarios donandote mensualmente y habr\xe1s contribuido con 2 usuarios para otras redes decontribuci\xf3n, \xa1Felicidades!."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "• Cada miembro en la red decontribuci\xf3n del usuario dona dos referidos a la red decontribuci\xf3n del usuario, de la misma forma en que cada usuario dona dos de sus referidos."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "• La red decontribuci\xf3n del usuario sigue creciendo por lacontribuci\xf3n de referidos, hasta llegar a los 30 miembros donde la red de contribuci\xf3n se completa."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#000000"
                                            },
                                            children: "• La red decontribuci\xf3n de cada usuario podr\xe1 ser consultada a trav\xe9s del panel de control del usuario dentro la plataforma."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            style: {
                                                textAlign: "center",
                                                color: "#05e09c"
                                            },
                                            children: "El prop\xf3sito de las redes decontribuci\xf3n es crear una misma oportunidad de crecimiento para cada usuario sin importar en qu\xe9 momento se registre a la plataforma."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "5. DEP\xd3SITOS Y TRANSFERENCIAS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Una vez registrado en la plataforma el usuario debe realizar un dep\xf3sito mensual de acuerdo con la informaci\xf3n proporcionada por la plataforma. A trav\xe9s de la cuenta de usuario en la plataforma, el usuario podr\xe1 consultar los dep\xf3sitos que debe realizar mensualmente, as\xed como la fecha y la cuenta bancaria en la que debe realizar el dep\xf3sito. La plataforma tambi\xe9n notificar\xe1 al usuario del momento en que debe realizar el dep\xf3sito cuando se aproxime la fecha de cada dep\xf3sito mensual. Una vez realizado el dep\xf3sito el usuario debe proporcionar una imagen de evidencia del deposito y cargarla en la plataforma para la correspondiente verificaci\xf3n por parte del usuario beneficiado y ABANTU. Una vez verificado el dep\xf3sito, se acreditar\xe1 en la cuenta del usuario como completado. Por favor tenga en cuenta que de no realizar los dep\xf3sitos dentro de la fecha establecida por ABANTU en la plataforma, el usuario podr\xe1 ser retirado de la correspondiente red decontribuci\xf3n y no recibir transferencias mensuales. Los usuarios recibir\xe1n transferencias mensuales de acuerdo con los miembros incluidos en su red decontribuci\xf3n. Por favor tenga en cuenta que las transferencias se realizar\xe1n directamente a la cuenta del usuario beneficiado. Las redes decontribuci\xf3n se completan con 30 miembros por lo que cada usuario no recibir\xe1 mas de 30 transferencias mensuales cada mes. Es responsabilidad del usuario mantener en orden sus declaraciones fiscales pertinentes sobre las contribuci\xf3nes recibidas en base a la ley del c\xf3digo civil que regula las contribuci\xf3nes Art.2589 del c\xf3digo civil del estado."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "6. DESCARGO DE RESPONSABILIDAD"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "ABANTU no proporciona servicios financieros, ni tampoco proporciona asesoramiento financiero. ABANTU es una plataforma sin fines de lucro la cual no cobra ni recibe comisiones y las contribuci\xf3nes se realizan exclusivamente por medio de transferencias bancarias directamente entre los mismos usuarios dentro la red decontribuci\xf3n. ABANTU no ofrece promesas de inversi\xf3n con rentabilidades altas al proporcionar sumas de dinero, ni tampoco el sistema decontribuci\xf3n constituye un producto financiero o sistema de inversi\xf3n, por lo que el sistema de FLUJO ECON\xd3MICO de ABANTU no se considera ni se configura como un esquema Ponzi. Al registrarse y unirse a ABANTU, el usuario acepta la responsabilidad personal por el uso de la plataforma y el sistema decontribuci\xf3n de ABANTU. El usuario acepta y entiende que ABANTU NO garantiza ning\xfan beneficio o resultado positivo al utilizar la plataforma y el sistema decontribuci\xf3n de ABANTU. Usted reconoce que su \xe9xito o fracaso final ser\xe1 el resultado de su situaci\xf3n particular, del cumplimiento de ciertos requisitos y una variedad de circunstancias fuera del control de ABANTU. El uso de la plataforma y la participaci\xf3n en el sistema de apoyo financiero colectivo de ABANTU es bajo su propio riesgo y responsabilidad."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "7. DERECHOS DE AUTOR"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Todos los materiales en la plataforma, incluyendo, sin limitaci\xf3n, los nombres, logotipos, marcas comerciales, im\xe1genes, textos, columnas, gr\xe1ficos, v\xeddeos, fotograf\xedas, ilustraciones, obras de arte, software y otros elementos est\xe1n protegidos por derechos de autor, marcas comerciales y/u otros derechos de propiedad intelectual que son propiedad y est\xe1n controlados por ABANTU o por terceros que han licenciado o proporcionado su material al plataforma. Usted reconoce y acepta que todos los materiales de la plataforma est\xe1n disponibles para un uso limitado, no comercial y personal. Salvo lo dispuesto espec\xedficamente en el presente documento. Ning\xfan material puede ser copiado, reproducido, republicado, vendido, descargado, publicado, transmitido o distribuido de ninguna manera, o utilizado de otra manera para cualquier prop\xf3sito, por cualquier persona o entidad, sin la previa autorizaci\xf3n expresa por escrito de ABANTU. No se puede a\xf1adir, eliminar, distorsionar o modificar el material. Cualquier intento no autorizado de modificar cualquier material, para derrotar o eludir cualquier caracter\xedstica de seguridad, o para utilizar ABANTU o cualquier parte del material para cualquier prop\xf3sito que no sea el previsto est\xe1 estrictamente prohibido. Por favor, no copie ning\xfan contenido y lo haga pasar como propio, ya que se producir\xe1 una infracci\xf3n de los derechos de autor."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "8. RECLAMOS SOBRE DERECHOS DE AUTOR"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "ABANTU responder\xe1 a todas las consultas, quejas y reclamaciones relativas a una supuesta infracci\xf3n por incumplimiento o violaci\xf3n de las disposiciones contenidas en las Leyes de Derechos de M\xe9xico e internacionales. ABANTU respeta la propiedad intelectual de otros, y espera que nuestros usuarios hagan lo mismo. Si usted cree, de buena f\xe9, que cualquier material proporcionado o en relaci\xf3n con la plataforma de ABANTU infringe sus derechos de autor u otro derecho de propiedad intelectual, por favor env\xedenos su reclamo o solicitud, a trav\xe9s de nuestra informaci\xf3n de contacto, con la siguiente informaci\xf3n: • Identificaci\xf3n del derecho de propiedad intelectual supuestamente infringido. Deben incluirse todos los n\xfameros de registro pertinentes o una declaraci\xf3n relativa a la propiedad de la obra. • Una declaraci\xf3n que identifique espec\xedficamente la ubicaci\xf3n del material infractor, con suficiente detalle para que ABANTU pueda encontrarlo en la plataforma de ABANTU. Tenga en cuenta que no es suficiente con proporcionar una URL de nivel superior. • Su nombre, direcci\xf3n, n\xfamero de tel\xe9fono y direcci\xf3n de correo electr\xf3nico. • Una declaraci\xf3n suya de que cree de buena f\xe9 que el uso del material supuestamente infractor no est\xe1 autorizado por el propietario de los derechos, o sus agentes, o por la ley. • Una declaraci\xf3n suya, hecha bajo pena de perjurio, de que la informaci\xf3n contenida en su notificaci\xf3n es exacta, y de que usted es el propietario de los derechos de autor o est\xe1 autorizado a actuar en su nombre. • Una firma electr\xf3nica o f\xedsica del propietario de los derechos de autor o de la persona autorizada a actuar en nombre del propietario de los derechos de autor."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "9. ACTIVIDADES PROHIBIDAS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "El contenido y la informaci\xf3n disponible en la plataforma (incluyendo, pero no limitado a, los datos, informaci\xf3n, texto, m\xfasica, sonido, fotos, gr\xe1ficos, v\xeddeo, mapas, iconos, u otro material), as\xed como la infraestructura utilizada para proporcionar dicho contenido e informaci\xf3n, son propiedad de o licenciados a ABANTU por terceros. Para todo el contenido que no sea su contenido, usted se compromete a no modificar, copiar, distribuir, transmitir, mostrar, ejecutar, reproducir, publicar, licenciar, crear trabajos derivados, transferir o vender o revender cualquier informaci\xf3n o servicios obtenidos de o a trav\xe9s de la plataforma. Adem\xe1s, est\xe1n prohibidas las siguientes actividades: • Acceder, monitorizar, reproducir, distribuir, transmitir, emitir, mostrar, vender, licenciar, copiar o explotar de cualquier forma cualquier contenido de la plataforma, incluyendo, pero sin limitarse a ello, el uso de cualquier robot, ara\xf1a, raspador u otros medios automatizados o cualquier proceso manual para cualquier prop\xf3sito que no est\xe9 de acuerdo con estos t\xe9rminos. • Llevar a cabo cualquier acci\xf3n que imponga, o pueda imponer, a nuestra discreci\xf3n, una carga irrazonable o desproporcionadamente grande en nuestra infraestructura; • Establecer un enlace profundo con cualquier parte de nuestro plataforma para cualquier prop\xf3sito sin nuestro permiso expreso por escrito; • \"Enmarcar\", \"reflejar\" o incorporar de otro modo cualquier parte de la plataforma en cualquier otro plataforma o servicio sin nuestra autorizaci\xf3n previa por escrito; • Intentar modificar, traducir, adaptar, editar, descompilar, desensamblar o aplicar ingenier\xeda inversa a cualquier software utilizado por la plataforma. • Evadir, desactivar o interferir de otro modo con las caracter\xedsticas relacionadas con la seguridad de la plataforma o con las caracter\xedsticas que impiden o restringen el uso o la copia de cualquier contenido."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "10. INDEMNIZACI\xd3N"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "ABANTU no aceptar\xe1 ninguna responsabilidad por transmisiones inform\xe1ticas fallidas, parciales o confusas, por cualquier mal funcionamiento del ordenador, tel\xe9fono, cable, red, hardware o software de Internet, fallos, conexiones, disponibilidad, por los actos u omisiones de cualquier proveedor de servicios, accesibilidad o disponibilidad de Internet o por la congesti\xf3n del tr\xe1fico o acto humano no autorizado, incluyendo cualquier error o equivocaci\xf3n."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "11. COMUNICACIONES ELECTR\xd3NICAS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "En caso de que un usuario quede dado de baja de la plataforma, las contribuci\xf3nes a esa persona se suspenden y la posici\xf3n queda disponible para que sea ocupada por un nuevo usuario donado por otro miembro de la comunidad. El nuevo usuario se queda con la Red decontribuci\xf3n que se hab\xeda formado."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "12. CAMBIOS Y TERMINACI\xd3N"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Podemos modificar la plataforma y estas condiciones en cualquier momento, a nuestra entera discreci\xf3n y sin previo aviso. Usted es responsable de mantenerse informado sobre estos t\xe9rminos. Su uso continuado de la plataforma constituye su aceptaci\xf3n de cualquier cambio en estos t\xe9rminos y cualquier cambio sustituir\xe1 a todas las versiones anteriores de los t\xe9rminos. A menos que se especifique lo contrario, todos los cambios de estas condiciones se aplican a todos los usuarios. Adem\xe1s, podemos rescindir el acuerdo con usted en virtud de estas condiciones en cualquier momento notific\xe1ndoselo por escrito (incluso por correo electr\xf3nico) o sin previo aviso."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "13. DATOS PERSONALES"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Cualquier informaci\xf3n personal que proporcione a trav\xe9s del uso de la plataforma, se procesar\xe1n de acuerdo con nuestra pol\xedtica de privacidad. Para m\xe1s informaci\xf3n sobre c\xf3mo recogemos, utilizamos y almacenamos su informaci\xf3n, consulte nuestra pol\xedtica de privacidad."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "14. CL\xc1USULA DE INTEGRACI\xd3N"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Este acuerdo, junto con la pol\xedtica de privacidad y cualquier otro aviso legal publicado por ABANTU, constituir\xe1 el acuerdo completo entre usted y ABANTU en relaci\xf3n con el uso de la plataforma y nuestros servicios."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "15. DISPUTAS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Usted acepta que cualquier disputa, reclamaci\xf3n o controversia que surja de o en relaci\xf3n con el incumplimiento, la terminaci\xf3n, la aplicaci\xf3n, la interpretaci\xf3n o la validez de estos t\xe9rminos o su uso de la plataforma, se resolver\xe1 mediante arbitraje vinculante entre usted y ABANTU, siempre que cada parte conserva el derecho de presentar una acci\xf3n individual en un tribunal de jurisdicci\xf3n competente. En el caso de que surja una disputa en relaci\xf3n con el uso de la plataforma o el incumplimiento de estos t\xe9rminos y condiciones, las partes acuerdan someter su disputa a la resoluci\xf3n de un arbitraje ante una organizaci\xf3n de arbitraje de renombre seg\xfan lo acordado mutuamente por las partes y de acuerdo con las normas de arbitraje comercial aplicables. En la medida en que lo permita la ley, usted acepta que no presentar\xe1, se unir\xe1 o participar\xe1 en ninguna demanda colectiva en relaci\xf3n con cualquier reclamaci\xf3n, disputa o controversia que pueda surgir en relaci\xf3n con su uso de la plataforma. Los tribunales de M\xe9xico, tendr\xe1n jurisdicci\xf3n sobre cualquier disputa, controversia o reclamaci\xf3n relacionada con ABANTU y sus operaciones comerciales. Cualquier disputa o controversia deber\xe1 ser presentada y resuelta en los tribunales de M\xe9xico."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "16. DISPOSICIONES FINALES"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Estos t\xe9rminos y condiciones se rigen por las leyes de los Estados Unidos Mexicanos. El uso de nuestro plataforma y servicios no est\xe1 autorizado en ninguna jurisdicci\xf3n que no d\xe9 efecto a todas las disposiciones de estos t\xe9rminos. Nuestro cumplimiento de estos t\xe9rminos est\xe1 sujeto a las leyes y procesos legales existentes, y nada de lo contenido en estos t\xe9rminos limita nuestro derecho a cumplir con la aplicaci\xf3n de la ley u otras solicitudes o requerimientos gubernamentales o legales relacionados con su uso de nuestro plataforma, su compra de productos y servicios en nuestro plataforma, o la informaci\xf3n proporcionada o recogida por nosotros en relaci\xf3n con su uso de la plataforma. El usuario que acepte estos t\xe9rminos y condiciones, acepta voluntariamente las contribuci\xf3nes recibidas gracias a la plataforma ABANTU y no puede exigir por ning\xfan motivo unacontribuci\xf3n por parte de otro usuario de la plataforma. Si alguna parte de estas condiciones se considera inv\xe1lida, ilegal o inaplicable, la validez, legalidad y aplicabilidad de las restantes disposiciones no se ver\xe1n afectadas ni perjudicadas en modo alguno. El hecho de que no apliquemos o retrasemos la aplicaci\xf3n de cualquier disposici\xf3n de estas condiciones en cualquier momento no implica que renunciemos a nuestro derecho a aplicar la misma disposici\xf3n o cualquier otra en el futuro. Se reservan todos los derechos no concedidos expresamente en el presente documento."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: Styles.privacyPolicySection,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: Styles.h2,
                                    children: "17. INFORMACI\xd3N DE CONTACTO"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: Styles.p,
                                    children: "Si tiene preguntas acerca de estos t\xe9rminos, por favor p\xf3ngase en contacto con nosotros a trav\xe9s de nuestra p\xe1gina de contacto o a trav\xe9s de la siguiente informaci\xf3n de contacto."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: Styles.privacyPolicySection,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: Styles.email,
                                children: "email: felicesdeayudar@abantu.mx"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutWithSkills);


/***/ })

};
;