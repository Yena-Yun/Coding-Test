function solution(cards1, cards2, goal) {
  let index1 = 0;
  let index2 = 0;

  for (let word of goal) {
    if (cards1[index1] == word) index1++;
    else if (cards2[index2] === word) index2++;
    else return 'No';
  }

  return 'Yes';
}

const cards1 = ['i', 'drink', 'water'];
const cards2 = ['want', 'to'];
const goal = ['i', 'want', 'to', 'drink', 'water'];

console.log(solution(cards1, cards2, goal)); // expected: 'Yes'