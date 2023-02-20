// lv 2. n^2 배열 자르기
// https://school.programmers.co.kr/learn/courses/30/lessons/87390
const solution = (n, left, right) => {
    const answer = [];

    for (let i=left; i <= right; i++) {
        const share = parseInt(i/n);	// 행축(y)
        const reminder = i%n;	// 열축(x)
        answer.push(Math.max(share, reminder) + 1)
    }
    return answer;
}

console.log(solution(3,2,5))