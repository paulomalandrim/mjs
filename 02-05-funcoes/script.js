function greet(name = 'Sem nome'){
    console.log('boa noite, ' + name)
    return 'boa noite, ' + name
}

greet('Paulo')
greet('Agatha')
greet()

console.log('retorno: ' + greet())