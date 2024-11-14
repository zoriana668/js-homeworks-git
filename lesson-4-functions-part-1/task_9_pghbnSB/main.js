// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let arrayNumbers = [23, 65, 356, 19696, 3, 2024];

function returnSmallestNum(array) {
    let minimalNumber = array[0];
    for(let i = 1; i < array.length; i++) {
        let justNumber = array[i];
        if(justNumber < minimalNumber) {
            minimalNumber = justNumber
        }
    }

    return minimalNumber;
}

console.log(returnSmallestNum(arrayNumbers));