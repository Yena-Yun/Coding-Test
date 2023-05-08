function solution(arr, divisor) {
  let answer = [];
  // let result = []; // filter를 쓰면 새 배열을 반환하기 때문에 추가 배열 불필요

  answer = arr.filter((num) => num % divisor === 0);

  // if문을 삼항 연산자로 줄이기
  // if (result.length === 0) {
  //   answer.push(result.indexOf(divisor));
  // } else {
  //   answer = result.sort((a, b) => a - b);
  // }

  // return answer;

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

const arr1 = [5, 9, 7, 10];
const divisor1 = 5;

const arr2 = [3, 2, 6];
const divisor2 = 10;

console.log(solution(arr1, divisor1)); // expected: [ 5, 10 ]
console.log(solution(arr2, divisor2)); // expected: [ -1 ]
