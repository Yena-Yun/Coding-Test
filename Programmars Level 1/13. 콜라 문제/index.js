function solution(a, b, n) {
  let answer = 0; // 받은 콜라 수

  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return answer;
}

const a = 2;
const b = 1;
const n = 20;

console.log(solution(a, b, n)); // expected: 19