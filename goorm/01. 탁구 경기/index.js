function solution(s) {
  let dScore = 0;
  let pScore = 0;

  for (let x of s) {
    if (x === 'P') pScore++;
    else dScore++;

    if (Math.abs(dScore - pScore) === 2) {
      return `${dScore}:${pScore}`;
    }
  }

  return `${dScore}:${pScore}`;
}

const s1 = 'PDDDPDPD';

console.log(solution(s1));
