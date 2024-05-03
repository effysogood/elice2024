function getAvgFromArray(arr) {
  const len = arr.length;

  // 배열의 각 요소를 순회하면서 누적하며 연산
  const sum = arr.reduce((a, b) => a + b, 0);

  return Math.ceil(sum / len);
}

const inputA = [1, 2, 3, 4, 5];

module.exports = { inputs: [inputA], func: getAvgFromArray };
