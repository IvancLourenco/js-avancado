function incentivarQuester(mensagem, ...nomeQuesters){
    nomeQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester("Parabens por ter chegado ao módulo de Javascript avançado", "ivan", "kamila", "marcos")