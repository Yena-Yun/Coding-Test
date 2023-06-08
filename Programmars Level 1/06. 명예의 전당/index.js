function solution(k, scores) {
  let answer = []; // 매일 최소 점수 배열 (길이 = score 길이)
  let honors = []; // 명예의 전당
  let minHonor = 0; // 명예의 전당 중 최소 점수 (= answer에 들어갈 값)

  for (let i = 0; i < scores.length; i++) {
    if (i < k) {
      honors.push(scores[i]);
      minHonor = Math.min(...honors);
    } else {
      if (scores[i] > minHonor) {
        honors.push(scores[i]);
        honors.sort((a, b) => b - a);
        honors.pop();
        minHonor = Math.min(...honors);
      } 
    }

    answer.push(minHonor);
  }

  return answer;
}

const k = 4;

const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
console.log(solution(k, score)); // expected: [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]