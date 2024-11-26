// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!


//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


let blockItem = document.querySelector('.block');

let currentValue =  parseInt(localStorage.getItem('blockValue')) || 100;

let lastUpdateTime = parseInt(localStorage.getItem('lastUpdateTime')) || 0;

let now = Date.now();

if(lastUpdateTime && now - lastUpdateTime >= 10000) {
    currentValue += 10;
    localStorage.setItem('blockValue', currentValue);
    localStorage.setItem('lastUpdateTime', now);
} else if (!lastUpdateTime) {

    localStorage.setItem('lastUpdateTime', now);
}

blockItem.textContent = `${currentValue} грн`;
