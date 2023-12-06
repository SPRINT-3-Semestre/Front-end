import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import CardPerson from "../../ui/components/CardPerson";
import Sidebar from "../../ui/components/surfaces/SideBar";
import style from "../../ui/styles/Exhibition.module.css";
import axios from "axios";

import Pedido from "../../ui/components/modals/Pedido";
import { Link } from "react-router-dom";

function Exhibition() {
  const [customers, setCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/usuarios/listar-editor",
        {
          headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('authToken'),
            'Content-Type': 'application/json',
          }
        })

      .then((res) => {
        console.log(res.data);
        setCustomers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleModal = () => setShowModal(!showModal);


  return (
    <>
      <Helmet title="Exibição de editores" />
      <Sidebar />
      <div className="container">

        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h4>Contratar editores</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className={style.card_boxes}>
              {customers?.map((customer, index) => (
                <CardPerson
                  key={index}
                  id={customer.id}
                  name={customer.nome}
                  price={customer.valorHora}
                  personImage={customer.photo_profile}
                  skills={customer.habilidades}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exhibition;
