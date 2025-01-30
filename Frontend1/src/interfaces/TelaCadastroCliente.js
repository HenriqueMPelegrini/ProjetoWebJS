import { useState } from "react";
import FormCadastroCliente from "../formulario/FormularioCliente";
import ListaClientes from "../tabelas/listaClientes";
import Pagina from "../templates/Pagina";

export default function TelaCadastroCliente(props) {
    const [exibirTabela,setExibirTabela] = useState(true);
    console.log(exibirTabela);
    if (exibirTabela) {
        return(  
            <Pagina>
                <ListaClientes onTabela={setExibirTabela}></ListaClientes>
            </Pagina>
        );
        //   O onCadastro passsa esse state setExibirTabela, como parametro para lsita de clientes, para poder mudar seu estado lá sem ter que criar contexto ou coisa do tipo
    }else{
        return(
            <Pagina>
                <FormCadastroCliente onTabela={setExibirTabela} ></FormCadastroCliente>
            </Pagina>
        );
    }
   
    
}