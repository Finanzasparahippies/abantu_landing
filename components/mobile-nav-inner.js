import React from "react";
import closeIcon from "@images/shapes/close-1-1.png";
import NavLinksInner from "@components/header/nav-links-inner";

const MobileNavInner = () => {
  return (
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <img src={closeIcon} alt="" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinksInner />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="main-nav__right" style={{ marginLeft: "20px" }}>
            <a href="https://comunidad.abantu.mx" className="thm-btn">
              <span>Iniciar Sesión / Registrarse</span>
            </a>
          </div>
      </div>
    </div>
  );
};

export default MobileNavInner;
