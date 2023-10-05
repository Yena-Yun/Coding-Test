function solution(A, B) {
  let answer = 0;

  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

// reduce를 사용한 방법
function solution(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  // reduce 인자의 3번째 항으로 인덱스(i)를 꺼내 쓸 수 있다.
  return A.reduce((acc, cur, i) => acc + cur * B[i], 0);
}
