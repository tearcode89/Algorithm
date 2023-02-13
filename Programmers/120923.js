function solution(n , total) {
    let answer = [];
    let num = n;

    let a = (2*total/num + 1 - num) / 2;

    for (let i = 0; i < num; i++){
        answer.push(a+i)

    }

    return answer;
}
console.log(solution(3,	12))