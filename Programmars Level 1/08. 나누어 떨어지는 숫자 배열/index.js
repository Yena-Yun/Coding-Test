function solution(arr, divisor) {
  let answer = [];
  let result = [];

  for (let x of arr) {
      if (x % divisor === 0) result.push(x);
  }

  if (result.length === 0) {
      answer.push(result.indexOf(divisor));
  } else {
      answer = result.sort((a, b) => a - b);
  }

  return answer;
}
