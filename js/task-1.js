const body = document.querySelector("body");
const titleEl = document.querySelector("#title");
const listEl = document.querySelector(".list");
const allDatTopic = document.querySelectorAll("[data-topic]");
const nextEl = titleEl.nextElementSibling;
const allHEl = document.querySelectorAll("h3");

allHEl.forEach((item) => item.classList.add("active"));

const liEl = document.querySelector("[data-topic='navigation']");

console.log(liEl);
