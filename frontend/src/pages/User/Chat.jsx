import { Helmet } from "react-helmet";
import Sidebar from "../../ui/components/surfaces/SideBar";
import { useState } from "react";

import style from '../../ui/styles/chat.module.css';

import iconAviao from '../../ui/images/send.svg'
import iconMoney from '../../ui/images/cash-stack.svg'

function Chat() {

    const [user1, setUser1] = useState({
        nome: "Abimael",
        foto: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        message: [
            "Olá, tudo bem? Como vai? lorem ipsum dolor sit amet, consectetur adipiscing elitLEFT1.",
            "Olá, tudo bem? Como vai? lorem ipsum dolor sit amet, consectetur adipiscing elitLEFT2.",
            "Olá, tudo bem? Como vai? lorem ipsum dolor sit amet, consectetur adipiscing elitLEFT3.",
            
        ]
    });

    const [user2, setUser2] = useState({
        nome: "Wesley",
        foto: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        message: [
            "Olá, tudo bem? Como vai? lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Olá, tudo bem? Como vai? lorem ipsum dolor sit amet, consectetur adipiscing elit2.",
            "Olá, tudo bem? Como vai? lorem ipsum dolor sit amet, consectetur adipiscing elit3.",
        ]
    });

    const sendMessage = ()  =>{
        let message = document.getElementById('message').value;
        setUser1({...user1, message: message});
        console.log(message);
        //Clear input
        document.getElementById('message').value = "";
    }

    return (
        <>
            <Helmet title={`Chat com ${user1.nome}`} />
            <Sidebar />

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <header className={style.header_chat}>

                            <div className="row">
                                <div className="col-md-6">
                                    <img src={user1.foto} alt="" width={80} height={80}/>
                                </div>
                                <div className="col-md-4">
                                    <h4 className="mt-4 ml-2">{user1.nome}</h4>
                                </div>

                            </div>
                                <div className="col-md-2">
                                    <button className={style.button_proposal}>Fazer proposta<img src={iconMoney} alt="" /></button>
                                </div>
                        </header>

                        {/* Mensagem de quem está do lado esquerdo*/}
                        <div className={`${style.chat_background}`}>
                            
                            <div className={`col-md-6 ${style.message_box}`}>
                                <p className={style.message_left}>{user1.message}</p>
                            </div>

                            {/* Mensagem de quem está do lado direito*/}
                            <div className={`col-md-6 ${style.message_box_right}`}>
                                <p className={style.message_right}>{user1.message}</p>
                            </div>

                        </div>
                        <input type="text" id="message" className="form-control" placeholder="Digite uma mensagem"/>
                        <button onClick={sendMessage} className={style.send}><img src={iconAviao} alt=""/></button>
                    </div>
                </div>
            </div>

        </>
    )}

export default Chat;
