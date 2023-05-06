function solution(cards1, cards2, goal) {
  let index1 = 0;
  let index2 = 0;

  for (const x of goal) {
    if (x === cards1[index1]) index1++;
    else if (x === cards2[index2]) index2++;
    else return 'No';
  }

  return 'Yes';
}

const cards1 = ['i', 'drink', 'water'];
const cards2 = ['want', 'to'];
const goal = ['i', 'want', 'to', 'drink', 'water'];

console.log(solution(cards1, cards2, goal));