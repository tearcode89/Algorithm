function addUpto(n) {
    let total = 0;
    for (let i = 0; i <= n; i++){
        total += i
    }
    return total;
}

let t1 = performance.now();
addUpto(100000000);
let t2 = performance.now();
console.log(`addUpto 함수를 실행하는 동안 ${(t2-t1)/1000}초 만큼 시간이 걸렸다.`)