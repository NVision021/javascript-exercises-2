const reverseString = function(string) {
  let stringArray = [];
  for (let letter of string) {
    stringArray.unshift(letter);
  }
  const reversedString = stringArray.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
