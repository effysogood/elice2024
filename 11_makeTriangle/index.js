/* 예제 조건
  1. input String(row)의 조건을 충족하는지 확인하세요.
  조건: 입력 문자열에는 대문자 ‘B’, ‘G’ 또는 ‘R’만 포함되어야 한다.

  2. 지시사항의 규칙데로 두 쌍의 색을 비교해서 새로운 색상을 반환하는 코드를 작성합니다.
  두 쌍의 색상이 동일하면 새 행에 동일한 색상이 사용되고 서로 다른 경우 누락된 색상이 새 행에 사용됩니다.
  이런식으로 단 하나의 색상만 있는 마지막 행이 남을 때까지 생성됩니다.

  ----

  3. 기존의 행보다 1만큼 짧아진 행을 생성하고 color()함수로 대체된 문자열을 반환하세요.
  */

function triangle(row) {
  while (row.length > 1) {
    let tempStr = '';
    for (let i = 0; i < row.length - 1; i++) {
      tempStr += color(row[i], row[i + 1]);
    }
    row = tempStr;
  }
  return row;
}

/* 동작 원리
- 문자열을 입력받아 색상을 하나만 남길 때까지 계속해서 color 함수 호출
  1. 행 감소 : 입력 문자열 'row'의 길이가 1보다 큰 동안, 새로운 문자열 tempStr 생성
  2. 색상 조합 생성 : 문자열의 각 인접한 두 색상을 'color 함수'로 전달하여 새로운 색상 생성, tempStr에 추가
  3. 새로운 행 업데이트 : 이렇게 만들어진 새로운 행 'tempStr'로 'row' 업데이트. 이 과정을 반복하여 문자열의 길이가 1에 도달할 때까지 반복
*/

function color(c1, c2) {
  const colors = ['R', 'G', 'B'];
  if (c1 === c2) {
    return c1;
  } else {
    return colors.filter((c) => c !== c1 && c !== c2)[0];
  }
}

/* 동작 원리
  - 동일 색상 비교: 만약 입력받은 두 색상 같을 경우, 해당 색상 그대로 반환
  - 서로 다른 색상 : 입력 받은 두 색상이 다를 경우, 나머지 세번째 색상 반환
    filter 메서드를 활용해 c1, c2와 다른 색상들만 필터링하여 새 배열 생성, 결과는 하나의 색상만 담긴 배열이 되므로
    [0] 사용하여 배열의 유일한 요소 추출 
 */

console.log(triangle('RBRGB'));

module.exports = { triangle };
