function solution(a, b) {
  let answer = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = a; i >= b; i--) {
      answer += i;
    }
  }

  return answer;
}

const a = 5;
const b = 3;

console.log(solution(a, b));
