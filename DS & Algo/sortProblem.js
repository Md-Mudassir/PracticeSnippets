let list = [1, 2, 3, 4];
let list2 = [4, 2, 7, 0];
let list3 = [...list, ...list2];
const sorted = list3.sort((a, b) => a - b);

console.log(sorted);
