import { humanList, makeAdultList, makeChildList } from './makeList.js';

const adultNameElement = document.querySelector('#adultnamelist');
const adultAgeElement = document.querySelector('#adultagelist');

const childNameElement = document.querySelector('#childnamelist');
const childAgeElement = document.querySelector('#childagelist');

const [adultNameTags, adultAgeTags] = makeAdultList(humanList);
const [childNameTags, childAgeTags] = makeChildList(humanList);

adultNameElement.innerHTML = adultNameTags;
adultAgeElement.innerHTML = adultAgeTags;
childNameElement.innerHTML = childNameTags;
childAgeElement.innerHTML = childAgeTags;
