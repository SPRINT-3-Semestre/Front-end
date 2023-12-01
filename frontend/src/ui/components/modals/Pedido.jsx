import React, { useState, useRef } from 'react';

function Pedido() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');

  const backgroundModalRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form:', { title, description, skills });
  };

  return (
    <>
      <div ref={backgroundModalRef} className="background-modal" style={{
         display: "none",
         position: "fixed",
         top: 0,
         left: 0,
         width: "100%",
         height: "100%",
         backgroundColor: "rgba(0, 0, 0, 0.7)",
         zIndex: 9999,
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
      }}>
        <div className="modal-content" style={{
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
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Habilidades:</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Habilidades necessárias para o pedido"
                  value={skills}
                  onChange={(event) => setSkills(event.target.value)}
                />
              </div>

              <button type="button" className="btn btn-default" onClick={() => {
                backgroundModalRef.current.style.display = 'none';
              }}>Cancelar</button>

              {/* Move the submit button to the right */}
              <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pedido;
