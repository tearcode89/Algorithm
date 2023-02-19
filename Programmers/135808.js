// lv 1. 과일장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808
function solution(k, m, score) {
    if(score.length < m){
        return 0;
    }

    score.sort((a, b) => a - b);

    let total = 0;

    while(score.length >= m){
        const box = score.splice(score.length - m, m);

        const prize = m * box[0];

        total += prize;
    }

    return total;
}

console.log(solution(3	,4	,[1, 2, 3, 1, 2, 3, 1]))
