import React from 'react'
import API from '../common/API';
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/navBar";
import { TablaClasificacion } from '../components/TablaClasificacion';
import addParlx from "../common/addParlx";


import Footer from '../components/Footer';

const Clasificacion = () => {

    const [equipos, setEquipos] = React.useState([]);
    const fixedHeader = React.useRef(null);
    const MainContent = React.useRef(null);
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    const [pageLoaded, setPageLoaded] = React.useState(false);
    

    React.useEffect(() => {
      API.get('/liga/equipos/')
      .then((response) => {
        setEquipos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

    React.useEffect(() => {
      setPageLoaded(true);
      if (pageLoaded) {
        addParlx();
      }
    }, [pageLoaded]);
  
    React.useEffect( () => {
      fixedHeader.current = document.querySelector('.works-header');
    }, [] );

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
      }
    );

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
  }, [fixedHeader, MainContent, navbarRef]);
    return (
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        <header
        ref={fixedHeader}
        className="works-header  valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Clasificación</h2>
                  <p>
                    Clasificación por grupos de la liga
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Clasificación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={ MainContent } className='main-content'>
        <div style={{ padding: 40, justifyContent: "center" }}>
          <TablaClasificacion equipos={equipos[0]} categoria="A"/>
          <TablaClasificacion equipos={equipos[1]} categoria="B"/>
          <TablaClasificacion equipos={equipos[2]} categoria="C"/>
          <TablaClasificacion equipos={equipos[3]} categoria="D"/>
        </div>
      </div>
      <Footer />
    </DarkTheme>
    );
}

export default Clasificacion
