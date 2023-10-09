import Header from "../../ui/components/surfaces/Header";
import Footer from "../../ui/components/surfaces/Footer";


import Helmet from 'react-helmet'
import { useState } from 'react';
import { Link } from 'react-router-dom';


import style from '../../ui/styles/FormLogin.module.css';
import imageLogin from '../../ui/images/login.svg'


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        setEmail("")
        setPassword("");

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
                                    value={email}
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
                                    value={password}
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