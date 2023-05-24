### [문제 링크](https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen)

Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

Return '12:01:00'.

Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in hour format
Returns

string: the time in hour format
Input Format

A single string that represents a time in -hour clock format (i.e.: or ).

Constraints

All input times are valid

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
