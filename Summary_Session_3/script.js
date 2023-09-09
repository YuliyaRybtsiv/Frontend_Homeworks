// const array = ['hello', 2, 9, undefined, 'hi', 88, true, 51, NaN];

// const getSum = arr => {
//     let sum = 0;

//     for(let i = 0; i < array.length; i++){
//         if(typeof arr[i] === 'number' && !isNaN(arr[i])){
//             sum++
//         }
//     }

//     return sum
}

// console.log(getSum(array));



// const getSum1 = arr => {
//     let sum = 0;

// arr.forEach(el => typeof el === 'number' && !isNaN(el) ? sum++ : '')
//     return sum
// }



// const getSum2 = arr => arr.filter(el => typeof el === 'number' && !isNaN(el)).length;

// const getSum3 = arr => {
//   const arr_filtered = arr.filter(el => typeof el === 'number' && !isNaN(el))
//   return arr_filtered.length
// }


// const multNum = value => typeof value === 'number' ? value * 15 : 'Error';
// console.log(multNum(10));
// console.log(multNum(true));
// console.log(multNum('hello'));



// const numbers = [4, -10, -7, 54, 1, -9, 45];

// const getPositiveNums = arr => arr.filter(el => el > 0);

// console.log(getPositiveNums(numbers));
// console.log(getPositiveNums([-3, -9, -11, 4, -100, 1]));


// const getEvenNums = arr => arr.filter(el => el % 2 === 0);

// console.log(getEvenNums([1, 4, 7, 2, 53, 64]));
// console.log(getEvenNums([51, 58,100, 73, 82]));



// const getSumArray = arr => {
//     let sum_even = 0;
//     let sum_odds = 0;

//     arr.forEach(el => el % 2 === 0 ? sum_even += el : sum_odds += el);
//     return[sum_even, sum_odds]
// }


// console.log(getSumArray([1, 4, 7, 2, 53, 64]));
// console.log(getSumArray([1, 2, 3, 4, 5]));


['hello', 2, 9, undefined, 'hi', 88, true, 51]

const getNewArray = arr => arr.filter(el => typeof el !== 'string').

