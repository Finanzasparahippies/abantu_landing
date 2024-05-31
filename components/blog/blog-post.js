import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogContent from "./blog-content";
import Comments from "./comments";
import Sidebar from "./sidebar";
const BlogPost = () => {
  return (
    <section className="blog-details">
      <Container>
        <Row>
          <Col lg={12}>
            <BlogContent />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPost;
