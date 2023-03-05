// lv 1. 크기가 작은 부분문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript

function solution(t, p) {
    const numberP = Number(p);
    let count = 0;
    
    for(let i = 0; i < t.length - p.length + 1; i++){
        const slicedT = t.slice(i, i + p.length);
        const numberT = Number(slicedT);
        
        if(numberT <= numberP){
            count += 1;
        }
    }
    
    return count;
}