// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.



// - створити блок,
let block = document.createElement('div');


// - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta');


// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

block.style.backgroundColor = '#00c100';
block.style.marginBottom = '15px';
block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, natus.';
block.style.color = '#2700ff';
block.style.fontSize = '28px';

// - додати цей блок в body.
document.body.appendChild(block);



// - клонувати його повністю

let cloneBlock = block.cloneNode(true);

// додати клон в body

document.body.appendChild(cloneBlock);
