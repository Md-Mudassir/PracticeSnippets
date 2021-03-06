const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

let fill = [...new Set(companies.map(x => x.name))];
// console.log(fill);

let com = companies.filter(x => {
  return x.category.includes("Retail");
});

function CompareDate() {
  //Note: 00 is month i.e. January
  var todayDate = new Date(); //Today Date
  var dateOne = new Date(3, Aug, 18);
  if (todayDate > dateOne) {
    console.log("Date One is greater than Date Two.");
  } else {
    console.log("Date Two is greater than Date One.");
  }
}
// CompareDate();
let timestamp1 = 1529743075.0163753;
let timestamp2 = 1529743075.0163753;
function time(timestamp1, timestamp2) {
  var difference = timestamp1 - timestamp2;
  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

  return daysDifference;
}
console.log(time(1529743075.0163753, 1558195876.6541212));
// console.log(com);
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// companies.forEach(x => console.log(x.category));

// let fil = ages.filter(age => age >= 21);

let retails = companies.filter(x => x.category == "Retail");

// let eightys = companies.filter(eyt => eyt.start >= 1981 && eyt.start < 1990);

// let lasted = companies.filter(last => last.end - last.start > 10).length;

let named = companies.map(names => (nam = names.name));

// let aged = ages.map(aged => aged ** 2);

// let sorted = retails.sort((c1, c2) => {
//   if (c1.start > c2.start) return 1;
// });

// let sorted = ages.sort((a, b) => b - a);

// let totald = ages.reduce((a, b) => a + b, 0);

// let string = "hello ! world";
// OBJECT LITERALS
const person = {
  firstName: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA"
  }
};

const { age, firstName } = person;
person.birthday = "march";
// console.log(person);

// Array of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isComplete: false
  },
  {
    id: 2,
    text: "Dinner with wife",
    isComplete: false
  },
  {
    id: 3,
    text: "Meeting with boss",
    isComplete: true
  }
];

const todoscopy = {
  ...todos.filter(x => x.id !== 3)
};
console.log(todoscopy);

let jtodo = JSON.stringify(todos);

for (let to of todos) {
  // console.log(to.text);
}

// console.log(string.split(" ! "));
class Person {
  constructor(firstName, lastName, dob) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
  }
  getName() {
    return this.firstName;
  }
}

let persona = new Person("md", "muddu", 2 - 2 - 1222);
// console.log(persona.getName());

class Customer extends Person {
  constructor(firstName, lastName, dob, balance) {
    super(firstName, lastName, dob);
    this.balance = balance;
  }

  bal() {
    return this.balance * 2;
  }
}

let cust = new Customer("md", "muddu", 2, 333);

console.log(cust.bal());
