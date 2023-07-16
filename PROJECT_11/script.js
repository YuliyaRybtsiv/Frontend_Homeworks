// const array = ["Hello", "Hello world", 20, true]
// console.log(array)


// const obj = {
//     // key: value
// }


// // Массив - квадратные скобки
// // Обьект - фигурные скобки


// // В обьекте - не важен порядок!!!
// // В массиве - 1ел., 2ел... 5 елемент (нум.список).


// const user = {
//     email: "test@mail.ru", // После каждой строки всегда ставим запятую.
//     name: "Arsen",
//     age: 25,
//     hobbies: ["football", "design"],
//     info: {
//         descr: "Lorem ipsum dolor sit amet"
//     }
// }
// console.log(user)
// console.log(user.name)
// console.log(user.hobbies [0])


// // Задача.
// // Создать обьект продукта со свойством цены и названия.
// // Вывести в консоль значение цены.

// const product = {
//     name: "Apple",
//     price: 8
// }

// console.log(product.price)


// const products = [
//     {
//         name: "Iphone 13",
//         price: 10000
//     },
//     {
//         name: "Iphone 14",
//         price: 15000
//     },
//     {
//         name: "Iphone 15",
//         price: 20000
//     }
// ]

// // Задача. Посчитать сумму стоимости всех продуктов в массиве products и вывести в консоли.

// let sum = 0 // потому что сумма будет меняться.
// for(let i = 0; i < products.length; i++) {
//     // console.log(products[i].price)
//     sum = sum + products[i].price // (0+10000=10000, 10000+15000=25000, 25000+20000=45000)
//     // sum += products[i].price 
// }
// console.log(sum)


// let num = 30
// num = num + 20 // num = 50.     
// num+= 10 // num = 60



// console.log(products[1].name) // "Iphone 14"

// Задача.
// Вывести в консоли названия каждого продукта.

// console.log(products[0].name)
// console.log(products[1].name)
// console.log(products[2].name)

// for(let i = 0; i < products.length; i++) {
//     console.log(products[i].name)
// }

// Задача. Создать массив обьектов users.
// У каждого пользователя в обьекте будут свойства email, login, age
// Создать три обьекта

// const users = [
// {
//     name: "Yuliya",
//     email: "yuliya@gmail.com",
//     login: "Simbo7",
//     age: 23
// },
// {
//     name: "Arsen",
//     email: "arsen@gmail.com",
//     login: "Simbo77",
//     age: 15 // 24
// },
// {
//     name: "Alexander",
//     email: "alex@gmail.com",
//     login: "Simbo777",
//     age: 25
// },
// ]

// // 
// for(let i = 0; i < users.length; i++) {
//     // console.log(`Ваш email - ${users[i].email}, а Ваш логин - ${users[i].login}`)
//     // console.log(users[i].login)
//     // console.log(users[i].email)
//     // console.log(users[i].age)
//     if(users[i].age > 18) {
//         console.log(users[i].login)
//     }
// }


// const validatedUsers = [] // пустой
// for(let i = 0; i < users.length; i++) {
//     if(users[i].age > 18) {
//         validatedUsers.push(users[i].login) // push - метод который добавляет элемент.
//     }
// }
// console.log(validatedUsers)



// const validatedUsers = [] //
// for(let i = 0; i < users.length; i++) {
//     if(users[i].age > 18) {
//         validatedUsers.push({login: users[i].login, age : users[i].age}) // push - метод который добавляет элемент в конец массива
//     }
// }
// console.log(validatedUsers)


const products = [
    {
        name: "Acer",
        category: "laptop"
    },
    {
        name: "Samsung",
        category: "TV" 
    },
    {
        name: "Iphone 14",
        category: "phone"
    },
    {
        name: "Panasonic",
        category: "TV"
    }
]

for(let i = 0; i < products.length; i++) {
    if(products[i].category == "TV") {
        console.log(products[i].name)
    }
}