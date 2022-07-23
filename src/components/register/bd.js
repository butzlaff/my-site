/*const mysql = require("mysql2/promise");


async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const connection = await mysql.createConnection("mysql://u115368847_emilio:Timaos2kk31@sql792.main-hosting.eu:3306/u115368847_teste");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function insertUsuario(usuario){
    const conn = await connect();
    const sql = 'INSERT INTO dados_usuario(nome_pessoa, sobrenome_pessoa, naturalidade_pessoa, nascimento_pessoa, email_pessoa_login) VALUES (?,?,?,?,?);';
    const values = [nome, sobrenome, naturalidade, nascimento, email];
    return await conn.query(sql, values);
}

async function selectUsuarios(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM dados_usuario;');
    return rows;
}

module.exports = {selectUsuarios, insertUsuario}*/