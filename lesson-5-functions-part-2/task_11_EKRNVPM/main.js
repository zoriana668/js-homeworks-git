// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let numbersArray = [1, 2, 10];


let sum = (arr) => {
    let boxValue = 0;

    for(let i = 0; i < arr.length; i++) {
        boxValue = boxValue + arr[i];
    }

    return boxValue;
}

console.log(sum(numbersArray));

console.log(sum([3, 55, 79, 21]));