// Nessa classe vai decicdir quem faz e quando faz, ou seja controla toda manipulação

import Produto from "../Modelo/Produto.js";

export default class ProdutoCTRL{

    //HTTP POST
    gravar(requisicao,resposta){
        resposta.setHeader("Content-Type","application/json");
        if (requisicao.method === "POST") {
            if (requisicao.is("application/json")) { // verifica se é um JSON
                const dados = requisicao.body;
                const codigo = dados['codigo'];
                const descricao = dados['descricao'];
                const validade= dados['validade'];
                const preco_custo= dados['preco_custo']; 
                const preco_venda= dados['preco_venda'];
                const qtd_estoque= dados['qtd_estoque'];
                const num_cod_barras = dados['num_cod_barras'];

                //validação de dados
                if (codigo && descricao && validade && preco_custo && preco_venda && qtd_estoque && num_cod_barras) {
                    const produto = new Produto(0,codigo,descricao,validade,preco_custo,preco_venda,qtd_estoque,num_cod_barras);                  
                    produto.gravar().then(()=>{
                        resposta.json({
                            "status" : true,
                            "id" : produto.id, // quando grava ele retorna uma id
                            "mensagem" : "Produto cadastrado com sucesso!!!"
                        })
                    }).catch((erro) =>{
                        resposta.json({
                            "status" : false,
                            "mensagem" : "Erro ao gravar o Produto : " +erro.message
                        })
                    });
                    
                }else{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Verifique a documentação da API ne informa  todos os dados do Produto para gravar"
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
                "mensagem" : "Para registrar um Produto utilize o metodo POST"
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
                const codigo = dados['codigo'];
                const descricao = dados['descricao'];
                const validade= dados['validade'];
                const preco_custo= dados['preco_custo']; 
                const preco_venda= dados['preco_venda'];
                const qtd_estoque= dados['qtd_estoque'];
                const num_cod_barras = dados['num_cod_barras'];

                //validação de dados
                if (id && codigo && descricao && validade && preco_custo && preco_venda && qtd_estoque && num_cod_barras) {
                    const produto = new Produto(id,codigo,descricao,validade,preco_custo,preco_venda,qtd_estoque,num_cod_barras); 
                    produto.atualizar().then(()=>{
                        resposta.json({
                            "status" : true,
                            "mensagem" : "produto atualizado com sucesso!!!"
                        })
                    }).catch((erro) =>{
                        resposta.json({
                            "status" : false,
                            "mensagem" : "Erro ao atualizado o produto : " +erro.message
                        })
                    });
                    
                }else{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Verifique a documentação da API ne informa  todos os dados do produto para alterar"
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
                "mensagem" : "Para alterar um produto utilize o metodo PUT"
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
                const codigo = dados['codigo'];
                const descricao = dados['descricao'];
                const validade= dados['validade'];
                const preco_custo= dados['preco_custo']; 
                const preco_venda= dados['preco_venda'];
                const qtd_estoque= dados['qtd_estoque'];
                const num_cod_barras = dados['num_cod_barras'];

                //validação de dados
                if (id && codigo && descricao && validade && preco_custo && preco_venda && qtd_estoque && num_cod_barras) {
                    const produto = new Produto(id,codigo,descricao,validade,preco_custo,preco_venda,qtd_estoque,num_cod_barras); 
                    produto.excluir().then(()=>{
                        resposta.json({
                            "status" : true,
                            "mensagem" : "produto excluido com sucesso!!!"
                        })
                    }).catch((erro) =>{
                        resposta.json({
                            "status" : false,
                            "mensagem" : "Erro ao excluir o produto : " +erro.message
                        })
                    });
                    
                }else{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Verifique a documentação da API ne informa  todos os dados do produto para excluir"
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
                "mensagem" : "Para excluir um produto utilize o metodo DELETE"
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

            const produto = new Produto(0);
            produto.consultarNome("").then((lista)=>{
                resposta.json(lista)
            }).catch((erro) =>{
                resposta.json({
                    "status" : false,
                    "mensagem" : "Erro ao consultar o produto : " +erro.message
                })
            });
            
        }else{
            resposta.json({
                "status" : false,
                "mensagem" : "Para consultar um produto utilize o metodo GET"
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
                const produto = new Produto(id);
                produto.consultarID(id).then((lista)=>{
                    resposta.json(lista )
                }).catch((erro) =>{
                    resposta.json({
                        "status" : false,
                        "mensagem" : "Erro ao consultar o produto  ID: " +erro.message
                    })
                });
             }else{
                resposta.json({
                    "status" : false,
                    "mensagem" : "Especifique o id od produto que deseja consultar"
                })

            }       
        }else{
            resposta.json({
                "status" : false,
                "mensagem" : "Para consultar um produto utilize o metodo GET"
            })
        }


    }


}