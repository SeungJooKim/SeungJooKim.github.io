// const title = document.getElementById("title");
// title.innerText = "Got you!";
// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos.item(1));

// const title = document.getElementsByTagName("h1");
// console.log(title[0].innerText);

// const title = document.querySelector(".hello h1");
// const title = document.querySelector(".hello h1:first-child");
//querySelector는 element를 css방식으로 검색할 수 있음
//querySelector는 첫번째 거 하나만 나옴
// console.log(title);

// const titles = document.querySelectorAll(".hello h1");
//quertSelectorAll은 해당 하는 모든 element 반환
// console.log(titles);
// console.dir(titles);

// title.style.color = "red";

//Event
const title = document.querySelector("div.hello:first-child h1");
title.addEventListener("click", () => {
  console.log("title has clicked");
});

function handleTitleClick() {
  title.innerText = "It works!";
}

//html javascipt properties
//https://developer.mozilla.org/ko/docs/Web/Events
//https://developer.mozilla.org/en-US/docs/Web/API/Element
// console.dir(엘리먼트 요소)
title.addEventListener("mouseenter", () => {
  console.log("I'm in");
  title.innerText = "I'm in";
});

title.addEventListener("mouseleave", () => {
  console.log("I'm out");
  title.innerText = "I'm out";
});

title.onclick = () => {
  console.log("클릭");
};

window.addEventListener("resize", () => {
  document.body.style.backgroundColor = "tomato";
});

function hadnleWindowCopy() {
  alert("copy");
}
window.addEventListener("copy", hadnleWindowCopy);

function handleWindowOffLine() {
  alert("SOS! NO WIFI");
}
window.addEventListener("offline", handleWindowOffLine);

function handleWindowOnLine() {
  alert("It's Online");
}
window.addEventListener("online", handleWindowOnLine);
