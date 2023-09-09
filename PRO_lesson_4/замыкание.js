// function handler(arg){
//     let string = arg
//     return function(){
//         console.log(string);
//     }
// }

// let func1 = handler('test')
// let func2 = handler('tigran')

// func1()
// func2()
// func1()

// function createUrl(zone){
//     return function(domen){
//         console.log(`https://${domen}.${zone}`)
//     }
// }

// let urlCom = createUrl('com')
// let netUrl = createUrl('net')

// netUrl('example')
// urlCom('google')
// urlCom('amazon')

// Напишите функцию power, которая будет
// возращать функцию с математическим вычислением
// power(n) должен в качестве аргумента указывать степень возвоедения,
// а анонимная функция должна получить число,
// которое необходимо возвести в n степень

// function power(n){
//  return function(num){
//     console.log(num ** n);
//  }
// }

// let double = power(2)

// double(5)
// double(10)
// double(2)

// let quad = power(4)

// quad(4)
// quad(2)
// quad(10)

// fuction createPassword(pass){
//    return function(passLogin){
//       console.log(pass === passLogin);
//    }
// }
// let user1 = createPassword(123)
// user1(1231)

// Отфильтруйте массив таким образом, оставив толко элементы
// длина которых будет более 6 символов

// let goods = ['Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка']

// let result = goods.filter( (elem, ind, array) => console.log(elem, ind, array))
// console.log(result);

// let goods = ['Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка'];

// let result = goods.filter((elem, ind) => ind % 2 === 0);

// console.log(result);

// let result = goods.findIndex( (elem) => elem[0] === 'Т')
// console.log(result);

// let users = [
//    {id: 1, name: 'Alex', salary: 1000},
//    {id: 2, name: 'Neena', salary: 2000},
//    {id: 3, name: 'Willyam', salary: 3000},
//    {id: 4, name: 'John', salary: 4000},
//    {id: 5, name: 'Steven', salary: 4400},
//    {id: 6, name: 'Gendalf', salary: 200},
// ]

// let result = users.find( user => user.id > 4)
// console.log(result);

// let result2 = users.filter( user => user.salary >= 3000 && user.salary <= 4500);
// console.log(result2);


// let array = [1,2,3,4,5]
// let result = array.map(elem => elem + 100)
// console.log(result);

// let result2 = array.map(elem => [elem, true])
// console.log(result2);

// let result3 = array.map((elem, ind) => [elem, ind])
// console.log(result3);

// let result4 = array.map(elem => elem === 100)
// console.log(result4);




// let prices = [200,500,1000,150,780,2000]
// let result = prices.map(price => price * 0.8);

// console.log(result);



// let users = [
//    {first_name: 'Alex', last_name: 'Wilyam', second_name: 'Agreos'},
//    {first_name: 'Steven', last_name: 'Negroni', second_name: 'Prostif'},
//    {first_name: 'Neena', last_name: 'Jeneffer', second_name: 'Greatiros'},
//    {first_name: 'John', last_name: 'Lemas', second_name: 'Klement'},
// ]

// let result = users.map(elem => `${elem.last_name[0]}. ${elem.first_name[0]}. ${elem.second_name}`)
// console.log(result);



// let goods = ['Велосипед', 'Телевизор', 'Яблока', 'Вишня', 'Груша', 'Ручка']
// goods.sort()
// console.log(goods);


let prices = [5,6,4,7,8,3,9,10,1,2]
// prices.sort()
// console.log(prices);

// console.log('22003'> '21004');

// prices.sort((crElem, nxElem)=> {
//    if(crElem > nxElem) return 1
//    if(crElem < nxElem) return -1
//    if(crElem === nxElem) return 0
// })
// console.log(prices);

prices.sort((crElem, nxElem)=> {
   if(crElem < nxElem) return -1
   if(crElem > nxElem) return 1
   if(crElem === nxElem) return 0
})

users.sort((crElem, nxElem) => crElem.salary - nxElem.salary)
console.log(users);

// console.log(prices);

// prices.sort((a, b)=> a - b)
// console.log(prices);
