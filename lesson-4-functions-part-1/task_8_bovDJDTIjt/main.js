// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
// Для кожного об'єкту окремий блок.


let usersArray = [
    {id: 1, name: 'Taras', age: 56},
    {id: 2, name: 'Olha', age: 62},
    {id: 3, name: 'Viktor', age: 38},
    {id: 4, name: 'Svitlana', age: 37}
];

function forArrayOutput(array) {
    for(let item of array) {
        document.write(`<div>ID: ${item.id}, Name: ${item.name}, Age: ${item.age}</div>`);
    }
}

forArrayOutput(usersArray);


