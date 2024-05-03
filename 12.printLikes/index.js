/* 코드 분석
1. 템플릿 배열
  : `templates` 배열에는 다른 이름의 수에 따라 표시될 메시지 템플릿 5개 저장. 각 템플릿은 특정 수의 이름에 대응
2. 템플릿 선택
  : 입력 배열 'names'의 길이에 따라 적절한 메시지 템플릿을 선택.
    `Math.min(names.length, 4)`는 이름 배열의 길이가 4보다 크면 4을 반환, 그렇지 않으면 배열의 길이 반환
    `names`의 길이에 따라 0부터 4 사이의 인덱스로 `templates` 배열에서 템플릿 선택 시 사용
3. 템플릿 형식화
  : 선택된 템플릿 문자열에서 replace 함수를 사용해 `{name}`과 `{n}` 플레이스홀더를 실제 값으로 대체
  `replace` 함수의 인자로 전달된 함수는 각 플레이스홀더를 만날 때마다 호출되며,
  `{name}`이면 `names.shift()`를 통해 `names` 배열의 첫번째 원소를 반환하고 배열에서 제거
  `{n}`이면 `names.length`를 반환하여 나머지 이름의 수 표시
*/

function likes(names) {
  const templates = [
    '아무도 이 글을 좋아하지 않습니다.',
    '{name} 이(가) 이 글을 좋아합니다.',
    '{name} 와 {name} 이(가) 이 글을 좋아합니다.',
    '{name}, {name} 와 {name} 이(가) 이 글을 좋아합니다.',
    '{name}, {name} 그리고 {n} 명이 이 글을 좋아합니다.',
  ];

  const id = Math.min(names.length, 4);

  return templates[id].replace(/{name}|{n}/g, function (val) {
    return val === `{name}` ? names.shift() : names.length;
  });
}

module.exports = { likes };
