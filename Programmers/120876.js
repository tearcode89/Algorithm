// lv 0. 겹치는 선분의 길이
// https://school.programmers.co.kr/learn/courses/30/lessons/120876
// 1트 실패
function solution(lines) {
    var answer = 0;

    var newArr =lines.flat(2)
    console.log(newArr[1]-newArr[4])

    if( newArr[1] - newArr[2] > 0 ) {
        answer += (newArr[1] - newArr[2])
    }

    if ( newArr[3] - newArr[4] > 0 ) {
        answer += (newArr[3] - newArr[4])
    }

    if ( newArr[1] - newArr[4] > 0 ) {
        answer += (newArr[1] - newArr[4] > 0)
    }

    return answer;
}

console.log(solution([[0, 5], [3, 9], [1, 10]]))



