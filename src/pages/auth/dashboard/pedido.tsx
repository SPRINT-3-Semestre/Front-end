import React, { useState, useEffect } from "react";
import axios from "axios";
import { useEnvironment } from "../../../data/contexts/enviromentContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Header from "../../../ui/components/header";
import DashboardHeader from "../../../ui/components/dashboard-header";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const OrderDetail = styled.div`
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

function Pedido() {
  const { apiUrl } = useEnvironment();
  const { id } = useParams();
  const editorId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("authToken");
  const [orderData, setOrderData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [videoId, setVideoId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(`${apiUrl}/orders/${id}`, config);
          console.log("Videos", videoId);
          console.log(response.data);
          setOrderData(response.data);
          const videoIds = response.data.link
            .filter((link: string | null): link is string => link !== null)
            .map((link: string) => {
              const match = link.match(/(?:\?v=|\/embed\/|\.be\/)([\w-]{11})/);
              return match ? match[1] : null;
            })
            .filter(
              (videoId: string | null): videoId is string => videoId !== null
            );

          setVideoId(videoId);
        } else {
          throw new Error(
            "Token não encontrado na sessionStorage. Faça o login para obter um token válido."
          );
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, id, token]);

  const handleGetVideo = async () => {
    try {
      if (!token) {
        Toastify({
            text: "Token não encontrado. Faça o login para obter um token válido.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "red",
              color: "#fff",
            },
          }).showToast();
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token de autenticação no header
        },
      };

      const response = await axios.patch(
        `${apiUrl}/orders/${id}/associate-editor/${editorId}`,
        null,
        config
      );

      if (response.status >= 200 && response.status < 300) {
        Toastify({
          text: "Novo video associado a você, parabéns!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "green",
            color: "#fff",
          },
        }).showToast();
        navigate("/videos");
      } else {
        Toastify({
          text: "Erro ao associar o editor. Por favor, tente novamente.",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "red",
            color: "#fff",
          },
        }).showToast();
      }
    } catch (error) {
      Toastify({
        text: "Erro ao associar o editor. Por favor, tente novamente.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "red",
          color: "#fff",
        },
      }).showToast();
    }
  };

  const Imagem = styled.img`
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin: 10px;
  `;

  return (
    <>
      {/* <Header /> */}
      <DashboardHeader />
      <Container>
        <div className="row">
          <div className="text-center col-md-12 mt-5">
            <h1>Pedido</h1>
          </div>
        </div>
        <div className="row">
          <StyledCard className="card mt-5">
            {orderData && (
              <>
                <div className="row">
                  <div className="col-md-6">
                    <OrderDetail>
                      <b>Nome do cliente:</b> {orderData.nome}
                    </OrderDetail>
                    <OrderDetail>
                      <b>Título:</b> {orderData.title}
                    </OrderDetail>
                    <OrderDetail>
                      <b>Descrição:</b> {orderData.desc}
                    </OrderDetail>
                    <OrderDetail>
                      <b>Skills:</b> {orderData.skills}
                    </OrderDetail>
                    <OrderDetail>
                      <b>ID do Pedido:</b> {orderData.orderId}
                    </OrderDetail>
                    <OrderDetail>
                      <b>Download:</b>{" "}
                      <a
                        href={orderData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Clique aqui
                      </a>
                    </OrderDetail>
                  </div>
                  <div className="col-md-6 ">
                    <video controls width="640" height="360">
                      <source src={orderData.link} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  </div>
                </div>
              </>
            )}
            <div className="col-md-12 d-flex justify-content-end mt-3">
              <button className="btn btn-primary" onClick={handleGetVideo}>
                Pegar vídeo
              </button>
            </div>
          </StyledCard>
        </div>
      </Container>
    </>
  );
}

export default Pedido;
