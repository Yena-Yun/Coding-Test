function solution(s) {
  let stack = [];

  if (s[0] === ')') return false; // 추가!

  for (let x of s) {
    if (x === "(") stack.push(x);
    else stack.pop();
  }

  if (stack.length > 0) return false;

  return true;
}
