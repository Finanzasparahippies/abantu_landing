import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "@images/resources/footer-bg-shape-1.png";
import footerLogo from "@images/abanti.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div
        className="site-footer-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="footer-upper text-center">
              <div className="footer-logo">
                <img src={footerLogo} alt="Footer Logo" style={{width: "30%"}} />
              </div>
              <ul className="footer-widget__social">
                <li>
                  <a href="https://www.youtube.com/@abantu-felicesdeayudar" target="_blank" className="color-2">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100095195865538&sk" target="_blank" className="color-2">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/abantu.mx" target="_blank" className="color-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.link/t9y6uy" target="_blank" className="color-2">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="/terminos-y-condiciones">Términos y Condiciones</a>
                  </li>
                  <li>
                    <a href="/aviso-de-privacidad">Aviso de Privacidad</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="site-footer__bottom">
        <Container className="text-center">
          <p>
            © ABANTU {year}. Todos los derechos reservados. Diseñado por{" "} <a href="https://desersoft.com">Desersoft</a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
