import React, { useState } from "react";
import { Helmet } from "react-helmet";
import style from '../../../ui/styles/chat.module.css';
import iconAviao from '../../../ui/images/send.svg'
import iconMoney from '../../../ui/images/cash-stack.svg'
import Sidebar from "../../../ui/components/surfaces/SideBar";

function Chat() {
    const [userEsquerda, setUserEsquerda] = useState({
        nome: "Abimael",
        foto: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        message: [
            { texto: "Olá, tudo bem? Como vai? lorem ipsum dolor sit amet, consectetur adipiscing elitLEFT3.", hora: "10:30" },
        ]
    });

    const [userDireita, setUserDireita] = useState({
        nome: "Wesley",
        foto: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        message: []
    });

    const sendMessage = () => {
        let messageText = document.getElementById('message').value;
        let messageHora = new Date().toLocaleTimeString(); // Adiciona a hora atual
        setUserDireita(prevUserDireita => ({
            ...prevUserDireita,
            message: [...prevUserDireita.message, { texto: messageText, hora: messageHora }]
        }));

        // Clear input
        document.getElementById('message').value = "";
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Evita a quebra de linha ao pressionar Enter
            sendMessage();
        }
    };

    return (
        <>
            <Helmet title={`Chat com ${userEsquerda.nome}`} />
            <Sidebar />

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <header className={style.header_chat}>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={userEsquerda.foto} alt="" width={80} height={80} />
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
                            {/* Mensagens de quem está do lado esquerdo */}
                            {userEsquerda.message.map((msg, index) => (
                                <div className={`col-md-6 ${style.message_box}`} key={index}>
                                    <div className={`${style.message_left}`}>
                                        <p>{msg.texto}</p>
                                        <small className="float-right">{msg.hora}</small>
                                    </div>
                                </div>
                            ))}

                            {/* Mensagens de quem está do lado direito */}
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
