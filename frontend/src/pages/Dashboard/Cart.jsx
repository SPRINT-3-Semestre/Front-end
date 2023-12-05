import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../../ui/components/surfaces/SideBar';
import CardCart from '../../ui/components/CardCart';
import style from '../../ui/styles/Cart.module.css';
import axios from 'axios';

function Cart() {
    const [totalValue, setTotalValue] = useState(0);
    const [cart, setCart] = useState([
        
    ]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    function list() {
        let userId = sessionStorage.getItem('userId');
        console.log("userId= ", userId);
        axios.get(`http://localhost:8080/carts?id=${userId}`, {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            console.log(res.data);

            if (Array.isArray(res.data)) {
                setCart(res.data);

                let total = 0;

                res.data.forEach((item) => {
                    total += item.price;
                });

                setTotalValue(total);
            } else {
                console.error("Response data is not an array:", res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const handlePurchase = () => {

        setCart([]);
        setTotalValue(0);
        setShowConfirmationModal(true);
    };

    const closeModal = () => {
        setShowConfirmationModal(false);
    };

    useEffect(() => {
        list();
    }, []);
    
    return (
        <>
            <Helmet title={`Carrinho  (itens) `} />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 mt-5">
                        <div className="card">
                            <div className="card-header text-center">
                                <h4>Carrinho de Compras</h4>
                            </div>
                            <div className="card-body">
                                {cart.length === 0 ? (
                                    <div className="text-center">
                                        <h5>Carrinho vazio</h5>
                                    </div>
                                ) : (
                                    cart.map((editor, index) => (
                                        <CardCart key={index} name={editor.name} skills={editor.skills} price={editor.price} />
                                    ))
                                )}
                                <hr />
                                <div className="text-center">
                                    <h5>Total: R$ {totalValue.toFixed(2)}</h5>
                                    <button
                                        className="btn btn-success mt-3"
                                        onClick={handlePurchase}
                                        disabled={cart.length === 0}
                                    >
                                        Finalizar Compra
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Confirmação */}
            {showConfirmationModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Compra Confirmada!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Obrigado por sua compra. Seu pedido foi confirmado.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={closeModal}>
                                    Continuar Comprando
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
