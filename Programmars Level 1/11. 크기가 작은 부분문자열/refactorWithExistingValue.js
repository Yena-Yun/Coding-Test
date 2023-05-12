function solution(t, p) {
  let answer = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
      const picked = t.slice(i, i + p.length);

      if (parseInt(picked) <= parseInt(p)) answer++;
  }

  return answer;
}

const t = '3141592';
const p = '271';

console.log(solution(t, p));
