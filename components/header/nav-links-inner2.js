import React from "react";
import Link from "next/link";

const NavLinksInner2 = () => {
  return (
    <ul className="main-nav__navigation-box2 one-page-scroll-menu">
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/#filosofia">
          <a>Filosofía</a>
        </Link>
      </li>
      <li>
        <Link href="/#redes">
          <a>Redes</a>
        </Link>
      </li>
      <li>
        <Link href="/#video">
          <a>Así se forman las Redes</a>
        </Link>
      </li>
      <li>
        <Link href="/#preguntas-frecuentes">
          <a>Preguntas Frecuentes</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinksInner2;
