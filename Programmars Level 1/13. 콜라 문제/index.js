function solution(a, b, n) {
  let answer = 0; // 총 받은 콜라 수

  // a가 n보다 커지면 종료
  while (n >= a) {
    let curCola = Math.floor(n / a) * b; // 현재 차수에 받은 콜라 수

    answer += curCola; // 총 받은 콜라 수(반환할 값)에 누적

    n = curCola * b + (n % a); // n 업데이트 (받아온 콜라 수 + 가져가지 않은 나머지 콜라 수)
  }

  return answer;
}

const a = 2;
const b = 1;
const n = 20;

console.log(solution(a, b, n)); // expected: 19