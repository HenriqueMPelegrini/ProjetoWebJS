import FormCadastroFornecedor from "../formulario/FormularioFornecedor";
import Pagina from "../templates/Pagina";
import { useState } from "react";
import ListaFornecedores from "../tabelas/listaFornecedores";

export default function TelaCadastroFornecedor(props) {
    const [exibirTabela,setExibirTabela] = useState(true);
    if (exibirTabela) {
        return(
            <Pagina>
                <ListaFornecedores onTabela={setExibirTabela} ></ListaFornecedores>
            </Pagina>
        );
      
    } else {
        return(
            <Pagina>
                <FormCadastroFornecedor onTabela={setExibirTabela}></FormCadastroFornecedor>
            </Pagina>
        );
    }
    
    
}