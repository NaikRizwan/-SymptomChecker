import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./home.css";

// import Layout from "./Layout";
import {
  FaShieldAlt,
  FaStethoscope,
  FaVideo,
  FaHospital,
  FaPills,
} from "react-icons/fa";
import { AiFillLock, AiOutlineArrowRight } from "react-icons/ai";
// import { FaUserDoctor } from "react-icons/fa6";
const services = [
  { name: "Symptom Checker", icon: <FaStethoscope size={32} /> },
  { name: "Telehealth", icon: <FaVideo size={32} /> },
  { name: "Facility Search & Booking", icon: <FaHospital size={32} /> },
  { name: "Medicine Delivery", icon: <FaPills size={32} /> },
];

const Home = () => {
  return (
    <>
      {/* <Layout /> */}
      <Container className="home  pt-3">
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Card className="text-center mb-4 card-network bg-primary">
              <Card.Header>
                <h5>Our Network</h5>
                <p>Navigate our Healthcare network</p>
              </Card.Header>
              <Card.Body>
                <Button
                  as={NavLink}
                  to="/sy"
                  className="search-network-btn bg-white text-dark"
                >
                  Search Network <AiOutlineArrowRight />
                </Button>
                {/* <FaUserDoctor size={48} className="doctor-icon colorful-icon" /> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h5>Medical Services</h5>
            <Row>
              {services.map((service, index) => (
                <Col
                  key={index}
                  xs={6}
                  className="d-flex justify-content-center"
                >
                  <Card className="service-card mb-2 text-center">
                    <Card.Body
                      as={NavLink}
                      to={service.name === "Symptom Checker" ? "/sy" : "#"}
                      className="text-center nav-link-no-underline"
                    >
                      <div className="service-icon mb-2">{service.icon}</div>
                      {service.name}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h5>Insurance Service</h5>
            <Row>
              {[...Array(2)].map((_, index) => (
                <Col
                  key={index}
                  xs={12}
                  className="d-flex justify-content-center"
                >
                  <Card className="service-card1 mb-2 insurance-card d-flex align-items-center justify-content-between">
                    <Card.Body className="d-flex align-items-center justify-content-between p-2">
                      <div className="d-flex align-items-center">
                        <FaShieldAlt
                          size={24}
                          color="#007bff"
                          className="me-2"
                        />
                        <span>Insurance Coverage</span>
                      </div>
                      <AiFillLock
                        size={24}
                        color="#007bff"
                        className="lock-icon"
                      />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
