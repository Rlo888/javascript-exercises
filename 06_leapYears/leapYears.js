const leapYears = function (x) {
  let year = 0;
  if (x % 400 == 0) {
    return true;
  } else if (x % 4 == 0 && x % 100 !== 0) {
    return true;
  } else if (x) return false;
};

// Do not edit below this line
module.exports = leapYears;
