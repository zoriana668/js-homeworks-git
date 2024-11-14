// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент


function createParagraph(arguments) {
    document.write(`<p>${arguments}</p>`);
}


createParagraph('Dogs are the best creatures on Earth');

createParagraph('The winter is coming');

createParagraph('Today is a beautiful day');