function solution(s) {
  let answer = '';
  let stringArray = s.split(' ');

  for (let i = 0; i < stringArray.length; i++) {
    for (let j = 0; j < stringArray[i].length; j++) {
      if (j % 2 === 0) {
        answer += stringArray[i][j].toUpperCase();
      } else {
        answer += stringArray[i][j];
      }
    }

    if (i < stringArray.length - 1) {
      answer += ' ';
   }
  }

  return answer;
}

const s = 'try hello world';

console.log(solution(s));
