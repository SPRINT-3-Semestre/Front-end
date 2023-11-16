import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../../ui/components/surfaces/SideBar';
import CardCart from '../../ui/components/CardCart';
import axios from 'axios';

function Cart() {

    const [qtdItens, setQtdItens] = useState(0);
    const [totalValue, setTotalValue] = useState(0);
    const [cart, setCart] = useState([]);

    /* function list() {
         axios.get().then((res) => {
             console.log(res.data)
             setCart(res.data);
             forEach.res.data((item) => {
                 setTotalValue += item.price;
                 setQtdItens(index++)
             })
             setQtdItens(count);
         }).catch((err) => {
             console.log(err);
         })
     }
 */


    return (
        <>
            <Helmet title={`Carrinho (${qtdItens} itens) `} />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-4">
                            <div className="card-header">
                                <div className="row">
                                    <h4 className="card-title text-center">Carrinho</h4>
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
                                                <CardCart editorname={editor.editorname} hability={editor.hability} price={editor.price} />
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="float-right">
                                            <h3>Total: R$ {totalValue}</h3>
                                            <button className="btn btn-success">Finalizar Compra</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;