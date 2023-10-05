## [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12941)

## 처음 풀이 (index.js)

배열의 인덱스 순서와 상관 없이 모든 경우의 수를 구하는 문제이다.

우선은 인덱스 순서대로 합을 구하는 것에 초점을 맞춰 풀었다.

## 새 풀이 (new.js)

풀이가 생각보다 간단했다. sort로 정렬을 해 준 뒤 풀면 되는 거였다.

내 풀이와 달리 for문도 한 번밖에 돌지 않았다.

특이한 것은 A 배열은 오름차순 정렬, B 배열은 내림차순 정렬을 해 줬다는 것이다.

이유를 찾아보니 ([참고링크](https://han-joon-hyeok.github.io/posts/programmers-get-minimum-sum/))
두 배열 요소의 곱을 합한 최솟값을 구하려면 '가장 작은 값 \* 가장 큰 값'의 순이어야 해서 그렇다고 한다.

for문을 쓰지 않는 방법인 reduce로도 풀어보았다.

reduce의 3번째 항으로 인덱스(i)를 꺼내쓸 수 있다는 점에서 for문이 불필요하다는 것을 알게 되었다.
