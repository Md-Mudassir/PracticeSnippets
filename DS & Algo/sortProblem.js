//Initial Solution
const array = [1, 2, 3, 4, 5, 9, 8, 7, 6];

let sorted = array.sort((a, b) => a - b);

console.log("using sort() " + sorted);

//Bubble sort
sortEle = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
sortEle(array);
console.log("using bubble sort " + array);
