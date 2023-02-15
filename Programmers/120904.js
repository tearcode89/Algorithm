// lv.0 숫자찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120904
function solution(num, k) {

    return `${num}`.indexOf(k+'') !== -1 ? `{${num}}`.indexOf(k+'')+1 : -1;
}

console.log(solution(232443 , 4))