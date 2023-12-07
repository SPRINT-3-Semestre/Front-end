import React from 'react';
import style from '../styles/CardPerson.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardPerson = (props) => {

  const navigate = useNavigate();
  let userId = sessionStorage.getItem('userId');

  const sendToCart = () => {
    let data = {
      "valorTotal": props.price,
      "clientFinal": userId,
      "editor": props.id
    };
    axios.post("http://localhost:8080/carts", data, {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('authToken'),
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        alert('Editor adicionado ao carrinho com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao enviar pedido:', error);
        alert('Erro ao enviar pedido. Por favor, tente novamente mais tarde.');
      });
  };

  const viewPortfolio = () => {
    navigate(`/portfolio/editor?id=${props.id}`);
  };

  return (
    <div className={style.cardPerson}>
      <div className="row">
        <div className="col-md-6">

          <a>
            <img
              src={props.personImage}
              alt="personIcon"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </a>
        </div>

        <div className="col-md-6">
          <p className={`${style.name} mt-5 m-0`}>{props.name ? props.name : ' Nome da pessoa'}</p>
        </div>

      </div>
      <hr />

      <p className={style.price}><b>R$</b>{props.price ? props.price : '0.00'}/hr</p>
      <p className={style.skills}><b>Habilidades</b></p>

      <ul>

        {props.skills ? props.skills
          .replace('[', '')
          .replace(']', '')
          .split(',')
          .map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          )) : <li>Nenhuma</li>}
      </ul>

      <div className="row text-center mt-5">
        <div className="col-md-6 mt-5">
          <button className={style.bttn} onClick={sendToCart}>Contratar</button>
        </div>
        <div className="col-md-6 mt-5">
          <button className={style.bttn2} onClick={viewPortfolio}>Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default CardPerson;
