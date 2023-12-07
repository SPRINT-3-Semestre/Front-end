
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import personIcon from '../../ui/images/personicon.png';

import style from '../styles/OrderCard.module.css';

function MyOrderCard(props) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);


    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [skills, setSkills] = useState(props.skills.split(',').map(skill => skill.trim()));

    const handleEdit = () => {
        const data = {
          title,
          desc: description,
          skills
        };
      
        console.log("Data", data)
        axios.patch(`http://localhost:8080/orders/${props.id}`, data, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
          }
        }).then((response) => {
          console.log(response);
          alert('Pedido editado com sucesso!');
        }).catch((error) => {
          alert('Deu erro, man');
          console.log(error);
        });
      
        // Fechar o modal de editar
        setShowEditModal(false);
      };
      


    const handleDelete = () => {
        axios.delete(`http://localhost:8080/orders/${props.id}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        }).then((response) => {
            console.log(response)
            alert('Pedido deletado com sucesso!')
        }).catch((error) => {
            console.log(error)
        })

        // Fechar o modal de deletar
        setShowDeleteModal(false);
    };

    return (
        <>
            <div className={`card ${style.card}`}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={props.image ? props.image : personIcon}
                                alt="Foto do usuário"
                                width={100}
                                height={100}
                                style={{ borderRadius: '50%' }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h6 className="card-text mt-5">{props.nome}</h6>
                        </div>
                    </div>
                    <hr />
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text"><b>Descrição: </b><br /> {props.description}</p>
                    <p className="card-text"><b>Habilidades:</b> <br />{props.skills}</p>
                </div>
                <div className="row text-center mt-3">
                    <div className="col-md-6">
                        <button className="btn btn-primary" onClick={() => setShowEditModal(true)}>
                            Editar
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger" onClick={() => setShowDeleteModal(true)}>
                            Deletar
                        </button>
                    </div>
                </div>
            </div >

            {/* Modal de Editar */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Título</label>
                        <input type="text" className="form-control" id="title" defaultValue={props.title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descrição</label>
                        <textarea className="form-control" id="description" defaultValue={props.description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="skills" className="form-label">Habilidades</label>
                        <input type="text" className="form-control" id="skills" defaultValue={props.skills} onChange={(e) => setSkills(e.target.value.split(',').map(skill => skill.trim()))} />
                    </div>

                    <Button variant="primary" onClick={handleEdit}>Editar</Button>
                </Modal.Body>
            </Modal>
            {/* Modal de Deletar */}
            < Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Exclusão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza de que deseja excluir este pedido?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Deletar
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default MyOrderCard;
