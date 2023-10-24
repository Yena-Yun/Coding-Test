class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 정렬된 연결 리스트를 병합하는 함수
function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0); // 더미 노드를 생성하여 연결 리스트의 시작을 나타냄
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next; // l1를 다음 노드로 이동
    } else {
      current.next = l2;
      l2 = l2.next; // l2를 다음 노드로 이동
    }

    // 매번 current를 다음 노드로 이동해줘야 (그 다음 추가 가능)
    current = current.next;
  }

  // 남은 요소들을 연결 (l1이 남아 있으면 ..., l2가 남아 있으면 ...)
  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return dummy.next; // (더미 노드 다음부터) 전체 연결 리스트 반환
}

// 두 정렬된 연결 리스트 생성
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

// 두 연결 리스트 병합
const mergedList = mergeTwoLists(list1, list2);

// 결과 출력
function printList(head) {
  let current = head;
  
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

printList(mergedList);
