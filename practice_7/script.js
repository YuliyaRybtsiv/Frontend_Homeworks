// let string = ['str1', 'Str2', 'sTr3']

// let result = string.map(string => string.toUpperCase());

// console.log(result);

// We will work here!

const numbers = [10, 45, 3, 9, 19, 11, -5, 0, 7, 21, 89, 68, 1, 13, 8];
const strings = ['This', 'is', 'an', 'array', 'of', 'Test', 'strings'];

const ball = {
  name: "Ball",
  category: "Sport",
  img: "./assets/ball.jpeg",
  price: 100
};
const gloves = {
  name: "Gloves",
  category: "Sport",
  img: "./assets/gloves.jpg",
  price: 140
};
const shoes = {
  name: "Sport shoes",
  category: "Sport",
  discount: true,
  img: "./assets/shoes.png",
  price: 320
};
const hammer = {
  name: "Hammer",
  category: "Tools",
  img: "./assets/hammer.jpeg",
  price: 40
};
const saw = {
  name: "Saw",
  category: "Tools",
  discount: true,
  img: "./assets/saw.jpeg",
  price: 75
};
const shark = {
  name: "Shark toy",
  category: "Other",
  img: "./assets/shark.jpeg",
  price: 45
};

// Массив объектов

let products = [ball, gloves, shoes, hammer, saw];

// let result = products.map(product => product.name);

// console.log(result);

// const simplifiedProducts = products.map( product => {
//     return {
//       name: product.name,
//       price: product.price
//     };
//   });


/*
 - создать DOM-элемент, через метод document.createElement
 - нужно пройтись по массиву строк (strings), дял каждого элемента массива нужно создать DOM-элемент li
 - для этих элементов списка, нужно добавить текст через атрибут textContent, и записать туда строку-элемент массива
 - нужно добавить эти элементы li в наш контейнер ul
 - нужно наш контейнер ul добавить на страницу после DOM-элемента div с классом root. Для этого надо будет найти этот элементе через document.querySelector
*/

// strings.sort();
// console.log(strings);

// numbers.sort((crElem, nxElem)=> {
//     if(crElem > nxElem) return -1
//     if(crElem < nxElem) return 1
//     if(crElem === nxElem) return 0
//  })

//  console.log(numbers);

// numbers.sort((a,b) => b - a);
// console.log(numbers);

// products.sort((prod1, prod2) => prod1.price - prod2.price);
// console.log(products);


// strings.sort((a, b) => b.length - a.length);
// console.log(strings);

products.sort( (prod1, prod2) => {
    if (prod1.category === prod2.category) {
      return prod1.price - prod2.price;
    }
    else {
      return prod1.category < prod2.category ? -1 : 1;
    }
  });
  
  console.log(products);

