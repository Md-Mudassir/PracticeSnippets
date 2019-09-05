// function Book(type, author) {
//   this.type = type;
//   this.author = author;
//   this.getDetails = function() {
//     return this.type + " written by " + this.author;
//   };
// }
// var book = new Book("Fiction", "Peter King");
// var hello = new Book("s", "d");
// console.log(hello.getDetails());

//  ES5
function Human(name = "John Doe", age = 0) {
  this.name = name;
  this.age = age;
  console.log("Object created..");
  this.getName = function() {
    return this.name;
  };
}
Human.prototype.getAge = function() {
  return "32";
};

// Human.prototype.color = "red";

// const turing = new Human();
// const church = new Human();
// console.log((turing.color = "black"));
// // console.log((church.color = "black"));

// console.log(turing);
// console.log(church);

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getName() {
//     var demo=43;

//     return this.name;
//   }
// }
// const turing = new Human("Turing", 32);
// console.log(turing);
// class SuperHuman extends Human {
//   constructor(name, age, power) {
//     super(name, age);
//     this.power = power;
//   }
// }

//function to retrieve the elements
class weatherApp {
  constructor(temp) {
    this.temp = temp;
  }
  getCity() {
    return this.temp;
  }
}
const result = new weatherApp("33");
document.getElementById("city").innerHTML = result.temp;

// class Alien extends Human {
//   constructor(eyes, skin) {
//     this.eyes = eyes;
//     this.skin = skin;
//   }
//   getDetails() {
//     return this.eyes, this.skin;
//   }
// }

// let special = new Alien(3, "red");
// console.log(special);
