// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте скрипт при a, що дорівнює 1, 0, -3



let x = +prompt('Enter a digit, for instance: 1, 0 or -3');

switch(x) {
    case 1:
        console.log(`x = ${x} is correct`);
        break;
    case 0:
        console.log(`x = ${x} is not correct`);
        break;
    case -3:
        console.log(`x = ${x} is correct`);
        break;
    default:
        console.log('please enter digit from the hint');
}