// const players = [
//     {
//         name: "Ivan",
//         health: "very good",
//         damage: "-",
//     }, 
//     {
//         name: "Maria",
//         health: "good",
//         damage: "-",
//     }
// ]
// console.log(players[1].health) 

// 1. СКАЛЯРНОЕ ЗНАЧЕНИЕ
// let player1_username = 'Player 1';
// let player1_health = 100;
// let player1_damage = 90;

// let player2_username = 'Player 1';
// let player1_health = 100;
// let player1_damage = 90;

// 2. МАССИВЫ
// let player1 = ['Player 1', 100, 90];
// let player2 = ['Player 2', 90, 150];
// console.log(player2[0])

// 3. Обьекты (самый популярный)
// let player1 = {username: 'Player 1', health: 100, damage: 90}
// let player2 = {username: 'Player 2', health: 90, damage: 150}
// console.log(player2.username)


// function имя_функции() {
//     // тело функции
// }

// function имя_функции(парамметр1, параметр2) {}

// function summator (num1, num2) {
//     return num1 + num2
// }
// alert(summator(10, 4));


// for (let n=1; n <= 10; n++) {
//     console.log(n)
// }

// function sum_even_numbers () {
//     let sum = 0
    
//     for(let i = 2; i <= 10; i+= 2) {
//     sum += i;
//     }

//     return sum;
// }


// function sum_even_numbers () {
//     let sum = 0
    
//     for(let i = 2; i <= 10; i++) {
//         if(i % 2 == 0)
//     }
// }
// console.log(sum_even_numbers())





// function average_rating(grades) {
//     let sum = 0;
    
//     for (let i = 0; i < grades.length; i++) {
//       sum += grades[i];
//       console.log(sum)
//     }
    
//     return sum / grades.length;
// }
  
// console.log(average_rating([3, 4, 5]));



// возвращает сред/ущерб для для игроков переданных в качестве аргумента
// function calc_avg_damage(players) {
//     let sum = 0;
    
//     for (let i = 0; i < players.length; i++) {
//       sum += players[i].damage;
//     }
    
//     return sum / players.length;
// }


// let players = [ // два игрока
// 	{
// 		username: 'Player 1',
// 		damage: 90
// 	},
// 	{
// 		username: 'Player 2',
// 		damage: 150
// 	}
// ];

// const avg_damage = calc_avg_damage(players);
// console.log(`Средний ущерб для указанных игроков равен ${avg_damage}`);


// const users = [
//     ['Ivan', 20, 'ivan@example.org'],
//     ['Petr', 30, 'petr@example.org'],
//     ['Pavel', 40, 'pavel@example.org']
//  ];

//  console.log(users[0][0])
//  console.log(users[2][1])
//  console.log(users[1][2])


// function apply_discount(cost, discount) {
//     return cost * (1 - discount / 100);
// }

// console.log(
//     apply_discount(1000, 20) // вернет 800
// );
 


// const product = {title: 'Product 1', price: 500, quantity: 10};

// function currency_exchange(product) {
//     return product.price * 1.06;
// }

// console.log(currency_exchange(product));




function calc_area(radius) {
    return Math.PI * radius ** 2;
}

console.log(
    calc_area(10)
);