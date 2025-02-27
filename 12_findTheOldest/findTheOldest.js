const findTheOldest = function(people) {
  let oldestPerson = people.reduce((oldest, currentPerson) => {

    if (oldest.yearOfDeath === undefined) {
      oldest.yearOfDeath = 2025;
    }

    if (currentPerson.yearOfDeath === undefined) {
      currentPerson.yearOfDeath = 2025;
    }

    if ((currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) {
      return currentPerson;
    } else {
      return oldest;
    }
  })
  return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
