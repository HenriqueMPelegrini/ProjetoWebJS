import FormCadastroProduto from "../formulario/FormularioProduto";
import ListaProdutos from "../tabelas/listaProdutos";
import Pagina from "../templates/Pagina";
import { useState } from 'react';

export default function TelaCadastroProduto(props) {
    const [exibirTabela,setExibirTabela] = useState(true);
    if (exibirTabela) {
        return(
            <Pagina>
                <ListaProdutos onTabela={setExibirTabela}></ListaProdutos>
            </Pagina>
        );
        
    } else {
        return(
            <Pagina>
                <FormCadastroProduto  onTabela={setExibirTabela}></FormCadastroProduto>
            </Pagina>
        );

    }
   
    
}