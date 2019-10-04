// const book = {
//   name: "YOLO",
//   year: "2010",
//   author: "md",
//   getSummary: function() {
//     return `its name is ${this.name} and published in ${this.year} and writen by ${this.author}`;
//   }
// };

// console.log(book.name);

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // const booker = new Book("hello", "md", 2242);

// Book.prototype.getDetails = function(titler) {
//   return `${(this.title = titler)} & ${this.title}`;
// };

// function magzine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

// const mag1 = new magzine("yamla", "md", 333, 23);

// // console.log(mag1);
// class CBook {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSum() {
//     return `${this.title}`;
//   }
// }

// const books = new CBook("you", "md", 8987);
// console.log(books.getSum());

// let john = {
//   name: "john",
//   mass: 12,
//   height: 5,
//   BMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// john.BMI();
// console.log(john);

// function test() {
//   return john.name;
// }
// console.log(test());

let Per = function(name, age) {
  this.name = name;
  this.age = age;
};

Per.prototype.calage = function() {
  console.log(this.age - 2);
};

let per1 = new Per("md", 34);
console.log(per1.calage());
