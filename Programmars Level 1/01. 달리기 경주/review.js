let playerInfo = {};

function getPlayerInfo(players) {
  players.forEach((player, index) => (playerInfo[player] = index));
}

function solution(players, callings) {
  getPlayerInfo(players);

  callings.forEach((calling) => {
    // 불린 선수 = calling

    // 불린 선수의 현재 등수
    const index = playerInfo[calling];

    // 불린 선수의 현재 등수를 이용해서 앞 선수 구하기
    const frontPlayer = players[index - 1];

    // 불린 선수와 앞 선수 자리 바꿔주기 (배열, 객체 모두!)
    players[index - 1] = calling;
    players[index] = frontPlayer;

    playerInfo[calling] = index - 1;
    playerInfo[frontPlayer] = index;
  });

  return players;
}

const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['kai', 'kai', 'mine', 'mine'];

const result = solution(players, callings);

console.log(result);
