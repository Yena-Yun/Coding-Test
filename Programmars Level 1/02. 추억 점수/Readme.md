[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/176963)

### 문제 설명

사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다. 예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다. 다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, "tony"는 그리움 점수가 없을 때, 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.

그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때, 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.

### 풀이 과정

원래 풀이 (index.js)

1. 각 name에 따른 yearning 점수를 보여주는 peopleInfo 생성
2. photo를 순회하며 각 차례의 element를 뽑는다.
3. element를 순회하며 각 자리의 이름(elem)에 맞는 score를 peopleInfo에서 찾아 answer의 id번째에 더한다.
4. 만약 elem이 name 중에 없으면 0점을 부여한다.

=> 문제점: 불필요한 객체 사용

---

[ 문제 풀이 시 참고 사항 ]

- name과 yearning의 인덱스는 동일하다. (같은 인덱스로 이름과 점수 매칭 가능)
- 반환할 값(answer)은 각 photo 배열의 점수 합의 배열이다.

새 풀이 (withoutObject.js)

1. photos를 돌면서 photo 배열을 하나씩 꺼낸다. (이때 score 변수 선언)
2. photo를 돌면서 person을 하나씩 꺼낸다.
3. name 배열에 person이 있는지 확인한다.
4. yearning 배열에서 name 배열의 person 인덱스 자리에 해당하는 점수를 score에 더한다.
5. photo문 바깥에서 answer에 score를 추가한다. (다시 photos문을 돌기 시작하면 score 초기화)

- 달라진 점: 객체 없이 배열 자체의 인덱스 활용
