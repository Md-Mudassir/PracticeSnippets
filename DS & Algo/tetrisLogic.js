//repeated elements plus sum of it
let blocks = [1, 1, 1, 1, 2, 2, 2, 5, 6, 6];
let reducer = (x, y) => x + y;
let score = 0;
let count = {};
let pairs = 0;

blocks.forEach(i => {
  count[i] = (count[i] || 0) + 1;
});
score = Object.keys(count)
  .filter(key => count[key] >= 3)
  .map(key => 2 ** count[key])
  .reduce(reducer, 0);

// console.log(count);
// console.log(`You Scored ${score}`);

//sock merchant- hackerrank
for (let i = 0; i <= blocks.length - 1; i++) {
  if (blocks[i] === blocks[i + 1]) {
    pairs++;
    i += 1;
  }
}
console.log(pairs);
