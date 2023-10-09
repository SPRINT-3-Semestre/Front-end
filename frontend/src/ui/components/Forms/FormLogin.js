import { useState } from 'react';
import style from '../../styles/FormLogin.module.css';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        // TODO: implementar a lógica de login
    };

    return (
        <div class="row">
            <div class="col-12 col-md-12">
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
                    <div className="row">
                        <div class="col-md-6">
                            <a className="form-link">Não tem cadastro?</a>
                        </div>
                        <div class="col-md-6">
                            <a className="">Esqueceu sua senha?</a>
                        </div>
                    </div>
                    <button type="submit">
                        Logar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;