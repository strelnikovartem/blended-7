const container = document.querySelector(".container-box");

// [...container.children].map((box) => {
//   box.addEventListener("click", handleClick);
// });

// function handleClick(event) {
//   if (!event.target.classList.contains("box")) {
//     return;
//   }
//   const color = event.target.dataset.color;
//   console.log(color);
// }

container.addEventListener("click", handleClick);

function handleClick(event) {
  if (!event.target.classList.contains("box")) {
    return;
  }
  const color = event.target.dataset.color;
  console.log(color);
}
