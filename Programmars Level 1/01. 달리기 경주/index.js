let playerInfo = {};

function getPlayerInfo(players) {
  // 객체가 필요한 거라서 새로운 배열이 필요하지 않음 => map 대신 forEach 사용
  players.forEach((player, id) => {
    playerInfo[player] = id;
  });
}

function solution(players, callings) {
  getPlayerInfo(players);
  console.log(playerInfo); // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }

  callings.forEach((calling) => {
    // 객체의 key로 바로 선택 -> 배열 순환 필요하지 않음
    const index = playerInfo[calling]; // 불린 선수의 현재 등수

    const frontPlayerName = players[index - 1]; // 구한 인덱스로 players 배열 중 앞 사람 선택

    // 배열에서 index로 선택해서 서로 자리 교환 (slice나 splice 메서드 불필요)
    players[index - 1] = calling;
    players[index] = frontPlayerName;

    // 등수가 바뀐 뒤 바뀐 등수를 객체에도 반영 (다음 순회 연산을 올바르게 하기 위해)
    playerInfo[frontPlayerName] = index;
    playerInfo[calling] = index - 1;
  });

  return players;
}

const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['kai', 'kai', 'mine', 'mine'];

console.log(solution(players, callings)); // expected result: ["mumu", "kai", "mine", "soe", "poe"]
