import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import { APP_FEATURE_DATA } from "@data/index";

const AppFeature = () => {

  const { sectionTitle, image, paragraph, options, button } = APP_FEATURE_DATA;
  
  return (
    <section className="cta-two" id="filosofia" style={{paddingTop: "80px"}}>
      <Container >
        <Row>
          <Col xl={6} className="col-xl-6" >
            <div className="cta-two__content">
              <div className="block-title cus-pb">
                <p>{sectionTitle.text}</p>
                <h3>{sectionTitle.title}</h3>
              </div>
              <div className="cta-two__text">
                <p>{paragraph}</p>
              </div>
              <Link href={button.link}>
                <a className="thm-btn cta-two__btn">
                  <span>{button.label}</span>
                </a>
              </Link>
            </div>
          </Col>
          <Col xl={6}>
            <div
              className="cta-two__moc wow fadeInLeft"
              data-wow-duration="1500ms"
            >
              <img src={image} className="cta-one__moc-img" alt="" style={{borderRadius: "20px", boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)", width: "100%"}} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppFeature;
