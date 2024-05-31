import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NavLinks2 = () => {
  return (
    <ul className="main-nav__navigation-box2 one-page-scroll-menu">
      <li>
        <ScrollLink
          activeClass="current"
          to="inicio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <a>Inicio</a>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="filosofia"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Filosofía
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="redes"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Redes
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="caracteristicas"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Características
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="preguntas-frecuentes"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Preguntas Frecuentes
        </ScrollLink>
      </li>
    </ul>
  );
};

export default NavLinks2;
