
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його за кількістю товарів в полі order по зростанню. (sort)


function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}


let client1 = new Client(1, 'Taras', 'Shevchenko', 'taras@gmail.com', '0684536729', ['book', 'pen']);

let client2 = new Client(2, 'Lesya', 'Ukrayinka', 'lesya@gmail.com', '0984536729', ['notebook', 'pencil']);

let client3 = new Client(3, 'Ivan', 'Franko', 'franko@gmail.com', '0774536799', ['eraser', 'pen', 'pencil', 'book']);

let client4 = new Client (4, 'Ivan', 'Bahrianiy', 'ivan@gmail.com', '0674536799', ['laptop']);

let client5 = new Client (5, 'Olena', 'Pchilka', 'pchilka@gmail.com', '0994536799', ['phone', 'charger', 'case']);

let client6 = new Client (6, 'Vasyl', 'Symonenko', 'symonenko@gmail.com', '0994536788', ['headphones', 'notebook', 'laptop']);

let client7 = new Client(7, 'Andryy', 'Malyshko','malyshko@gmail.com', '0994536788', ['tablet', 'case']);

let client8 = new Client(8,'Marko', 'Vovchok', 'vovchok@gmail.com', '0794536788', ['mouse', 'monitor', 'headphones', 'book', 'smartphone', 'case', 'ring', 'photo']);

let client9 = new Client(9, 'Lina', 'Kostenko', 'kostenko@gmail.com', '0794536788', ['keyboard']);

let client10 = new Client(10, 'Olha', 'Kobylyanska', 'kobilyanska@gmail.com', '0794536998', ['monitor', 'cable']);

let myArray = [];

myArray.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);

console.log(myArray);




// Відсортувати його за кількістю товарів в полі order по зростанню. (sort) ------------------


let sortedArr = myArray.sort((item1, item2) => {
    return item1.order.length - item2.order.length;
});

console.log(sortedArr);

console.log(myArray);
