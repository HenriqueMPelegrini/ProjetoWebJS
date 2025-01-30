import ClienteDAO from "../Persistencia/ClienteDAO.js"

export default class Cliente{
    //atributos privados
    // o # tem a  mesma função do private, ou seja ,torna o atributo privado
    #id
    #cpf
    #nome
    #sobrenome
    #endereco
    #cidade
    #estado
    #cep

    //método construtor da classe
    constructor(id=0,cpf ="",nome="",sobrenome="",endereco="",cidade="",estado="",cep=""){// caso ele não passe valor , com esse construtor os atributos sem valor assume vazio
        this.#id =id;
        this.#cpf=cpf;
        this.#nome=nome;
        this.#sobrenome =sobrenome;
        this.#endereco=endereco;
        this.#cidade=cidade;
        this.#estado=estado;
        this.#cep=cep;
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

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf=novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome=novoNome;
    }

    get sobrenome(){
        return this.#sobrenome;
    }

    set sobrenome(novoSobrenome){
        this.#sobrenome=novoSobrenome;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco=novoEndereco;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novoCidade){
        this.#cidade=novoCidade;
    }

    get estado(){
        return this.#estado;
    }

    set estado(novoEstado){
        this.#estado=novoEstado;
    }

    get cep(){
        return this.#cep;
    }

    set cep(novoCep){
        this.#cep=novoCep;
    }

    //Override do método toJSON -> aqi monta um Objeto em formato JSON
    toJSON(){
        return {
            id:this.#id,
            cpf:this.#cpf,
            nome:this.#nome,
            sobrenome:this.#sobrenome,
            endereco:this.#endereco,
            cidade:this.#cidade,
            estado:this.#estado,
            cep:this.#cep
        }
    }

    //Override 
    toString(){
        return "Meu nome é " +this.#nome;
    }


    async gravar(){
        const clienteDAO = new ClienteDAO();
        const id = await clienteDAO.gravar(this);
        this.#id = id;
    }

    async atualizar(){
        const clienteDAO = new ClienteDAO();
        await clienteDAO.atualizar(this); 
    }

    async excluir(){
        const clienteDAO = new ClienteDAO();
        await clienteDAO.excluir(this);
    }

    async consultarNome(nome){
        const clienteDAO = new ClienteDAO();
       return await clienteDAO.consultarNome(nome);
    }

    async consultarID(id){
        const clienteDAO = new ClienteDAO();
        return await clienteDAO.consultarID(id);
    }

    

}