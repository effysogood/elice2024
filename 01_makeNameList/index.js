import {
  humanList,
  makeAdultNameList,
  makeChildNameList,
} from './makeNameList.js';

const adultsElement = document.querySelector('#adultlist');
const childsElement = document.querySelector('#childlist');

adultsElement.innerHTML = makeAdultNameList(humanList);
childsElement.innerHTML = makeChildNameList(humanList);
