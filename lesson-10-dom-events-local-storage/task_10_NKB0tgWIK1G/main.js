// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів



const items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

const itemsPerPage = 10;
let currentPage = 1;


function displayItems(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = items.slice(startIndex, endIndex);

    const list = document.getElementById('list');
    list.innerHTML = visibleItems.map(item => `<div>${item.name}</div>`).join('');

    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = endIndex >= items.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayItems(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * itemsPerPage < items.length) {
        currentPage++;
        displayItems(currentPage);
    }
});

displayItems(currentPage);


