function addUpto2(n) {
    return (n+1)*n/2;
}

let t1 = performance.now();
addUpto2(100000000);
let t2 = performance.now();
console.log(`addUpto 함수를 실행하는 동안 ${(t2-t1)/1000}초 만큼 시간이 걸렸다.`)