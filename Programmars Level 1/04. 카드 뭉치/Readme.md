[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/159994)

### 문제 설명

원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
한 번 사용한 카드는 다시 사용할 수 없습니다.
카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.

문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

### 풀이 과정

처음 풀이
goal을 돌며 cards의 첫 번째 값을 꺼내서 비교하고 if문 2개를 별개로 썼다.

- 문제점: 한쪽에 없으면 다른 한쪽을 봐야 하는, 각 카드 뭉치를 보는 것이 별개의 상관 관계가 아님
  => if문만 2개 쓰는 게 아니라 if-elseIf-else문을 활용해야 했다.

새 풀이

1. goal을 돌면서 단어를 하나씩 꺼낸다.
2. 각 카드 뭉치의 0번째가 꺼낸 단어와 일치하면 해당 카드 뭉치의 맨 앞의 값을 꺼낸다. (shift())
3. 두 카드 뭉치에 모두 없으면 goal 배열 조합을 만들 수 없는 경우이므로 바로 'No'를 리턴한다.
   \*\* 2, 3번 과정을 if-elseIf-else문으로 진행한다.

다른 풀이
똑같이 if-elseIf-else문을 사용하되, 카드 뭉치의 index번째에 goal의 단어가 있으면
다음 비교를 위해 index를 1칸씩 옆으로 옮김
