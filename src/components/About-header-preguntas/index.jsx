import React from "react";

const AboutHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/Landings/avisoPrivacidad.jpg)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Preguntas Frecuentes</h1>
              <div className="path">
                <a href="/">Inicio</a>
                <span>/</span>
                <a href="/aviso-privacidad" className="active">
                  Aviso de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;