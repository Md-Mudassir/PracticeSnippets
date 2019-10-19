//Initial Solution
const array = [1, 2, 3, 4, 5, 9, 8, 7, 6];

let sorted = array.sort((a, b) => a - b);

console.log("using sort() " + sorted);

//Insertion sort
const insertionSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
};

console.log(insertionSort(array));
