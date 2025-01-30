import conectar from './Conexao';
import Fornecedor from '../Modelo/Fornecedor';


export default class FornecedorDAO{
    constructor(){

    }

    async gravar(fornecedor) {
        if(fornecedor instanceof Fornecedor){
            const conexao = await conectar();
            const sql = 'INSERT INTO Fornecedor(codigo,nome,endereco,bairro,cidade,estado,cep,ativo) VALUES(?,?,?,?,?,?,?,?)'
            const parametros = [fornecedor.codigo,fornecedor.nome,fornecedor.endereco,fornecedor.bairro,fornecedor.cidade,fornecedor.estado,fornecedor.cep,fornecedor.ativo]
            const resultado = await conexao.query(sql,parametros);
            return resultado[0].insertId;
        }
    }

    async atualizar(fornecedor){
        if(fornecedor instanceof Fornecedor){
            const conexao = await conectar();
            const sql = 'UPDATE Fornecedor SET(codigo= ?,nome = ?,endereco = ?,bairro = ?,cidade = ?,estado = ?,cep = ?,ativo=? WHERE codigo = ?)'
            const parametros = [fornecedor.codigo,fornecedor.nome,fornecedor.endereco,fornecedor.bairro,fornecedor.cidade,fornecedor.estado,fornecedor.cep,fornecedor.ativo,fornecedor.codigo]
            await conexao.query(sql,parametros);
        }
    }

    async excluir(fornecedor){
        if(fornecedor instanceof Fornecedor){
            const conexao = await conectar();
            const sql = 'DELETE FROM Fornecedor WHERE id = ?)'
            const parametros = [fornecedor.id]
            await conexao.query(sql,parametros);
        }
    }

    async consultarNome(nome){
        const conexao = await conectar();
        const sql = "SELECT * FROM Fornecedor WHERE nome like ?";
        const parametros=['%'+nome+'%'];
        const [estado,setEstado] = useState('');
        const [rows] = await conexao.query(sql,parametros);
        let listaFornecedor = []
        for(registro of rows){
            const fornecedor = new Fornecedor(registro['id'],registro['codigo'],registro['nome'],registro['endereco'],registro['bairro'],registro['cidade'],registro['estado'],registro['cep'],registro['ativo']);
            listaFornecedor.push(fornecedor);
        }
        return listaFornecedor;
    }

    async consultarCodigo(codigo){
        const conexao = await conectar();
        const sql = "SELECT * FROM Fornecedor WHERE codigo = ?";
        const parametros=[codigo];
        const [estado,setEstado] = useState('');
        const [rows] = await conexao.query(sql,parametros);
        let listaFornecedor = []
        for(registro of rows){
            const fornecedor = new Fornecedor(registro['codigo'],registro['nome'],registro['endereco'],registro['bairro'],registro['cidade'],registro['estado'],registro['cep'],registro['ativo']);
            listaFornecedor.push(fornecedor);
        }
        return listaFornecedor;
    }
}