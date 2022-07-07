let ordens = [
    {cliente : "ivan", tipo: "compra", quantidade: 56, ativo: "NFLX34"},

    {cliente : "kamila", tipo: "compra", quantidade: 76, ativo: "AAPL34"},

    {cliente : "carlos", tipo: "compra", quantidade: 41, ativo: "GOGL34"},
]

//sem reduce

//let quantidadeDeOrdens = 0
//for(let i = 0; i < ordens.length; i++){
//    quantidadeDeOrdens += ordens[i].quantidade
//}

let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => 
somaOrdens + ordem.quantidade, 0)


console.log(quantidadeDeOrdens)