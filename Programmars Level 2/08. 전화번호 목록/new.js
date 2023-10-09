// 해시 사용
function solution(phone_book) {
  let hash = {};

  for (let phone of phone_book) {
    hash[phone] = 1; // temp 문자열을 확인할 때 undefined인지 true인지 판별하기 위한 1
  }

  for (let phone of phone_book) {
    let temp = '';

    for (let p of phone) {
      temp += p;

      // hash[temp]가 undefined로 뜨다가 배열 내의 값으로 나올 경우 1(true)가 됨
      // (그러면서 뽑은 prefix(= phone)은 아닌 경우) - prefix를 따로 변수에 담을 필요가 없음
      if (hash[temp] && temp !== phone) return false;
    }
  }

  return true;
}

// 정렬 + startsWith 메서드 사용
function solution(phone_book) {
  phone_book.sort(); // sort는 배열 자체를 수정하기 때문에 따로 안 담아줘도 됨

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }

  return true;
}
