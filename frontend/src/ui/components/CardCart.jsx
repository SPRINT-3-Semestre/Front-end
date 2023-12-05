import React from 'react';
import axios from 'axios';

const CardCart = (props) => {

  const removeCart = () => {
    axios.delete(`http://localhost:8080/carts/${props.cardId}`, {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('authToken'), 
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      alert('Editor removido com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao remover editor:', error);
      alert('Erro ao remover editor. Por favor, tente novamente mais tarde.');
    });
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Editor</th>
          <th>Habilidades</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.skills}</td>
          <td>R$: {props.price}</td>
          <td>{props.cardId}</td>
          <td>
            <button className="btn btn-danger btn-sm" onClick={() => removeCart(props.editorId)}>Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardCart;
