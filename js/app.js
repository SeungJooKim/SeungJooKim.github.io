const a = 1;
const b = 2;
const veryLongVariable = 0; //camelCase
let myName = "nico";

console.log(5 * 2);
console.log(a * b);

myName = "seoungjoo";
console.log(myName);

// 변수만들때 let, const, var차이
// let 재선언 금지, 재할당 가능
// const 재선언 금지, 재할당 금지
// var 재선언 가능, 재할당 가능

//var은 되도록 쓰지 말자

const amIFat = true;
console.log(amIFat);

// null means nothing there
// python 에서는 none
// undefined 은 변수를 선언하고 값을 할당하지 않은 상태
// null 은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다.
// 즉, undefined 는 자료형이 없는 상태

//organize the data_ array
const mon = "mon";
const tue = "tue";
//.....
const sat = "sat";
const sun = "sun";
//비효율적

//array
const dayOfWeek = ["mon", "tue", "wed"];
console.log(dayOfWeek);

//Get Item from array
console.log(dayOfWeek[0]);

dayOfWeek.push("thur");
console.log(dayOfWeek);

//object
const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

// 비효율적
// const player = ["nico", 1212, false, "little bit "];

//object
//const로 선언된 Object 자체는 바꿀 수 없지만 object 안 properties는 변경 가능
const player = {
  name: "nico",
  points: 1212,
  handSome: true,
  fat: false,
};

// 1. console.log(player.name); => nico
// 2. console.log(player["name"]); => nico
console.log(player);
console.log(player.name);

player.points = 1000000;

player.lastName = "potato";
console.log(player.lastName);

//function
console.log("hello");

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson);
  console.log("I am " + age + " years old");
}

sayHello(); //name, age undefined
sayHello("SeungJoo"); //age는 undefined
sayHello("nico", 24);

function plus(a, b) {
  console.log(a + b);
}

plus(); //a,b NaN
plus("a", "c"); //ac
plus("a", 2); //a2
plus(8, 2); //10

function devide(firstNumber, secondNumber) {
  console.log(firstNumber / secondNumber);
}
devide(10, 2);

const person = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName + " nice to meet you");
  },
};

console.log(player.name);
person.sayHello("seoungjoo");

//returns

const age = 100;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);

//prompt , parseInt , isNaN
const age1 = prompt("How old are you?");
//promt 사용자에게 messege를 보여주고 input을 받음
// promt 는 메세지가 안이쁘게 뜨기도 하고 변경도 어려워서 더이상 잘 사용하지 않음
console.log(age1); //사용자가 입력안하면 null
console.log(typeof age1); //타입확인 -> 입력 안했을 시 object 타입

//string -> int :parseInt()
console.log(typeof "14", typeof parseInt("14"));
console.log(typeof parseInt(age1));
const age2 = parseInt(prompt("How old are you?"));

console.log(isNaN(age2)); //isNan은 boolean을 반환

//conditionals
if (isNaN(age2) || age2 < 0) {
  console.log("please write a correct number");
} else if (age2 < 18) {
  console.log("you are too young to drink");
} else if (age2 >= 18 && age2 <= 50) {
  console.log("you can drink");
} else if (age2 === 100) {
  //반대는 !==
  console.log("wow you are wise");
} else {
  console.log("you can drink. but stop drinking.Thank you");
}
