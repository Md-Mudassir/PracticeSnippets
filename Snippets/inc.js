// let counter = document.getElementsByClassName("count");
// let inc = 0;
// while (1) {
//   counter.innerText = inc;
//   inc++;
// }

function incc() {
  let count = 7;
  for (let i = 0; i < 100; i++) {
    count++;
  }
  document.getElementById("plus").innerText = count;
}

incc();
