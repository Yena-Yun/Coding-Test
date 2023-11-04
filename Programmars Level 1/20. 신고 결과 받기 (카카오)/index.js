function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0);
  const report_list = {};

  id_list.map((user) => (report_list[user] = []));
  console.log(report_list); // { muzi: [], frodo: [], apeach: [], neo: [] }

  report.map((user) => {
    const [user_id, report_id] = user.split(' '); // 배열 비구조화 할당

    // 특정 유저가 같은 유저를 여러 번 신고한 경우 제외
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  console.log(report_list);
  // {
  //   muzi: [ 'apeach' ],
  //   frodo: [ 'muzi', 'apeach' ],
  //   apeach: [],
  //   neo: [ 'frodo', 'muzi' ]
  // }

  for (let key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].forEach((user) => {
        answer[id_list.indexOf(user)]++;
      });
    }
  }

  return answer;
}
