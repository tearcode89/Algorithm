function first() {
    second();
    console.log('첫번째')
}

function second() {
    third();
    console.log('두번째')
}

function third() {
    console.log('세번째')
}

first();

// 실행순서 예측 -> '세번째' -> '두번째' -> '첫번째'