import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import style from '../../ui/styles/ExhibitionOrders.module.css';

import MyOrderCard from "../../ui/components/MyOrderCard";
import Sidebar from "../../ui/components/surfaces/SideBar";
import Pedido from "../../ui/components/modals/Pedido";
import axios from "axios"

function MyOrders() {
    const [showModal, setShowModal] = useState(false);
    const [orders, setOrders] = useState([]);


    const fetchOrders = () => {
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
        fetchOrders();

        const intervalId = setInterval(() => {
            fetchOrders();
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    const toggleModal = () => setShowModal(!showModal);


    return (
        <>
            <Helmet title={`Exposição de pedidos`} />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h4>Meus Pedidos</h4>
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
                                <MyOrderCard id={order.orderId} nome={order.nome} title={order.title} description={order.desc} skills={order.skills} image={order.image} />
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

export default MyOrders;