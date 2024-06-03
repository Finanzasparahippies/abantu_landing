import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const NavLinksInner = () => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box one-page-scroll-menu">
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

export default NavLinksInner;
