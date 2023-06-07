function solution(wallpaper) {
  let answer = [];

  // '#'이 있는 좌표의 x 좌표와 y 좌표를 담을 X, Y 배열을 각각 선언한다.
  let X = []; // '#'이 등장한 위치의 x 좌표
  let Y = []; // '#'이 등장한 위치의 y 좌표

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      // wallpaper에서 '#'이 등장한 x, y 좌표를 각각 X 배열과 Y 배열에 담는다.
      if (wallpaper[i][j] === '#') {
        X.push(i);
        Y.push(j);
      }
    }
  }

  // '#'이 등장한 좌표의 최소값과 최대값이 섞여 있으므로 오름차순 정렬로 정리한다.
  // (sort는 원본 배열을 변경하기 때문에 따로 각각의 배열을 재할당하지 않아도 됨)
  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  // 다음과 같이 answer 배열을 만들어 반환한다.
  answer = [X[0], Y[0], X[X.length - 1] + 1, Y[Y.length - 1] + 1];
  // 마지막 값에 1을 더해주는 이유: 시작 좌표 두 개는 열과 칸의 좌표 값이 동일하지만,
  // 끝 좌표 두 개는 '#'이 있는 칸(내부)이 아닌 칸의 뒤쪽 열(칸 + 1)을 가져와야 하므로

  return answer;
}

const wallpaper = ['..', '#.'];

console.log(solution(wallpaper));