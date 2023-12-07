import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Importe o componente Link
import Sidebar from "../../ui/components/surfaces/SideBar";
import { useState } from "react";

import style from '../../ui/styles/ActiveConversations.module.css';

function ActiveConversations() {
    const [chatUsersActive, setChatUsersActive] = useState([
        {
            nome: "Abimael",
            foto: 'https://avatars.githubusercontent.com/u/59853942?v=4',
        },
        {
            nome: "Mazzaropi",
            foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mazzaropi-Am%C3%A1cio.jpg/1200px-Mazzaropi-Am%C3%A1cio.jpg'
        }
    ]);

    return (
        <>
            <Helmet />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <header>
                            <h1>Conversas ativas</h1>
                        </header>
                    </div>
                </div>
                <div className="row mt-5">
                    {chatUsersActive.map((user, index) => (
                        <div className="col-md-4" key={index}>
                            <Link to={`/chat?nome=${user.nome}&foto=${user.foto}`} className={style.link}>
                                {/* Utilize o componente Link para criar links */}
                                <div className={`card ${style.card}`}>
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img
                                                    src={user.foto}
                                                    alt="Foto da pessoa"
                                                    width={80}
                                                    height={80}
                                                    style={{
                                                        borderRadius: '50%'
                                                    }}
                                                />
                                            </div>
                                            <div className="col-md-6 mt-4">
                                                <h4>{user.nome}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ActiveConversations;
