function solution(X, Y) {
  let answer = '';

  // 각 문자 하나하나는 숫자이므로 '0부터 9까지'만 가능 => 배열 초기 공간을 10개 생성
  const hashX = new Array(10).fill(0);
  const hashY = new Array(10).fill(0);

  X.split('').forEach((item) => hashX[item]++); // [등장한 숫자]: 등장한 횟수
  Y.split('').forEach((item) => hashY[item]++);

  hashX.forEach((x, i) => {
    if (x && hashY[i]) {
      // (= 둘 다 값이 0이 아닐 때)
      answer += String(i).repeat(Math.min(hashX[i], hashY[i]));
    }
  });

  if (answer === '') return '-1';
  if (Number(answer) === 0) return '0';

  // reverse 하는 이유: 해시 배열에 인덱스 순서대로 추가되어서 자연스럽게 작은 숫자부터 들어가 있음
  // 제일 큰 숫자를 만들려면 큰 숫자부터 나열되어야 하므로 reverse 사용 (= 내림차순 sort 역할)
  return [...answer].reverse().join('');
}

const X1 = "100";
const Y1 = "2345";

console.log(solution(X1, Y1)); // expected: '-1'

const X2 = "12321";
const Y2 = "42531";

console.log(solution(X2, Y2)); // expected: '321'