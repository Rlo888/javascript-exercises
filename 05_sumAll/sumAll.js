const sumAll = function (x, y) {
  let addedUp = 0;
  if (typeof x !== "number" || typeof y !== "number") {
    return "ERROR";
  }
  if (x < y) {
    for (let i = x; i < y; i++) {
      addedUp += i;
    }
    if (addedUp + y < 0) {
      return "ERROR";
    }
    return addedUp + y;
  } else if (x > y) {
    for (let i = y; i < x; i++) {
      addedUp += i;
    }
    if (addedUp + x < 0) {
      return "ERROR";
    }
    return addedUp + x;
  }
};

// Do not edit below this line
module.exports = sumAll;
