import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/navbar.css";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

export default class NavMenu extends React.Component {
  render() {
    return (
      <Navbar bg="primary" expand="lg">
        <img className="logoimg" src={logo} alt="logo-iglesia" />
        <Navbar.Brand className="text-white ml-2 text-center">
          {" "}
          <h1 className="title">Marantha en Gloria </h1>{" "}
          <span className="subtitle">
            {" "}
            <h6>vision sobrenatural</h6>
          </span>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink className="text-white" to="/sobre-nosotros">
                <span>Sobre Nosotros</span>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="text-white" to="/ministerios">
                <span>Ministerios</span>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="text-white" to="/donaciones">
                <span>Donaciones</span>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="text-white" to="/contacto">
                <span>Contactanos</span>
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
