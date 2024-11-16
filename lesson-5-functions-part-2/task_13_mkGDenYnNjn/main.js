// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange
// (10000,
// [{currency:'USD',value:40},{currency:'EUR',value:42}],
// 'USD') // => 250


let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let myCurrency;

    for(let item of currencyValues) {
        if(item.currency === exchangeCurrency) {
            myCurrency = item;
        }
    }

    let result = sumUAH / myCurrency.value;

    return result;
}



console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}], 'EUR'));