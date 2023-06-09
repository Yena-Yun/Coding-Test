function solution(phone_number) {
    let answer = '';
    let phoneLength = phone_number.length;
    
    // 문자열을 배열로 바꿔 제출한 처음 답
    // answer = [...phone_number].map((number, index) => {
    //   if (index >= phoneLength - 4) return number;
    //     return number.replace(number, '*')
    //   }).join('');
    
    // 1. substring으로 뒤에서부터 자르고 + padStart로 앞 부분을 '*'로 채움
    answer = phone_number.substring(phoneLength - 4).padStart(phoneLength, '*');
    
    // 2. repeat으로 '*'를 반복하고 substring으로 자른 문자열 이어붙임
    // answer = '*'.repeat(phoneLength - 4) + phone_number.substring(phoneLength - 4);
    
    // 3. 앞 부분 substring으로 자른 만큼 '*'로 대체(replace(정규식))하고 또 한번 substring으로 뒤의 문자 이어붙임
    // answer = phone_number.substring(0, phoneLength - 4).replace(/[0-9]/g, '*') + phone_number.substring(phoneLength - 4);
    
    return answer;
}