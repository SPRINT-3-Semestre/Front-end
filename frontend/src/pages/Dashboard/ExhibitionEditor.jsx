import React from "react";
import { Helmet } from "react-helmet";
import CardPerson from "../../ui/components/CardPerson";
import Sidebar from "../../ui/components/surfaces/SideBar";

const customers = [
    {
        nome: "Wesley de Lima Costa",
        precoHora: 10,
        imagem: "",
        habilidades: ["C++", "C#", "Java"]
    }, {
        nome: "Erik Benficas",
        precoHora: 10,
        imagem: "https://www.w3schools.com/howto/img_avatar.png",
        habilidades: ["Python", "Javascript", "Java"]
    }, {
        nome: "Lucas Silva Lima",
        precoHora: 10,
        imagem: "https://www.w3schools.com/howto/img_avatar.png",
        habilidades: ["C++", "C#", "Java"]
    }];

function Exhibition() {
    return (
        <>
            <Helmet title="Exibição de editores" />
            <div className="container">
                <Sidebar />
                <div className="row">
                    {customers.map((customer, index) => (
                        <div className="col-md-4" key={index}>
                            <CardPerson
                                name={customer.nome}
                                price={customer.precoHora}
                                personImage={customer.imagem}
                                skills={customer.habilidades}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Exhibition;
