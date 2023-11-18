import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import CardPerson from "../../ui/components/CardPerson";
import Sidebar from "../../ui/components/surfaces/SideBar";
import style from "../../ui/styles/Exhibition.module.css";
import axios from 'axios';


function Exhibition() {

    const [customers, setCustomers] = useState([]);

      useEffect(() => {
         list();
     },[]);


     function list(){
       axios.get("http://localhost:8080/editores/listar-resumo").then((res) => { 
         console.log(res.data)
            setCustomers(res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
    return (
        <>
            <Helmet title="Exibição de editores" />
            <div className="container">
            <Sidebar />
                <input type="text" placeholder="Pesquisar" className={style.found} />
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
