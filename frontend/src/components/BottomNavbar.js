import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import "./home.css";

import {
  FaHome,
  FaBriefcaseMedical,
  FaShieldAlt,
  FaSmile,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <Navbar bg="light" variant="light" className="navbar-bottom">
      <Nav className="w-100 justify-content-around">
        <Nav.Link
          as={NavLink}
          to="/"
          className="d-flex flex-column align-items-center"
        >
          <FaHome size={24} />
          Home
        </Nav.Link>

        <Nav.Link
          as={NavLink}
          to="/sy"
          className="d-flex flex-column align-items-center"
        >
          <FaBriefcaseMedical size={24} />
          Care
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/coverage"
          className="d-flex flex-column align-items-center"
        >
          <FaShieldAlt size={24} />
          Coverage
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/calm"
          className="d-flex flex-column align-items-center"
        >
          <FaSmile size={24} />
          Calm
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default BottomNavbar;
