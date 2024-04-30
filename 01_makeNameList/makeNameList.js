// forEach 사용하기
const makeAdultNameList01 = (humans) => {
  let result = '';
  humans.forEach((human) => {
    if (human.age < 20) {
      return;
    }

    result += `<li>${human.name}</li>`;
  });
};

const makeChildNameList01 = (humans) => {
  let result = '';
  humans.forEach((human) => {
    if (human.age >= 20) {
      return;
    }

    return (result += `<li>${human.name}</li>`);
  });
};

// map & filter 사용하기
const makeAdultNameList = (humans) => {
  let filteredHumanList = humans.filter((human) => human.age >= 20);
  let result = filteredHumanList.map((human) => `<li>${human.name}</li>`);

  return result.join('');
};

const makeChildNameList = (humans) => {
  let filteredHumanList = humans.filter((human) => human.age < 20);
  let result = filteredHumanList.map((human) => `<li>${human.name}</li>`);

  return result.join('');
};

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
