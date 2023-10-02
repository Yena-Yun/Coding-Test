function solution(n) {
  if (n === 1 || n === 2) return 1;

  return solution(n - 1) + solution(n - 2);
}
