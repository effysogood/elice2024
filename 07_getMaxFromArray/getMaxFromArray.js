function getMaxFromArray(inputA) {
  return Math.max(...inputA);
}

const inputA = [1, 2, 3, 4, 5];

module.exports = { inputs: [inputA], func: getMaxFromArray };
