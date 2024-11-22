//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter



// forEach ===========================================================================

// Array.prototype.customForEach = function(callback) {
//     let customArray =  this;
//
//     for(const item of customArray) {
//         callback(item);
//     }
// };
//
// let numbers = [111, 222, 333];
//
// numbers.customForEach((value) => console.log(value));       // 111 222 333




// filter ===========================================================================


Array.prototype.myFilter = function(predicate) {
    let arr = [];

    for(const item of this) {
        if(predicate(item)) {
            arr.push(item);
        }
    }

    return arr;
}


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


let result = users.myFilter((user) => user.status);


console.log(result);        // повертає всі елементи масиву зі статусом тру