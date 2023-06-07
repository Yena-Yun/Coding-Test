function solution(name, yearning, photos) {
  let answer = [];

  // 문제 풀이 시 참고 사항
  // 1) name과 yearning의 인덱스는 동일하다. (같은 인덱스로 이름과 점수 매칭 가능)
  // 2) 반환할 값(answer)은 각 photo 배열의 점수 합의 배열이다.

  // 1. photos를 돌면서 photo 배열을 하나씩 꺼낸다. (이때 score 변수 선언)
  photos.forEach((photo) => {
    let score = 0;

    // 2. photo를 돌면서 person을 하나씩 꺼낸다.
    photo.forEach((person) => {
      // 3. name 배열에 person이 있는지 확인한다.
      if (name.includes(person)) {
        // 4. yearning 배열에서 name 배열의 person 자리 인덱스에 해당하는 점수를 score에 더한다.
        score += yearning[name.indexOf(person)];
      }
    });

    // 5. photo문 바깥에서 answer에 최종 score를 추가한다. (다시 photos문을 돌면 score가 초기화됨)
    answer.push(score);
  });

  return answer;
}

const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];

const photo = [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']];

console.log(solution(name, yearning, photo)); // expected: [5, 15, 0]
