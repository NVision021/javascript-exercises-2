const repeatString = function(txt, repeat) {
  let word = "";
  if (repeat < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < repeat; i++) {
      word += txt;
    }
  }
  return word;
};

// Do not edit below this line
module.exports = repeatString;
