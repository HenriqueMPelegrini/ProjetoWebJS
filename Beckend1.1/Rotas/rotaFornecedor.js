import {Router} from 'express'; 
import FornecedorCTRL from '../Controle/FornecedorCTRL.js';

const rotaFornecedor = new Router() 

const controleFornecedor = new FornecedorCTRL();


rotaFornecedor.get("/",controleFornecedor.consultarNome)
.get("/:id",controleFornecedor.consultarID)
.post("/",controleFornecedor.gravar)
.put("/",controleFornecedor.atualizar)
.delete("/",controleFornecedor.excluir);

export default rotaFornecedor;