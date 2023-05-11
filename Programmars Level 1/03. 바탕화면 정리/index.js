

function getWithSharpMinIndex(wallpaper) {
  let withSharpMinIndex = 0; // #이 포함된 배열 인덱스 중 MIN 인덱스
  
  for (let wall of wallpaper) {
    if (!wall.includes('#')) {
      withSharpMinIndex++;
    }
    return withSharpMinIndex;
  }
}

function getSharpMinIndex(wallpaper) {
  let sharpMinIndex = wallpaper[0].length - 1; // #의 인덱스 중 MIN 인덱스

  // for (let wall of wallpaper) {
  //   const index = wall.indexOf('#');

  //   if (index > -1 && index < sharpMinIndex) {
  //     sharpMinIndex = index;
  //   }
  // }

  wallpaper.forEach((wall) => {
    const index = wall.indexOf('#');

    if (index < 0) return;
      // if (index > -1 && index < sharpMinIndex) {
      if (index < sharpMinIndex) {
        sharpMinIndex = index;
      }
    
  });

  return sharpMinIndex;
}

function getWithSharpMaxIndex(wallpaper) {
  let withSharpMaxIndex = wallpaper.length - 1; // #이 포함된 배열 인덱스 중 MAX 인덱스

  for (let wall of wallpaper.reverse()) {
    if (!wall.includes('#')) {
      withSharpMaxIndex--;
    }

    return withSharpMaxIndex + 1;
  }

}


function getSharpMaxIndex(wallpaper) {
  let sharpMaxIndex = 0; // #의 인덱스 중 MAX 인덱스

  // for (let wall of wallpaper) {
  //   if (wall.indexOf('#') > -1) {

  //     for (let i = wall.length - 1; i >= 0; i--) {
  //       if (wall[i].includes('#') && i > sharpMaxIndex) {
  //         sharpMaxIndex = i;
  //       }
  //     }
  //   }
  // }

  // for (let wall of wallpaper) {
  //   const index = wall.lastIndexOf('#');

  //   if (index > sharpMaxIndex) {
  //     sharpMaxIndex = index;
  //   }
  // }

    wallpaper.forEach((wall) => {
      const index = wall.lastIndexOf('#');

      if (index > sharpMaxIndex) {
        sharpMaxIndex = index;
      }
    });

  return sharpMaxIndex + 1;
}


function solution(wallpaper) {
  let answer = [];

  answer.push(
    getWithSharpMinIndex(wallpaper),
    getSharpMinIndex(wallpaper),
    getWithSharpMaxIndex(wallpaper),
    getSharpMaxIndex(wallpaper)
  );
    
  return answer;
}

const wallpaper = [
  '.##...##.',
  '#..#.#..#',
  '#...#...#',
  '.#.....#.',
  '..#...#..',
  '...#.#...',
  '....#....',
];
console.log(solution(wallpaper)); // expected: [1, 3, 5, 8]