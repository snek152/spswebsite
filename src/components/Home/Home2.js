import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import learnBrain from "../../Assets/learnbrain.png";
import {
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-header">
            <h1 style={{ fontSize: "100px"}}>
              about us
            </h1>
          </Col>
          <Col md={5} className="learn-brain">
            <img src={learnBrain} style={{ maxHeight: "600px"}}/>
          </Col>
          <Col md={7} className="home-about-description">
            <p className="home-about-body">
            SPS is an informational club dedicated to Psychology and Sociology. Some of our meeting topics include the psychology 
            behind attraction and love, superstitions and legends, and evolutionary psychology. Meeting activities include 
            presentations, <b className="purple">interactive experiments</b>, AP psychology support, professional resources and opportunities, guest
            speakers, and club collabs.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>contact us on</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:sps.lynbrook@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lynbrooksps"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
