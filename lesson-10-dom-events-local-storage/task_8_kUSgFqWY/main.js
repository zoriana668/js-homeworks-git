// #kUSgFqWY
// Створити 3 інпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.

//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.



let table = document.querySelector('.table');

let tableGenerator = document.querySelector('#tableGenerator');

tableGenerator.onsubmit = function (event) {
    table.innerText = '';
    event.preventDefault();
    let linesNum = +tableGenerator.linesQuantity.value;
    let cellsNum = +tableGenerator.cellsQuantity.value;
    let dataValue = tableGenerator.dataCheck.value;
    console.log(linesNum, cellsNum, dataValue);

    for (let i = 0; i < linesNum; i++) {
        let tr = document.createElement('tr');
        for (let k = 0; k < cellsNum; k++) {
            let td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }

        table.appendChild(tr);

    }

};