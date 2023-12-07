import React from 'react';
import personIcon from '../../ui/images/personicon.png';
import { Link } from "react-router-dom";  // Importe o componente Link


import style from '../../ui/styles/OrderCard.module.css';
import defaultImage from '../../ui/images/personicon.png';


function OrderCard(props) {
    return (
        <div className={`card ${style.card}`}>
            <div className="card-body">
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
                <div className="text-center">
                    <Link to={`/chat?nome=${props.nome}&image=${props.image ? props.image : defaultImage}`}>
                        <button className="btn btn-primary">
                            Negociar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderCard;
