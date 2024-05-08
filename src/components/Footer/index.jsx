/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";
import ContactSection from "../Contact-section";

const Footer = ({ noSubBG }) => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Correo invalido";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer>
      <div style={ { zIndex:0, textAlign:"center"} }  className={`footer-half ${noSubBG ? '':'sub-bg'} pb-0`}>
      <div className="container">
          <img src={`${appData.lightLogo}`} alt="" style={{ width: 250, height:100 }}/>
            <div className="cont">
              <div className="logo">
              </div>
              <div className="con-info custom-font" style={ { whiteSpace:'nowrap' }}>
                <ul>
                  <li>
                    <h4 style={ { color:"#FFF"}} className=" wow words chars splitting">Contactos: </h4>
                  </li>
                    <strong> <h6 style={ { color:"#FFF"}}>felicesdeayudar@abantu.mx</h6></strong>
                  <li>
                  </li>
                    <h6 style={ { color:"#FFF"}}> felicesdeayudar@gmail.com</h6>
                  <li>
                  </li>
                </ul>
              </div>
              <div  className="social-icon">
                <h6 className="custom-font stit simple-btn" style={ { color:"#FFF"}}>Siguenos en nuestras Redes Sociales</h6>
                <div className="social">
                  <a href="https://www.facebook.com/profile.php?id=100095195865538" className="icon" target="_blank">
                    <i style={ { color:"#FFF"}} className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/abantufelicesdeayudar/" className="icon" target="_blank">
                    <i style={ { color:"#FFF"}} className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@abantu-felicesdeayudar" className="icon" target="_blank">
                    <i style={ { color:"#FFF"}} className="fab fa-youtube"></i>
                  </a>
                  <a href="https://twitter.com/abantumx" className="icon" target="_blank">
                    <i style={ { color:"#FFF"}} className="fab fa-twitter"></i>
                  </a>
                  <a href="https://wa.me/5216623669348" className="icon" target="_blank">
                  <i style={ { color:"#FFF"}} className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
              <ContactSection/>
        </div>
            <div className="w-100">
        <div className="copyrights text-center">
          <p>
            © 2024, Sitio web desarrollado por <a href="#0">Desersoft</a>.
          </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
