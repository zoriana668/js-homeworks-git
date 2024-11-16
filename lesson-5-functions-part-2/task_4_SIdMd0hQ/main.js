// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let myArray = ['hi', 2024, false, 'USD', NaN, true, undefined];

let forArr = (array) => {
    for(let item of array) {
        console.log(item);
    }
}

forArr(myArray);