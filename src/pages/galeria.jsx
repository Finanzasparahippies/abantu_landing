import React, { useEffect, useRef, useState } from "react";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import SmallFooter from "../components/Small-footer";
import addParlx from "../common/addParlx";
import PortfolioTwoColumn from "../components/Portfolio-two-column";

const Galeria = () => {
  const fixedHeader = useRef(null);
  const MainContent = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);

  useEffect( ( ) => {
    fixedHeader.current = document.querySelector('.works-header');
  }, [] );

  useEffect(() => {
    var navbar = navbarRef.current;
    if (window.scrollY > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }});
    },[navbarRef]);

    useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        if (fixedHeader.current) {
          var slidHeight = fixedHeader.current.offsetHeight;
        }
      }, 0);
    });
  }, [fixedHeader, MainContent]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <header
        ref={fixedHeader}
        className="works-header valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Galeria</h2>
                  <p>
                    Fotos de la liga
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Galeria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content">
        <PortfolioTwoColumn />
        <SmallFooter />
      </div>
    </DarkTheme>
  );
};

export default Galeria;
