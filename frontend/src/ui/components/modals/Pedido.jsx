import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Pedido({ onClose }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [skills, setSkills] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title,
      desc,
      skills: skills.split(',').map(skill => skill.trim()),
      clientFinal: sessionStorage.getItem("userId")
    };

    axios.post('http://localhost:8080/orders', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="background-modal" style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 9999,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <div ref={modalRef} className="modal-content" style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '20px',
          border: '1px solid #FF9E00',
          borderRadius: '5px',
          width: '500px',
          zIndex: 10,
        }}>
          <div className="row">
            <h5 className="modal-title">Criar pedido</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Título:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título do pedido"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Descrição:</label>
                <textarea
                  className="form-control"
                  placeholder="Descrição detalhada do pedido"
                  rows="3"
                  value={desc}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Habilidades:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Separe as habilidades por vírgula"
                  value={skills}
                  onChange={(event) => setSkills(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pedido;
