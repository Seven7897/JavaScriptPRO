"use strict";

// 1. Найти по id, используя getElementById,
// элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLnk = document.getElementById("super_link");
console.log(superLnk);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const newText = document.querySelectorAll(".card-link");
for (const iterator of newText) {
  iterator.textContent = "Ссылка";
}

// 3. Найти все элементы на странице с классом "card-link",
// которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardLink = document
  .querySelector(".card-body")
  .querySelectorAll(".card-link");
console.log(cardLink);

// 4. Найти первый попавшийся элемент на странице у которого есть
// атрибут data-number со значением 50 и вывести его в консоль.
const dataNumber = document.querySelector("[data-number='50']");
console.log(dataNumber);

// 5. Выведите содержимое тега title в консоль.
const title = document.querySelector("title");
console.log(title.text);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const parent = document.querySelector(".card-title");
console.log(parent.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет"
// и добавьте созданный тег в начало элемента, который имеет класс "card".
const text = document.createElement("p");
text.textContent = "Привет";
const card = document.querySelector(".card");
card.prepend(text);

// 8. Удалите тег h6 на странице.
const h6 = document.querySelector("h6");
h6.remove();
