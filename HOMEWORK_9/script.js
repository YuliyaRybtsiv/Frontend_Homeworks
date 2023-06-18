// ЗАДАЧА 1
// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50
// (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
const divNumbers = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {
  // console.log(i);
  divNumbers.innerHTML += `<p>${i}</p>`;
}

// ЗАДАЧА 2
// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в
// div с классом strings_container. Строки взять произвольные.
const strings = ["apple", "strawberry", "orange"];
const stringsContainer = document.querySelector(".strings_container");
for (let i = 0; i < strings.length; i++) {
  console.log(strings[i]);
  stringsContainer.innerHTML += `<p>${strings[i]}</p>`;
}

// ЗАДАЧА 3
// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name,
// last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей.
// Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки
// в div с классом users_container.

const users = [
  { first_name: "Yuliya", last_name: "Simbo", age: 25 },
  { first_name: "Jan", last_name: "Simbo1", age: 28 },
  { first_name: "Ivan", last_name: "Simbo2", age: 15 },
  { first_name: "Oxana", last_name: "Simbo3", age: 17 },
  { first_name: "Vlad", last_name: "Simbo4", age: 33 },
];
const usersSection = document.querySelector("section");

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    console.log(users[i].first_name, users[i].last_name, users[i].age);
    usersSection.innerHTML += `<div class="users_container">
                                <p>${users[i].first_name}</p>
                                <p>${users[i].last_name}</p> 
                                <p>${users[i].age}</p>
                                </div>`;
  }
}
