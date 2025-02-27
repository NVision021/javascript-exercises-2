const fibonacci = function(fibStrOrNum) {
  let fibNum = Number(fibStrOrNum);
  if (fibNum < 0) {
    return "OOPS";
  }

  fibSequence = [0, 1];

  for (let i = 2; i < fibNum + 1; i++) {
    fibSequence[i] = fibSequence[i-1] + fibSequence[i-2];
  }

  return fibSequence[fibNum];

};

// Do not edit below this line
module.exports = fibonacci;
