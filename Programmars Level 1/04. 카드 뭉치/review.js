function solution(card1, card2, goal) {
  for (let x of goal) {
    if (card1[0] === x) card1.shift();
    else if (card2[0] === x) card2.shift();
    else return 'No';
  }

  return 'Yes';
}

const card1 = ['i', 'water', 'drink'];
const card2 = ['want', 'to'];
const goal = ['i', 'want', 'to', 'drink', 'water'];

solution(card1, card2, goal);
