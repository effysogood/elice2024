function makeAdultNameList(humans) {
  let filteredHumanList = humans.filter((human) => human.age > 19);
  let result = filteredHumanList.map((human) => `<li>${human.name}</li>`);

  return result.join('');
}

function makeChildNameList(humans) {
  let filteredHumanList = humans.filter((human) => human.age < 20);
  let result = filteredHumanList.map((human) => `<li>${human.name}</li>`);

  return result.join('');
}

const humanList = [
  {
    name: '박태환',
    age: 35,
  },
  {
    name: '유재석',
    age: 49,
  },
  {
    name: '김강훈',
    age: 12,
  },
  {
    name: '최태민',
    age: 15,
  },
  {
    name: '이바람',
    age: 52,
  },
  {
    name: '이지원',
    age: 15,
  },
];

export { humanList, makeAdultNameList, makeChildNameList };
