const palindromes = function (maybePalindrome) {
  const POSSIBLE_CHARACTERS = "1234567890qwertyuiopasdfghjklzxcvbnm";
  let POSSIBLE_CHARACTERS_ARRAY = POSSIBLE_CHARACTERS.split("");
  
  let maybePalindromeArray = maybePalindrome.toLowerCase().split("");
  let filteredArray = maybePalindromeArray.filter((letter)=>POSSIBLE_CHARACTERS_ARRAY.includes(letter));
  
  let list = [];
  /*Could also be done with reversed() method (see solution)*/
  for (let i = 0; i < filteredArray.length; i++) {
    if (filteredArray[i] !== filteredArray[filteredArray.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
