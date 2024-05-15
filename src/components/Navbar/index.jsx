/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";
import { Link as ScrollLink } from "react-scroll";


const Navbar = ({ lr, nr, theme }) => {

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container" style={{ display: "flex", "justifyContent": "space-between" }}>
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo"/>
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                href="/"
                passHref
              >
                <a
                  className="nav-link"
                >
                  Inicio
                </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="https://comunidad.abantu.mx/">
                <a className="nav-link">
                  Regístrate Aquí
                </a>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="https://comunidad.abantu.mx/inicio/">
                <a className="nav-link">
                  Iniciar Sesión/ Registrarse
                </a>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href="/aviso-privacidad">
                <a className="nav-link">
                  Términos y Privacidad
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/preguntas-frecuentes">
                <a className="nav-link">
                  Preguntas Frecuentes
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}  
              >
                <a className="nav-link">
                  Contacto
                </a>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  // return (
  //   <ul className="main-nav__navigation-box one-page-scroll-menu">
  //     <li>
  //       <Link href="/">
  //         <a>Inicio</a>
  //       </Link>
  //     </li>
  //     <li>
     
  //     </li>
  //   </ul>
  // )


};

export default Navbar;
