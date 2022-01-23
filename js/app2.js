const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   const clickedClass = "active"; //clean code

//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

function handleTitleClick() {
  const clickedClass = "active";
  h1.classList.toggle(clickedClass);
}
h1.addEventListener("click", handleTitleClick);
