const ftoc = function (tempF) {
  let celsiusTemp = (tempF - 32) / 1.8;
  //Math.round(celsiusTemp * 10) / 10;
  return celsiusTemp;
};

const ctof = function (tempC) {
  let farenheitTemp = tempC * 1.8 + 32;
  // Math.round(farenheitTemp * 10) / 10;
  return farenheitTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
