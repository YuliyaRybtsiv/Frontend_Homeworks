// const header = document.querySelector("header")
// const title = document.createElement("h1")
// title.innerText = "My title"
// header.appendChild(title) 

/*
    innerText - свойстсво текста внутри тега

    Алгоритм создания элемента
        1. Находим элемент, в который хотим положить созданный тег. querySelector()
        2. Создаем тег. createElement()
        3. Добавляем текст. innerText
        4. Добавляем созданный тег в найденный в п1 тег. appendChild()
*/

// const main = document.querySelector("main")
// console.log(main.innerHTML)

// const header = document.querySelector("header")
// header.innerHTML = "<h1> My title </h1>"


// Задача. Создать цикл, который позволяет добавить 
// 10 тегов p с тектом HELLO внутрь section


    // const section = document.querySelector("section")
    // // section.innerHTML = "<p> HELLO </p>"

    // for(let i = 0; i < 10; i++) {
    //     section.innerHTML = "<p> HELLO </p>"
    // }

    // Зачада. Есть массив имен names. Для каждого имени 
    // создать тег p и добавить его в section

    // const names = ["Arsen", "Yuliya", "Lana", "Maria"]

    // // // const section = document.querySelector("section")
    // // // section.innerHTML += `<p> ${names[0]} </p>`
    // // // section.innerHTML += `<p> ${names[1]} </p>`
    // // // section.innerHTML += `<p> ${names[2]} </p>`


    // const section = document.querySelector("section")
    // for(let i = 0; i < names.length; i++) {
    //     section.innerHTML += `<p class="text"> ${names[i]} </p>`
    // }

   // Задача. Есть массив объектов prodcuts. Для каждого продукта создать разметку
const products = [
    {
        name: "Iphone 13",
        price: 10000
    },
    {
        name: "Iphone 14",
        price: 20000
    },
    {
        name: "Iphone 15",
        price: 25000
    },
]



    // <div class="product">
    //     <h5>Назввание продукта</h5>
    //     <p>Цена продукта</p>
    // </div>

    // const section = document.querySelector("section")
    // for(let i = 0; i < products.length; i++) {
    //     section.innerHTML += `<div class="product"> 
    //                             <h5>${products[i].name}</h5>
    //                             <p>${products[i].price}</p>
    //                           </div> `
    // }

    // section.innerHTML += `<div class="product">
    //                         <h5>${products[0].name}</h5>
    //                         <p>${products[0].price}</p>
    //                     </div>`

    // section.innerHTML += `<div class="product">
    //                         <h5>${products[1].name}</h5>
    //                         <p>${products[1].price}</p>
    //                     </div>`   
                        
    // section.innerHTML += `<div class="product">
    //                         <h5>${products[2].name}</h5>
    //                         <p>${products[2].price}</p>
    //                     </div>` 

                
    
    // `<div class="product">
    // //     <h5>products[0].name</h5>
    // //     <p>products[0].price</p>
    // // </div>`


    // `<div class="product">
    // //     <h5>products[1].name</h5>
    // //     <p>products[1].price</p>
    // // </div>`


    // `<div class="product">
    // //     <h5>products[2].name</h5>
    // //     <p>products[0].price</p>
    // // </div>` 


   // Добавить в разметку <h1></h1>, в котором должна быть общая стоимость всех продуктов
// 1. с помощью цикла for посчитать сумму всех продуктов
// 2. добавить h1 в конец section, в котором указать цену



// const section = document.querySelector("section")

// let sum = 0
// for(let i = 0; i < products.length; i++) {
//     sum += products[i].price
// }
// section.innerHTML += `<h1>Сумма продуктов состовляет ${sum}</h1>`




const section = document.querySelector("section")

let sum = 0
for(let i = 0; i < products.length; i++) {
    sum += products[i].price
    section.innerHTML += `<div class="product">
        <h5>${products[i].name}</h5>
        <p>${products[i].price}</p>
        </div> `
}
section.innerHTML += `<h1>Сумма продуктов составляет ${sum}</h1>`

// const sumTitle = document.createElement("h1")
// sumTitle.innerText =  `<h1>Сумма продуктов составляет ${sum}</h1>`
// section.appendChild(sumTitle)

