function solution(arr, divisor) {
  let answer = arr.filter((num) => num % divisor === 0);

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

const arr = [5, 9, 7, 10];
const divisor = 5;

console.log(solution(arr1, divisor1)); // expected: [ 5, 10 ]
