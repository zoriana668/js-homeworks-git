// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, producer, year, maxSpeed, volumeEngine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;

    this.drive = function() {
        console.log(`Ми їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function() {
        for(const key in this) {
            console.log(`${key} : ${this[key]}`);
        }
    };

    this.increaseMaxSpeed = function(speedToAdd) {
        if(speedToAdd > 0) {
            this.maxSpeed = this.maxSpeed + speedToAdd;
        }
    }

    this.changeYear = function(year) {
        if(year > 1900) {
            this.year = year;
        }
    }

    this.addDriver = function(driver) {
        if(driver) {
            this.driver = driver;
        }
    }
}


let car = new Car('Escape', 'Ford', 2017, 220, 200);

// console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(120);
car.changeYear(2020);
car.addDriver({name: 'Taras', surname: 'Shevshenko', phoneNumber: '0654448328'});

console.log(car);