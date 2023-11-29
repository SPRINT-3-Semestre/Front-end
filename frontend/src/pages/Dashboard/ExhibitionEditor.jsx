import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import CardPerson from "../../ui/components/CardPerson";
import Sidebar from "../../ui/components/surfaces/SideBar";
import style from "../../ui/styles/Exhibition.module.css";
import axios from "axios";

import Pedido from "../../ui/components/modals/Pedido";

function Exhibition() {
  const [customers, setCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal state

  useEffect(() => {
    list();
  }, []);

  const toggleModal = () => setShowModal(!showModal);

  function list() {
    axios
      .get(
        "https://6531c22a4d4c2e3f333d44b4.mockapi.io/Editores/Editores"
      )
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Helmet title="Exibição de editores" />
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="Pesquisar" className={style.found} />
          </div>

          <div className="col-md-6">
            <button className="btn btn-primary" onClick={toggleModal}>
              Fazer Pedido
            </button>

            {showModal && <Pedido />} {/* Conditionally render the modal */}
          </div>
        </div>

        <div className={style.card_boxes}>
          {customers?.map((customer, index) => (
            <CardPerson
              key={index}
              name={customer.nome}
              price={customer.valorHora}
              personImage={customer.photo_profile}
              skills={customer.habilidades}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exhibition;
