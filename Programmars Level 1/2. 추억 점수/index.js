let peopleInfo = {};

function getPeopleInfo(name, yearning) {
  name.forEach((n, id) => {
    peopleInfo[n] = yearning[id];
  });
}

function solution(name, yearning, photo) {
  let answer = [];

  // 객체 생성
  getPeopleInfo(name, yearning);
  console.log(peopleInfo); // { may: 5, kein: 10, kain: 1, radi: 3 }
  
  photo.forEach((photoElem, id) => {
    let score = 0;

    photoElem.forEach((elem) => {
      if (name.includes(elem)) score += peopleInfo[elem];
    });
    
    answer[id] = score;
  });

  return answer;
}

const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];

const photo = [
  ['may', 'kein', 'kain', 'radi'],
  ['may', 'kein', 'brin', 'deny'],
  ['kon', 'kain', 'may', 'coni'],
];

console.log(solution(name, yearning, photo)); // expected: [19, 15, 6]