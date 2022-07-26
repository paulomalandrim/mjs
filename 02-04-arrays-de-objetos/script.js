var person1 = {
    name: 'Paulo',
    age: 37
}
var person2 = {
    name: 'Agatha',
    age: 35
}
var person3 = {
    name: 'Eduardo',
    age: 6
}
var person4 = {
    name: 'Joao Lucas',
    age: 3
}

var list = [person1, person2, person3, person4]

var num = 0;
var name_busca = 'Joao Lucas'

for (var person of list){

    if (person.name == name_busca){
        console.log('Indice: ' + num + ' ' + person)
    }
    
    num++
    
}