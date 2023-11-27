// Register.jsx
import { Helmet } from 'react-helmet';
import Header from '../../ui/components/surfaces/Header';
import Footer from '../../ui/components/surfaces/Footer';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import style from '../../ui/styles/FormRegister.module.css';
import imageRegister from '../../ui/images/register.svg';

function Register() {
    const { type } = useParams();
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("As senhas não coincidem");
            setPassword("");
            setConfirmPassword("");
            return;
        }

        try {
            // Fazer a chamada para o endpoint de cadastro
            const response = await axios.post(type === 'editor' ? 'http://localhost:8080/editores' : 'http://localhost:8080/clientes', {
                nome: nome,
                email: email,
                password: password,
                isEditor: type === 'editor' ? true : false
            });

            console.log(response);

            if (response.status === 200) {
                alert("Cadastro realizado com sucesso!");
                navigate("/login");
            } else {
                alert("Ops! Ocorreu um erro durante o cadastro.");
            }
        } catch (error) {
            console.error("Erro durante o cadastro:", error);
            alert("Ops! Ocorreu um erro durante o cadastro.");
        }
    };

    return (
        <>
            <Helmet title="EditMatch - Cadastro" />
            <Header />
            <div className="container">
                <img src={imageRegister} className={style.login_image} alt="Imagem de arvore roxa " />
                <div className="row mr-5">
                    <div className="col-12 col-md-12">
                        <form onSubmit={handleSubmit} className={style.form_login}>
                            <h1 className={style.title}>Cadastro</h1>
                            <div className="form-group">
                                <label htmlFor="inputName">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputName"
                                    aria-describedby="nameHelp"
                                    placeholder="Digite seu nome"
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    aria-describedby="emailHelp"
                                    placeholder="Digite seu email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputConfirmPassword">Confirmar senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputConfirmPassword"
                                    placeholder="Confirme sua senha"
                                    value={confirmPassword}
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="row d-flex">
                                <div className="col-md-6 mr-2">
                                    <Link to="/login" className={style.link_right}>Já tem cadastro?</Link>
                                </div>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="text-center">
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
