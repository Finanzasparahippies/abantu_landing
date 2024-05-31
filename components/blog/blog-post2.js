import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogContent2 from "./blog-content2";
import Comments from "./comments";
import Sidebar from "./sidebar";
const BlogPost2 = () => {
  return (
    <section className="blog-details">
      <Container>
        <Row>
          <Col lg={12}>
            <BlogContent2 />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPost2;
