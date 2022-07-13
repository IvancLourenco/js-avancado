/*
    Pendente
    Realizada Resolve
    Recusada Reject
    Estabelecida
*/

//Classes se escreve com a Primeira letra Maiuscula

//new Promise ((resolve, reject) => {

//})


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise ((resolve, reject) =>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log("Começando o processo de ferver água")
            resolve()
        }else{
            console.log("é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água")
            reject()
        }
    })

}

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)