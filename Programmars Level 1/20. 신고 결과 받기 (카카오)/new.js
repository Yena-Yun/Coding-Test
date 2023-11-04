function solution(id_list, report, k) {
  const reportList = [...new Set(report)];
  const bannedIds = [];
  const reportedCount = Array(id_list.length).fill(0); // 신고 당한 횟수
  const getMailed = Array(id_list.length).fill(0); // 처리 메일 받은 횟수

  for (let report of reportList) {
    const [userId, reportId] = report.split(' ');
    reportedCount[id_list.indexOf(reportId)] += 1; // 유저별 신고 당한 횟수 구하기

    if (reportedCount[id_list.indexOf(reportId)] >= k) {
      bannedIds.push(id_list[id_list.indexOf(reportId)]); // 정지 먹은 유저 배열 구하기
    }
  }

  reportList.map((report) => {
    const [userId, reportId] = report.split(' ');

    // 신고 당한 유저가 정지된 유저 중에 있는지 확인
    if (bannedIds.indexOf(reportId) > -1) {
      let index = id_list.indexOf(a); // id_list에서 정지 당한 유저를 신고한 유저의 인덱스
      getMailed[index] += 1; // getMailed의 동일한 인덱스에 +1
    }
  });

  return mail;
}
