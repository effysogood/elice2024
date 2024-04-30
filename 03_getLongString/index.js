const { inputs, func } = require('./getLongString');

console.log('입력: ', ...inputs);
console.log('출력: ', func.apply(null, inputs));
