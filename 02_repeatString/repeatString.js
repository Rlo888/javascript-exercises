const repeatString = function (str, number) {
  if (number < 0) {
    return "ERROR";
  }
  let newStr = str.repeat(number);

  return newStr;
};

// Do not edit below this line
module.exports = repeatString;
