function solution(name, yearning, photos) {
  let answer = [];

  photos.forEach((photo, id) => {
    let count = 0;

    photo.forEach((person) => {
      if (name.includes(person)) {
        count += yearning[name.indexOf(person)];
      }
    });

    answer[id] = count;
  });

  return answer;
}

const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];

const photo = [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']];

console.log(solution(name, yearning, photo)); // expected: [5, 15, 0]
