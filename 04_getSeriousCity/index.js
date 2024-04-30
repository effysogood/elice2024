const { inputs, func } = require('./getSeriousCity');

console.log('입력: ', ...inputs);
console.log('출력: ', func.apply(null, inputs));
