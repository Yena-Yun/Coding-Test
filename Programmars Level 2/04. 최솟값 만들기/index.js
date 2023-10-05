function solution(A, B) {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      sum += A[i] * B[j];
    }

    if (i === A.length - 1 && sum < min) min = sum;
  }

  return min;
}
