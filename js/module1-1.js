var myFirstVar 
console.log('myFirstVar=', myFirstVar)

let mySecondVar
console.log('mySecondVar=', mySecondVar) //перезаписуется
mySecondVar = 'var by let'
console.log('mySecondVar=', mySecondVar)

const mythirdVar = 10
console.log('mythirdVar=', mythirdVar) //не перезаписуется

// Primitives
let string 

//STRING
string = 'Vladimir Proshyn'
console.log(string)
console.log('What type of=', typeof string)

//NUMBER
let number = 1284
console.log(number)
console.log('What type of=', typeof number)

number = 2e53
console.log(number)
console.log('What type of=', typeof number)

number = Infinity
console.log(number)
console.log('What type of=', typeof number)

number = NaN
console.log(number)
console.log('What type of=', typeof number)

//BOOLEAN(true || false)
let isComing = true
console.log(isComing)
console.log('What type of=', typeof isComing)

isComing = false
console.log(isComing)
console.log('What type of=', typeof isComing)

//UNDEFINED
let message
console.log(message)
console.log('What type of=', typeof message)

//NULL
let user = null
console.log(user)
console.log('What type of=', typeof user)


//Приведение типов данных
let value
console.log('value=', typeof value);

value = String(value) //конструктор "String" с большой буквы
console.log('value=', typeof value);

value = 7
console.log('value=', typeof value);

value = value + ""
console.log('value=', typeof value);


