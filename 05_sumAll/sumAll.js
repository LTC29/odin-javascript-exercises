const sumAll = function (a, b) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const array = [a, b];
  let fullArray = [];
  array.sort(function (a, b) {
    return a - b;
  });

  if (
    array[0] < 0 ||
    isNaN(array[0]) ||
    isNaN(array[1]) ||
    typeof array[0] === "string" ||
    typeof array[1] === "string"
  ) {
    return "ERROR";
  } else
    for (let i = array[0]; i <= array[1]; i++) {
      fullArray.push(i);
    }

  sum = fullArray.reduce(reducer);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
