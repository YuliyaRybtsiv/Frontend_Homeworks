// function handler(callback) {
//     let a = callback(5)
//     return a
// }

// console.log(handler((c) =>c * 10));




// function handler(callback) {
//     let a = callback('tigran')
//     return a
// }

// console.log(handler((c) => c[0] === 'n'));


// function math(callback) {
//     let a = callback(10)
//     return a
// }

// console.log(math((num) => num ** 2))
// console.log(math((num) => num + 10))
// console.log(math((num) => num / 5))



// function math(a,b,sign){
//     if(sign === '+'){
//         return a+ b
//     } else if (sign === '-'){
//         return a - b
//     } else if (sign === '/'){
//     return a / b
//     } else if (sign === '*'){
//         return a * b
//     }
// }

// console.log(math(5,10,'+'));
// console.log(math(5,10,'*'));



function math(callback){
    return callback()
}

// console.log(math(() => (3 * 3 / 4)));
console.log(math(() => (3 * 3 / 4) ** 2));


