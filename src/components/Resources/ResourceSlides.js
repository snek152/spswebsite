import React from 'react';
import ReactGoogleSlides from 'react-google-slides';
import { Container, Row, Col } from "react-bootstrap";

function ResourceSlides() {
    return (
        <Container fluid className="resources-slides-section" id="resources">
            <h1 className="resources-heading">
                meeting slides
            </h1>
            <Container fluid className="slides" id="resources">
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="slide-card">
                        <><div>
                            <ReactGoogleSlides
                                width="100%"
                                slidesLink="https://docs.google.com/presentation/d/1c2uNr_TI8gXWBfeYVMoCGHVIx97hBJ2XHlqOrSlEGd0/edit?usp=sharing"
                                showControls />
                        </div><h1 className="slide-name">meeting 1</h1></>
                    </Col>

                    <Col md={4} className="slide-card">
                        <><div>
                            <ReactGoogleSlides
                                width="100%"
                                slidesLink="https://docs.google.com/presentation/d/1FPv6odDhuc470HxGxS7ECBVGiJtmkqsiW16qydd0Wdw/edit?usp=sharing"
                                showControls />
                        </div><h1 className="slide-name">meeting 2</h1></>
                    </Col>

                    <Col md={4} className="slide-card">
                        <><div>
                            <ReactGoogleSlides
                                width="100%"
                                slidesLink="https://docs.google.com/presentation/d/17MDIRSuH6ztp9p39UwPUtmCMRZC4Ujud3A9GdRAJqQU/edit?usp=sharing"
                                showControls />
                        </div><h1 className="slide-name">meeting 3</h1></>
                    </Col>

                    <Col md={4} className="slide-card">
                        <><div>
                            <ReactGoogleSlides
                                width="100%"
                                slidesLink="https://docs.google.com/presentation/d/1Dkp7_9rszd51v1uF6X9tTx6wBj7LDL9_ctxHKBTE5Es/edit?usp=sharing"
                                showControls />
                        </div><h1 className="slide-name">meeting 4</h1></>
                    </Col>

                    <Col md={4} className="slide-card">
                        <><div>
                            <ReactGoogleSlides
                                width="100%"
                                slidesLink="https://docs.google.com/presentation/d/1-huIpkZRYZEUUKY9dWnS1PP4dtqyekWf0io5eOOkR6s/edit?usp=sharingg"
                                showControls />
                        </div><h1 className="slide-name">meeting 5</h1></>
                    </Col>

                    <Col md={4} className="slide-card">
                        <><div>
                            <ReactGoogleSlides
                                width="100%"
                                slidesLink="https://docs.google.com/presentation/d/1jC0Cnf12heddB6qtwEYu0AYa7eSymIr8zna5qkNiACo/edit?usp=sharing"
                                showControls />
                        </div><h1 className="slide-name">meeting 6</h1></>
                    </Col>

                    <Col md={4} className="slide-card">
                        <><div>
                            <ReactGoogleSlides
                                width="100%"
                                slidesLink="https://docs.google.com/presentation/d/1A31L09W2GGz1JKpF5onIXxW3CSCkS2yDNshU81RZhek/edit?usp=sharing"
                                showControls />
                        </div><h1 className="slide-name">meeting 7</h1></>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ResourceSlides;