import conectar from "./Conexao.js";
import Cliente from "../Modelo/Cliente.js";

export default class ClienteDAO{ // uma camada de tradução de um objeto para o BD
    constructor(){

    }

    async  gravar(cliente) {
        if (cliente instanceof Cliente){ // cliente pertence a Cliente
            const conexao = await conectar(); // esta aguardanado a conexao 
            const sql ="INSERT INTO Cliente(cpf,nome,sobrenome,endereco,cidade,estado,cep) VALUES(?,?,?,?,?,?,?)";
            const parametros =  [cliente.cpf,cliente.nome,cliente.sobrenome,cliente.endereco,cliente.cidade,cliente.estado,cliente.cep];
            const resultado =  await conexao.query(sql,parametros);
            return resultado[0].insertId;
        }
    }

    async  atualizar(cliente) {
        if (cliente instanceof Cliente){ // cliente pertence a Cliente
            const conexao = await conectar(); // esta aguardanado a conexao 
            const sql ="UPDATE Cliente SET cpf=?,nome=?,sobrenome=?,endereco=?,cidade=?,estado=?,cep=? WHERE id=?";
            const parametros =  [cliente.cpf,cliente.nome,cliente.sobrenome,cliente.endereco,cliente.cidade,cliente.estado,cliente.cep,cliente.id];
           await conexao.query(sql,parametros);
          
        }
        
    }

    async  excluir(cliente) {
        if (cliente instanceof Cliente){ // cliente pertence a Cliente
            const conexao = await conectar(); // esta aguardanado a conexao 
            const sql ="DELETE FROM Cliente  WHERE id=?";
            const parametros =  [cliente.id];
           await conexao.query(sql,parametros);
          
        }
    }

    async  consultarNome(nome) {
        const conexao = await conectar(); // esta aguardanado a conexao 
        const sql ="SELECT * FROM Cliente  WHERE nome like ?";
        const parametros =  ["%" + nome +"%"];// consultar qualquer parte desse nome, nao importa a posição
        const [rows] =await conexao.query(sql,parametros);
        let listaClientes =[];
        for (const registro of rows) {
            const cliente = new Cliente(registro['id'],registro['cpf'],registro['nome'],registro['sobrenome'],registro['endereco'],registro['cidade'],registro['estado'],registro['cep']);// o nome detro das chave saõ o do BD
            listaClientes.push(cliente);
        }
        return listaClientes;
    }

    async  consultarID(id) {
        const conexao = await conectar(); // esta aguardanado a conexao 
        const sql ="SELECT * FROM Cliente  WHERE id = ?";
        const parametros =  [id];// consultar qualquer parte desse nome, nao importa a posição
        const [rows] =await conexao.query(sql,parametros);
        let listaClientes =[];
        for (const registro of rows) {
            const cliente = new Cliente(registro['id'],registro['cpf'],registro['nome'],registro['sobrenome'],registro['endereco'],registro['cidade'],registro['estado'],registro['cep']);// o nome detro das chave saõ o do BD
            listaClientes.push(cliente);
        }
        return listaClientes;
        
    }
}