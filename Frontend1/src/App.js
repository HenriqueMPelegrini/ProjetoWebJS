//import { Button } from "react-bootstrap";
import Sistema from "./Sistema";
import TelaCadastroFornecedor from "./interfaces/TelaCadastroFornecedor";
import TelaCadastroProduto from "./interfaces/TelaCadastroProduto";
import TelaMenu from "./interfaces/MenuSistema";
import TelaCadastroCliente from "./interfaces/TelaCadastroCliente";
import TelaLogin from "./interfaces/TelaLogin";

import {Route} from "react-router-dom";
import { useState } from "react";
import imgAvatar from "./imagens/avatar.png"
import ContextoUsuario  from "./contextos/ContextoGlobal";// qual contexto vai usar
import TelaVenda from "./interfaces/TelaVenda";

function App() {
  const [usuario,setUsuario] =useState({ // para poder usar usuario em todos os compenentes que desejam fazer uso
    nome:"",
    avatar:imgAvatar,
    logado:false,
  })

  if (!usuario.logado) {
    return(
    /* Provider vai prover a todos seus filhos esse valor(usuario) e uma funcao que pode altera-lo(setUsuario)*/
    <ContextoUsuario.Provider value={[usuario,setUsuario]}>
        <Sistema> 
          <Route path="*" element ={<TelaLogin/>}></Route>
        </Sistema>  
      </ContextoUsuario.Provider>   
    );
  }else{
    return (
      <ContextoUsuario.Provider value={[usuario,setUsuario]}>
        <Sistema>
          <Route path="*" element ={<TelaMenu/>}></Route>
          <Route path="/cadCliente" element ={<TelaCadastroCliente/>}></Route>
          <Route path="/cadFornecedor" element ={<TelaCadastroFornecedor/>}></Route>
          <Route path="/cadProduto" element ={<TelaCadastroProduto/>}></Route>
          <Route path="/venda" element ={<TelaVenda/>}></Route>
        </Sistema>
      </ContextoUsuario.Provider>
     );
  }

}

export default App;


//Instalar o Boostrap
// npm install react-bootstrap bootstrap 
//npm install react-router-dom usar as rotas
