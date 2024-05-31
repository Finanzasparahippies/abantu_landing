import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import bgShape1 from "@images/banner/banner-shape-1-1.png";
import bgShape2 from "@images/banner/banner-shape-1-2.png";
import bannerBG from "@images/banner/banner-bg-1.png";
import bannerShape1 from "@images/shapes/banner-1-1.png";
import logoAbanti from "@images/abanti.png";
import bannerShape2 from "@images/banner/banner-shape-1-4.png";
import image from "@images/monedas.jpg";

const Banner = () => {
  return (
    <section className="banner-one" id="home">
      <img src={bgShape1} alt="Banner-Shape-1" className="banner-shape-1" />
      <img src={bgShape2} alt="Banner-Shape-2" className="banner-shape-2" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${bannerBG})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="banner-one__content">
              <img src={logoAbanti} alt="Abanti" className="banner-one__logo" />
              <p>
                ABANTU es una comunidad de ayuda que organiza a sus miembros para enviar y recibir 
                contribuciones mensuales a través de Redes de Contribución. Nuestro objetivo es crear 
                un flujo de efectivo <br /> dentro de la comunidad.
              </p>
              <a href="https://comunidad.abantu.mx" className="thm-btn">
                <span>Unirse a ABANTU</span> 
              </a>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="banner-img wow fadeInUp" data-wow-duration="1500ms">
              <div
                className="banner-bg"
                style={{ backgroundImage: `url(${bannerShape2})` }}
              ></div>
              <img src={image} alt="Banner-img" style={{borderRadius: "20px", boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)", width: "150%"}} />
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
