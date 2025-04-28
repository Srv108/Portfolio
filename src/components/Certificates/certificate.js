import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./certificate.css";
import first from "../../Assets/saurav.png";
import dsa from "../../Assets/dsa.png"

export default function Certificate() {
    return (
        <Container fluid className="certificate-section">
        <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={12} className="certificate-content text-center">
                <h1 className="heading-name">
                My <strong className="main-name">Certificates</strong>
                </h1>

                <Row className="resume justify-content-center">
                <Col md={6} xs={10}>
                    <Image
                        src={first}
                        alt="Certificate"
                        fluid
                        rounded
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            height: "auto",
                            border: "2px solid var(--imp-text-color)",
                            boxShadow: "0px 0px 15px rgba(0,0,0,0.5)",
                            marginTop: "20px",
                        }}
                    />
                </Col>
                <Col md={6} xs={10}>
                    <Image
                        src={dsa}
                        alt="Certificate"
                        fluid
                        rounded
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            height: "auto",
                            border: "2px solid var(--imp-text-color)",
                            boxShadow: "0px 0px 15px rgba(0,0,0,0.5)",
                            marginTop: "20px",
                        }}
                    />
                    
                </Col>
                </Row>

            </Col>
            </Row>
        </Container>
        </Container>
    );
}
