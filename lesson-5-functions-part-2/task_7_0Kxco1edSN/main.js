// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


let createList = (itemText, quantityItem) => {
    document.write(`<ul>`);
    for(let i = 0; i < quantityItem; i++) {
        document.write(`<li>${itemText}</li>`);
    }
    document.write(`</ul>`);
}

createList('Glory to Ukraine!', 3);