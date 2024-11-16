// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createList = (itemText) => {
    document.write(`<ul>
                    <li>${itemText}</li>
                    <li>${itemText}</li>
                    <li>${itemText}</li>
                    </ul>`);
}

createList('Glory to Ukraine!');