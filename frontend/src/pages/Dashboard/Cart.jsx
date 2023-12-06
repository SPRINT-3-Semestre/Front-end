import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import { Modal, Button, Row, Col, Card } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';

import Sidebar from '../../ui/components/surfaces/SideBar';
import CardCart from '../../ui/components/CardCart';
import style from '../../ui/styles/Cart.module.css';
import PaymentConnection from '../../PaymentConnection';

function Cart() {
    const [totalValue, setTotalValue] = useState(0);
    const [cart, setCart] = useState([]);
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        let isMounted = true;

        if (cart.length === 0) {
            setTotalValue(0);
        }

        function list() {
            let userId = sessionStorage.getItem('userId');
            axios
                .get(`http://localhost:8080/carts?id=${userId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + sessionStorage.getItem('authToken'),
                        'Content-Type': 'application/json',
                    },
                })
                .then((res) => {
                    if (isMounted) {
                        setCart(res.data);

                        let total = 0;

                        res.data.forEach((item) => {
                            total += item.price;
                        });

                        setTotalValue(total);
                        setIsLoading(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setIsLoading(false);
                });
        }

        const statusCheckInterval = setInterval(() => {
            if (isMounted) {
                setLoadingProgress((prevProgress) => prevProgress + 25);
                if (loadingProgress >= 100) {
                    clearInterval(statusCheckInterval);
                }
            }
        }, 1000);

        setTimeout(() => {
            if (isMounted) {
                clearInterval(statusCheckInterval);
                list();
            }
        }, 5000);

        return () => {
            isMounted = false;
            clearInterval(statusCheckInterval);
        };
    }, [cart]);

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
                <Row>
                    <Col md={8} className="mx-auto  mt-5">
                        <Card>
                            <Card.Header className="text-center">
                                <h4>Carrinho de compras</h4>
                            </Card.Header>
                            <Card.Body>
                                {isLoading ? (
                                    <ProgressBar animated now={loadingProgress} label={`Carregando itens do carrinho... ${loadingProgress}%`} />
                                ) : (
                                    <>
                                        {cart.length === 0 ? (
                                            <div className="text-center">
                                                <h5>Vazio</h5>
                                            </div>
                                        ) : (
                                            <>
                                                {cart.map((editor) => (
                                                    <CardCart key={editor.id} name={editor.name} {...editor} skills={editor.skills} price={editor.price} />
                                                ))}
                                                <hr />
                                                <div className={`${style.cart_footer} text-center`}>
                                                    <h3>Total: R$ {totalValue}</h3>
                                                    <Button variant="success" onClick={handlePayment}>
                                                        Finalizar Compra
                                                    </Button>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Modal show={isPaymentModalOpen} onHide={closeModal} className={style.payment_modal}>
                <Modal.Header closeButton>
                    <Modal.Title>Pagamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Confirme seus dados</p>
                    <hr />
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
