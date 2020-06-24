// const userName = "Zox";
// // userName = "Zorana";
// let age = 31;
// age = 29;

// var result; // var works only in global scope
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true; // let has new feature = block scope THEREFORE code is cleaner
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// // console.log(add(2, 5));

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["Sport", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Zorana",
  age: 31,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, curValue) => {
    return currentResult + curValue;
  }, 0);
};

const addedNumber = add(5, 10, 2, 3.7);
console.log(addedNumber);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName: userName, age: userAge } = person;

console.log(userName, userAge);

