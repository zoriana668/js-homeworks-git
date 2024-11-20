// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка приймає масив чисел,
// та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let nums = [11,21,3];

function sortNums(array,direction) {
    if(direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if(direction === 'descending') {
        return array.sort((a, b) => b - a);
    } else {
        return 'Неправильне введення, введіть ascending або descending';
    }
}


console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]