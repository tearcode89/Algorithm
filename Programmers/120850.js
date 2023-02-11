// lv.0 문자열 정렬하기 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
    let answer = [];
    let newArr = [...my_string]

    for (let i = 0; i < newArr.length; i++) {
        if(!isNaN(newArr[i])){
            answer.push(Number(newArr[i]))
            answer.sort((a,b) => a-b)
        }
    }

    return answer;
}


console.log(solution("hi12392"))