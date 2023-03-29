const convertToCelsius = function (fahr) {
  let tempc = ((fahr - 32) * 5) / 9;
  let roundedc = Math.round(tempc * 10) / 10;
  return roundedc;
};

const convertToFahrenheit = function (cels) {
  let tempf = (cels * 9) / 5 + 32;
  let roundedf = Math.round(tempf * 10) / 10;
  return roundedf;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
