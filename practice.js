const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company  Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2019 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

//reduce
const numbers = [12, 4, 43, 2, 4, 2];

let sum = numbers.reduce((add, value) => add * value);
let sub = numbers.reduce((sub, value) => sub - value);
console.log(sum, sub);

//print using forEach
// companies.forEach(x => console.log(x));

// print the name and years of companies
// companies.forEach(x => console.log([x.category] + " " + (x.end - x.start)));

let filtred = companies.filter(n => n.category === "Retail");
// filter using forEach
filtred.forEach(x =>
  console.log(
    [x.name] + " " + [x.category] + " " + "(" + (x.end - x.start) + ")"
  )
);

// let newarr = filtred.map(
//   x => [x.name] + " " + [x.category] + " " + "(" + (x.end - x.start) + ")"
// );

// let sorted = newarr.sort();
// console.log(newarr.sort());
// // let years = filtred.map(
// //   x => [x.name] + " " + [x.category] + " " + "(" + (x.end - x.start) + ")"
// // );

// // console.log(filtred);

// // let fill = years.sort(function(a, b) {
// //   return a.end - b.end;
// // });
// // console.log(fill);

// //undefine defined
// // let undefined = companies.map(n => ({ n }));
// // let undefined = companies.map(n => {
// //   n;
// // });
// // let items = filtred.map(n => {
// //   return { value: n };
// // });

// // console.log(undefined);
