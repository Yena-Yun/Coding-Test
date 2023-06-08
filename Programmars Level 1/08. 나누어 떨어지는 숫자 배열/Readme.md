[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12910)

### 문제 설명

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

### 풀이 과정

원래 풀이

1. result 배열 선언
2. for-of문으로 돌면서 꺼낸 숫자를 divisor로 나눈 나머지가 0이면 (= 나누어 떨어지면) result 배열에 추가
3. for문 밖에서 result 길이가 0이면 answer에 -1 아니면 result를 오름차순 정렬한 값 추가

새 풀이
요약: filter 메서드와 리턴문에 삼항 연산자 사용

1. arr의 숫자가 divisor로 나누어 떨어지는 조건으로 filter한 새 배열로 answer 교체
2. answer 길이가 0이면 ? [-1] 반환 : answer 배열을 오름차순 정렬하여 반환
