// #1 SHUFFLE A NAME MIRRORED
const nameShuffle = (name) =>
  name.split(" ").reverse().toString().replace(/,/g, " ");
// console.log(nameShuffle("Md Mudassir"))

// #2 RETURN A FOUR LETTER STRING
isFourLetters = (words) => words.map((word, i) => word.length == 4 && word);
// console.log(isFourLetters(["hello","wassup","four"]))

// #3 Seven Boom
const sevenBoom = (numbers) => (numbers.includes(7) ? "Boom" : "not found");
// console.log(sevenBoom([4, 2, 1, 7, 7]));

//LARGEST SWAP
const largestSwap = (number) => {
  let reversed = number + "";
  let swapped = reversed.split("").reverse().join("");
  return number > swapped;
};
// console.log(largestSwap(27));
