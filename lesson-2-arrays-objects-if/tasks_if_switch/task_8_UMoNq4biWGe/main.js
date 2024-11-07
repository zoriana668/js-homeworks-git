// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = +prompt('Enter a digit between 1 and 31');

if(day >= 1 && day <= 10) {
    console.log(`${day} day is 1/3 of the month`);
} else if(day >= 11 && day <= 20) {
    console.log(`${day} day is 2/3 of the month`);
} else if(day >= 21 && day <= 31) {
    console.log(`${day} day is 3/3 of the month`);
} else {
    console.log('Please type a correct value - a digit between 1 and 31');
}