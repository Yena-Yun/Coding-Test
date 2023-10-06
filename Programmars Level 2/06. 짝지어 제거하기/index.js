function solution(s) {
  let stack = [];

  for (let x of s) {
    if (stack[stack.length - 1] === x) stack.pop();
    else stack.push(x);
  }

  if (stack.length) return 0;
  return 1;
}
