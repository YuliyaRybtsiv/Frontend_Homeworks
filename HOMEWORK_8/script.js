// ЗАДАЧА 1
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function printEvenNumbers (num1, num2) {
    let start = 0
    let end = 0
    if (num1 > num2) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    } 
    if (start % 2 !== 0) {
        start--
        // start = start -1
    } 
    for (let i = start; i >= end; i -= 2) {
        console.log(i); 
    }
 }
printEvenNumbers(180, 280)



// ЗАДАЧА 2
// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) 
// и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power (base, exp = 2) {
    return base ** exp
}
console.log(power (2, 10));



// ЗАДАЧА 3
// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function calcSum (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
        // sum = sum + i
    }
    return sum
}
console.log(calcSum (2));



// ЗАДАЧА 4
// Напишите функцию, которая принимает два числовых аргумента n и m и 
// считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function calcSumNumbers (n, m) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = n; i <= m; i++) {
        if (i % 2 == 0) {
            sumEven += i;
            // sumEven = sumEven + i;
        } else {
            sumOdd += i;
        }
    }
    console.log(sumEven);
    console.log(sumOdd);
}
calcSumNumbers(4, 8)



// ЗАДАЧА 5
// Напишите функцию, которая принимает в качестве аргументов массив строк, 
// а возвращает первый самый длинный элемент массива. Если входной массив пуст, 
// функция возвращает null. Если есть несколько одинаковых по длине элементов - 
// функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк
// Пример: [ 'one', 'two', 'three' ] => 'three'
function findElement (strings) {
    if (strings.length == 0) {
        return null
    } 
    let longString = strings[0];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longString.length) {
            longString = strings[i];
        }
    }
    return longString
}
// findElement(["Alexander", "Yuliya", "Abrakadabra", "John"])
console.log(findElement(["apple", "strawberry", "orange"]));
