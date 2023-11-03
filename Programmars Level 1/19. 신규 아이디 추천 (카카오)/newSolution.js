function solution(new_id) {
  let answer = new_id
    .toLowerCase() // 1단계
    .replace(/[^\w-_.]/g, '') // 2단계
    .replace(/\.+/g, '.') // 3단계
    .replace(/^\.|\.$/g, '') // 4단계
    .replace(/^$/, 'a') // 5단계
    .slice(0, 15) // 6단계
    .replace(/\.$/, '');

  const len = answer.length; // 7단계

  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
