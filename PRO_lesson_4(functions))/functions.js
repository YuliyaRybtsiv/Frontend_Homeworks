// // function double(num){
// //     return num ** 2
// // }


// // let double = function(num) {
// //     return num ** 2
// // }

// let double = (num) => num ** 2



// // let double = (num) => {
// //     return num ** 2
// // }

// console.log(double(10));


// // let obj = {
// //     name: (num) => num ** 2
// // }

// ---------------
// 1)
// Анонимная (безымянная) фукнция

// let double = function(num){
//     return num ** 2
// }

// // ---------------
// // 2) 
// // Стрелочная функции

// // 1-ый режим работы
// let double = (num) => num ** 2 

// // 2-ый режим работы
// let double = (num) => {
//     return num ** 2
// }

// console.log(double(10));
// ---------------



// function getSqrt(num){
//     if (num ** 0.5 % 1 === 0) {
//         return true
//     } else {
//         return false
//     }
// }


// function getSqrt(num){
//     return num ** 0.5 % 1 === 0
// }

// console.log(getSqrt(25));

// let getSqrt = function(num){
//     return num ** 0.5 % 1 === 0
// }
// console.log(getSqrt(25));


// let getSqrt2 = (num) => num ** 0.5 % 1 === 0
// console.log(getSqrt(24));

   
// let firstLastChar = (string) => string[0] + string[string.length - 1]

// console.log(firstLastChar('test'));
// console.log(firstLastChar('tigran'));
// console.log(firstLastChar('Alex'));
// console.log(firstLastChar('Notebook'));


let array = [1,2,3,4,5,6]

let getNewElem = (elem) => {
    if(!array.includes(elem)) {
        array.push(elem)
    }
    return array
}
console.log(getNewElem(7));



