import React from 'react';
import style from '../styles/CardPerson.module.css';
import defaultImage from '../images/personicon.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const CardPerson = (props) => {

  const navigate = useNavigate();
  let userId = sessionStorage.getItem('userId'); 
  let data = {
    "valorTotal": 100,  
    "clientFinal": 2,
    "editor": 3 
  };

  const sendToCart = () => {
    axios.post("http://localhost:8080/carts", data, {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('authToken'), 
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      alert('Pedido enviado com sucesso!');
      navigate('/carrinho');
    })
    .catch((error) => {
      console.error('Erro ao enviar pedido:', error);
      alert('Erro ao enviar pedido. Por favor, tente novamente mais tarde.');
    });
  };

  return (
    <div className={style.cardPerson}>
      <a><img src={props.personImage ? props.personImage : defaultImage} alt="personIcon" /></a>
      <p className={style.name}>{props.name ? props.name : ' Nome da pessoa'}</p>
      <p className={style.price}><b>R$</b>{props.price ? props.price : '0.00'}/hr</p>
      <p className={style.skills}><b>Habilidades</b></p>
      <ul>
        {
          props.skills ? props.skills.map((skill) => <li key={skill}>{skill}</li>) : <li>Nenhuma</li>  
        }
      </ul>
      <button className={style.bttn} onClick={() => sendToCart(props)}>Contratar</button>
    </div>
  );
};

export default CardPerson;
