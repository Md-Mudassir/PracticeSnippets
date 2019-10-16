function recurring(inp) {
  for (let i = 0; i < inp.length; i++) {
    for (let j = i + 1; j < inp.length; j++) {
      if (inp[i] === inp[j]) return inp[i];
    }
  }
}

console.log(recurring([1, 2, 2, 3, 1, 2]));

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
    get(x){
      return this.data[x]
    }
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);

  let blocks = [1,1,1,1,2,2,5,5,5,6];
let doubled;
let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let score=0;
    let  count = {};
    blocks.forEach(i => {(count[i] = (count[i]||0) + 1)})
    doubled=Object.keys(count).map(key => (count[key]**2))
    score=doubled.reduce(reducer,0)

    console.log(count);
    console.log(doubled);
    console.log(`You Scored ${score}`)