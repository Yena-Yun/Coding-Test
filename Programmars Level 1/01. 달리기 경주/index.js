let playerInfo = {};

function getPlayerInfo(players) {
  players.forEach((player, index) => {
    playerInfo[player] = index
  })
}

function solution(players, callings) {
  let answer = [];
  
  // 1. 선수 이름에 맞는 현재 등수가 저장된 playerInfo 객체를 만든다.
  getPlayerInfo(players);

  // 2. 불린 선수, 불린 선수의 현재 등수, 불린 선수의 앞 선수를 구한다.
  callings.forEach((calling) => {
    // 불린 선수 = calling

    // 불린 선수의 현재 등수
    let index = playerInfo[calling];

    // 불린 선수의 앞 선수
    let frontPlayer = players[index - 1];

    // 3. 불린 선수와 앞 선수의 등수를 교체한다.
    // 배열에 반영
    players[index - 1] = calling;
    players[index] = frontPlayer;

    // 객체에 반영
    playerInfo[calling] = index - 1;
    playerInfo[frontPlayer] = index
  });

  answer = players;

  return answer;
}

const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['kai', 'kai', 'mine', 'mine'];

console.log(solution(players, callings)); // expected result: ["mumu", "kai", "mine", "soe", "poe"]
