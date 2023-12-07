import Header from "../../ui/components/surfaces/Header";
import Footer from "../../ui/components/surfaces/Footer";


import Helmet from 'react-helmet'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import style from '../../ui/styles/FormLogin.module.css';
import imageLogin from '../../ui/images/login.svg'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const url = "http://localhost:8080/usuarios/login";
    const logar = (email, password) => {

        axios.post(url, {
            email: email,
            senha: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200 && response.data?.token) {
                    sessionStorage.setItem('authToken', response.data.token);
                    sessionStorage.setItem('usuario', response.data.nome);
                    sessionStorage.setItem('userId', response.data.userId);
                    sessionStorage.setItem('userEmail', response.data.email);


                    alert('Login realizado com sucesso!')
                    if (response.data.editor) {
                        sessionStorage.setItem('editor', response.data.editor);
                        navigate('/exposicao-pedidos')
                    } else {
                        navigate('/exposicao-editor')
                    }


                } else {
                    throw new Error('Ops! Ocorreu um erro interno.');
                }
            })
            .catch(error => {
                toast.error(error.message);
            });
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        const login = logar(email, password)
        setEmail('')
        setPassword('');
    };


    return (
        <>
            <Helmet title="EditMatch - Login" />
            <Header />
            <div className="container">
                <img src={imageLogin} className={style.login_image} />
                <div className="row mr-5">
                    <div className="col-12 col-md-12">
                        <form onSubmit={handleSubmit} className={style.form_login}>
                            <h1 className={style.title}>Login</h1>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="InputEmail"
                                    aria-describedby="emailHelp"
                                    placeholder="Digite seu email"
                                    defaultValue={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPassword">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="InputPassword"
                                    placeholder="Digite sua senha"
                                    defaultValue={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6">
                                    <Link to="/register" className={style.link_left}>Não tem cadastro?</Link>
                                </div>
                                <div className="col-md-6">
                                    <a className={style.link_right}>Esqueceu sua senha?</a>
                                </div>
                            </div>
                            <button type="submit">
                                Logar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Login;