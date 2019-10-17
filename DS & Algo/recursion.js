function factorial(number) {
  if (number == 2) {
    return number;
  }
  debugger;
  return number * factorial(number - 1);
}

function fiboncci(n) {
  if (n < 2) {
    return n;
  }
  return fiboncci(n - 1) + fiboncci(n - 2);
}
console.log(fiboncci(21));
