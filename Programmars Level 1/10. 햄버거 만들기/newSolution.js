function solution(ingredient) {
  let answer = 0;
  let stack = [];

  for (let x of ingredient) {
    stack.push(x);

    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4)
      answer++;
    }
  }

  return answer;
}

const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

console.log(solution(ingredient)); // expected: 2
