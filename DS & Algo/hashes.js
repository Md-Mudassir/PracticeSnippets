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
