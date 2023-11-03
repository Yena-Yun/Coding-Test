function solution(new_id) {
    let answer = '';

    new_id = new_id.toLowerCase();
    console.log('1단계 지남: ' + new_id);

    new_id = new_id.replace(/[^\w\-\_\.]/g, '');
    console.log('2단계 지남: ' + new_id);

    new_id = new_id.replace(/\.{2,}/g, '.');
    console.log('3단계 지남: ' + new_id);

    new_id = new_id.replace(/^\.|\.$/, '');
    console.log('4단계 지남: ' + new_id);

    if (new_id === '') new_id = "a";
    console.log('5단계 지남: ' + new_id);

    if (new_id.length >= 16) new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/\.$/, '');
    console.log('6단계 지남: ' + new_id);

    const len = new_id.length;

    if (len <= 2) new_id += new_id[len - 1].repeat(3 - len);
    console.log('7단계 지남: ' + new_id);

    return new_id;
}