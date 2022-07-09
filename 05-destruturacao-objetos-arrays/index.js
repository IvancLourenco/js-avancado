let pessoa = {nome: "Ivan", sobrenome: "Campos", idade: 23}
//let nome = pessoa.nome
//let idade = pessoa.idade


let {nome,sobrenome, idade: idadeNova} = pessoa
console.log(nome)
console.log(idadeNova)
console.log(sobrenome)

const numeros = [1, 2 , 3];

const [um, dois , tres] = numeros

console.log(tres)
console.log(dois)