  async function soma(a,b) { // função assincrona, nao espaera uma resposta imediata
    return await  new  Promise((resolve, rejeita) =>{// O promise ou resolve ou rejeita algo
        setTimeout(()=>{ // depois de 3 segundos essa Promise será resolvida
            resolve(a+b);
        },3000)
    }); // o await serve para deefinir que esse  codigo é uma coisa assicrona
 }

 console.log("Iniciou a execução");
 console.log("Chamando a soma");
 soma(10,3).then((resultado)=>{
    console.log("O resultado é : "+resultado); // ese resutlado ´so exibira depois de 3 segundos
 });
console.log("Fim da a execução");