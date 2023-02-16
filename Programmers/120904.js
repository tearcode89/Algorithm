// lv.0 숫자찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120904
function solution(num, k) {
    var answer = 0;
    var newArr= `${num}`

    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] == k ){

            return answer = i + 1
        } else {
            answer = -1;
        }
    }

    return answer;
}

console.log(solution(232443 , 4))