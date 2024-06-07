import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import president from "../../Assets/President.png";
import activities1 from "../../Assets/Activities1.png";
import activities2 from "../../Assets/Activities2.png";
import advisor from "../../Assets/Advisor.png";
import treasurer from "../../Assets/Treasurer.png";
import secretary from "../../Assets/Secretary.png";
import vicepres from "../../Assets/VicePres.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="about-heading">
          meet the team!
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="about-card">
            <AboutCard
              img={president}
              name="Maple L."
              description="President (Senior)"
            />
          </Col>

          <Col md={3} className="about-card">
            <AboutCard
              img={secretary}
              name="Kimaya P."
              description="Secretary (Junior)"
            />
          </Col>

          <Col md={3} className="about-card">
            <AboutCard
              img={treasurer}
              name="Siri R."
              description="Treasurer (Senior)"
            />
          </Col>

          <Col md={3} className="about-card">
            <AboutCard
              img={vicepres}
              name="Mahati R."
              description="Vice-Pres (Junior)"
            />
          </Col>

          <Col md={3} className="about-card">
            <AboutCard
              img={activities1}
              name="Dorothy K."
              description="Co-Director of Activities (Junior)"
            />
          </Col>

          <Col md={3} className="about-card">
            <AboutCard
              img={activities2}
              name="Mihika R."
              description="Co-Director of Activities (Senior)"
            />
          </Col>

          <Col md={3} className="about-card">
            <AboutCard
              img={advisor}
              name="Ms. Fill"
              description="Awesome Amazing Club Advisor!!"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default About;