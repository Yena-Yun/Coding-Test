function solution(t, p) {
  let answer = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    for (let j = p.length - 1; j < t.length; j++) {
      const picked = t.slice(i, j + 1);

      if (picked.length === p.length) {
        if (parseInt(picked) <= parseInt(p)) answer++;
      }
    }
  }

  return answer;
}

const t = '3141592';
const p = '271';

console.log(solution(t, p));