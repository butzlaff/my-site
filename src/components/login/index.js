import React, { Fragment, useState } from "react";
import Navbar from "../navbar";
//import './css/style.css';

const Login = () => {
    document.body.style.backgroundColor = "#737678";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "inherit";
    document.body.style.scrollBehavior = "auto";


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    
    return (
        <Fragment>
            <Navbar />
            <div id="login-container">
                <h1>Entre com seu Usuário</h1>
                <form action="" method="post">
                    <label for="email">E-mail</label>
                    <input type="email" value={email} name="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Entre com seu e-mail" autocomplete="off" />
                    <label for="">Senha</label>
                    <input type="password" value={password} name="password" onChange={e => setPassword(e.target.value)} id="password" placeholder="Digite sua senha" />
                    <a id="forgot-pass" href="!#">Esqueceu sua senha?</a>
                    <input type="submit" value="Login" />
                </form>
                <div id="register-container">
                    <p>Ainda não tem uma conta ?</p>
                    <a href="/register">Registrar</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;