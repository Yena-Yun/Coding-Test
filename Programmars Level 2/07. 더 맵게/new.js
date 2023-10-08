class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 힙 배열의 길이 반환
  size() {
    return this.heap.length;
  }
  // 부모 노드 반환
  getParent() {
    return this.heap[0];
  }

  push(value) {
    // 받은 value를 맨 뒤에 push
    this.heap.push(value);
    // value의 인덱스
    let valueIndex = this.heap.length - 1;
    // 부모의 인덱스
    let parentIndex = Math.floor((valueIndex - 1) / 2);

    // 오름차순 정렬
    // heap의 valueIndex 값이 부모 인덱스 값보다 더 커지면 while문 종료
    while (valueIndex > 0 && this.heap[valueIndex] < this.heap[parentIndex]) {
      // while문 조건을 충족했을 때의 오름차순 정렬이란?
      // valueIndex와 부모 인덱스의 heap에서의 값의 자리 바꿔주기
      [this.heap[valueIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[valueIndex],
      ];

      // + value 인덱스 자리를 부모 인덱스로 교체
      valueIndex = Math.floor((valueIndex - 1) / 2);
    }
  }

  // 값을 pop으로 빼기 + 오름차순 정렬
  pop() {
    // pop을 하려는데 heap 배열이 비어있다? => null 리턴
    if (this.heap.length === 0) return null;
    // pop을 하려는데 heap 배열에 값이 하나 뿐이다? => 그 하나 남은 값 뽑아서 리턴
    if (this.heap.length === 1) return this.heap.pop();

    // 아래는 그 외의 경우 (heap 배열 길이가 2 이상일 경우)

    // push하면서 오름차순 정렬했기 때문에 맨 앞의 값이 최솟값
    const minValue = this.heap[0]; // 이 값을 리턴하면 pop 동작은 끝남 (= 최솟값 리턴)

    // 끝에 있는 노드를 부모 노드(0번째 값)로 지정해주기
    this.heap[0] = this.heap.pop();

    // 아래부터는 오름차순 정렬을 위한 작업!

    // 부모 인덱스
    let parentIndex = 0;
    // 왼쪽 자식 인덱스
    let leftChildIndex = parentIndex * 2 + 1;
    // 오른쪽 자식 인덱스
    let rightChildIndex = parentIndex * 2 + 2;

    // 오름차순 정렬하기
    // 왼쪽 자식 인덱스가 힙 전체 길이보다 작을 동안 while문 돌기
    while (leftChildIndex < this.heap.length) {
      // 최소 자식 인덱스 구하기
      // 오른쪽 자식 인덱스가 힙 전체 길이보다 작고, 힙에서의 오른쪽 자식 값이 왼쪽 자식 값보다 작으면
      // 오른쪽 자식 인덱스를 반환, 아니면 왼쪽 자식 인덱스를 반환
      let minChildIndex =
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      // 힙에서의 부모 인덱스 값과 최소 자식 인덱스 값
      let parentValue = this.heap[parentIndex];
      let minChildValue = this.heap[minChildIndex];

      // 힙에서의 부모 값이 최소 자식 값보다 작으면
      // 조건을 만족한 것 => break로 while문 탈출
      if (parentValue < minChildValue) break;

      // 반대로 부모 값이 최소 자식 값보다 큰 경우

      // 힙에서의 부모와 최소 자식 값의 자리를 바꿔주고
      [parentValue, minChildValue] = [minChildValue, parentValue];

      // 인덱스도 교체 (부모 인덱스를 최소 자식 인덱스로 교체)
      parentIndex = minChildIndex;
    }

    return minValue;
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap(); // MinHeap 클래스의 객체 만들어주기

  for (const scov of scoville) {
    minHeap.push(scov);
  }

  let mixedCount = 0; // 섞은 횟수

  // 힙 배열 길이가 2 이상이고
  // 스코빌 지수가 가장 낮은 수치(= 부모 노드)가 K보다 작을 동안 반복
  // (= K보다 커지면 종료)
  while (minHeap.size() >= 2 && minHeap.getParent() < K) {
    const first = minHeap.pop(); // 뽑으면서 힙 오름차순 정렬
    const second = minHeap.pop(); // 뽑으면서 힙 오름차순 정렬
    const mixedResult = first + second * 2;
    // 섞은 지수를 힙 배열에 추가하고
    minHeap.push(mixedResult);
    // 섞은 횟수 추가
    mixedCount++;
  }

  // while문 탈출 후 (힙 배열 길이가 1 이하가 되거나, 최솟값(= 부모 노드)이 K 이상일 경우 탈출)
  // 부모 노드 값이 K 이상이면 섞은 횟수 반환,
  // 부모 노드 값이 K보다 크지 않으면(= 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우) -1 반환
  return minHeap.getParent() >= K ? mixedCount : -1;
}
