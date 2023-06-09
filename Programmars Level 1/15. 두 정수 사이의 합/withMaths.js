function solution(a, b) {
  let answer = 0;
    
  let min = Math.min(a, b);
  let max = Math.max(a, b);
    
  for (let i = min; i <= max; i++) {
    answer += i;
  }
    
  return answer;
}

const a = 5;
const b = 3;

console.log(solution(a, b)); // expected: 12
