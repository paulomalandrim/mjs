var me = {
    name: 'Paulo',
    age: 37
}

function checkAge (person){
    console.log('A idade da pessoa é: ' + person.age)
    if (person.age >= 18){
        console.log('A pessoa é maior de idade')
    }
}

checkAge(me)