function solution(s) {
  let answer = 0;
  let stack = [];

  [...s].forEach((char) => {
    stack.push(char);

    const same = stack.filter((item) => item === stack[0]);
    const diff = stack.filter((item) => item !== stack[0]);

    if (same.length === diff.length) {
      answer++;
      stack = [];
    }
  });

  if (stack.length > 0) answer++;

  return answer;
}

const s = 'banana';

console.log(solution(s));