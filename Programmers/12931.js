// lv.0 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    let answer = 0;

    let newArr = [...`${n}`]

    for (let i = 0; i < newArr.length; i++) {
        answer += Number(newArr[i])
    }

    return answer;
}

console.log(solution(987))

