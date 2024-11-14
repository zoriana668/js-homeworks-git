// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write


let elements = [22, 'Hello', 'World', true, 2024, false];

function createArrayList (arr) {
    document.write(`<ul>`);
    for(let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}


createArrayList (elements);