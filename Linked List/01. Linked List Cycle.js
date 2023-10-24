class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 연결 리스트의 순환 여부를 판별하는 함수
function hasCycle(head) {
  if (!head) return false;
  
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

// 순환 없는 연결 리스트 생성
const nonCyclicList = new Node(1);
nonCyclicList.next = new Node(2);
nonCyclicList.next.next = new Node(3);

// 순환 있는 연결 리스트 생성
const cyclicList = new Node(1);
cyclicList.next = new Node(2);
cyclicList.next.next = new Node(3);
cyclicList.next.next.next = cyclicList; // 순환 생성

// 순환 여부 판별
console.log(hasCycle(nonCyclicList)); // 출력: false
console.log(hasCycle(cyclicList)); // 출력: true
