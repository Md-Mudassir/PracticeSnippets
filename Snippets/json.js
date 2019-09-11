// our array
let alpha = ["a", "b", "c", "d", "e", "f"];

// storing our array as a string
localStorage.setItem("letters", JSON.stringify(alpha));

let retrievedData = localStorage.getItem("letters");
let alpha2 = JSON.parse(retrievedData);

console.log(retrievedData);
console.log(alpha2);


$(function() {
  getJSON();
});


function getJSON() {
  $.getJSON("data.json", function(json) {
    questions = json;
    // console.log(Object);
    const keys = Object.keys(questions);
    //storing the objects as string in local  storage
    localStorage.setItem("ques", JSON.stringify(questions));
    let retrievedObject = localStorage.getItem("ques");
    //getting the values in form of objects
    console.log("retrievedObject: ", JSON.parse(retrievedObject));
    // console.log(localStorage.getItem(questions));
    // console.log(questions);
    let randIndex = Math.floor(Math.random() * (keys.length));
    //parsing into objects 
    let que = JSON.parse(localStorage.getItem("ques"));
    //getting a random index for question
    let varible = que[keys[randIndex]];
    console.log(varible["question"]);
    console.log(varible["answer"]);
  });
}
