// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let userFirstName = document.forms.f1.firstName;

let userLastName = document.forms.f1.lastName;

let userAge = document.forms.f1.userAge;

let sendButton = document.forms.f1.sendBtn;



let userInfoBlock = document.createElement('div');
document.body.appendChild(userInfoBlock);


sendButton.addEventListener('click', function(event) {
    event.preventDefault();

    if(userFirstName.value && userLastName.value && userAge.value) {
        let userObj = {
            name: userFirstName.value,
            lastName: userLastName.value,
            age: userAge.value
        };
        userInfoBlock.innerText = `user name: ${userObj.name}
                                   user last name: ${userObj.lastName}
                                   user age: ${userObj.age}`;
    } else if (!userFirstName.value || !userLastName.value || !userAge.value){
        userInfoBlock.innerText = `Please enter your data`;
    }
})

