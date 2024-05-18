import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SymptomCheckerResult = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h3>Symptom Checker</h3>
          <p>Shoulder pain</p>
          <ul>
            <li>Pain in upper limb</li>
            <li>Upper Arm</li>
            <li>Joint hard to move</li>
            <li>Pain in both upper limbs</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SymptomCheckerResult;
