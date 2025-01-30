// import Cliente from "./Modelo/Cliente.js" //VAi no package.json e coloca  "type": "module",



// let cliente = new Cliente(8,"11.111.111-11","MARIANA","MAIOLI","RUA BONGIOVANI","PPTA","SP","19700-000");

// //cliente.nome ="Renato";

// //console.log(cliente.toString());
// //console.log(JSON.stringify(cliente));// stringify pega um objeto é tranforma em um JSON - precisa ter o toJSON laá em cliente

// cliente.excluir().then(()=>{
//     console.log(`Cliente ${cliente.id} gravado com sucesso !`);
// });

import express from "express";
import rotaCliente from "./Rotas/rotaCliente.js";
import rotaProduto from "./Rotas/rotaProduto.js";
import cors from "cors";

const host = 'localhost';
const  porta = 4000;

const servidorHTTP =  express();// criando servidor
servidorHTTP.use(cors({
    origin:'*'
}));

servidorHTTP.use(express.json()) // para poder processar o json
servidorHTTP.use("/clientes", rotaCliente)// aqiu esta fazendo os get, post ....
servidorHTTP.use("/produtos", rotaProduto)
//servidorHTTP.use("/clientes", rotaCliente)
servidorHTTP.listen(porta,host,()=>{
    console.log("Servidor escutando um http://"+host+":"+porta)
})

// ---------------------- //
// Para usar o npm Start -> vai no  package.json e coloca "start": "node index",



