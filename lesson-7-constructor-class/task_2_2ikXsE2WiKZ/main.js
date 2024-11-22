// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

    // console.log(this);
}

let user1 = new User(1, 'Taras', 'Shevchenko', 'taras@gmail.com', '0684536729');

let user2 = new User(2, 'Lesya', 'Ukrayinka', 'lesya@gmail.com', '0984536729');

let user3 = new User(3, 'Ivan', 'Franko', 'franko@gmail.com', '0774536799');

let user4 = new User (4, 'Ivan', 'Bahrianiy', 'ivan@gmail.com', '0674536799');

let user5 = new User (5, 'Olena', 'Pchilka', 'pchilka@gmail.com', '0994536799');

let user6 = new User (6, 'Vasyl', 'Symonenko', 'symonenko@gmail.com', '0994536788');

let user7 = new User(7, 'Andryy', 'Malyshko','malyshko@gmail.com', '0994536788');

let user8 = new User(8,'Marko', 'Vovchok', 'vovchok@gmail.com', '0794536788');

let user9 = new User(9, 'Lina', 'Kostenko', 'kostenko@gmail.com', '0794536788');

let user10 = new User(10, 'Olha', 'Kobylyanska', 'kobilyanska@gmail.com', '0794536998');


let usersArray = [];

usersArray.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(usersArray);


// залишити тільки об'єкти з парними id (filter) -------------

let evenNumID = usersArray.filter(value => {
    if(value.id % 2 === 0) {
        return value;
    }
});

console.log(evenNumID);