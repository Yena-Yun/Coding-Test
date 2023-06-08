function solution(s) {
  let splitStr = s.split(' ');

  let answer = splitStr.map((char) => {
    return [...char].map((w, index) => {
      if (index % 2) {
        return w.toLowerCase();
      } else {
        return w.toUpperCase();
      }
    }).join('');
  }).join(' ');


  return answer;
}

const s = 'try hello world';

console.log(solution(s));
