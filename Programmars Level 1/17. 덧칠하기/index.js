function solution(n, m, section) {
  let answer = 0; // 칠한 횟수
  let painted = 0; // 칠한 너비

  section.forEach((wall) => {
    if (wall > painted) {
      painted = wall + m - 1;
      answer++;
    }
  });

  return answer;
}
