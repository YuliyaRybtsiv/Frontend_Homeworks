// console.log('Hello world');

// конкатинація - тільки з +, додавання рядочків, які мають перевагу.
// const c = 10 + 22 + "11" + 44;
// console.log(c);

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// // інтерполяція
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`
// console.log(message);

// function sayHi () {
//     console.log("Hello, this is my first function!");
//   }
//   sayHi();

// function isAdult(age) {
//     const passed = age >= 18;
//     console.log(passed);

//     return passed;
//   }
//   isAdult(18);

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     const isMatch = password === SAVED_PASSWORD;
//     console.log(isMatch);
//     return isMatch;
//   }

//   isValidPassword('jqueryismyjam');

// ПРАВИЛЬНО
let age = 25;
let user1 = '';
let $color = '';
let _size = 12;

// НЕПРАВИЛЬНО
// let 1age
// let my-name
// let let = ""
// let const
// let var

// var x = 10;
// if(x > 10) {
//     x = 20;

//     console.log(x);
// }

// console.log(x);

let rate = 29371;

function exchange() {
   let inputValue = +document.querySelector('.form__input').value;
   let result = inputValue * rate;

   document.querySelector(
      '.result'
   ).innerText = `${inputValue} BTS = ${result} $`;
}

function exchangeBack() {
   let inputValue = +document.querySelector('.form__input').value;
   let result = inputValue / rate;

   document.querySelector(
      '.result'
   ).innerText = `${inputValue} $ = ${result} BTC`;
}
