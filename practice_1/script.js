// МАССИВЫ
const numbers = [5, 9, 3, 4, 10, 12, 8, 21, 7];

const products = [
   {
      name: 'Ball',
      category: 'Sport',
      price: 100,
   },
   {
      name: 'Gloves',
      category: 'Sport',
      price: 140,
   },
   {
      name: 'Sport shoes',
      category: 'Sport',
      discount: true,
      price: 320,
   },
   {
      name: 'Hammer',
      category: 'Tools',
      price: 40,
   },
   {
      name: 'Saw',
      category: 'Tools',
      discount: true,
      price: 75,
   },
   {
      name: 'Shark toy',
      category: 'Other',
      price: 45,
   },
   {
      name: 'Truck',
      category: 'Other',
      price: 80,
   },
];


/* 1.0 ПРИМЕР - поиск миниммального значения массива */

// const minNumber = Math.min(...numbers);
// console.log(minNumber);

// let minNumber = numbers[0];

// for(let i = 1; i < numbers.length; i++) {
//   if(numbers[i] < minNumber) {
//     minNumber = numbers[i];
//   }
// }

// console.log(minNumber);


/* 1.2 ПРИМЕР - найти среднее арифметическое всех елементов массива чисел */

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// const average = sum / numbers.length;
// console.log(average);



/* 1.3 Перебор массива объектов - вывод свойств объекта. Нужно пройтись по массиву products и вывести в консоль значение свойства name каждого товара */

// for(let i = 0; i < products.length; i++) {
// console.log(products[i].name);
// }


/* 1.4 Перебор массива объектов - найти объект по критерию. Пройтись по массиву товаров, найти первый товар с ценой больше 200 единициц. И вывести его в консоль.  */

for (let i = 0; i < products.length; i++) {
    if (products[i].price > 200) {
        console.log(products[i]);
        break;
    }
    console.log('Íteration', products[i]);
}

/* 1.5 Найти суммарную стоимость всех товаров - т.е. сумму всех свойств price всех товаров.  */

let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
totalPrice += products[i].price;
}

console.log(totalPrice);

