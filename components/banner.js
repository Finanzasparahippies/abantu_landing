import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import bgShape1 from "@images/banner/banner-shape-1-1.png";
import bgShape2 from "@images/banner/banner-shape-1-2.png";
import bannerBG from "@images/banner/banner-bg-1.png";
import logoAbanti from "@images/abantihome.png";
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
          <Col xl={8} lg={8}>
            <div className="wow fadeInUp" data-wow-duration="1500ms">
              
              <img src={logoAbanti} alt="Abanti" style={{width: "100%"}} />
              
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="banner-one__content">
              <a href="https://comunidad.abantu.mx" className="thm-btn" style={{marginLeft: "30px"}}>
                <span>Unirse a ABANTU</span> 
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
