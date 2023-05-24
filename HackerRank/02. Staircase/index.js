function staircase(n) {
  for (let i = 0; i < n; i++) {
    let sharpString = '';

    for (let j = 0; j <= i; j++) {
      sharpString += '#';
    }

    console.log(sharpString.padStart(n, ' '));
  }
}

const n = 6;

console.log(staircase(n));