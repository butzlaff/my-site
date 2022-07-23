import React, { Fragment } from "react";
import Navbar from "../navbar";
//import './css/style.css';


const Register = () => {

    async function enviar() {
        //const db = require("./bd");
        let nome = document.getElementById('nome_usuario').value;
        let sobrenome = document.getElementById('sobrenome');
        let data_nascimento = document.getElementById('data_nascimento').value;
        let naturalidade = document.getElementById('naturalidade').value;
        let email = document.getElementById('naturalidade').value;
        let senha = document.getElementById('email').value;
        let usuario = { nome, sobrenome, naturalidade, data_nascimento, email, senha };
        alert(usuario);
    }

    document.body.style.backgroundColor = "#737678";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "inherit";
    document.body.style.scrollBehavior = "auto";


    return (
        <Fragment>
            <Navbar />
            <div id="registro-container">
                <h1>Registro</h1>
                <form onSubmit={enviar()}>
                    <label for="nome_usuario">Nome</label>
                    <input type="text" name="nome_usuario" id="nome_usuario" placeholder="Digite seu nome" autocomplete="off" />
                    <label for="sobrenome_usuario">Sobrenome</label>
                    <input type="text" name="Sobrenome" id="sobrenome" placeholder="Digite seu sobrenome" autocomplete="off" />
                    <label for="data_nascimento">Data de Nascimento</label>
                    <input type="date" name="Data de Nascimento" id="data_nascimento" placeholder="Data de Nascimento" autocomplete="off" />
                    <label for="data_nascimento">Naturalidade</label>
                    <input type="text" name="naturalidade" id="naturalidade" placeholder="Digite sua Naturalidade" autocomplete="off" />
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Entre com seu e-mail" autocomplete="off" />
                    <label for="">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" />
                    <input type="submit" value="Registrar" />
                </form>
            </div>
        </Fragment>
    )
}

export default Register;