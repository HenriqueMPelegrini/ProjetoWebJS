// installar  npm install mysql2-promise 
import mysql from "mysql2/promise";
async function conectar() {
    // padrão singleton
    if (global.conexao && global.conexao.state !== "disconnected" ) { // global.conexao.status  já vem do objeto conexao, se tiver sem nenhum bd
        return global.conexao;
    }

     const conexao = await  mysql.createConnection({
        host :"localhost",
        port : 3306,
        user :"root",
        password:"",
        database : "backend"
    }); // aguarda a criação de uma conexão

    global.conexao = conexao; // esse global é ums constante global que posso adicionar qual quer coisa nele

    return conexao;
}

export default conectar;