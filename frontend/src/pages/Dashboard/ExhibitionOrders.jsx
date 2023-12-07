import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import style from '../../ui/styles/ExhibitionOrders.module.css';

import OrderCard from "../../ui/components/OrderCard";
import Sidebar from "../../ui/components/surfaces/SideBar";
import Pedido from "../../ui/components/modals/Pedido";
import axios from "axios"

function ExhibitionOrders() {
    const [showModal, setShowModal] = useState(false);
    const [orders, setOrders] = useState([]);


    const list = () => {
        axios.get('http://localhost:8080/orders', {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`
            }
        }).then((response) => {
            setOrders(response.data)
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        list()
    }, [])

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
                        {showModal && <Pedido onClose={toggleModal} />}
                    </div>
                </div>
                <hr />

                <div className="row">
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <div className="col-md-4 mt-5" key={order.id}>
                                <OrderCard nome={order.nome} title={order.title} description={order.description} skills={order.skills} />
                            </div>
                        ))
                    ) : (
                        <div className="col-md-12 text-center mt-3">
                            <p>Nenhum pedido disponível no momento.</p>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default ExhibitionOrders;