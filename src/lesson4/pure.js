// Pure functions
// f(x) = x => function
// per x, result will always be the same

// pure function -> no impact from outside

let outsideVar = 4;

// not correct, not viable
const notPure = (number1, number2) => {
  return number1 + number2 + outsideVar; // x + y + 4
};

console.log(notPure(1, 1)); // arguments: x - 1, y -1
// result 6
outsideVar = 6;
console.log(notPure(1, 1)); // arguments: x - 1, y -1
// result 8

// correct way of developing
const pure = (number1, number2) => {
  return number1 + number2;
};

console.log(pure(1, 1));

// pure: f(x) = x
// not pure: a = 4, f(x) = x + a
