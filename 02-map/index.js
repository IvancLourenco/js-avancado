let pessoas = [
    {nome: "ivan", idade: 23},
    {nome: "kamila", idade: 18},
    {nome: "carlos", idade: 23}
]

//let nomeDasPessoas = []
//for(let i = 0; i < pessoas.length; i++){
  //pessoas[i].idade === 23
     //  nomeDasPessoas.push(pessoas[i].nome)  
    // }

     let nomeDasPessoas = pessoas.map((pessoa) =>  pessoa.nome + " tem " + pessoa.idade + " anos de idade")

     console.log(nomeDasPessoas)