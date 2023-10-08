function solution(scoville, K) {
  let count = 0;
  scoville.sort((a, b) => a - b);

  while (scoville[0] < K) {
    if (scoville.length < 2) return -1;

    let mixed = scoville[0] + scoville[1] * 2;
    
    scoville.splice(0, 2);
    scoville.push(mixed);
    scoville.sort((a, b) => a - b);
    count++;
  }

  return count;
}
