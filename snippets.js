// // Create square of numbers.
// let aray = [144, 9, 16];
// // let sq = 0;
// // for (let i = 0; i < aray.length; i++) {
// //   sq = aray[i] ** 2;
// //   console.log(sq);
// // }
// // let sqq = aray.forEach(x => (n = x ** 2));
// const greet = () => "hello,world";
// console.log(greet());

// let people = ["m", "r", "d", "f"];

// const arr = (letter, index) => {
//   console.log(`${index} and ${letter}`);
// };

// people.forEach(arr);

const ul = document.querySelector(".city");
const people = ["m", "r", "d", "f"];
let html = "";
people.forEach(function(person) {
  html += `<li>${person}</li>`;
});

console.log(html);
