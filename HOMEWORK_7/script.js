// Задача 2.
// Напишите функцию которая проверяет, отрицательное число или нет
// (возвращает true/false)
// function OnlyNegativeNumbers(numbers) {
//   let negativeNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       negativeNumbers.push(numbers[i]);
//     }
//   }
//   return negativeNumbers;
// }
// console.log(OnlyNegativeNumbers([2, -3, 6, -5, 8, -9]));
// function negativeNumbers() {
//     const numbers = prompt("number?")
//     if(numbers < 0) {
//         console.log(false)
//     } else {
//         console.log(true)
//     }
// return      
// }
// negativeNumbers()



// Задача 3.
// Запросить у пользователя произвольное число и вывести его,
// если последняя цифра, на которую оно заканчивается, равна 8
// function printNumbers() {
//   const numbers = [];
//   for (let i = 0; (i = 8); i++) {
//     const numbers = prompt("Введите число");
//     numbers.push(numbers[i]);
//   }
//   console.log(numbers);
// }

// function x() {
//     const number = prompt("numbers?")
//     if(number.length-1 == 8) {
//         console.log(number)
//     }
// return   
// }
// x()


function lastNumber() {
    let a = prompt('Number');
    if (a[a.length - 1] == 8) {
      console.log(a);
    }
    return;
  }
  lastNumber();










// Задача 4.
// Описать массив (набор) трех пользователей со след/характеристиками возраст, з/п, email
// и вывести возраст последнего (в наборе) пользователя
// let users = [
//   {
//     name: "user1",
//     age: 25,
//     salary: 2500,
//     email: "user1@gmail.com",
//   },
//   {
//     name: "user2",
//     age: 35,
//     salary: 3500,
//     email: "user2@gmail.com",
//   },
// ];

// function calc_age(users) {
//   let sum = 0;

//   for (let i = 0; i < users.length; i++) {
//     sum += users[i].age;
//   }

//   return sum / user2.age;
// }
// console.log(users(user2).age);

// Задача 5.
// Напишите функцию, которая получает массив различных чисел (положительных и отрицательных)
// и возвращает массив отрицательных чисел

// Задача 6.
// Запросить у сотрудника (логичистической компании) ко-во часов полета транспортного средства (самолета)
// // и вывести время, в которое он вернется назад
// function flyTime(h) {
//   return h % 24;
// }
// console.log(flyTime(30));

// 7. Написать функцию, которая принимает товары (массив объектов) и возвращает строку
// `Самый дорогой товар <НАЗВАНИЕ> стоит <NN> EUR`

// 8. Написать функцию, которая принимает два числа в качестве диапазона и возвращает сумму
// нечетных чисел в указанном диапазоне

// Задача 10.
// Написать программу, которая описывает массив двух игроков, со след/полями: имя_пользователя, ущерб
// и сравнивает их ущерб между собой (у кого шансов на победу больше)
// const players = [
//   {
//     username: "Ivan",
//     damage: 90,
//   },
//   {
//     username: "Yuliya",
//     damage: 80,
//   },
// ];

// for (let i = 0; (i = players.length); i++) {
//   if (damage[i] >= damage.length) console.log(players[i].damage);
// }
