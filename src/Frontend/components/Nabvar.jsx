import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,} from 'react-bootstrap';
import '../styles/navbar.css';
import logo from '../assets/img/logo.png'; 
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
<Navbar bg="primary" expand="lg">
  <img className="logoimg" src={logo} alt="logo-iglesia" /> 
  <Navbar.Brand  className="text-white ml-2 text-center"> <h1 className="title">Marantha en Gloria </h1> <span className='subtitle'> <h6>vision sobrenatural</h6></span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="text-white"> <Link to='/sobre-nosotros'></Link>Sobre Nosotros</Nav.Link>
      <Nav.Link className="text-white">Ministerios</Nav.Link>
      <Nav.Link className="text-white">Donaciones</Nav.Link>
      <Nav.Link className="text-white">
      <Link to='/contacto'></Link>

        Contactanos
        </Nav.Link>
    </Nav>
 </Navbar.Collapse>
</Navbar> 



  )
}

export default NavMenu;
