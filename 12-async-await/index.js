let ferverAqua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise( (resolve, reject) =>{
            if(chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log("Passo 1 finalizado: Água foi fervida")
            resolve()
        }else {
            console.log("é necessário colocar a chaleira com a água e ligar o fogão senão teu cafézinho não vai ficar pronto nunca")
            reject()
        }
    })
}
 let passarOCafe = (aguaFervida) => {
    return new Promise ((resolve) => {
        console.log("Passo 2 finalizado café foi passado")
        resolve(true)
    })
 }

 let tomarCafe = (cafePassado) => {
    return new Promise ((resolve) => {
        console.log("Passo 3 finalizado: Terminei de tomar o café")
        resolve(true)
    })
 }

 let lavarXicara = (cafeTomado) => {
    return new Promise ((resolve) => {
        console.log("Passo 4 finalizado: Terminei de lavar a xícara")
        resolve(true)
    })
 }

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAqua(chaleiraEstaNoFogao,fogaoEstaLigado)
    const cafePassado = await passarOCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara (cafeTomado)
    if(xicaraLavada) console.log("Finalizado o ritual de tomar o cáfe, bora trabalhar")
}

iniciarProcessoDeFazerCafe()