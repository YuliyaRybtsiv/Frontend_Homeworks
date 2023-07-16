// const a = "text"
// const b = 34

// const c = true/ false
// const d = []
// const e = {}

// function fff(params) {
//     console.log('hello')
// }
// console.log(typeof fff); // - вернуть функцию.



// // function sumFunc(value_1, value_2) {
// //     let res = value_1 + value_2
// //     // console.log(res); // - результат
// //     return res
// // }

// // function sumFunc(a, b) {
// //     if (a > b) {
// //         return a
// //     } else {
// //         return b
// //     }
// // }

// // function sumFunc(a, b) {
// //     return a + b
// // }

// function sumFunc(x, y) {
//     return x + y
// }

// sumFunc(5, 3) //8 

// sumFunc(10, 6) // 16

// // // alert('Hello')
// // console.log

// const obj = {
//     name: 'Vacho',
//     sumFunc: sumFunc
// }
// console.log(obj);

// console.log(typeof console);
// console.log(console);

// const consol = {
//     assert: assert,
//     clear: clear, 
//     log: log
// }

// console.log


// arr.push() // добавляем елемент.



// // const result = sumFunc(5, 3)
// // document.write(result)


// // const result = sumFunc(1200 , 1300)
// // const result = sumFunc(34 , 23)
// // const result = sumFunc(56 , 11)
// // const result = sumFunc(90 , 23)



// // const result = sumFunc(+prompt() , +prompt())
// // sonst result = sumFunc(1200 , 1300)
// // // sumFunc(+prompt() , +prompt())

// // const newResult = sumFunc(34, 23)

// // const result = sumFunc(5, 9)  // аргументы
// // const result = sumFunc(Number(+prompt() , +prompt())

// // // console.log(sumFunc(5, 9));
// // console.log(result + 12);
// console.log(newResult);
// console.log(result + 12)



// ЗАДАЧА.
// Сделайте функцию, которая параметром принимает число и выводит в консоль куб 
// этого числа.

// function func(a) {
//     return a ** 3
// }
// console.log(func(3))
// document.write(func(3))
// alert(func(3))


// const num = +prompt("nter a number")
// function para(num){
//     const cube = num **3
//     console.log(cube)
//     return cube
// }

// ЗАДАЧА.
// Сделайте функцию, которая параметром принимает число и проверяет, 
// положительное это число или отрицательное. В первом случае пусть функция 
// выводит в консоль текст '+++', а во втором '---'.

// 11111
// function func2(val) {
//     if (val > 0) {
//         console.log('+++');
//         return '+++'
//     } else if (val === 0) {
//         return '==='
//     } else {
//         return '---'
//     }
// }

// let itog = func2(4)





// // 2222222222
// const a = +prompt('введите число')

// function num(a) {
//     if (a >= 0) {
//         console.log("положительное")
//     }
//     else {
//         console.log("отрицательное")
//     }
// }
// num(a)

// ------------------------


// let aa = 10

// function num() {
//     // локальная область видимости
//     let local = 12
//     console.log('local', local)
//     console.log('local', global)
// }

// console.log('global', local)
// console.log('global', global)

// num()



// 2222222222
// let global = 10 

// function num() {
//    // локальная область видимости 
//     let local = 12
//    console.log('local', local);
//    console.log('local', global)
//    // из локал мы видим глобал

// }
// console.log('global', local); // error
// // из глобал не видно переменная 
// // объявленная в локал
// console.log('global', global)



// ЗАДАЧА.
// В программе объявлена переменная list которая содержит массив чисел 
// Используя цикл посчитайте сумму чисел и выведите их в консоль

// const list = [23, 354, -23, 45, 23, 34]
// let res = 0 // global

// for (let i = 0; i < list.length; i++) {
//    //local
//     res += list[i]
// }
// console.log(res);


// // ЗАДАЧА.
// // В программе объявлена переменная list, которая содержит массив чисел. 
// // Используя цикл посчитайте разность суммы всех четных чисел и суммы всех 
// // нечетных.

// const list1 = [23, 354, -23, 45, 23, 34] 

// let even = 0
// let odd = 0

// for (let i = 0; i < list.length; i++) {
// // for - цикл


//     if (list1[i] % 2 == 0) {
//         even = even + list1[i]
//     } else {
//         odd = odd + list1[i]
//     }
// }

// let total = even - odd // переменная let
// console.log(total);


// console.log(10 == 10); // true
// console.log(10 == '10'); // true
// console.log(10 === 10); // true
// console.log(10 === '10'); // false


// let arr = []
// console.log(arr);

// // arr[3] = '34'

// arr.push(prompt())
// arr.push(prompt())
// arr.push(prompt())

// let arr = ['джинсы', 'кросы', 'рубашка']
// console.log(arr);
// // arr[3] = '34'

// arr.push(prompt())
// // добавляет элемент в конце массива
// arr.unshift(prompt())
// // добавляет элемент в начале массива
// arr.pop()
// // удаляет последний элемент массива
// arr.shift()
// // удаляет первый элемент массива



// console.log(arr);


// ЗАДАЧА.
// Напишите функцию, которая в качестве аргументов получает два числа и 
// возвращает массив чисел со значениями от меньшего числа к большему.

function func(val_1, val_2) {
    let arr = []
    let start 
    let end 
    if (val_1 > val_2) {
        start = val_2
        end = val_1
    } else {
        start = val_1
        end = val_2
    }

    for (let i = start; i < end; i++) {
        arr.push(i)
    }
    return arr
}
console.log(func(9, 2));




function range(num1, num2) {
	if(num1 < num2){
		const tmp = num1;
		num1 = num2;
		num2 = tmp;
	}
	let arr = []
	for (let i = num1; i < num2; i++ ) {

	}
	return arr
} 
console.log(range(2,9));
