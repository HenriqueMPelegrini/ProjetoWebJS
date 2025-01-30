import FornecedorDAO from "../Persistencia/FornecedorDAO";

export default class Fornecedor {
    #id
    #codigo
    #nome
    #endereco
    #bairro
    #cidade
    #estado
    #cep
    #ativo

    constructor( id = 0,codigo, nome = "", endereco = "", bairro = "", cidade = "", estado = "", cep = "", ativo = ""){
        this.#id =id;
        this.#codigo = codigo;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#cep = cep;
        this.#ativo = ativo;
    };
    get id(){
        return this.#id;
    }

    set id(novoId){
        if (novoId >= 0) {
            this.#id=novoId;
        }
    }

    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo;
    }

    get nome(){
        return this.#nome;
    }
    set nome(nome){
        this.#nome = nome;
    }

    get endereco() {
        return this.#endereco;
    }
    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }
    set bairro(bairro){
        this.#bairro = bairro
    }

    get cidade() {
        return this.#cidade;
    }
    set cidade(novoCidade) {
        this.#cidade = novoCidade;
    }

    get estado() {
        return this.#estado;
    }
    set estado(novoEstado) {
        this.#estado = novoEstado;
    }

    get cep() {
        return this.#cep;
    }
    set cep(novoCep) {
        this.#cep = novoCep;
    }

    get ativo(){
        return this.#ativo;
    }
    set ativo(ativo){
        this.#ativo = ativo;
    }

    toJSON(){
        return{
            id:this.#id,
            codigo : this.#codigo,
            nome : this.#nome,
            endereco : this.#endereco,
            bairro : this.#bairro,
            cidade : this.#cidade,
            estado : this.#estado,
            cep : this.#cep,
            ativo : this.#ativo
        }
    }

    toString(){
        return "Eu sou o fornecedor "+ this.nome;
    }

    async gravar(){
        const fornecedorDao = new FornecedorDAO();
        const codigo = await fornecedorDao.gravar(this);
        this.codigo = codigo;
    }

    async atualizar(){
        const fornecedorDao = new FornecedorDAO;
        await fornecedorDao.atualizar(this);
    }

    async excluir(){
        const fornecedorDao = new FornecedorDAO;
        await fornecedorDao.excluir(this);
    }

    async consultarNome(nome){
        const fornecedorDao = new FornecedorDAO;
        return await fornecedorDao.consultar(nome);
    }

    async consultarCodigo(codigo){
        const fornecedorDao = new FornecedorDAO;
        return await fornecedorDao.consultarCodigo(codigo);
    }
}