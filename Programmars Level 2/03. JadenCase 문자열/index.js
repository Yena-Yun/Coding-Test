function solution(s) {
  let answer = "";

  // 공백의 인덱스(위치) 저장
  let spaces = [];

  // s를 공백 포함 전부 나누기 (공백이 연속인 경우 파악하기 위해)
  let splitedString = s.split("");

  for (let i = 0; i < splitedString.length; i++) {
    if (splitedString[i] === " ") spaces.push(i);
  }

  // s를 공백을 기준으로 split
  let strings = s.split(" ");

  for (let i = 0; i < strings.length; i++) {
    // 단어의 첫 글자가 숫자인 경우
    if (!isNaN(strings[i][0])) {
      answer += strings[i].replace(/A-Z/g, function (match) {
        return match.toLowerCase();
      });
    }

    // 단어의 첫 글자가 알파벳인 경우
    if (isNaN(strings[i][0])) {
      // 단어 전체를 우선 소문자로 만들어주고
      let newString = strings[i].toLowerCase();
      // 이후 단어의 첫 글자만 따로 대문자로 바꿔준다.
      newString = newString.charAt(0).toUpperCase() + newString.slice(1);
      answer += newString;
    }

    // 끝날 때 공백을 더해준다.
    if (answer.length === spaces[0]) {
      answer += " ";
      spaces.shift();
    }
  }

  return answer;
}
