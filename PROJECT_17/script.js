const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")
const productContainer = document.querySelector(".products")

const products = [
    {
        name: "Iphone 12",
        price: 50000
    },
    {
        name: "Iphone 13",
        price: 60000
    },
]

form.addEventListener("submit", function(event) {
    event.preventDefault()

    // console.log(productName.value, productPrice.value)
    const newProduct = {
        name: productName.value,
        price: Number(productPrice.value)
    }
    // console.log(newProduct);
    products.push(newProduct)
    clearInputs()
    showProducts()
})

function clearInputs() {
    productName.value = ""
    productPrice.value = ""
}



const productCard = [
    { name: "Iphone 12", price: 50000 },
    { name: "Iphone 13", price: 60000 },
  ];
const usersSection = document.querySelector("section");

// for(let i = 0; i < products.length; i++) {
//     productContainer.innerHTML += `
//     <div class="product-card">
//             <p class="product-card-name">${products[i].name}</p>
//             <p class="product-card-price">${products[i].price}</p>
//         </div>
//     `
// }
// function showProducts() {
//     products.forEach(function(product) {
//         productContainer.innerHTML += `
//         <div class="product-card">
//                 <p class="product-card-name">${product.name}</p>
//                 <p class="product-card-price">${product.price}</p>
//         </div>
//     `
//     })
// }
// showProducts()


function showProducts() {
    productContainer.innerHTML = ""
    products.forEach(function(product, index) {
        productContainer.innerHTML += `
        <div class="product-card">
                <p class="product-card-name">${product.name}</p>
                <p class="product-card-price">${product.price}</p>
                <button class="delete-btn" id="${index}"> X </button>
        </div>
    `
    })
    onCardHover()
    deleteProduct()
}
showProducts()

function onCardHover() {
    const productsCards = document.querySelectorAll(".product-card")
    productsCards.forEach(function(card) {
        card.addEventListener("mouseover", function() {
            card.querySelector(".delete-btn").style.display = "block"
        })
        card.addEventListener("mouseout", function() {
            card.querySelector(".delete-btn").style.display = "none"
        })
    })
}

function deleteProduct() {
    const deleteBtns = document.querySelectorAll(".delete-btn")
    deleteBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // console.log("удалено")
            const currentId = btn.id
            products.splice(currentId, 1)
            // btn.parentElement.remove()

            showProducts()
        })
    })
}

// Сделать так, чтобы при отведении мыши, крестик исчезал

// mouseover - при наведении на элемент
// mouseout -  при отведении от элемента


card.addEventListener("mouseover", function() {
    card.querySelector(".delete-btn").style.display = "block"
})


/* <div class="product-card">
            <p class="product-card-name">Сноуборд</p>
            <p class="product-card-price">10000</p>
        </div>
        <div class="product-card">
            <p class="product-card-name">Сноуборд</p>
            <p class="product-card-price">10000</p>
        </div> */


/*
    for - низкоуровневый цикл. задаем параметры для того, чтобы пройтись циклом по массиву
        инициализация, условие, шаг
    
    forEach - высокоуровневый, больше похож на человеческий язык

    array.forEach(function(item, index, array) {
        console.log(item)
    })
    метод forEach вызовет переданную коллбек функцию столько раз сколько элементов в массиве array?
        при этом функция принимает 3 параметра
        1. item - каждый элемент в массиве. первый раз функция выполнится и получит первый элемент массива
            второй раз получить второй элемент массива и т д 
        2. index - это порядковые номер элемента в массиве array[0], array[1]
        3. array - это сам массив
*/