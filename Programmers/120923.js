function solution(num, total) {
    var answer = [];
    var sum = 0;

    const keyboard = Array.from({length:total}, (v,i)=>i+1);
    console.log(keyboard)

    for (let i = 0; i <= num ; i++){
        sum+=keyboard[i]
        console.log(sum)
        if(sum === total) {
            console.log(keyboard[i])
        }

    }



    return answer;
}

console.log(solution(3,	12))