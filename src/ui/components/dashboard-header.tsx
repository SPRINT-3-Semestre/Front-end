import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DashboardHeader() {


    const isEditor = sessionStorage.getItem('isEditor') == 'true';

    const loggedUserName = sessionStorage.getItem('usuario');

    const navigate = useNavigate();

    const idPortfolio = `/portfolio/${sessionStorage.getItem('userId')}`

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleLogout = () => {
        sessionStorage.clear();
        handleClose();
        navigate('/login')
    };

    const DivDark = styled.div`
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);

    `;


    const LinkStyled = styled(Link)`
        color: #ffff;
        text-decoration: none;
        border-radius: 5px;
        transition: 0.3s;
        &:hover {
            color: blue;
        }
    `

    return (
        <DivDark className="bg-dark p-2">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <ul className="nav justify-content-center">
               
                <li className="nav-item">
                    <LinkStyled className="nav-link" to={isEditor ? '/carteira' : '/projetos'}>{isEditor ? 'Carteira' : 'Projetos'}</LinkStyled>
                </li>
                <li className="nav-item">
                </li>
                {/* <li className="nav-item">
                    <LinkStyled className="nav-link" to="/chat">Conversas</LinkStyled>
                </li> */}

                <li className="nav-item">
                    <LinkStyled className="nav-link" to={isEditor ? '/produtores' : '/editores'}>{isEditor ? 'Projetos' : 'Freelancers'}</LinkStyled>
                </li>
                <li className="nav-item">
                    <LinkStyled className="nav-link" to="/perfil">Perfil</LinkStyled>
                </li>
                {isEditor && (
                    <li className="nav-item">
                        <LinkStyled className="nav-link" to={idPortfolio}>Meu portfolio</LinkStyled>
                    </li>
                )}

                {isEditor && (
                    <li className="nav-item">
                        <LinkStyled className="nav-link" to="/videos">Videos</LinkStyled>
                    </li>
                )}
                <li className="nav-item">
                    <LinkStyled className="nav-link" to="#" onClick={handleShow}>Desconectar</LinkStyled>
                </li>
            </ul>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Desconectar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza de que deseja desconectar?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleLogout}>
                        Desconectar
                    </Button>
                </Modal.Footer>
            </Modal>
        </DivDark>
    );
}

export default DashboardHeader;
