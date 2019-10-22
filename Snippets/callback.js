function add(a, b, callback) {
  console.log(a + b);
  calls();
}

function calls() {
  console.log("im callback");
}

add(2, 4, calls);
