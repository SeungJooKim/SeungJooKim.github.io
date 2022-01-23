const loginForm = document.getElementById("login-form");
//const loginForm =document.querySelector("#login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
  //eventListner의 첫번째 인자는 event object를 담은 정보들
  event.preventDefault();
  const username = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);

  //   if (username === "") {
  //     alert("Please Write your name");
  //   } else if (username.length > 15) {
  //     alert("Your name is too long");
  //   } else {
  //     console.log(username);
  //   }
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);

const link = document.querySelector("a");
function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  //block-> default action
}

link.addEventListener("click", handleLinkClick);
