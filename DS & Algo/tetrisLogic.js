//repeated elements plus sum of it
let blocks = [1, 1, 1, 1, 2, 2, 2, 5, 6, 6];
let reducer = (accumulator, currentValue) => accumulator + currentValue;
let score = 0;
let count = {};

blocks.forEach(i => {
  count[i] = (count[i] || 0) + 1;
});
score = Object.keys(count)
  .filter(key => count[key] >= 3)
  .map(key => 2 ** count[key])
  .reduce(reducer, 0);

console.log(count);
console.log(`You Scored ${score}`);
