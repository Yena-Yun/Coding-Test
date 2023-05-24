function diagonalDifference(arr) {
  let firstNum = 0;
  let secondNum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        firstNum += arr[i][j];
      }
      if (j === arr[i].length - i - 1) {
        secondNum += arr[j][i];
      }
    }
  }

  return Math.abs(firstNum - secondNum);
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));