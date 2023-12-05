import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../../ui/components/surfaces/SideBar';
import CardCart from '../../ui/components/CardCart';
import style from '../../ui/styles/Cart.module.css';
import PaymentConnection from '../../PaymentConnection';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

function Cart() {
    const [totalValue, setTotalValue] = useState(0);
    const [cart, setCart] = useState([]);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

    function list() {
        let userId = sessionStorage.getItem('userId');
        axios.get(`http://localhost:8080/carts?id=${userId}`, {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                console.log(res.data);
                setCart(res.data);

                let total = 0;
                let quantity = 0;

                res.data.forEach((item) => {
                    total += item.price;
                    quantity += 1;
                });

                setTotalValue(total);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        list();
    }, []);

    const handlePayment = () => {
        setPaymentModalOpen(true);
    };

    const closeModal = () => {
        setPaymentModalOpen(false);
    };

    return (
        <>
            <Helmet title={`Carrinho  (${cart.length} itens)`} />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className={style.card_cart}>
                            <div className={style.cart_header}>
                                <div className="row">
                                    <img src="" alt="" />
                                    <h4 className="card-title text-center">Carrinho de compras</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {cart.length === 0 ? (
                                        <div className="col-md-12">
                                            <h5 className='text-center'>Vazio</h5>
                                            <hr />
                                        </div>
                                    ) : (
                                        cart.map((editor) => (
                                            <div className="col-md-12" key={editor.id}>
                                                <CardCart name={editor.name} {...editor} skills={editor.skills} price={editor.price} />
                                            </div>
                                        ))
                                    )}
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={style.cart_footer}>
                                            <h3>Total: R$ {totalValue}</h3>
                                            <button className="btn btn-success" onClick={handlePayment}>
                                                Finalizar Compra
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Modal show={isPaymentModalOpen} onHide={closeModal} className={style.payment_modal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Pagamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PaymentConnection totalValue={totalValue} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    );
}

export default Cart;
