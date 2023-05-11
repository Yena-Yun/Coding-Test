
function solution(s, skip, index) {
  let answer = '';
  let alphabet = new Set('abcdefghijklmnopqrstuvwxyz');

  [...skip].forEach((s) => alphabet.delete(s));

  let newAlphabet = [...alphabet];

  for (let x of s) {
    let resultIndex = newAlphabet.indexOf(x) + index;

    answer += newAlphabet[resultIndex % newAlphabet.length];
  }

  return answer;
}

const s = 'aukks';
const skip = 'wbqd';
const index = 5;

console.log(solution(s, skip, index));