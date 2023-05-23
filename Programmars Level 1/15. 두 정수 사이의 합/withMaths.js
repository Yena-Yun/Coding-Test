function solution(a, b) {
  let answer = 0;

    for (let i = Math.min(a, b); i <= Math.max(a,b); i++) {
      answer += i;
    }

  return answer;
}

const a = 5;
const b = 3;

console.log(solution(a, b));
