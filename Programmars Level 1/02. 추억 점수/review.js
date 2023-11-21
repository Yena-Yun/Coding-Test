function solution(name, yearning, photo) {
  let answer = [];
  const yearningInfo = {};

  name.forEach((n, i) => (yearningInfo[n] = yearning[i]));

  photo.forEach((people) => {
    let sum = 0;

    people.forEach((person) => {
      sum += yearningInfo[person] || 0;
    });

    answer.push(sum);
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

solution(name, yearning, photo);
