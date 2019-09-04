const players = ["Virat", "Sachin", "Ganguly"];
// console.log(players.indexOf("Ganguly"));

let players2 = [
  { name: "Virat", rank: 4 },
  { name: "Sachin", rank: 2 },
  { name: "Ganguly", rank: 5 }
];

//FIND INDEX USING FUNCTION
// let player = players2.find(function(player) {
//   if (player.name == "Sachin") return true;
// });

//FIND INDEX USING >
let player = players2.find(player => player.filter == "Sachin");
console.log(player);
let player = players2.findIndex(player => player.name == "Sachin");
console.log(player);
// players.shift("Virat");
// players.unshift("Dhoni");
// players.splice(0, 2);
// console.log(players);

// let newPlayer = ["ABD", "Rahul"];
// players.splice(1, 1, ...newPlayer);
// console.log(players);

// console.log(players[-1]);

// console.log(players.splice(1, 0));
// let fun = players.find(fun => players.name == "Sachin");
// console.log(fun);
// console.log(players);
