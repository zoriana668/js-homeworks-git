// #zg6Fifnqig
// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, sizeOfFoot) {
        this.name = name;
        this.age = age;
        this.sizeOfFoot = sizeOfFoot;
    }
}


// -----------------------------------------------------


let cinderellasArray = [
    new Cinderella('Valentyna', 28, 37),
    new Cinderella('Oksana', 27, 38),
    new Cinderella('Ruslana', 34, 36),
    new Cinderella('Zlata', 29, 36),
    new Cinderella('Marta', 23, 39),
    new Cinderella('Violetta', 31, 38),
    new Cinderella('Vlada', 34, 36),
    new Cinderella('Vesta', 29, 36),
    new Cinderella('Iryna', 23, 39),
    new Cinderella('Bohdana', 27, 38)
];


// -----------------------------------------------------


class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let princeVar = new Prince('Jessie', 28, 37);

// console.log(typeof princeVar);      // obj


// -----------------------------------------------------

// let princeBride;
//
// for(let cinderella of cinderellasArray){
//     if(cinderella.sizeOfFoot === princeVar.foundShoe) {
//         princeBride = cinderella;
//     }
// }
//
// console.log(princeBride);           // {name: 'Valentyna', age: 28, sizeOfFoot: 37}




// -----------------------------------------------------

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


let findPrinceBride = cinderellasArray.find(cinderella => cinderella.sizeOfFoot === princeVar.foundShoe);

console.log(findPrinceBride);           // {name: 'Valentyna', age: 28, sizeOfFoot: 37}