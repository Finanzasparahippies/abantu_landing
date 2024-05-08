import React, { useEffect, useRef, useState } from "react";
import BlogDetails from "../components/Blog-details";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DarkTheme from "../layouts/Dark";
import API from "../common/API";

const detalleNoticias = () => {
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
      if (window.scrollY > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  const [noticia, setNoticia] = useState([]);


  useEffect(() => {

    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const id = urlParams.get("id");

    API.get(`/blog/posts/${id}`)
      .then((response) => {
        setNoticia(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    console.log(noticia),
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <section className="page-header blg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
              <div className="cont text-center">
                <h2>{noticia.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogDetails noticia={noticia} />
      <Footer />
    </DarkTheme>
  );
};

export default detalleNoticias;
