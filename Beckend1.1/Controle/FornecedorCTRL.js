
import Fornecedor from "../Modelo/Fornecedor.js";

export default class FornecedorCTRL{


    gravar(requisicao,resposta){
        resposta.setHeader("Content-Type","application/json");
        if (requisicao.method === "POST") {
            if (requisicao.is("application/json")) { 
                const dados = requisicao.body;
                const codigo = dados['codigo'];
                const nome = dados['nome'];
                const endereco= dados['endereco'];
                const bairro= dados['bairro'];
                const cidade= dados['cidade'];
                const estado= dados['estado'];
                const cep = dados['cep'];
                const ativo= dados['ativo'];


                if (codigo && nome && endereco && bairro && cidade && estado && cep && ativo) {
                    const fornecedor = new Fornecedor(0,codigo,nome,endereco,bairro,cidade,estado,cep,ativo);
                    fornecedor.gravar().then(()=>{
                        resposta.json({
                            "status" : true,
                            "codigo" : fornecedor.codigo, 
                            "mensagem" : "Fornecedor cadastrado com sucesso!!!"
                        })
                    }).catch((erro) =>{
                        resposta.json({
                            "status" : false,
                            "mensagem" : "Erro ao gravar o Fornecedor : " +erro.message
                        })
                    });
                    
                }else{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Verifique a documentação da API ne informa  todos os dados do fornecedor para gravar"
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
                "mensagem" : "Para registrar um fornecedor utilize o metodo POST"
            })
        }

    }

    atualizar(requisicao,resposta){
        resposta.setHeader("Content-Type","application/json");
        if (requisicao.method === "PUT") {
            if (requisicao.is("application/json")) { 

                const dados = requisicao.body;
                const id = dados['id'];
                const codigo = dados['codigo'];
                const nome = dados['nome'];
                const endereco= dados['endereco'];
                const bairro= dados['bairro']; 
                const cidade= dados['cidade'];
                const estado= dados['estado'];
                const cep = dados['cep'];
                const ativo= dados['ativo']; 


                if (codigo && nome && endereco && bairro && cidade && estado && cep && ativo) {
                    const fornecedor = new Fornecedor(id,codigo,nome,endereco,bairro,cidade,estado,cep,ativo);
                    fornecedor.atualizar().then(()=>{
                        resposta.json({
                            "status" : true,
                            "mensagem" : "Fornecedor atualizado com sucesso!!!"
                        })
                    }).catch((erro) =>{
                        resposta.json({
                            "status" : false,
                            "mensagem" : "Erro ao atualizado o Fornecedor : " +erro.message
                        })
                    });
                    
                }else{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Verifique a documentação da API ne informa  todos os dados do fornecedor para alterar"
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
                "mensagem" : "Para alterar um fornecedor utilize o metodo PUT"
            })
        }


    }

    excluir(requisicao,resposta){
        resposta.setHeader("Content-Type","application/json");
        if (requisicao.method === "DELETE") {
            if (requisicao.is("application/json")) {

                const dados = requisicao.body;
                const id = dados['id'];
                const codigo = dados['codigo'];
                const nome = dados['nome'];
                const endereco= dados['endereco'];
                const bairro= dados['bairro']; 
                const cidade= dados['cidade'];
                const estado= dados['estado'];
                const cep = dados['cep'];
                const ativo= dados['ativo']; 

                if(id && codigo && nome && endereco && bairro && cidade && estado && cep && ativo) {
                    const fornecedor = new Fornecedor(id,codigo,nome,endereco,bairro,cidade,estado,cep,ativo);
                    fornecedor.excluir().then(()=>{
                        resposta.json({
                            "status" : true,
                            "mensagem" : "Fornecedor excluido com sucesso!!!"
                        })
                    }).catch((erro) =>{
                        resposta.json({
                            "status" : false,
                            "mensagem" : "Erro ao excluir o Fornecedor : " +erro.message
                        })
                    });
                    
                }else{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Verifique a documentação da API ne informa  todos os dados do Fornecedor para excluir"
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
                "mensagem" : "Para excluir um fornecedor utilize o metodo DELETE"
            })
        }

    }

    consultarNome(requisicao,resposta){
        resposta.type("application/json");
        if (requisicao.method === "GET") {
            const fornecedor = new Fornecedor(0);
            fornecedor.consultarNome("").then((listaFornecedores)=>{
                resposta.json(listaFornecedores )
            }).catch((erro) =>{
                resposta.json({
                    "status" : false,
                    "mensagem" : "Erro ao consultar o Fornecedor : " +erro.message
                })
            });

        }else{
            resposta.json({
                "status" : false,
                "mensagem" : "Para consultar um fornecedor utilize o metodo GET"
            })
        }



    }


    consultarID(requisicao,resposta){
        resposta.type("application/json");
        if (requisicao.method === "GET") {
               const id = requisicao.params['id'];
             if(id){
                const fornecedor = new Fornecedor(id);
                fornecedor.consultarID(id).then((listaFornecedores)=>{
                    resposta.json(listaFornecedores )
                }).catch((erro) =>{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Erro ao consultar o Fornecedor  Codigo: " +erro.message
                    })
                });
             }else{
                resposta.json({
                    "status" : false,
                    "mensagem" : "Especifique o codigo od Fornecedor que deseja consultar"
                })

            }       
        }else{
            resposta.json({
                "status" : false,
                "mensagem" : "Para consultar um Fornecedor utilize o metodo GET"
            })
        }


    }


}