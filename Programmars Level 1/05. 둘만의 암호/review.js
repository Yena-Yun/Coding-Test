function solution(s, skip, index) {
  let answer = '';
  let alphabets = new Set('abcdefghijklmnopqrstuvwxyz');

  [...skip].forEach((s) => alphabets.delete(s));

  alphabets = [...alphabets];

  for (let x of s) {
    answer += alphabets[(alphabets.indexOf(x) + index) % alphabets.length];
  }

  return answer;
}

const s = 'aukks';
const skip = 'wbqd';
const index = 5;

console.log(solution(s, skip, index));
