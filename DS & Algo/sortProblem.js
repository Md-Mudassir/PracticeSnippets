//Initial Solution

let list = [1, 2, 3, 4],
  list2 = [4, 2, 7, 0];
let list3 = [...list, ...list2];
let sorted = list3.sort((a, b) => a - b);

// console.log(sorted);

//From Scratch Solution

//Bubble sort
const array = [1, 2, 6, 4, 8, 5, 6, 8, 9, 0];

function sortEle(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

sortEle(array);

console.log(array);
