// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let textBlock = document.getElementById('text');

let deleteBtn = document.getElementById('delete-btn');

deleteBtn.addEventListener('click', function() {
    textBlock.remove();
})