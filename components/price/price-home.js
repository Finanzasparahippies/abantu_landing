import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "@images/shapes/pricing-1-shape-1.png";
import { PRICING_DATA } from "@data/index";
import PriceCard from "./price-card";

const PriceHome = () => {

  const [plan, setPlan] = useState({
    name: "monthly"
  });
  
  const { sectionTitle, monthly, yearly } = PRICING_DATA;

  return (
    <section id="redes" className="pricing-one" style={{paddingTop: "80px"}}>
      <div
        className="pricing-one-shape-1"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Container>
        <div className="block-title text-center">
          <p>{sectionTitle.text}</p>
          <h3>{sectionTitle.title}</h3>
        </div>

        <div className="tabed-content">
          {plan.name === "monthly" ? (
            <div id="month">
              <Row>
                {monthly.map(
                  (
                    { count, amount, name, extraClassName, button, options },
                    index
                  ) => (
                    <Col
                      className="animated fadeInUp"
                      key={`pricing-card-key-${index}`}
                      xl={4}
                    >
                      <PriceCard
                        count={count}
                        amount={amount}
                        name={name}
                        extraClassName={extraClassName}
                        button={button}
                        options={options}
                      />
                    </Col>
                  )
                )}
              </Row>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
};

export default PriceHome;
