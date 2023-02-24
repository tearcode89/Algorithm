function solution(n, s) {
    var answer = [];
    var newArr = []


    for (let i = 0; i <= s; i++) {
        newArr.push(i)
        console.log(newArr)

        if(newArr[i] === Math.ceil(s/n)){
            console.log(i)
        }

        s - i 
    }


    return answer;
}

console.log(solution(2,9))