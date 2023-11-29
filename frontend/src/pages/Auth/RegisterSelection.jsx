// RegisterSelection.jsx
import { Helmet } from "react-helmet";
import Header from "../../ui/components/surfaces/Header";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterSelection() {
    const navigate = useNavigate();
    const [rota, setRota] = useState('');

    const handleClick = (type) => {
        if (type === 'editor') {
          navigate('/register', { state: { rota: 'http://localhost:8080/editores' } });
        } else {
          navigate('/register', { state: { rota: 'http://localhost:8080/clientes' } });
        }
      };
      

    return (
        <>
            <Helmet title="EditMatch - Registro" />
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mt-5">Selecione o tipo de registro</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card mt-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Produtor de videos</h5>
                                        <p className="card-text">Se você é um produtor de videos clique aqui para se registrar</p>
                                        <button className="btn btn-primary" id="produtor" onClick={() => handleClick('produtor')}>Registrar-se como produtor de videos</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mt-5">
                                    <div className="card-body">
                                        <h5 className="card-title">Editor</h5>
                                        <p className="card-text">Se você é um editor, clique aqui para se registrar.</p>
                                        <button className="btn btn-primary" id="editor" onClick={() => handleClick('editor')}>Registrar-se como editor</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterSelection;
