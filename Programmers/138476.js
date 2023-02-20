// lv 2. 귤 고르기
// https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(k, tangerine) {
    var answer = 0;


    let newArr = tangerine.sort();
    console.log(newArr)

    let selectedTangerline = new Set(tangerine)
    console.log(selectedTangerline)

    return answer;
}


console.log(solution(6,[1, 3, 2, 5, 4, 5, 2, 3]))

