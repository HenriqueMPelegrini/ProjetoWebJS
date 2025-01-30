import {createSlice  } from "@reduxjs/toolkit";

const fornecedorSlice = createSlice({
    name:'fornecedores', //reducer fornecedores
    initialState:[], //estado inicial da fatia fornecedores

    reducers:{// É uma lista de ações que ira alterar o estado da lsita de fornecedores

        adicionar: (state , action)=>{
            //graças a biblioteca immer
            state.push(action.payload);// esta adicionado a lsita de fornecedores(state) um novo fornecedores(payload)
        },// manipula o estado da aplicação dada um action

        remover: (state , action)=>{// ao despachar a action remover, passa cpf como parametro
            return state.filter((fornecedor)=>fornecedor.codigo !== action.payload)
        }

    }

})

export const{adicionar,remover} = fornecedorSlice.actions;
export default fornecedorSlice.reducer;// exporta um redutor