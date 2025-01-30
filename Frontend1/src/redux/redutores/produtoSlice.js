import {createSlice  } from "@reduxjs/toolkit";

const prudutoSlice = createSlice({
    name:'produtos', //reducer produtos
    initialState:[], //estado inicial da fatia produtos

    reducers:{// É uma lista de ações que ira alterar o estado da lsita de produtos

        adicionar: (state , action)=>{
            //graças a biblioteca immer
            state.push(action.payload);// esta adicionado a lsita de produtos(state) um novo produtos(payload)
        },// manipula o estado da aplicação dada um action

        remover: (state , action)=>{// ao despachar a action remover, passa codigo como parametro
            return state.filter((produto)=>produto.codigo !== action.payload)
        }

    }

})

export const{adicionar,remover} = prudutoSlice.actions;
export default prudutoSlice.reducer;// exporta um redutor