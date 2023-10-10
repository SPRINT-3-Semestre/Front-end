import Header from "../../ui/components/surfaces/Header";
import Footer from "../../ui/components/surfaces/Footer";


import Helmet from 'react-helmet'
import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';


import style from '../../ui/styles/FormRegister.module.css';
import imageRegister from '../../ui/images/register.svg'


function Register() {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);


        if(password !== confirmPassword){
            alert("As senhas não coincidem");
            setPassword("");
            setConfirmPassword("");

            return;
        }

        return redirect("/login");

    };


    return (
        <>
            <Helmet title="EditMatch - Cadastro" />
            <Header />
            <div className="container">
                <img src={imageRegister} className={style.login_image} />
                <div className="row mr-5">
                    <div className="col-12 col-md-12">
                        <form onSubmit={handleSubmit} className={style.form_login}>
                            <h1 className={style.title}>Cadastro</h1>
                            <div className="form-group">
                                <label htmlFor="InputEmail">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputName"
                                    aria-describedby="NameHelp"
                                    placeholder="Digite seu nome"
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                    required
                                />
                            </div>
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
                            <div className="form-group">
                                <label htmlFor="InputConfirmPassword">Confirmar senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="InputConfirmPassword"
                                    placeholder="Confirme sua senha"
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="row d-flex">
                                <div className="col-md-6 mr-2">
                                    <Link to="/login" className={style.link_right}>Ja tem cadastro?</Link>
                                </div>
                            </div>
                            <button type="submit" className="text-center">
                                Cadastro
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Register;