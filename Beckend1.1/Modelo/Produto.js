import ProdutoDAO from "../Persistencia/ProdutoDAO.js"

export default class Produto{
    //atributos privados
    // o # tem a  mesma função do private, ou seja ,torna o atributo privado
    #id
    #codigo
    #descricao
    #validade
    #preco_custo
    #preco_venda
    #qtd_estoque
    #num_cod_barras

    //método construtor da classe
    constructor(id=0,codigo ="",descricao="",validade="",preco_custo="",preco_venda="",qtd_estoque="",num_cod_barras=""){// caso ele não passe valor , com esse construtor os atributos sem valor assume vazio
        this.#id =id;
        this.#codigo=codigo;
        this.#descricao=descricao;
        this.#validade =validade;
        this.#preco_custo=preco_custo;
        this.#preco_venda=preco_venda;
        this.#qtd_estoque=qtd_estoque;
        this.#num_cod_barras=num_cod_barras;
    }


    //Métodos Get e Set 
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

    set codigo(novoCodigo){
        this.#codigo=novoCodigo;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(novoDesc){
        this.#descricao=novoDesc;
    }

    get validade(){
        return this.#validade;
    }

    set validade(novoValidade){
        this.#validade=novoValidade;
    }

    get preco_custo(){
        return this.#preco_custo;
    }

    set preco_custo(novoPreco){
        this.#preco_custo=novoPreco;
    }

    get preco_venda(){
        return this.#preco_venda;
    }

    set preco_venda(novoPrecoVenda){
        this.#preco_venda=novoPrecoVenda;
    }

    get qtd_estoque(){
        return this.#qtd_estoque;
    }

    set qtd_estoque(novoQtdEstoque){
        this.#qtd_estoque=novoQtdEstoque;
    }

    get num_cod_barras(){
        return this.#num_cod_barras;
    }

    set num_cod_barras(novoBarras){
        this.#num_cod_barras=novoBarras;
    }

  
    //Override do método toJSON -> aqi monta um Objeto em formato JSON
    toJSON(){
        return {
            id:this.#id,
            codigo:this.#codigo,
            descricao:this.#descricao,
            validade:this.#validade,
            preco_custo:this.#preco_custo,
            preco_venda:this.#preco_venda,
            qtd_estoque:this.#qtd_estoque,
            num_cod_barras:this.#num_cod_barras
        }
    }

    //Override 
    toString(){
        return "O Produto é " +this.#descricao;
    }


    async gravar(){
        const produtoDAO = new ProdutoDAO();
        const id = await produtoDAO.gravar(this);
        this.#id = id;
    }

    async atualizar(){
        const produtoDAO = new ProdutoDAO();
        await produtoDAO.atualizar(this); 
    }

    async excluir(){
        const produtoDAO = new ProdutoDAO();
        await produtoDAO.excluir(this);
    }

    async consultarNome(nome){
        const produtoDAO = new ProdutoDAO();
       return await produtoDAO.consultarNome(nome);
    }

    async consultarID(id){
        const produtoDAO = new ProdutoDAO();
        return await produtoDAO.consultarID(id);
    }

    

}