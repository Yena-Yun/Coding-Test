function solution(k, scores) {
  let answer = []; // 매일 최소 점수 배열 (길이 = score 길이)
  let honors = []; // 명예의 전당

  for (let i = 0; i < scores.length; i++) {
    if (i < k) {
      honors.push(scores[i]);
    } 

    if (scores[i] > Math.min(...honors)) {
      honors.pop();
      honors.push(scores[i]);
      honors.sort((a, b) => b - a);
    }

    answer.push(honors.at(-1));
  }

  return answer;
}

const k = 3;

const score = [10, 100, 20, 150, 1, 100, 200];
console.log(solution(k, score)); // expected: [10, 10, 10, 20, 20, 100, 100]
