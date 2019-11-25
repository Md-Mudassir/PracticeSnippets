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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let sorted = ar.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i <= sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      pairs++;
      i += 1;
    }
  }
  return pairs;
}
