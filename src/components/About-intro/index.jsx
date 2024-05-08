import React from "react";
import Split from "../Split";
import appData from "../../data/app.json";
import { ST } from "next/dist/shared/lib/utils";

const Styles = {
  containerP: {
    padding: "0 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  privacyPolicyTitle: {
    fontSize: "2rem",
    textAlign: "center",
    margin: "20px 0",
  },
  privacyPolicySection: {
    margin: "40px 0",
    fontSize: "1.5rem",
  },
  p: {
    margin: "10px 0",
    fontSize: "1rem",
},
  h2: {
    fontSize: "1.5rem",
    margin: "20px 0",
    textAlign: "center",
  },
};



const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div style={Styles.containerP}>
    <h1 style={Styles.privacyPolicyTitle}><strong>Política de Privacidad</strong></h1>
    
    <div style={Styles.privacyPolicySection}>
        <h2 style={Styles.h2}>Introducción</h2>
        <p style={Styles.p}>En ABANTU, valoramos y respetamos la importancia de la privacidad en línea y estamos comprometidos a salvaguardar la privacidad de nuestros usuarios. Esta política describe cómo tratamos la información personal que recolectamos y recibimos de los usuarios.</p>
    </div>

    <div style={Styles.privacyPolicySection}>
        <h2 style={Styles.h2}>Recopilación de información</h2>
        <p style={Styles.p}>Recogemos información personal que nos proporcionas, como tu nombre, dirección de correo electrónico y cualquier otra información que nos envíes. También recogemos información automáticamente sobre tu interacción con nuestros servicios, como tu dirección IP y el tipo de dispositivo que utilizas.</p>
    </div>

    <div style={Styles.privacyPolicySection}>
        <h2 style={Styles.h2}>Uso de la información</h2>
        <p style={Styles.p}>Usamos la información que recopilamos para:</p>
        <ul >
            <li><p style={Styles.p}>Proveerte los servicios que ofertamos.</p></li>
            <li><p style={Styles.p}>Personalizar y mejorar nuestros servicios.</p></li>
            <li><p style={Styles.p}>Responder a tus preguntas y solucionar problemas.</p></li>
            <li><p style={Styles.p}>Enviar comunicaciones de marketing, si nos has dado tu consentimiento.</p></li>
        </ul>
        <p style={Styles.p}>No vendemos ni compartimos tu información personal con terceros para fines de marketing sin tu consentimiento.</p>
    </div>


    <div style={Styles.privacyPolicySection}>
        <h2 style={Styles.h2}>Contacto</h2>
        <p style={Styles.p}>Si tienes alguna pregunta sobre nuestra política de privacidad, puedes ponerte en contacto con nosotros en felicesdeayudar@abantu.mx.</p>
    </div>
</div>
    </section>
  );
};

export default AboutIntro;
