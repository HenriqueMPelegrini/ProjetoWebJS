import {Router} from 'express'; // para instalar usa npm install express
import ProdutoCTRL from '../Controle/ProdutoCTRL.js';

const rotaProduto= new Router() // criar uma micro aplicação http

const controleProduto = new ProdutoCTRL();

// esse get , post ... , são get da internet que vao para a classe de ClienteCTRL
rotaProduto.get("/",controleProduto.consultarNome)
.get("/:id",controleProduto.consultarID)
.post("/",controleProduto.gravar)
.put("/",controleProduto.atualizar)
.delete("/",controleProduto.excluir);

export default rotaProduto;

