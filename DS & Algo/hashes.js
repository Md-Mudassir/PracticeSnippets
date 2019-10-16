// function recurring(inp) {
//   for (let i = 0; i < inp.length; i++) {
//     for (let j = i + 1; j < inp.length; j++) {
//       if (inp[i] === inp[j]) return inp[i];
//     }
//   }
// }

// console.log(recurring([1, 2, 2, 3, 1, 2]));

class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }
    
    keys(){
      const keysArray = [];
      console.log(this.data.length);
      for (let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          keysArray.push(this.data[i][0][0])
        }
      }
      return keysArray;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  myHashTable.keys()

let mapy = new Map([[1, 2], [2, 3]]);
console.log(mapy);

// let map1 = new Map([[1, 2], [2, 3], [4, 5]]);

// console.log("Map1");
// console.log(map1);

