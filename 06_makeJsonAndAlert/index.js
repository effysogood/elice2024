function makeJsonAndAlert(e) {
  // form의 버튼은 default 행위가 새로고침이므로, 이 default 행위를 막기 위해 작성
  e.preventDefault();

  const email = emailElem.value;
  const name = nameElem.value;
  const password = passwordElem.value;

  const obj = {
    email,
    name,
    password,
  };

  const json = JSON.stringify(obj);

  alert(json);
}

const emailElem = document.querySelector('#inputEmail');
const nameElem = document.querySelector('#inputName');
const passwordElem = document.querySelector('#inputPassword');
const buttonElem = document.querySelector('#buttonSubmit');

buttonElem.addEventListener('click', makeJsonAndAlert);
