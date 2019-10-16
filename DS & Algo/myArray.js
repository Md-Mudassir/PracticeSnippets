class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    // const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    // return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}
const myArray = new MyArray();
myArray.push("hi");
myArray.push("you");
myArray.push("!");
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push("are");
myArray.push("nice");
myArray.shiftItems(0);
console.log(myArray);

let rev = str => [...str].reverse().join("");

rev("hello");

//twoSum
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) console.log(nums[i], nums[j]);
    }
  }
}

twoSum([2, 1, 1, 7], 9);

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
