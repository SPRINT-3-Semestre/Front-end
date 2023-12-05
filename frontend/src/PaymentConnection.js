import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import './ui/styles/Payment.css';

const api = axios.create({
  baseURL: 'https://api.mercadopago.com',
});

api.interceptors.request.use(async (config) => {
  const token = process.env.REACT_APP_TOKEN_MERCADO_PAGO_PUBLIC;
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function PaymentConnection(props) {
  const [formData, setFormdata] = useReducer(formReducer, {});
  const [responsePayment, setResponsePayment] = useState(false);
  const [linkBuyMercadoPago, setLinkBuyMercadoPago] = useState(false);
  const [statusPayment, setStatusPayment] = useState(false);
  const [purchaseApproved, setPurchaseApproved] = useState(false);

  const [email, setEmail] = useState(sessionStorage.getItem('userEmail'));
  const [nome, setNome] = useState(sessionStorage.getItem('usuario'));

  const handleChange = (event) => {
    setFormdata({
      name: event.target.name,
      value: event.target.value,
    });
  };

  useEffect(() => {
    if (responsePayment) {
      getStatusPayment();
    }
  }, [responsePayment]);

  const getStatusPayment = () => {
    api.get(`v1/payments/${responsePayment.data.id}`).then((response) => {
      if (response.data.status === 'approved') {
        setStatusPayment(true);
        setPurchaseApproved(true);
        console.log('Compra aprovada');
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      transaction_amount: props.totalValue ? props.totalValue : 1,
      description: 'Produto teste de desenvolvimento',
      payment_method_id: 'pix',
      payer: {
        email: sessionStorage.getItem('userEmail'),
        first_name: sessionStorage.getItem('usuario'),
        last_name: '',
        identification: {
          type: 'CPF',
          number: '01234567890',
        },
      },
      notification_url:
        'https://httpdump.app/dumps/0c5772bb-42a0-4b1e-95d5-5ff3a91340fa',
    };

    api
      .post('v1/payments', body)
      .then((response) => {
        setResponsePayment(response);
        setLinkBuyMercadoPago(
          response.data.point_of_interaction.transaction_data.ticket_url
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {!responsePayment && (
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label">E-mail</label>
            <input
              className="form-control"
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>

          <div>
            <label>Nome</label>
            <input
              className="form-control"
              onChange={handleChange}
              name="nome"
              value={nome}
            />
          </div>

          <div>
            <label>CPF</label>
            <input
              className="form-control"
              onChange={handleChange}
              name="cpf"
            />
          </div>

          <div>
            <button type="submit">Pagar</button>
          </div>
        </form>
      )}

      {linkBuyMercadoPago && !statusPayment && (
        <iframe
          src={linkBuyMercadoPago}
          width="400px"
          height="620px"
          title="link_buy"
        />
      )}

      {statusPayment && (
        <>
          <h1>Compra Aprovada</h1>
          {purchaseApproved && (
            <p>Agradecemos por sua compra! Seu pedido foi aprovado.</p>
          )}
        </>
      )}
    </>
  );
}

export default PaymentConnection;
