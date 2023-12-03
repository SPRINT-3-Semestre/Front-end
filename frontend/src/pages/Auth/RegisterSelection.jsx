// RegisterSelection.jsx
import { Helmet } from "react-helmet";
import Header from "../../ui/components/surfaces/Header";
import { useNavigate } from 'react-router-dom';

import style from '../../ui/styles/RegisterSelection.module.css'

import monitor from '../../ui/images/Monitor.png';
import magnifier from '../../ui/images/find.png';
import Footer from "../../ui/components/surfaces/Footer";

function RegisterSelection() {
    const navigate = useNavigate();

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
                    <div className="col-md-12 text-center">
                        <h1 className="mt-5">Vamos te ajudar a encontrar a melhor opção para a sua necessidade</h1>
                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <div className={`mt-5 ${style.card}`} id="produtor" onClick={() => handleClick('produtor')}>
                                <h5 className="card-title">Produtor de videos</h5>
                                <p className="card-text">Está procurando alguém para editar seus videos? Está no lugar certo!</p>
                                <img src={monitor} alt="Icone de monitor" />
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className={`mt-5 ${style.card}`} id="editor" onClick={() => handleClick('editor')}>
                                <h5 className="card-title">Editor</h5>
                                <p className="card-text">Você é um editor de video e quer realizar sonhos? Acesse aqui!</p>
                                <img src={magnifier} alt="Icone de lupa" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
            d        </>
    )
}

export default RegisterSelection;
