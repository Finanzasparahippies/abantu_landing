import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import feat1 from "@images/feat1.png";
import feat2 from "@images/feat2.png";
import feat3 from "@images/feat3.png";

const ServicesHome = () => {
  return (
    <section id="caracteristicas" className="service-one" style={{paddingTop: "20px"}}>
      <Container>
        <div className="block-title text-center">
          <h3 className="block-title__title">Características de ABANTU</h3>
        </div>
        <Row className="justify-content-center" style={{marginTop: "50px"}}>
            <Col xl={3} lg={3} md={6} key={`service-card-key-0`}>
              <div className="service-one__single">
                <div>
                  <img src={feat1} alt="Abantu" style={{width: "150px", marginTop: "20px"}} />
                </div>
                <div className="text">
                  <h3 style={{color: "#000"}}>Colaboración Comunitaria</h3>
                  <p>En ABANTU creemos que a través de la colaboración en comunidad nos podemos ayudar de manera justa y genuina.</p>
                </div>
              </div>  
            </Col>
            <Col xl={3} lg={3} md={6} key={`service-card-key-1}`}>
              <div className="service-one__single">
                <div>
                  <img src={feat2} alt="Abantu" style={{width: "150px", marginTop: "20px"}} />
                </div>
                <div className="text">
                  <h3 style={{color: "#000"}}>Ingresos Extras</h3>
                  <p>La plataforma de ABANTU crea un ingreso extra para cada uno de sus usuarios.</p>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} key={`service-card-key-2`}>
              <div className="service-one__single">
                <div>
                  <img src={feat3} alt="Abantu" style={{width: "150px", marginTop: "20px"}} />
                </div>
                <div className="text">
                  <h3 style={{color: "#000"}}>Flujo de Efectivo</h3>
                  <p>La comunidad ABANTU cuenta con un sistema que tiene el objetivo de crear un flujo de efectivo en la comunidad.</p>
                </div>
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesHome;
