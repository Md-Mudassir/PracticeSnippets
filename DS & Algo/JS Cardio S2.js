// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

longestWord = sen => {
  // SOLUTION 1 - Return a single longest word
  //remove comma's
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  //   console.log(wordArr);
  const wordLen = wordArr.map(word => word.length);
  //   console.log(wordLen);
  //Sort
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  console.log(sorted);
  console.log(sorted[0]);
};

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

chunkArray = (arr, len) => {
  chunkedArr = []; //storing the chunked array
  let i = 0; //index
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len; //increment
  }
  return chunkedArr;
};

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

flattenArray = arrays => [].concat(...arrays);
// arrays.reduce((a, b) => a.concat(b));

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

console.log(output);
