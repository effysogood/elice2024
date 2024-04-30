function makeJson(inputA, inputB) {
  const obj = {
    name: inputA,
    age: inputB,
  };

  // 위 객체를 JSON 형태로 바꾸어 반환
  return JSON.stringify(obj);
}
