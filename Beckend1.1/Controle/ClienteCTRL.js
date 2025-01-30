// Nessa classe vai decicdir quem faz e quando faz, ou seja controla toda manipulação

import Cliente from "../Modelo/Cliente.js";

export default class ClienteCTRL{

    //HTTP POST
    gravar(requisicao,resposta){
        resposta.setHeader("Content-Type","application/json");
        if (requisicao.method === "POST") {
            if (requisicao.is("application/json")) { // verifica se é um JSON
                const dados = requisicao.body;
                const cpf = dados['cpf'];
                const nome = dados['nome'];
                const sobrenome= dados['sobrenome'];
                const endereco= dados['endereco']; 
                const cidade= dados['cidade'];
                const estado= dados['estado'];
                const cep = dados['cep'];

                //validação de dados
                if (cpf && nome && sobrenome && endereco && cidade && estado && cep) {
                    const cliente = new Cliente(0,cpf,nome,sobrenome,endereco,cidade,estado,cep);
                    cliente.gravar().then(()=>{
                        resposta.json({
                            "status" : true,
                            "id" : cliente.id, // quando grava ele retorna uma id
                            "mensagem" : "Cliente cadastrado com sucesso!!!"
                        })
                    }).catch((erro) =>{
                        resposta.json({
                            "status" : false,
                            "mensagem" : "Erro ao gravar o Cliente : " +erro.message
                        })
                    });
                    
                }else{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Verifique a documentação da API ne informa  todos os dados do cliente para gravar"
                    })
                }
            }else{
                resposta.json({
                    "status" : false,
                    "mensagem" : "A requisição deve possuir um payload application/json"
                })
            }
            
        }else{
            resposta.json({
                "status" : false,
                "mensagem" : "Para registrar um cliente utilize o metodo POST"
            })
        }

    }

    //HTTP PUT
    atualizar(requisicao,resposta){
        resposta.setHeader("Content-Type","application/json");
        if (requisicao.method === "PUT") {
            if (requisicao.is("application/json")) { // verifica se é um JSON

                const dados = requisicao.body;
                const id = dados['id'];
                const cpf = dados['cpf'];
                const nome = dados['nome'];
                const sobrenome= dados['sobrenome'];
                const endereco= dados['endereco']; 
                const cidade= dados['cidade'];
                const estado= dados['estado'];
                const cep = dados['cep'];

                //validação de dados
                if (id && cpf && nome && sobrenome && endereco && cidade && estado && cep) {
                    const cliente = new Cliente(id,cpf,nome,sobrenome,endereco,cidade,estado,cep);
                    cliente.atualizar().then(()=>{
                        resposta.json({
                            "status" : true,
                            "mensagem" : "Cliente atualizado com sucesso!!!"
                        })
                    }).catch((erro) =>{
                        resposta.json({
                            "status" : false,
                            "mensagem" : "Erro ao atualizado o Cliente : " +erro.message
                        })
                    });
                    
                }else{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Verifique a documentação da API ne informa  todos os dados do cliente para alterar"
                    })
                }
            }else{
                resposta.json({
                    "status" : false,
                    "mensagem" : "A requisição deve possuir um payload application/json"
                })
            }
            
        }else{
            resposta.json({
                "status" : false,
                "mensagem" : "Para alterar um cliente utilize o metodo PUT"
            })
        }


    }

    //HTTP DELETE
    excluir(requisicao,resposta){
        resposta.setHeader("Content-Type","application/json");
        if (requisicao.method === "DELETE") {
            if (requisicao.is("application/json")) { // verifica se é um JSON

                const dados = requisicao.body;
                const id = dados['id'];
                const cpf = dados['cpf'];
                const nome = dados['nome'];
                const sobrenome= dados['sobrenome'];
                const endereco= dados['endereco']; 
                const cidade= dados['cidade'];
                const estado= dados['estado'];
                const cep = dados['cep'];

                //validação de dados
                if (id && cpf && nome && sobrenome && endereco && cidade && estado && cep) {
                    const cliente = new Cliente(id,cpf,nome,sobrenome,endereco,cidade,estado,cep);
                    cliente.excluir().then(()=>{
                        resposta.json({
                            "status" : true,
                            "mensagem" : "Cliente excluido com sucesso!!!"
                        })
                    }).catch((erro) =>{
                        resposta.json({
                            "status" : false,
                            "mensagem" : "Erro ao excluir o Cliente : " +erro.message
                        })
                    });
                    
                }else{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Verifique a documentação da API ne informa  todos os dados do cliente para excluir"
                    })
                }
            }else{
                resposta.json({
                    "status" : false,
                    "mensagem" : "A requisição deve possuir um payload application/json"
                })
            }
            
        }else{
            resposta.json({
                "status" : false,
                "mensagem" : "Para excluir um cliente utilize o metodo DELETE"
            })
        }

    }

    //HTTP GET : NOME
    consultarNome(requisicao,resposta){
        resposta.type("application/json");
        if (requisicao.method === "GET") {
            // obtendo um parametro da url
            //   const nome = requisicao.params['id']; esse é pela url
             //if(nome){}

             //obttendo umparametro do corpo da requisição
             //const dados = requisicao.body;
             
             //const nome = dados['nome'];

            const cliente = new Cliente(0);
            cliente.consultarNome("").then((listaClientes)=>{
                resposta.json(listaClientes )
            }).catch((erro) =>{
                resposta.json({
                    "status" : false,
                    "mensagem" : "Erro ao consultar o Cliente : " +erro.message
                })
            });
            
        }else{
            resposta.json({
                "status" : false,
                "mensagem" : "Para consultar um cliente utilize o metodo GET"
            })
        }



    }

    //HTTP GET : ID
    consultarID(requisicao,resposta){
        resposta.type("application/json");
        if (requisicao.method === "GET") {
            // obtendo um parametro da url
               const id = requisicao.params['id'];
             if(id){
                const cliente = new Cliente(id);
                cliente.consultarID(id).then((listaClientes)=>{
                    resposta.json(listaClientes )
                }).catch((erro) =>{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Erro ao consultar o Cliente  ID: " +erro.message
                    })
                });
             }else{
                resposta.json({
                    "status" : false,
                    "mensagem" : "Especifique o id od cliente que deseja consultar"
                })

            }       
        }else{
            resposta.json({
                "status" : false,
                "mensagem" : "Para consultar um cliente utilize o metodo GET"
            })
        }


    }


}