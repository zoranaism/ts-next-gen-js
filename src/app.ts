const userName = "Zox";
// userName = "Zorana";
let age = 31;
age = 29;

// var result; // var works only in global scope
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true; // let has new feature = block scope THEREFORE code is cleaner
// }

// console.log(isOld);

const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5));
