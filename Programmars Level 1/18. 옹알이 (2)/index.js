function solution(babbling) {
  let answer = 0;

  for (let x of babbling) {
    if (/(aya|ye|woo|ma)\1+/g.test(x)) continue;
    if (/^(aya|ye|woo|ma)+$/g.test(x)) answer++;
  }

  return answer;
}

const babbling = ['aya', 'yee', 'u', 'maa'];

console.log(solution(babbling)); // expected: 1