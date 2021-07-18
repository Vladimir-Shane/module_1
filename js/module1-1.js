var myFirstVar 
console.log('myFirstVar=', myFirstVar)

let mySecondVar
console.log('mySecondVar=', mySecondVar) //перезаписуется
mySecondVar = 'var by let'
console.log('mySecondVar=', mySecondVar)

const mythirdVar = 10
console.log('mythirdVar=', mythirdVar) //не перезаписуется

// Primitives
console.log('Vladimir Proshyn')
console.log(typeof 'Vladimir Proshyn')

console.log(1284)
console.log(typeof 1284)

console.log(undefined)
console.log(typeof undefined)

console.log(null)
console.log(typeof null)

console.log(true)
console.log(typeof true)

//Приведение типов данных
let value
console.log('value=', typeof value);

value = String(value) //конструктор "String" с большой буквы
console.log('value=', typeof value);

value = 7
console.log('value=', typeof value);

value = value + ""
console.log('value=', typeof value);


