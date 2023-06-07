
function solution(s, skip, index) {
  let answer = '';
  let alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz');

  [...skip].forEach((s) => alphabetSet.delete(s));

  let alphabetArr = [...alphabetSet];

  for (let x of s) {
    let resultIndex = alphabetArr.indexOf(x) + index;

    answer += alphabetArr[resultIndex % alphabetArr.length];
  }

  return answer;
}

const s = 'aukks';
const skip = 'wbqd';
const index = 5;

console.log(solution(s, skip, index));