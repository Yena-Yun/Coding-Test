function solution(s) {
  let answer = 0;
  let stack = [];

  [...s].forEach((str) => {
    stack.push(str);

    const same = stack.filter((item) => item === stack[0]);
    const different = stack.filter((item) => item !== stack[0]);

    if (same.length === different.length) {
      answer++;
      stack = [];
    }
  });

  if (stack.length > 0) answer++;

  return answer;
}

const s = 'banana';

console.log(solution(s));