// 각 함수는 문자열에 대한 특정 조건을 검사하여 `true` 또는 `false`를 반환한다.

/**
1. input String(str)이 palindrome 이 맞으면 true, 아니면 false를 반환하는 함수를 작성하세요.
palindrome이란 앞에서부터 읽으나 뒤에서부터 읽으나 동일한 단어나 구를 뜻합니다.
palindrome 예시: refer, madam, redivider, deified, civic, radar, level, rotor, kayak
*/

/* 동작 원리 
1. 정규식 정의 (reg = /[\W_]/g)
: 해당 정규 표현식은 비단어(W) 문자 및 밑줄(_)을 찾아서 선택함.
\W는 비단어(알파벳, 숫자가 아닌 모든 문자)를 의미하며, '_'를 명시적으로 포함
2. 문자열 소문자화 및 비단어 문자 교체
: 입력된 문자열 'str'을 소문자로 변환하고, 위에서 정의한 정규식을 사용하여 비단어 문자와 밑줄을 제거 (replace(''))
3. 문자열 뒤집기
: 소문자화하고 정리된 문자열을 배열로 바꾸어 (split('')) 이 배열의 순서를 뒤집은 다음 (reverse()) 다시 문자열로 합침 (join(''))
4. 팰린드롬 비교
: 뒤집힌 문자열과 원래 처리된 문자열이 동일한지 비교하여 동일하면, true, 그렇지 않으면 false 반환
*/

function isPalindrome(str) {
  const reg = /[\W_]/g;
  const lowRegStr = str.toLowerCase().replace(reg, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

console.log(isPalindrome('A man, a plan, a canal. Panama'));

/**
2. input String(str)으로 들어온 문자열이 isogram이 맞으면 true, 아니면 false를 반환하는 함수를 작성하세요.
isogram은 문자의 반복없이 구성된 단어나 문장을 가르킵니다.
*/

/* 동작 원리
1. 문자열 소문자화
2. 문자열 분해 및 정렬 : 문자열을 배열로 분해하고 알파벳 순서로 정렬 (sort())
3. 중복 검사 : 정렬된 배열을 순회하면서 연속된 위치의 문자가 같은 경우 중복 문자가 있는 것으로 간주하여 false 반환
 */

function isIsogram(str) {
  str = str.toLowerCase().split('').sort();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
    return true;
  }
}

module.exports = { isPalindrome, isIsogram };
