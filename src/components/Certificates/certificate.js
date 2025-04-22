import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./certificate.css";

export default function Certificate() {
    return (
        <Container fluid className="certificate-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={12} className="certificate-content">
                        <h1 className="heading-name">My <strong className="main-name">Certificates</strong></h1>
                        <p style={{ color: "white" }}>Certificates will be added soon...</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
} 