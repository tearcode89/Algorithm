// lv.0 문자열 정렬하기 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120911
function solution(my_string) {
    let answer = '';

    let newArr = [...my_string]
    let changed =  []

    for(let i = 0; i <= newArr.length-1; i++) {
        newArr[i] = newArr[i].toLowerCase()
        changed.push(newArr[i])
        changed.sort()
        answer = changed.join('')
    }

    return answer;
}

console.log(solution("Bcad"))

// 숏코딩 return 값에 [...s.toLowerCase()].sort().join('')