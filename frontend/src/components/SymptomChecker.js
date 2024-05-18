import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BodyComponent } from "reactjs-human-body";

const SymptomChecker = () => {
  const [params, setParams] = useState({});
  const [showFullBody, setShowFullBody] = useState(true);
  const [clickedPart, setClickedPart] = useState(null);

  const handlePartClick = (partName) => {
    // Show only the clicked part
    setParams({
      [partName]: { show: true, clickable: true, selected: true },
    });
    setShowFullBody(false); // Hide the full body structure
    setClickedPart(partName); // Update the clicked part
  };

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h3>Symptom Checker</h3>
          {showFullBody ? (
            // Render full body structure or the selected part
            // <BodyComponent
            //   partsInput={params}
            //   height="510px"
            //   width="207px"
            //   side="front"
            // />
            <span></span>
          ) : (
            <p>
              Clicked body part:{" "}
              <span className="text-primary">{clickedPart}</span>
            </p>
          )}
        </Col>
      </Row>
      <br />
      <br />
      {/* Removed the second BodyComponent rendering */}
      <Row>
        <Col>
          <BodyComponent
            partsInput={params}
            onChange={setParams}
            height="510px"
            width="207px"
            side="front"
            onClick={handlePartClick} // Pass the click handler
          />
        </Col>
      </Row>
      <br />
      <br />

      <br />
    </Container>
  );
};

export default SymptomChecker;
