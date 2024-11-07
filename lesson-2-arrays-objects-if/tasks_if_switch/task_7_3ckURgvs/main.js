// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = +prompt('Enter a digit between 0 and 59');

if (time >= 0 && time <= 15) {
    console.log(`${time} minute(s) refers to the 1/4 of an hour`);
} else if(time >=16 && time <= 30) {
    console.log(`${time} minute(s) refers to the 2/4 of an hour`);
} else if (time >= 31 && time <= 45) {
    console.log(`${time} minute(s) refers to the 3/4 of an hour`);
} else if (time >= 46 && time <= 59) {
    console.log(`${time} minute(s) refers to the 4/4 of an hour`);
} else {
    console.log('It looks like this value is not correct. Please type a digit between 0 and 59');
}