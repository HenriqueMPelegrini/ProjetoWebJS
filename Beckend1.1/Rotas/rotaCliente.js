import {Router} from 'express'; // para instalar usa npm install express
import ClienteCTRL from '../Controle/ClienteCTRL.js';

const rotaCliente = new Router() // criar uma micro aplicação http

const controleCliente = new ClienteCTRL();

// esse get , post ... , são get da internet que vao para a classe de ClienteCTRL
rotaCliente.get("/",controleCliente.consultarNome)
.get("/:id",controleCliente.consultarID)
.post("/",controleCliente.gravar)
.put("/",controleCliente.atualizar)
.delete("/",controleCliente.excluir);

export default rotaCliente;

