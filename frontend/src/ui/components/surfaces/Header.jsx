import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

import style from '../../styles/Header.module.css';
import logo from '../../images/logo.png';

function Header() {
  return (
    <>
      <Navbar className="default_color" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/home" className={`nav nav-link ${style.editmatch_logo_color}`}> {/* Use o Link para navegar para a página internamente */}
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-center"
                alt="logo"
              />
              EDITMATCH
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link to="/login" className={`btn btn-primary text-white ${style.button} secondary_color`}>Login</Link>
            <Link to="/register-seletor" className={`btn btn-primary text-white ${style.button} secondary_color`}>Registro</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
