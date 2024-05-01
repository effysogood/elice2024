function makeJson(inputA, inputB) {
  const obj = {
    name: inputA,
    age: inputB,
  };

  // 위 객체를 JSON 형태로 반환
  return JSON.stringify(obj);
}

const inputA = '박태환';
const inputB = 25;

module.exports = { inputs: [inputA, inputB], func: makeJson };
