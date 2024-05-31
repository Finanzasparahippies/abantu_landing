import React from "react";
import { Container } from "react-bootstrap";
import FaqCard from "@components/faq-card";
import { FAQ_DATA } from "@data/index";
const FAQ = () => {
  const { sectionTitle, posts } = FAQ_DATA;
  return (
    <section className="faq-one" id="preguntas-frecuentes">
      <Container>
        <div className="block-title text-center" style={{ paddingTop: "20px" }}>
          <h3 style={{ marginTop: "20px" }}>Preguntas Frecuentes</h3>
        </div>
        <div className="accrodion-grp faq-accrodion">
          {posts.map(({ status, title, text }, index) => (
            <FaqCard
              key={`faq-posts-key-${index}`}
              status={status}
              title={title}
              text={text}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
