// let name = "md mudassir";
// console.log(`${name}`.repeat(8));
// console.log(name.startsWith("m"));

// let [hi, hello] = [1, 2];

// console.log(hi);

// function multi(x) {
//   return function(y) {
//     return y * x;
//   };
// }
// let ans = multi(4);
// console.log(ans(2));

let car_year = 2010;
const car_price =
  car_year == 2015
    ? 0.1
    : car_year == 2013
    ? 0.12
    : car_year == 2010
    ? 0.13
    : null;

console.log(car_price);
