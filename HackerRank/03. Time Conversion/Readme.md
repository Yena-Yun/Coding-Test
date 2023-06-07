### 문제 요약

- 시:분:초 형태로 주어진 시간을 뒤에 AM/PM 떼고 24시간 형태로 바꾸어 반환
  (예: 12:01:00AM => 00:01:00)

### 풀이 과정

PM, AM에 맞게 시간(hour)을 변경해서 출력하는 문제이다.

뒤에서 PM/AM을 떼고 시간 부분만 반환하고, 경우의 수는 다음과 같다.

1. 오후 1시 - 오후 11시

- hour에 +12 해서 반환 (01:00:00 -> 13:00:00)

2. 오전 12시 (새벽 12시)

- hour에 -12해서 반환 (12:00:00 -> 00:00:00)

3. 오후 12시, 오전 1시 - 11시

- hour 변경 없이 그대로 반환 (05:00:00 -> 05:00:00)

### 비고

오전 12시를 변환하는 테스트 케이스에서
'00:00:00'이 아닌 '0:00:00'이 반환되어서
return 하기 전 hour 앞에 문자열 '0'을 붙여주었다.