[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/176963)

### 문제 설명

사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다. 예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다. 다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, "tony"는 그리움 점수가 없을 때, 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.

그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때, 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.

### 제한사항

3 ≤ name의 길이 = yearning의 길이≤ 100
3 ≤ name의 원소의 길이 ≤ 7
name의 원소들은 알파벳 소문자로만 이루어져 있습니다.
name에는 중복된 값이 들어가지 않습니다.
1 ≤ yearning[i] ≤ 100
yearning[i]는 i번째 사람의 그리움 점수입니다.
3 ≤ photo의 길이 ≤ 100
1 ≤ photo[i]의 길이 ≤ 100
3 ≤ photo[i]의 원소(문자열)의 길이 ≤ 7
photo[i]의 원소들은 알파벳 소문자로만 이루어져 있습니다.
photo[i]의 원소들은 중복된 값이 들어가지 않습니다.

### 풀이 과정

- 원래 풀이 (index.js)

1. 각 name에 따른 yearning 점수를 보여주는 peopleInfo 생성
2. photo를 순회하며 각 차례의 element를 뽑는다.
3. element를 순회하며 각 자리의 이름(elem)에 맞는 score를 peopleInfo에서 찾아 answer의 id번째에 더한다.
4. 만약 elem이 name 중에 없으면 0점을 부여한다.

- => 문제점: 불필요한 객체 사용 <br/>

- 새 풀이 (withoutObject.js)

1. photos를 돌면서 photo와 id를 꺼냄
2. 합계를 넣을 count 선언
3. photo를 돌면서 각 사람(person)을 꺼냄
4. name 배열에 person이 있으면 yearning(점수 배열)에서 person의 점수를 찾아 count에 더함
5. answer의 id 번째에 count를 추가

- 달라진 점: name과 yearning의 인덱스가 일치하기 때문에 객체 생성 불필요 <br/>
- 비고: photos가 이중 배열이어서 이중 순환을 피해갈 수는 없었음
