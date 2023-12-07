import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

import style from '../../styles/Header.module.css';
import logo from '../../images/logoAtt.png';

function Header() {
  return (
    <>
      <Navbar className="secondary_color" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/home" className={`nav nav-link ${style.editmatch_logo_color}`}>
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-center"
                alt="logo"
              />
              <b className='m-2 text-white'>EDITMATCH</b>
            </Link>
          </Navbar.Brand>
          <Nav>
              <Link to="/register-seletor" className={style.button}>Cadastrar</Link>
              <Link to="/login" className={style.button}>Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
