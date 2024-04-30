function isPatientOver100(city) {
  return city.coronaCount >= 100;
}

function getSeriousCity01(coronaData) {
  const seriousCity = coronaData.filter(isPatientOver100);
  return seriousCity;
}

// 한 줄로 축약
function getSeriousCity(coronaData) {
  return coronaData.filter((city) => city.coronaCount >= 100);
}

const coronaData = [
  { name: 'seoul', coronaCount: 240 },
  { name: 'gyeonggi', coronaCount: 200 },
  { name: 'busan', coronaCount: 98 },
  { name: 'chungnam', coronaCount: 115 },
  { name: 'gyeongnam', coronaCount: 78 },
  { name: 'ulsan', coronaCount: 27 },
  { name: 'gangwon', coronaCount: 28 },
  { name: 'jeju', coronaCount: 4 },
  { name: 'daejeon', coronaCount: 22 },
  { name: 'incheon', coronaCount: 28 },
  { name: 'gwangju', coronaCount: 13 },
];

module.exports = { inputs: [coronaData], func: getSeriousCity };
