function solution(n) {
  // 공식: n을 2로 나누면서 마주치는 몫 중 홀수가 나오는 횟수 (+ n이 홀수인 경우 포함)
  let battery = n % 2 === 1 ? 1 : 0;

  while (n > 1) {
    let quotient = Math.floor(n / 2);
    if (quotient % 2 === 1) battery++;
    n = quotient;
  }

  return battery;
}
