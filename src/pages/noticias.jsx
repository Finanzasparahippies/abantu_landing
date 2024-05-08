import React, { useEffect, useRef } from "react";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import BlogStanderd from "../components/Blog-standerd";
import Footer from "../components/Footer";

const Noticias = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.scrollY > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.screenY > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);


  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h1 className="extra-title mb-10">Noticias</h1>
                <p>
                  Siguenos y mantente informado de todas las noticias y eventos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogStanderd />
      <Footer />
    </DarkTheme>
  );
};

export default Noticias;