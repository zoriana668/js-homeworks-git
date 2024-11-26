// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи менше він ніж 18, та повідомити про це користувача


let inputAge = document.forms.f1.userAge;

let buttonConfirm = document.forms.f1.confirm;

buttonConfirm.addEventListener('click', function() {
    if (inputAge.value < 18) {
        alert('you are under 18 years old');
    } else {
        alert('success');
    }
})