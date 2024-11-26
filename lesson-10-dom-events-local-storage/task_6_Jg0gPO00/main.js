// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


let myInput = document.querySelector('.valueKG');

let resultBlock = document.querySelector('.result');


myInput.oninput = function () {
    resultBlock.innerText = this.value * 2.2;
}