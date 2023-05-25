function kangaroo(x1, v1, x2, v2) {
  if (x1 < x2 && v1 < v2) return 'NO';
  if (v1 === v2) return 'NO';

  for (let i = 1; ; i++) {
    let first = x1 + v1 * i;
    let second = x2 + v2 * i;

    let diff = second - first;

    if (diff === 0) return 'YES';
    if (diff < 0) return 'NO';
  }
}

const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

console.log(kangaroo(x1, v1, x2, v2)); // expected: 'YES'