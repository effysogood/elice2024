function isLong(str) {
  return str.length >= 5;
}

function getLongString(input) {
  const LongStrings = input.filter(isLong);
  return LongStrings;
}

const input = ['안', '안녕', '안녕하', '안녕하세', '안녕하세요'];

module.exports = { inputs: [input], func: getLongString };
