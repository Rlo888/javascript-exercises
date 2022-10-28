const reverseString = function (str) {
  let splitStr = str.split("");
  let reversedStr = " ";
  for (let i = splitStr.length - 1; i >= 0; i--) {
    reversedStr += splitStr[i];
  }
  return reversedStr.trim();
};
reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
