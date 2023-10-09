function solution(phone_book) {
    // phone_book을 돌면서 해시 객체의 'prefix'에 값을 넣고
    // 나머지 배열에서 .includes로 prefix 값을 갖고 있는지 판별
    
    for (let i = 0; i < phone_book.length; i++) {
        let prefix = phone_book[i];
        let count = 0;
        
        for (let j = 0; j < phone_book.length; j++) {
            if (phone_book[j].includes(prefix)) count++;
            if (count >= 2) return false;
        }
    }
    
    return true;
}