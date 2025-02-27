const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(a) {
  let sum = 0;
  for (let num of a) {
    sum += num;
  }
	return sum;
};

const multiply = function(a) {
  if (a.includes(0)) {
    return 0;
  }
  multiplier = 1;
  for (let num of a) {
    multiplier *= num;
  }
  return multiplier;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let factorial = 1;
	for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
