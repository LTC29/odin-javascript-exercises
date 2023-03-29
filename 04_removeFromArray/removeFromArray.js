const removeFromArray = function (origArray, ...args) {
  newArray = origArray.filter((item) => !args.includes(item));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

// Receber o array original + valores específicos a serem removidos (...args)
// Remover cada valor individualmente e jogar para um novo array
// mostrar o novo array
