// Простые методы массивов

// push()
// pop()
// shift()
// unshift()


// Методы массивов, принимающие функцию в качестве аргумента (callback)

// forEach(() => {}) - метод массива, принимающий в качестве аргумента функцию и выполняющий указанную функцию один раз для КАЖДОГО элемента массива. Ничего не возвращает (undefined). return в многострочной функции не нужен.

// map() - метод массива, принимающий в качестве аргумента функцию и выполняющий указанную функцию один раз для КАЖДОГО элемента массива. Возвращает новый массив.

// filter()

// find()

// sort()


// callback-функция - функция переданная в другую функцию в качестве аргумента
// функция высшего порядка (Higher-order function) - функция, которая принимает другую функцию в качестве аргумента


// ПРАКТИКА

// 1. Дан массив numbers с числами. Создать новый массив, в который попадут все числа из массива numbers умноженные на 2

const numbers = [2, 6, 17, 32, 9, 1]; // => [4, 12, 34, 64, 18, 2]

const numbers_2 = [];
for(let i = 0; i < numbers.length; i++){
  numbers_2.push(numbers[i] * 2)
}


const numbers_3 = [];
numbers.forEach(el => numbers_3.push(el * 2));


const numbers_4 = numbers.map(el => el * 2);


// 2. Создать новый массив, в который попадут все числа из массива numbers увеличенные на 10

const numbers_5 = [];
for(let i = 0; i < numbers.length; i++){
  numbers_2.push(numbers[i] + 10)
}


const numbers_6 = [];
numbers.forEach(el => numbers_3.push(el + 10));


const numbers_7 = numbers.map(el => el + 10);


// 3. Создать новый массив. Если число из массива numbers >= 10, то умножить его на 3. Если < 10, то оставить без изменений => [2, 6, 51, 96, 9, 1]

const numbers_8 = numbers.map(el => el >= 10 ? el * 3 : el);

const numbers_9 = [];
numbers.forEach(el => el >= 10 ? numbers_9.push(el * 3) : numbers_9.push(el));

numbers.forEach(el => {
  if(el >= 10) {
    numbers_9.push(el * 3)
  } else {
    numbers_9.push(el)
  }
}); 


// 4. Дан массив со именами. Создать новый массив. Если длина имени >= 5, то подставить вместо этого имени слово 'hello'. Если <5 - то подставить 'hi' => ['hi', 'hi', 'hello', 'hello', 'hello', 'hi', 'hello']

const names = ['Mark', 'Anna', 'David', 'Boris', 'Irina', 'Olga', 'Ekaterina'];

const names2 = [];
names.forEach(el => el.length >= 5 ? names2.push('hello') : names2.push('hi'));

const names3 = names.map(el => el.length >= 5 ? 'hello' : 'hi');

const names4 = names.map((el => {
  if (el.length >= 5) {
   return "hello"
  } else {
   return "hi"
  }
}));

// тернарный оператор
// Условие ? true : false

// 5. Дан массив с разными типами данных. Создать новый массив, в котором все числовые значения из массива array будут заменены на строку 'number' => ['hello', 'number', true, 'number', 'hi', undefined, 'number']

const array = ['hello', 5, true, 78, 'hi', undefined, 1];

const array_2 = array.map(el => typeof el === 'number' ? 'number' : el);

const array_3 = [];
array.forEach(el => typeof el === 'number' ? array_3.push('number') : array_3.push(el));


// Вопрос:
// В чем разница между операторами "==" и "==="?

// Ответ: 
// Разница между оператором "==" (нестрогое равенство) и оператором "===" (строгое равенство) состоит в следующем: 

// "=="  сравнивает значения после их преобразования или приведения к одному типу, а "==="  — без такого преобразования.

// Например:
// 7 == ‘7’ вернет true, а 7 === ‘7’ вернет false. 
// В первом случае не будут сравниваться типы данных (число и строка), а во втором будут.


// 6. Дан массив с разными типами данных. Создать новый массив. Все числа умножить 2, а все строки заменить на 'good morning' => ['good morning', 10, true, 156, 'good morning', undefined, 2]

const array_4 = array.map(el => {
  if(typeof el === "number") {
    return el * 2;
  } else if (typeof el === "string"){
    return "good morning"
  } 
  return el;
});



