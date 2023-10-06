import React from 'react';
import logo from '../images/logo.png';
import '../../App.css';
import '../styles/Header.module.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

function Header() {
  return (
    <>
      <Navbar className="default_color" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/home" className="nav nav-link editmatch_logo_color"> {/* Use o Link para navegar para a página internamente */}
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
              EDITMATCH
            </Link>
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Link to="/login"><Button className="secondary_color mr-2">Registro</Button></Link>
            <Link to="/register"><Button className="secondary_color">Login</Button></Link>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default Header;
