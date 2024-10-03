// higher order functions

const function1 = (a) => {
  // pure
  return a + 1;
};

// HOF -> higher order function
// example(argument: function): function
const higherOrderFunction = (anotherFunction) => {
  return anotherFunction;
};

// n-amount of functions with similar functionality
// i can take out common functional out of them to HOF
