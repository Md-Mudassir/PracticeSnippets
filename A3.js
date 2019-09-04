// // Assignment Day 3 - Find company containing the word "Six" in its name and print its age

// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

// let filtred = companies
//   .filter(n => n.name.includes("Six"))
//   .map(x => (array = x.end - x.start));
// console.log(`age is ${array}`);
// // filtred.forEach(x =>
// //   console.log("(" + (x.end - x.start) + ") " + "years")
// // );
let input = "Bangalore";
let input = document.getElementById("cityName").value;
let cities = [
  { city: "Bangalore", Celcius: 25, Data: "Sunny" },
  { city: "Chennai", Celcius: 15, Data: "Rainy" },
  { city: "Adoni", Celcius: 30, Data: "Cloudy" }
];
let filtred = cities
  .filter(n => n.city === input)
  .map(x => ((array = x.city), (aa = x.Data)));

document.getElementById("city").innerHTML = aa;
console.log(array);
