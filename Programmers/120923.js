// lv 0. 연속된 수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript

function solution(n , total) {
    let answer = [];
    let num = n;

    let a = (2*total/num + 1 - num) / 2;

    for (let i = 0; i < num; i++){
        answer.push(a+i)
    }

    return answer;
}
console.log(solution(3,	12))