const body = document.querySelector("body");
const titleEl = document.querySelector("#title");
const listEl = document.querySelector(".list");
const allDatTopic = document.querySelectorAll("[data-topic]");
const nextEl = titleEl.nextElementSibling;
const allHEl = document.querySelectorAll("h3");

allHEl.forEach((item) => item.classList.add("active"));

const liEl = document.querySelector("[data-topic='navigation']");
liEl.style.backgroundColor = "yellow";

const pEl = liEl.querySelector("p");

const currentTopic = "manipulation";

const newLiEl = document.querySelector(`[data-topic=${currentTopic}`);

const blue = (newLiEl.style.backgroundColor = "blue");

const hEl = document.querySelector("h3.completed");

const remuveEl = hEl.remove();

const newEl = document.createElement("p");
newEl.textContent = "Об'єктна модель документа (Document Object Model)";

titleEl.append(newEl);

const newItemTitle = document.createElement("h3");
newItemTitle.textContent = "Властивість innerHTML";

const newItemText = document.createElement("p");
newItemText.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

newItemTitle.append(newItemText);

listEl.append(newItemTitle);

const topicsEl = document.querySelectorAll("[data-topic]");

topicsEl.forEach((li) => {
  if (li.dataset.topic === "props") {
    li.style.color = "orange";
  }
});

const markup = `
<li>
          <h3>Властивість innerHTML</h3>
          <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу???</p>
        </li>
`;

listEl.insertAdjacentHTML("beforeend", markup);

// console.log(topicsEl);
