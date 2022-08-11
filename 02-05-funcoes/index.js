function greet(name = 'Sem nome'){
    console.log('bom dia, ' + name)
    return 'boa noite, ' + name
}

greet('Paulo')

greet()

console.log('retorno: ' + greet())