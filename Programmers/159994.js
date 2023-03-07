// lv 1. 카드 뭉치
// https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript

function checkCards (cards, goal) {
    const cardsFilteredByGoal = goal.filter((item) => cards.includes(item));

    const cardFilteredByIndex = cardsFilteredByGoal.filter((item, index) => item === cards[index]);

    return cardFilteredByIndex.length === cardsFilteredByGoal.length;


}

function solution(cards1, cards2, goal) {
    if(checkCards(cards1, goal) && checkCards(cards2, goal)){
        return "Yes";
    }

    return "No";
}

//console.log(solution(["i", "drink", "water"] , ["want", "to"], ["i", "want", "to", "drink", "water"]))
console.log(solution(["i", "water", "drink"], ["want", "to"],["i", "want", "to", "drink", "water"]))