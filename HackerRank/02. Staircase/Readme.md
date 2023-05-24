### [문제 링크](https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen)

Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

### 풀이 과정

별찍기 문제와 같은 '#' 찍기 문제이다.
얼마 전 프로그래머스에서 풀었던 .padStart를 활용하여
i번째에서 j 갯수만큼 '#'을 찍고
인자로 들어온 n의 길이가 되도록 앞 부분을 공백(' ')으로 채웠다.
