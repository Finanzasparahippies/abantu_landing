import React from "react";

const ContactSection = () => {
 
  return (
    <section style= { { textAlign:"center"} }>
      {/* <div className="container"> */}
        <div style= {{ textAlign:"center" }} className="sec-head custom-font">
          {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
            Te escuchamos
          </h6> */}
            <strong><a href="/aviso-privacidad#terminos" style={{ fontSize:"25px", color:"#FFF"}} className="wow words chars splitting" data-splitting>
              Términos y Condiciones.
            </a></strong><br />
            <strong><a href="/aviso-privacidad" style={{ fontSize:"25px", color:"#FFF"}} className="wow words chars splitting" data-splitting>
              Aviso de Privacidad.
            </a></strong><br />
            <strong><a href="/aviso-privacidad#preguntas" style={{ fontSize:"25px", color:"#FFF"}} className="wow words chars splitting" data-splitting>
              Preguntas Frecuentes.
            </a></strong>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default ContactSection;
