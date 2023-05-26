function birthday(s, d, m) {
  let count = 0;
    
    for (let i = 0; i < s.length - m + 1; i++) {
      let sum = s[i];
      
        for (let j = i + 1; j < i + m; j++) {
            sum += s[j];
      }

        if (sum === d) count++;
    }
    
    return count;
}

const s = [4, 5, 4, 2, 4, 5, 2, 3, 2, 1, 1, 5, 4];

const d = 15;

const m = 4;

console.log(birthday(s, d, m))