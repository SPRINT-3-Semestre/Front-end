import { Helmet } from "react-helmet";
import { useState } from "react";
import style from '../../ui/styles/ExhibitionOrders.module.css';

import OrderCard from "../../ui/components/OrderCard";
import Sidebar from "../../ui/components/surfaces/SideBar";
import Pedido from "../../ui/components/modals/Pedido";

function ExhibitionOrders() {
    const [showModal, setShowModal] = useState(false);
    const [orders, setOrders] = useState([

        {
            id: 1,
            userId: 1,
            title: "Video de dança",
            description: "Preciso de um video de dança simples",
            skills: "Edição profissional, videos de dança"
        }, {
            id: 2,
            userId: 3,
            title: "Video de dança",
            description: "Preciso de um video de dança simples",
            skills: "Edição profissional, videos de dança"
        }, {
            id: 3,
            userId: 5,
            title: "Video de dança",
            description: "Preciso de um video de dança simples",
            skills: "Edição profissional, videos de dança"
        },
        {
            id: 4,
            userId: 10,
            title: "Video de dança",
            description: "Preciso de um video de dança simples",
            skills: "Edição profissional, videos de dança"
        }

    ]);


    const toggleModal = () => setShowModal(!showModal);


    return (
        <>
            <Helmet title={`Exposição de pedidos`} />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h4>Pedidos</h4>
                    </div>
                    <div className="col-md-12">
                        <button className={style.button} onClick={toggleModal}>
                            Fazer Pedido
                        </button>
                        {showModal && <Pedido onClose={toggleModal} />} {/* Passe a função onClose */}
                    </div>
                </div>
                <hr />
                <div className="row">
                    {orders.map((order) => {
                        return (
                            <div className="col-md-4 mt-5">
                                <OrderCard title={order.title} description={order.description} skills={order.skills} />
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default ExhibitionOrders;