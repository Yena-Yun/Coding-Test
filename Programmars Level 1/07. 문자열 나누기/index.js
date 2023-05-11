function solution(s) {
  let answer = 0;
  let x = '';
  let mainIndex = 0;
  let xCount = 0;
  let notXCount = 0;

  for (let i = mainIndex; i < s.length; i++) {
    if (x === '') {
      x = s[i]; 
      xCount++; 
    }

    if (x === s[i + 1]) {
      xCount++;
    } else {
      notXCount++;
    }

    if (xCount === notXCount) {
      answer++;
      break;
    }
  }

  if (xCount === notXCount) {
    mainIndex = xCount + notXCount;
    x = '';
    xCount = 0;
    notXCount = 0;
  }

  return answer;
}

const s = 'banana';

console.log(solution(s));