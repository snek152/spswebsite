import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-time">
          <h3>meetings tuesday lunch, room 210</h3>
        </Col>
        <Col md="4" className="footer-location">
          <h3>1280 johnson avenue, san jose, ca 95129</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="mailto:sps.lynbrook@gmail.com"
                style={{ color: "#519CC5"}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/lynbrooksps"
                style={{ color: "#519CC5" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
