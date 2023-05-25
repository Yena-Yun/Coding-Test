[문제 링크](https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true)

HackerLand University has the following grading policy:

Every student receives a in the inclusive range from to .
Any less than is a failing grade.
Sam is a professor at the university and likes to round each student's according to these rules:

If the difference between the and the next multiple of is less than , round up to the next multiple of .
If the value of is less than , no rounding occurs as the result will still be a failing grade.
Examples

round to (85 - 84 is less than 3)
do not round (result is less than 40)
do not round (60 - 57 is 3 or higher)
Given the initial value of for each of Sam's students, write code to automate the rounding process.

Function Description

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

int grades[n]: the grades before rounding
Returns

int[n]: the grades after rounding as appropriate
Input Format

The first line contains a single integer, , the number of students.
Each line of the subsequent lines contains a single integer, .

### 풀이 과정

점수를 5로 나눈 몫을 Math.ceil로 '올림'한 값에 다시 5를 곱해서
주어진 점수보다 더 크면서 가장 가까운 5의 배수를 구했다.

multiple과 점수의 차이 값은 diff에 넣었다.

다음의 조건을 모두 만족할 경우 올림한 5의 배수를 반환
=> 차이값 diff가 0 ~ 2 사이이고 올림한 multiple이 40 이상

그렇지 않으면 점수를 그대로 반환한다.
