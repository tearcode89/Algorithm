// lv 0. 햄버거 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/133502
function solution(ingredient) {
    const stk = [];
    let cnt = 0;

    ingredient.forEach((ing, idx)=>{
        stk.push(ing);

        if(stk.length >= 4){
            const find = stk.slice(-4).join('');
            if(find === '1231'){
                stk.pop();
                stk.pop();
                stk.pop();
                stk.pop();
                cnt++;
            }
        }
    })

    return cnt;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))

