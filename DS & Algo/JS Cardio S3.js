// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

addAll = (...arr) => arr.reduce((a, b) => a + b);
// console.log(addAll(1, 2, 3));

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

sumAllPrimes = number => {
  let sum = 0;
  isPrime = i => {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};
// console.log(sumAllPrimes(10));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

seekAndDestroy = (arr, ...values) => arr.filter(val => !values.includes(val));
// console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
data = [-1, 150, 190, 170, -1, -1, 160, 180];
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

sortByHeight = data => {
  let arr1 = [];
  let arr2 = [];

  data.forEach((val, i) => {
    if (val === -1) {
      arr1.push(i);
    } else {
      arr2.push(val);
    }
  });
  let sortHeight = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortHeight.splice(arr1[i], 0, -1));
  return sortHeight;
};
// console.log(sortByHeight(data));

// CHALLENGE 5: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

evenOddSums = arr => {
  let even = 0;
  let odd = 0;
  arr.forEach(num => (num % 2 === 0 ? (even += num) : (odd += num)));
  return [even, odd];
};
console.log(evenOddSums([50, 60, 60, 45, 71]));
