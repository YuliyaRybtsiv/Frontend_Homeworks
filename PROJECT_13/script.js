// const title = document.querySelector("h1")
// console.log(title.innerText)
// title.innerText = "Hello Arsen"

// const descr = document.querySelector(".descr")
// console.log(descr)

// // Найти элементы
// // а) найти тег ссылки на гугл
// // б) найти тег с классом footer
// // в) найти заголовок в main

// const googleLink = document.querySelector("main a")
// googleLink.innerText = "Facebook"
// console.log(googleLink)

// const footerText = document.querySelector(".footer")
// footerText.innerText = "Hello"

// const title1 = document.querySelector("h2")
// title1.innerText = "TITLE"



// Поменять текст внутри ссылки гугл на "Facebook"
// Поменять текст внутри тега с классом footer на Hello
// Поменять текст внутри h2 на TITLE


// // Добавить к тексту внутри h1.
// "Это мой первый заголовок"
// const title = document.querySelector("h1")
// title.innerText += ". Это мой первый заголовок"

// const texts = document.querySelectorAll("p")
// // console.log(texts)
// // texts[0].innerText = "Привет, как дела?"
// // texts[1].innerText = "Привет, как дела?"
// // texts[2].innerText = "Привет, как дела?"


// // Задача. Поменять текст во всех тегах p на "Привет, как дела?"
// // Переписать код используя цикл for
// for(let i = 0; i < texts.length; i++) {
//     console.log(texts[i])
//     texts[i].innerText = "Привет, как дела?"
// }

// const array = [10, 20, 30, 50]
// console.log(array)


// const googleLink = document.querySelector("main a")
// googleLink.innetText = "Facebook"
// googleLink.setAttribute("href", "https://fb.com")
// const href = googleLink.getAttribute("href")
// console.log(href);
// CONST - переменная


// getAttribute(attr) - метод, для получения значение атрибута тега
//         attr - название атрибута, значение которого мы хотим получить
//     setAttribute(attr, value) - метод, для назначения атрибута
//         attr - название атрибута, значение которого мы хотим изменить
//         value - значение, на которое хотим поменять

// Задача. Поменять у всех ссылок текст на Instagram
// Ссылку у всех тегов поменять на https://instagram.com

const links = document.querySelectorAll("a")
for(let i = 0; i < links.length; i++) {
    links[i].innerText = "Instagram"
    links[i].setAttribute("href", "https://instagram.com")
}
