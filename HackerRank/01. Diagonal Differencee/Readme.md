### [문제 링크](https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true)

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix is shown below:

1 2 3
4 5 6
9 8 9

The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next lines describes a row, , and consists of space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

요약: 각 대각선 숫자들의 합의 차이(subtraction)를 절대 값으로 반환

### 풀이 과정

서류 합격 후 제안 받은 코테가 해커 링크에서 진행되어 warmup 문제를 풀어 보았다.
영어는 생각보다 크게 장벽이 아닌데(코드로 추측) 오히려 main, stdin이 포함된 코드 UI가 더 장벽인 것 같다. <s>(자스 선택했는데)</s>

UI에 익숙해지기 위해 기본 문제를 풀다가 Diagonal difference 문제를 성공 후 기록해보았다.
