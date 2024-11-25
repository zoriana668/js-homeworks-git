// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


let wordsArray = ['Main','Products','About us','Contacts'];

let ulElement = document.createElement('ul');

document.body.appendChild(ulElement);

for(let word of wordsArray){
    let liElement = document.createElement('li');
    liElement.innerHTML = word;
    ulElement.appendChild(liElement);
}




