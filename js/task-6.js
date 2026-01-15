const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];

const container = document.querySelector(".products");

container.insertAdjacentHTML("beforeend", createMarkup(products));
container.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      (item) => `
      <li data-id="${item.id}" class="item product=item">
      <img src="${item.img}" alt="${item.name}" >
      <h2>${item.name}</h2>
      <p>Coast: ${item.price} $</p>
    </li>
  `
    )
    .join("");
}

function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }
}
