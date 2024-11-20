// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let cardSuits = ['spade', 'diamond','heart', 'clubs'];

let values = ['6', '10', 'ace', 'jack', 'queen', 'king'];

let cards = [];

for(let suit of cardSuits) {
    for(let value of values) {
        let card = {cardSuit: suit, value: value};
        if(suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}

console.log(cards);



// 0 {cardSuit: 'spade', value: '6', color: 'black'}
// 1 {cardSuit: 'spade', value: '10', color: 'black'}
// 2 {cardSuit: 'spade', value: 'ace', color: 'black'}
// 3 {cardSuit: 'spade', value: 'jack', color: 'black'}
// 4 {cardSuit: 'spade', value: 'queen', color: 'black'}
// 5 {cardSuit: 'spade', value: 'king', color: 'black'}
// 6 {cardSuit: 'diamond', value: '6', color: 'red'}
// 7 {cardSuit: 'diamond', value: '10', color: 'red'}
// 8 {cardSuit: 'diamond', value: 'ace', color: 'red'}
// 9 {cardSuit: 'diamond', value: 'jack', color: 'red'}
// 10 {cardSuit: 'diamond', value: 'queen', color: 'red'}
// 11 {cardSuit: 'diamond', value: 'king', color: 'red'}
// 12 {cardSuit: 'heart', value: '6', color: 'red'}
// 13 {cardSuit: 'heart', value: '10', color: 'red'}
// 14 {cardSuit: 'heart', value: 'ace', color: 'red'}
// 15 {cardSuit: 'heart', value: 'jack', color: 'red'}
// 16 {cardSuit: 'heart', value: 'queen', color: 'red'}
// 17 {cardSuit: 'heart', value: 'king', color: 'red'}
// 18 {cardSuit: 'clubs', value: '6', color: 'black'}
// 19 {cardSuit: 'clubs', value: '10', color: 'black'}
// 20 {cardSuit: 'clubs', value: 'ace', color: 'black'}
// 21 {cardSuit: 'clubs', value: 'jack', color: 'black'}
// 22 {cardSuit: 'clubs', value: 'queen', color: 'black'}
// 23 {cardSuit: 'clubs', value: 'king', color: 'black'}



// reduce =============================


// let reduce = users.reduce((accumulator, user) => {
//     if(user.status) {
//         accumulator.statT.push(user);
//     } else {
//         accumulator.statF.push(user);
//     }
//     return accumulator;
// }, {statT: [], statF: []});
//
//
// console.log(reduce);
// console.log(users);



let cardReducer = cards.reduce((accumulator, item) => {
    if(item.cardSuit === 'spade') {
        accumulator.spades.push(item);
    } else if(item.cardSuit === 'diamond') {
        accumulator.diamonds.push(item);
    } else if(item.cardSuit === 'heart') {
        accumulator.hearts.push(item);
    } else if(item.cardSuit === 'clubs') {
        accumulator.clubs.push(item);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});


console.log(cardReducer);