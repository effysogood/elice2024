let alertTimer;

function alertWhenTypingStops() {
  // 앞선 타이머를 리셋
  if (alertTimer) {
    clearTimeout(alertTimer);
  }

  const name = nameElem.value;
  // 타이머 시작
  alertTimer = setTimeout(() => alert(`입력된 이름: ${name}`), 1000);
}

const nameElem = document.querySelector("#inputName");
nameElem.addEventListener("input", alertWhenTypingStops);
