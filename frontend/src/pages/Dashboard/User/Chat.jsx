import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import style from '../../../ui/styles/chat.module.css';
import iconAviao from '../../../ui/images/send.svg'
import iconMoney from '../../../ui/images/cash-stack.svg'
import Sidebar from "../../../ui/components/surfaces/SideBar";

function Chat() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const nome = params.get("nome");
    const image = params.get("image");

    const [userEsquerda, setUserEsquerda] = useState({
        nome: nome,
        image: image ,
        message: []
    });


    console.log(userEsquerda.image)

    const [userDireita, setUserDireita] = useState({
        nome: "Wesley",
        image: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        message: []
    });

    const sendMessage = () => {
        let messageText = document.getElementById('message').value;
        let messageHora = new Date().toLocaleTimeString();
        setUserDireita(prevUserDireita => ({
            ...prevUserDireita,
            message: [...prevUserDireita.message, { texto: messageText, hora: messageHora }]
        }));

        document.getElementById('message').value = "";
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            <Helmet title={`Chat com ${userEsquerda.nome}`} />
            <Sidebar />

            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <header className={style.header_chat}>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={userEsquerda.image} alt="" width={80} height={80} />
                                </div>
                                <div className="col-md-4">
                                    <h4 className="mt-4 ml-2">{userEsquerda.nome}</h4>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className={style.button_proposal}>Fazer proposta<img src={iconMoney} alt="" /></button>
                            </div>
                        </header>

                        <div className={`${style.chat_background}`}>
                            {userEsquerda.message.map((msg, index) => (
                                <div className={`col-md-6 ${style.message_box}`} key={index}>
                                    <div className={`${style.message_left}`}>
                                        <p>{msg.texto}</p>
                                        <small className="float-right">{msg.hora}</small>
                                    </div>
                                </div>
                            ))}

                            {userDireita.message.map((msg, index) => (
                                <div className={`col-md-6 ${style.message_box_right}`} key={index}>
                                    <div className={`${style.message_right}`}>
                                        <p>{msg.texto}</p>
                                        <small className="float-right">{msg.hora}</small>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <input
                            id="message"
                            className="form-control"
                            placeholder="Digite uma mensagem"
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={sendMessage} className={style.send}><img src={iconAviao} alt="" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat;
