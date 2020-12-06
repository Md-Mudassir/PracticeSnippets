// let result = [];
// var twoSum = function (nums, target) {
//   nums.map((num, i) => {
//     nums.map((num2, i2) => {
//       if (num + num2 == target) result = [i, i2];
//     });
//   });

//   return result;
// };

const twoSum = function (nums, target) {
  let storage = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (storage.has(complement)) return [i, storage.get(complement)];
    else storage.set(nums[i], i);
  }
};

// console.log(twoSum([3, 3], 6));

const reverse = (x) => {
  let value = parseInt(
    x.toString().split("").reverse().join("").replace(/-/, "")
  );
  if (value < Math.pow(2, 31) * -1 || value > Math.pow(2, 31) - 1) return 0;
  if (x < 0) return -value;
  else return value;
};

const isPalindrome = (x) => {
  let reversed = parseInt(x.toString().split("").reverse().join(""));
  return x === reversed ? true : false;
};

console.log(isPalindrome(121));
