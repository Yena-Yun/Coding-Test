function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

let sum = 0;
let remnant = 0; // 십의자리로 올라간 숫자 기억

function addTwoNumbers(l1, l2) {
  if (!l1 || !l2) return;

  let dummy = new ListNode(0); // 더미 노드를 생성하여 연결 리스트의 시작을 나타냄
  let current = dummy;

  while (l1 && l2) {
    sum = remnant ? remnant + l1.val + l2.val : l1.val + l2.val;

    current.next = sum >= 10 ? sum % 10 : sum;
    remnant = sum >= 10 ? sum / 10 : 0;

    l1 = l1.next;
    l2 = l2.next;
  }

  return dummy.next;
}