import { configureStore } from "@reduxjs/toolkit"
import clientesReducer from "./redutores/clientesSlice";
import fornecedorReducer from "./redutores/fornecedorSlice"
import produtoReducer from "./redutores/produtoSlice"
// A loja(store) armazena uma relação de redutores
const store = configureStore({
    reducer:{//é algo global o reducer e combina umas listas de reducers
        clientes: clientesReducer,
        fornecedores: fornecedorReducer,
        produtos: produtoReducer
    }

})

export default store;