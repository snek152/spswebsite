import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourceCard from "./ResourceCards";
import ResourceSlides from "./ResourceSlides";

import brainImg from "../../Assets/brain.png";

function Resources() {
  return (
    <section>
      <Container fluid className="resources-section">

        <Container>
          <h1 className="resources-heading">
            resources
          </h1>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="resource-card">
              <ResourceCard
                imgPath={brainImg}
                hasThree={true}
                title="for members"
                aLink="https://docs.google.com/forms/d/e/1FAIpQLSeH3T5cxcL_2o0EgulkK-2LVy9HGTRlxcGxtwekiKayhF97UQ/viewform"
                bLink="https://docs.google.com/forms/d/e/1FAIpQLSfBzf4MO818dBCl-4RjjGlaxnHmaDrWHuGEjUsD9E01XQ4yXg/viewform"
                cLink="https://docs.google.com/spreadsheets/d/1jjG9O0v-DrkDNcve3gQR-4uV1GYQHER89admieyEC5U/edit#gid=1154505670"
                aName="meeting topic submissions"
                bName="member presentation form"
                cName="member points"
              />
            </Col>

            <Col md={6} className="resource-card">
              <ResourceCard
                imgPath={brainImg}
                hasThree={false}
                title="general resources"
                aLink="https://docs.google.com/document/d/1HRFnXsKklt6Lzt90PcXsAhGmEeJyRcPlaujMqdm31mo/edit?usp=sharing"
                bLink="https://docs.google.com/document/d/1iBoHbeF8ueEH0hYP43zJcDpdoPNch8lpwpC9Z5aSkI8/edit?usp=sharing"
                aName="ap psych resources"
                bName="sps professional resources"
              />
            </Col>


          </Row>
        </Container>
      </Container>

      <ResourceSlides />
    </section>
  );
}

export default Resources;