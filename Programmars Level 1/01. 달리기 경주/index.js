let playerInfo = {};

function getPlayerInfo(players) {
  players.forEach((player, index) => {
    playerInfo[player] = index;
  });
}

function solution(players, callings) {
  let answer = [];

  // 1. 선수 이름에 맞는 현재 등수가 저장된 playerInfo 객체를 만든다.
  getPlayerInfo(players);

  // 2. 불린 선수, 불린 선수의 현재 등수, 불린 선수의 앞 선수를 구한다.
  callings.forEach((calling) => {
    // 1) 불린 선수 = calling

    // 2) 불린 선수의 현재 등수 (-> 불린 선수의 앞 선수를 구하기 위함)
    let index = playerInfo[calling];

    // 3) 불린 선수의 앞 선수
    let frontPlayer = players[index - 1];

    // 3. 불린 선수와 앞 선수의 자리를 교체한다.
    // (callings를 돌면서 여기서 구한 값이 다음 값에도 영향을 미치므로 답으로 반환할 players 배열과 함께 연산에 사용되는 playerInfo 객체도 함께 업데이트해야)
    players[index - 1] = calling;
    players[index] = frontPlayer;

    playerInfo[calling] = index - 1;
    playerInfo[frontPlayer] = index;
  });

  answer = players;

  return answer;
}

const players = ['mumu', 'soe', 'poe', 'kai', 'mine'];
const callings = ['kai', 'kai', 'mine', 'mine'];

console.log(solution(players, callings)); // expected result: ["mumu", "kai", "mine", "soe", "poe"]
