## [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12945)

## 처음 풀이 (index.js)

while문을 돌릴까 하다가 재귀가 떠올라서 코드를 넣어보니
테스트 케이스는 통과했지만 정확도 테스트가 42점이 나왔다.
(시간 초과 와장창 런타임 에러까지)

찾아보니 재귀는 '메모리를 많이 차지하고 반복문에 비해 성능이 느리다.
함수를 반복적으로 호출하므로 스택 메모리가 커지고,
호출하는 횟수가 많아지면 스택오버플로우가 발생할 수 있다'.

즉, 성능이 안 좋은 재귀 대신 반복문으로 풀어보기로 했다.

---

새로 풀다가 문제에서 'n번째 피보나치 수를 1234567로 나눈 나머지를 리턴'하라는 말을 발견했다.

앞에 어떻게 정확도를 통과한 거지?

## 새 풀이 (new.js)

answer에 배열로 피보나치 수를 누적한 다음 맨 뒤의 두 숫자만 더한 것이
문제에서 말하는 n번째 피보나치 수인 줄 알았다.

블로그를 찾아보니 '매번' n번째 피보나치 수를 1234567로 나눈 것을 말하는 거였다.

실제 문제의 어구로 해도 크게 문제는 없지만 오해를 없애기 위해 더 정확한 문구가 필요했거늘.. (아 다르고 어 다른 한국어의 비애)

어쨌든 매번 1234567로 나눠서 answer 배열에 넣어주고 최종 답은 마지막 n번째 결과만 반환해주었다.
