// lv.0 369게임
// https://school.programmers.co.kr/learn/courses/30/lessons/120891
function solution(order) {
    var answer = 0;
    var newArr = `${order}`.split('')

    for (let x of newArr) {
        if(Number(x)===3 || Number(x)===6 || Number(x)===9 ) {
            answer++
        }
    }
    return answer;
}
