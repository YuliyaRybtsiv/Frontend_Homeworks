// function makeFood() {
//     console.log("Нарезать овощи")
//     console.log("Сварить овощи")
//     console.log("Заправить овощи майонезом")
//     console.log("Перемешать овощи")
// }

// makeFood()
// makeFood()
// makeFood()
// makeFood()
// makeFood()

// // Задача

// function greeting(name) {
//     const newName = name.toUpperCase()
//     console.log(`"Привет, " + newName`)
// }

// greeting("Arsen")
// greeting("Pavel")

// Задача. Создать функцию, которая получает два числовых параметра и в консоли выводит
// а) сумму чисел
// б) разность 
// в) произведение
// г) деление

// function calc(num1, num2) {
//     console.log(num1 + num2)
//     console.log(num1 - num2)
//     console.log(num1 * num2)
//     console.log(num1 / num2)
// }

// calc(100, 20)
// calc(50, 5)


// function max(num1, num2) {
//     if(num1 > num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }


// function max(num1, num2) {
//     if(num1 > num2) {
//         console.log(num1)
//     } else if(num2 > num1) {
//         console.log(num2)
//     }
// }


// max(100, 20)
// max(20, 100)
// max(100, 100)


// Задача.
// for(let i = 0; i < 20; i++) {
//     console.log(i)
// }

// for(let i = 0; i < 50; i++) {
//     console.log(i)
// }


// Задача. Создать функцию, которая принимает число и выводит все числа от 0 до числа,
// которое принимаем в параметре
// fn(10) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// function printNumbers(number) {
//     for(let i = 0; i < number; i++) {
//         console.log(i)
//     }
// }
// printNumbers(50)


// Задача.

// const elements = [i]
// function printArrayElements (array) {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }

// printArrayElements(["Arsen", "Alexander", "Vladimir"])
// printArrayElements([1, 2, 3, 4, 5, 6, 7])


// const names = ["Arsen", "Alexander", "Vladimir"]
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// } 

// const numbers = ["Arsen", "Alexander", "Vladimir"]
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// } 


// Задача
// function calcSquare (a, b) {
//         console.log(a * b)
// }
// calcSquare(10, 15)

// Задача
// function congrats(name) {
//         console.log(`"Привет", ${name}, Поздравляю с днем рождения`)
// }
// congrats("Arsen")


// Задача.

// function evenOrOdd(number) {
//     if(number % 2 == 0) {
//         console.log("Четное")
//     } else {
//         console.log(Нечетное)
//     }

// }
// evenOrOdd(16)


// Задача.

// const arr = []
// function printArray(number) {
//     for(let i = 0; i < number; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }
// printArray(10)


/*
    show - показать
    get - получить
    delete - удалить
    change - изменить
    print - распечатать
    add - добавить
    edit - редактировать 
    calc - посчитать
*/


// function printNames() {
//     const names = []
//     for(let i = 0; i < 3; i++) {
//         const name = prompt("Введите Ваше имя")
//         const upperCasedName = name.toUpperCase
//         names.push(upperCasedName)
//     }
//     console.log(names)
// }
// printNames()


// ____________________________

// КОНСУЛЬТАЦИЯ (10.06)
function power(num1) {
    return function(num2){
        console.log(num2 ** num1)
    }
}
let double = pow(2)
double(5)
double(10)
double(3)
double(2)

let quadro = pow(4) 
quadro(5)
quadro(10)
quadro(3)
____________________________


function url(zone) {
    return function(zone) {
        console.log(`www.${domen}.${zone}`)
    }
}

let zoneCom = url('com')
zoneCom('google')
zoneCom('mail')

let zoneNet = url('net')
zoneNet('example')
zoneNet('amazon')

zoneCom ('test')

www.google.com 
www.mail.com 
www.example.net 
www.amazon.net 
www.test.com 

____________________________

function foo() {
    let a = 10
    console.log(a)
}

foo() 
____________________________

function foo() {
    let a = 10
    return function() {
        console.log(a)
    }
}

func = foo()
func()