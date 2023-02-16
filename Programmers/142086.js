// lv 0. 가장 가까운 같은 글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086?language=javascript

function solution(s) {
    var answer = [];

    var newArr = [...s]
    console.log(newArr)

    for (let i = 0; i < newArr.length; i++) {
        if(newArr.indexOf(newArr[i])){
            answer.push(1)
        } else {
            answer.push(-1)
        }
    }

    return answer;
}


console.log(solution('foobar'))