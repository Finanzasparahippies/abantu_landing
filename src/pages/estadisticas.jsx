import React from 'react'
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";

import  {TablaEstadisticas}   from '../components/TablaEstadisticas';

import Footer from '../components/Footer';

const Estadisticas = () => {

    const [equiposA, setEquiposA] = React.useState([]);
    const [equiposB, setEquiposB] = React.useState([]);
    const [equiposC, setEquiposC] = React.useState([]);
    const [equiposD, setEquiposD] = React.useState([]);

    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    const fixedHeader = React.useRef(null);
    const MainContent = React.useRef(null);

    React.useEffect(() => {
      var navbar = navbarRef.current,
        logo = logoRef.current;
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
        }
      });
    }, [navbarRef]);

    React.useEffect(() => {
      window.addEventListener("load", () => {
        setTimeout(() => {
          if (fixedHeader.current) {
            var slidHeight = fixedHeader.current.offsetHeight;
            if (MainContent.current) {
              MainContent.current.style.marginTop = slidHeight + "px";
            }
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
                  <h2 className="custom-font">Estadisticas</h2>
                  <p>
                    Consulta las estadisticas de tu equipo.
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Estadisticas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>        
        <div style={{ padding: 40, justifyContent: "center" }}>
          <TablaEstadisticas equipos={equiposA} estadisticas="Goleo individual"/>
          <TablaEstadisticas equipos={equiposB} estadisticas="Goleo por Equipos"/>
          <TablaEstadisticas equipos={equiposC} estadisticas="Tarjetas por Jugador"/>
          <TablaEstadisticas equipos={equiposD} estadisticas="Tarjetas por Equipos"/>
        </div>
        <Footer />
      </DarkTheme>
    );
}

export default Estadisticas