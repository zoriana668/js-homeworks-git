// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиться цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


let blockItem = document.querySelector('.block');

let currentValue = localStorage.getItem('blockValue');

if(!currentValue) {
    currentValue = 100;
} else {
    currentValue = parseInt(currentValue) + 1;
}

blockItem.textContent = currentValue;


localStorage.setItem('blockValue', currentValue);