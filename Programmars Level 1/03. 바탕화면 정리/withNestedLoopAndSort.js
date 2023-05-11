function solution(wallpaper) {
  let answer = [];

  let X = [];
  let Y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        X.push(j);
        Y.push(i);
      }
    }
  }

  X = X.sort((a, b) => a - b);
  Y = Y.sort((a, b) => a - b);

  answer = [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1];

  return answer;
}


const wallpaper = ['..', '#.'];

console.log(solution(wallpaper));