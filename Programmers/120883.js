// lv.0 로그인 성공?
// https://school.programmers.co.kr/learn/courses/30/lessons/120883
function solution(id_pw, db) {
    var answer = '';

    for (let i = 0; i <= db.length-1; i++) {

        if(id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
            answer = 'login'
        } else if (id_pw[0] === db[i][0] || id_pw[1] === db[i][1]) {
            answer = 'wrong pw'
        } else if (!(id_pw[0] === db[i][0])){
            answer = 'fail'
        }

    }

    return answer;
}

console.log(solution(["meosseugi", "1234"],[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]))