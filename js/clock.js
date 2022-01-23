const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); //date object
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//setInterval
// setInterval(sayHello, 5000);
setInterval(getClock, 1000);
//setTimeout
// setTimeout(sayHello, 5000);
