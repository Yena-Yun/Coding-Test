// 새로 작성한 코드

function solution(s) {
  let answer = "";
  let string = s.split(" ");

  for (let str of string) {
    let newString = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    answer += newString;

    if (str !== string[string.length - 1]) answer += " "; // 단어 사이에만 공백 넣어주기 (맨 마지막 공백 제거)
  }

  return answer;
}

// map과 join을 활용하여 줄인 코드 (answer 변수 선언도 제거)
function solution(s) {
  let string = s.split(" ");
  let result = string.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );

  return result.join(" ");
}