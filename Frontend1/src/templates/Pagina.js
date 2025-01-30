import Menu from "./componentes/Menu";
import Cabecalho from "./componentes/Cabecalho";


export default function Pagina(props) {
    return(
        <div>
            <Cabecalho titulo="Sistema de Gerenciamento Comercial"></Cabecalho>
            <Menu></Menu>
            <div>
             {props.children}
            </div>
            {/* Essa essa é o filho de pagina, ou seja , o que esta dentro de Pagina em TelaCadastroCliente */}
        </div>
    );
  
    
}