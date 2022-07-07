let pessoas = [
    {nome: "ivan", idade:23},
    {nome: "kamila", idade:18},
    {nome: "carlos", idade:23}
]

//metodo que o filter simplifica

//let pessoasComIdadeDe23Anos = []
//for(let i = 0; i < pessoas.length; i++){
  //  if(pessoas[i].idade === 23){
  //      pessoasComIdadeDe23Anos.push(pessoas[i])
//    }
//}



//let pessoasComIdadeDe23Anos = pessoas.filter(function(pessoa){
  //  return pessoa. idade === 23 }) 

let pessoasComIdadeDe23Anos = pessoas.filter((pessoa) => pessoa.idade === 23)


console.log(pessoasComIdadeDe23Anos)