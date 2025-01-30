//manipula uma pare de clientes
import {createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const urlBase = 'http://localhost:4000/clientes'

export const STATUS = Object.freeze({ // object.freeze não deixa esses objetos tem seu valor alterado
    'OCIOSO': 'idle',
    'CARREGADO':'fulfilled',
    'ERRO':'reajected'
})

export const buscarClientes = createAsyncThunk('clientes/buscarClientes', async ()=>{
    const resposta = await fetch(urlBase,{method :'GET'})
    const dados = await resposta.json()// pois la o metod consultar retorna uma lista de cliente
    return dados;
});// esta fazendo uma chamda assincrona Thunk, ou seja espera o resultado do backend

export const adicionarClientes = createAsyncThunk('clientes/adicionarClientes', async(cliente)=>{
    const resposta = await fetch(urlBase,{
        method :'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(cliente)
    })
    // O Resultado não deve ser processado na chamda assincrona
    const dados = await resposta.json()// pois la o metod adiconar retorna uma lista de cliente
    return {
        resposta : dados
    };
});

export const excluirClientes = createAsyncThunk('clientes/excluirClientes', async(cliente)=>{
    const resposta = await fetch(urlBase,{
        method :'DELETE',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(cliente)
    })
    // O Resultado não deve ser processado na chamda assincrona
    const dados = await resposta.json()// pois la o metod adiconar retorna uma lista de cliente
    return {
        cliente:cliente,
        resposta : dados
    };
});

const clientesSlice = createSlice({
    name:'clientes', //reducer clientes
    initialState:{
        status:STATUS.OCIOSO,
        dados:[]
    }, //estado inicial da fatia clientes

    reducers:{// É uma lista de ações que ira alterar o estado da lsita de clientes

        // adicionar: (state , action)=>{
        //     //graças a biblioteca immer
        //     state.push(action.payload);// esta adicionado a lsita de clientes(state) um novo cliente(payload)
        // },// manipula o estado da aplicação dada um action

        // remover: (state , action)=>{// ao despachar a action remover, passa cpf como parametro
        //     return state.filter((cliente)=>cliente.cpf !== action.payload)
        // }

    },
    extraReducers:(builder)=>  {
        builder.addCase(buscarClientes.pending,(state,action)=>{
            state.status= STATUS.OCIOSO;
        })
        .addCase(buscarClientes.fulfilled,(state,action)=>{
            state.status= STATUS.CARREGADO;
            state.dados = action.payload;// aqii o esta os dados do return do buscarClientes
        })
        .addCase(buscarClientes.rejected,(state,action)=>{
            state.status= STATUS.ERRO;
        })
        .addCase(adicionarClientes.pending,(state,action)=>{
            state.status= STATUS.OCIOSO;
        })
        .addCase(adicionarClientes.fulfilled,(state,action)=>{
            // lemabrando que o status do payload é aquele de origem do backend(Controle){
            //     status : true ou false
            //     id: ?
            //     mensagem: "Mensagem que vem de lá"
            // }
            if (action.payload.status ===  false) {
                state.status= STATUS.ERRO;
            } else {
                state.status= STATUS.CARREGADO;
                state.dados.push({...action.payload.cliente, id : action.payload.resposta.id});// aqui espalha o objeto com os ... e depois redefine esse ojeot onde o id do cleinte recebe o id do payload
            }
           
        })
        .addCase(adicionarClientes.rejected,(state,action)=>{
            state.status= STATUS.ERRO;
        })
        .addCase(excluirClientes.pending,(state,action)=>{
            state.status= STATUS.OCIOSO;
        })
        .addCase(excluirClientes.fulfilled,(state,action)=>{
            // lemabrando que o status do payload é aquele de origem do backend(Controle){
            //     status : true ou false
            //     id: ?
            //     mensagem: "Mensagem que vem de lá"
            // }
            if (action.payload.status ===  false) {
                state.status= STATUS.ERRO;
            } else {
                state.status= STATUS.CARREGADO;
                state.dados.pop({...action.payload.cliente,id : action.payload.resposta.id});// aqui espalha o objeto com os ... e depois redefine esse ojeot onde o id do cleinte recebe o id do payload
            }
           
        })
        .addCase(excluirClientes.rejected,(state,action)=>{
            state.status= STATUS.ERRO;
        })
    }
});// para criar uma fatia

//export const{adicionar,remover} = clientesSlice.actions;
export default clientesSlice.reducer;// exporta um redutor