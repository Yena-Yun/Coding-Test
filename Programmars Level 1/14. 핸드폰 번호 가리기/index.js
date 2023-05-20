function solution(phone_number) {
    let answer = '';
    let phoneLength = phone_number.length;
    
    // 배열로 바꿔 제출한 처음 답
    // answer = [...phone_number].map((number, index) => {
    //   if (index >= phoneLength - 4) return number;
    //     return number.replace(number, '*')
    //   }).join('');
    
    // 문자열 메서드 활용한 풀이 3가지
    answer = phone_number.substring(phoneLength - 4).padStart(phoneLength, '*');
    
    // answer = '*'.repeat(phoneLength - 4) + phone_number.substring(phoneLength - 4);
    
    // answer = phone_number.substring(0, phoneLength - 4).replace(/[0-9]/g, '*') + phone_number.substring(phoneLength - 4);
    
    return answer;
}