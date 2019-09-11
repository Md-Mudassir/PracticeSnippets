// // our array
// let alpha = ["a", "b", "c", "d", "e", "f"];

// // storing our array as a string
// localStorage.setItem("letters", JSON.stringify(alpha));

// let retrievedData = localStorage.getItem("letters");
// let alpha2 = JSON.parse(retrievedData);

// console.log(retrievedData);
// console.log(alpha2);

// let testObject = { one: 1, two: 2, three: 3 };

// let keys = Object.keys(testObject);
// console.log(keys);

// localStorage.setItem("testObject", JSON.stringify(testObject));

// let retrievedObject = localStorage.getItem("testObject");

// console.log("retrievedObject: ", JSON.parse(retrievedObject));

// console.log(retrievedObject);

// $(function() {
//   // data in attributes
//   // getAttributeData()
//   getJSON();
//   // getLocalData()
// });
// function getJSON() {
//   $.getJSON("data.json", function(json) {
//     questions = json;
//     // console.log(Object)
//     const keys = Object.keys(questions);
//     console.log(keys.length);
//     // [0 -> 1] * 1
//     let randIndex = Math.round(Math.random() * (keys.length - 1));
//     // console.log(randIndex);
//   });
// }
var allQuestions = new Array();

function loadQuestions() {
  $.getJSON("data.json", function(data) {
    console.log(data.quiz);
  }).error(function() {
    console.log("error: json not loaded");
  });
}
