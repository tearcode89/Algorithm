// lv. 1 콜라문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267
function solution(a, b, n) {
    let answer = 0;
    let remain = n;


    while (true) {

        if(a > remain) {
            break;
        }
        answer += parseInt(remain/a)*b;
        remain = parseInt(remain/a)*b + remain%a
    }

    return answer;
}


console.log(solution(2,1,20))