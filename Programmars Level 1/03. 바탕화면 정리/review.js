function solution(wallpaper) {
  let walls = [];

  wallpaper.forEach((wall, i) => {
    [...wall].forEach((w, j) => {
      if (wallpaper[i][j] === '#') {
        walls.push([i, j]);
      }
    });
  });

  let minX = 50;
  let minY = 50;
  let maxX = 0;
  let maxY = 0;

  walls.forEach((wall, i) => {
    if (wall[0] < minX) minX = wall[0];
    if (wall[1] < minY) minY = wall[1];
    if (wall[0] > maxX) maxX = wall[0];
    if (wall[1] > maxY) maxY = wall[1];
  });

  return [minX, minY, maxX + 1, maxY + 1];
}

const wallpaper = [
  '..........',
  '.....#....',
  '......##..',
  '...##.....',
  '....#.....',
];

solution(wallpaper);
