const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function solution(s, skip, index) {
  let answer = '';
  let flagIndex = 0;
  let pickedArray = [];
  
  for (let x of s) {
    flagIndex = alphabets.indexOf(x); 

    let lastIndex = alphabets.length;

    for (let j = flagIndex; j < lastIndex; j++) {
      const selected = alphabets[j]; 

      if (!skip.includes(selected)) {
        pickedArray.push(selected);
      }

      if (flagIndex === lastIndex) lastIndex = index - pickedArray.length;

      if (pickedArray.length === index + 1) {
        answer += pickedArray[pickedArray.length - 1];
        pickedArray = [];
        break;
      }
    }
  }

  return answer;
}

const s = 'aukks';
const skip = 'wbqd';
const index = 5;

console.log(solution(s, skip, index)); // expected: 'happy'