function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

function copyRandomList(head) {
  if (!head) return null;

  // 노드의 복사본을 만들기 위한 Map 생성 (key: value로 원본과 매칭하기 좋음)
  let map = new Map();
  let current = head;

  // map에 key로 원본을 넣고 value로 val 복사본을 넣음
  while (current) {
    map.set(current, new Node(current.val));
    current = current.next;
  }

}