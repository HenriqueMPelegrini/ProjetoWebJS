import conectar from "./Conexao.js";
import Produto from "../Modelo/Produto.js";

export default class ProdutoDAO{ // uma camada de tradução de um objeto para o BD
    constructor(){

    }

    async  gravar(produto) {
        if (produto instanceof Produto){ // cliente pertence a Cliente
            const conexao = await conectar(); // esta aguardanado a conexao 
            const sql ="INSERT INTO Produto(codigo,descricao,validade,preco_custo,preco_venda,qtd_estoque,num_cod_barras) VALUES(?,?,?,?,?,?,?)";
            const parametros =  [produto.codigo,produto.descricao,produto.validade,produto.preco_custo,produto.preco_venda,produto.qtd_estoque,produto.num_cod_barras];
            const resultado =  await conexao.query(sql,parametros);
            return resultado[0].insertId;
        }
    }

    async  atualizar(produto) {
        if (produto instanceof Produto){ // cliente pertence a Cliente
            const conexao = await conectar(); // esta aguardanado a conexao 
            const sql ="UPDATE Produto SET codigo=?,descricao=?,validade=?,preco_custo=?,preco_venda=?,qtd_estoque=?,num_cod_barras=? WHERE id=?";
            const parametros =  [produto.codigo,produto.descricao,produto.validade,produto.preco_custo,produto.preco_venda,produto.qtd_estoque,produto.num_cod_barras,produto.id];
           await conexao.query(sql,parametros);
          
        }
        
    }

    async  excluir(produto) {
        if (produto instanceof Produto){ // cliente pertence a Cliente
            const conexao = await conectar(); // esta aguardanado a conexao 
            const sql ="DELETE FROM Produto  WHERE id=?";
            const parametros =  [produto.id];
           await conexao.query(sql,parametros);
          
        }
    }

    async  consultarNome(nome) {
        const conexao = await conectar(); // esta aguardanado a conexao 
        const sql ="SELECT * FROM Produto  WHERE descricao like ?";
        const parametros =  ["%" + nome +"%"];// consultar qualquer parte desse nome, nao importa a posição
        const [rows] =await conexao.query(sql,parametros);
        let lista =[];
        for (const registro of rows) {
            const produto = new Produto(registro['id'],registro['codigo'],registro['descricao'],registro['validade'],registro['preco_custo'],registro['preco_venda'],registro['qtd_estoque'],registro['num_cod_barras']);// o nome detro das chave saõ o do BD
            lista.push(produto);
        }
        return lista;
    }

    async  consultarID(id) {
        const conexao = await conectar(); // esta aguardanado a conexao 
        const sql ="SELECT * FROM Produto  WHERE id = ?";
        const parametros =  [id];// consultar qualquer parte desse nome, nao importa a posição
        const [rows] =await conexao.query(sql,parametros);
        let lista =[];
        for (const registro of rows) {
            const produto = new Produto(registro['id'],registro['codigo'],registro['descricao'],registro['validade'],registro['preco_custo'],registro['preco_venda'],registro['qtd_estoque'],registro['num_cod_barras']);// o nome detro das chave saõ o do BD
            lista.push(produto);
        }
        return lista;
        
    }
}