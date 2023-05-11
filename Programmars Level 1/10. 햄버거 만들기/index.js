function solution(ingredient) {
  const BREAD = 1;
  const VEGI = 2;
  const MEAT = 3;

  let answer = 0;
  let stack = [];

  for (let ing of ingredient) {
    if (stack.length > 0) {
      console.log(stack[stack.length - 1]);
      const lastIng = stack[stack.length - 1];

      if (lastIng === BREAD) {
        if (ing === VEGI) stack.push(ing);
      } else if (lastIng === VEGI) {
        if (ing === MEAT) stack.push(ing);
      } else {
        if (ing === BREAD) {
          answer++;
          stack = [];
        }
      }
      console.log(stack);
    } else {
      if (ing === BREAD) stack.push(ing);
    }
  }

  return answer;
}

const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

console.log(solution(ingredient)); // expected: 2