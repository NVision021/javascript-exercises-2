const removeFromArray = function(array, ...removedItems) {
  let sortedArray = array.filter ((item) => !removedItems.includes(item));  
  return sortedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
